import { createClient } from "@supabase/supabase-js";
import type {
  NewsletterEmail,
  NewsletterState,
  EmailStatus,
  UploadResult,
} from "./types";

// Server-side client using service role key (full access)
function getServerClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw new Error("Missing Supabase environment variables");
  }

  return createClient(url, key, {
    auth: { persistSession: false },
  });
}

// ─── State Management ──────────────────────────────────────────────────────

export async function getState(): Promise<NewsletterState> {
  const supabase = getServerClient();

  const { data, error } = await supabase
    .from("newsletter_state")
    .select("*")
    .eq("id", 1)
    .single();

  if (error) throw new Error(`Failed to get state: ${error.message}`);
  return data as NewsletterState;
}

export async function updateState(
  updates: Partial<Omit<NewsletterState, "id">>,
): Promise<void> {
  const supabase = getServerClient();

  const { error } = await supabase
    .from("newsletter_state")
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq("id", 1);

  if (error) throw new Error(`Failed to update state: ${error.message}`);
}

// ─── Email Management ──────────────────────────────────────────────────────

export async function bulkInsertEmails(
  emails: string[],
): Promise<UploadResult> {
  const supabase = getServerClient();

  let inserted = 0;
  let duplicates = 0;
  let invalid = 0;

  // Validate emails
  const validEmails = emails.filter((email) => {
    const trimmed = email.trim().toLowerCase();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
    if (!isValid) invalid++;
    return isValid;
  });

  // Insert in batches of 500 to avoid timeouts
  const batchSize = 500;
  for (let i = 0; i < validEmails.length; i += batchSize) {
    const batch = validEmails.slice(i, i + batchSize).map((email) => ({
      email: email.trim().toLowerCase(),
      status: "pending" as EmailStatus,
    }));

    const { data, error } = await supabase
      .from("newsletter_emails")
      .upsert(batch, {
        onConflict: "email",
        ignoreDuplicates: true,
      })
      .select("id");

    if (error) {
      console.error("Batch insert error:", error.message);
      continue;
    }

    const batchInserted = data?.length ?? 0;
    inserted += batchInserted;
    duplicates += batch.length - batchInserted;
  }

  // Update total count in state
  const { count } = await supabase
    .from("newsletter_emails")
    .select("*", { count: "exact", head: true });

  await updateState({ total_emails: count ?? 0 });

  return {
    inserted,
    duplicates,
    invalid,
    total: validEmails.length,
  };
}

export async function getNextPendingEmail(): Promise<NewsletterEmail | null> {
  const supabase = getServerClient();

  const { data, error } = await supabase
    .from("newsletter_emails")
    .select("*")
    .eq("status", "pending")
    .lt("attempt_count", 3) // max 3 attempts
    .order("created_at", { ascending: true })
    .limit(1)
    .single();

  if (error) {
    if (error.code === "PGRST116") return null; // No rows found
    throw new Error(`Failed to get next email: ${error.message}`);
  }

  return data as NewsletterEmail;
}

// ADD this new function:
export async function deleteEmailAfterSubscribe(id: string): Promise<void> {
  const supabase = getServerClient();

  const { error } = await supabase
    .from("newsletter_emails")
    .delete()
    .eq("id", id);

  if (error) throw new Error(`Failed to delete email: ${error.message}`);
}

export async function markEmailFailed(
  id: string,
  errorMessage: string,
  isFinal: boolean,
): Promise<void> {
  const supabase = getServerClient();

  const { error } = await supabase
    .from("newsletter_emails")
    .update({
      status: isFinal ? "failed" : "pending",
      error_message: errorMessage,
      last_attempt_at: new Date().toISOString(),
      attempt_count: supabase.rpc("increment", { row_id: id }), // handled below
    })
    .eq("id", id);

  if (error) {
    // Fallback: increment manually
    await supabase.rpc("increment_attempt", { email_id: id });
    await supabase
      .from("newsletter_emails")
      .update({
        status: isFinal ? "failed" : "pending",
        error_message: errorMessage,
        last_attempt_at: new Date().toISOString(),
      })
      .eq("id", id);
  }
}

export async function incrementAttempt(id: string): Promise<void> {
  const supabase = getServerClient();

  const { data } = await supabase
    .from("newsletter_emails")
    .select("attempt_count")
    .eq("id", id)
    .single();

  const currentCount = (data?.attempt_count as number) ?? 0;
  const newCount = currentCount + 1;

  if (newCount >= 3) {
    // 3 failed attempts → delete from DB, update state counter
    await supabase.from("newsletter_emails").delete().eq("id", id);

    // Increment failed counter in state
    const state = await getState();
    await updateState({
      failed_count: state.failed_count + 1,
    });

    console.log(`Deleted permanently failed email id: ${id}`);
  } else {
    // Still has attempts left → keep in DB, increment counter
    await supabase
      .from("newsletter_emails")
      .update({
        attempt_count: newCount,
        last_attempt_at: new Date().toISOString(),
      })
      .eq("id", id);
  }
}

export async function getDashboardStats() {
  const supabase = getServerClient();

  const [stateResult, pending, failed, total] = await Promise.all([
    supabase.from("newsletter_state").select("*").eq("id", 1).single(),
    supabase
      .from("newsletter_emails")
      .select("*", { count: "exact", head: true })
      .eq("status", "pending"),
    supabase
      .from("newsletter_emails")
      .select("*", { count: "exact", head: true })
      .eq("status", "failed"),
    supabase
      .from("newsletter_emails")
      .select("*", { count: "exact", head: true }),
  ]);

  const state = stateResult.data as NewsletterState;

  return {
    state,
    total: state.total_emails, // original total from upload
    pending: pending.count ?? 0, // still in DB = not yet processed
    subscribed: state.subscribed_count, // tracked in state counter
    failed: failed.count ?? 0, // still in DB = failed attempts
  };
}
