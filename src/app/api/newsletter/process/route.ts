export const dynamic = "force-dynamic";
export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import {
  getState,
  updateState,
  getNextPendingEmail,
  deleteEmailAfterSubscribe,
  incrementAttempt,
} from "@/lib/newsletter/supabase";
import { subscribeToSubstack } from "@/lib/newsletter/substack";

export async function GET(request: NextRequest): Promise<NextResponse> {
  // Accept secret via query param (works with cron-job.org free plan)
  // OR via Authorization header (works with Vercel cron)
  const { searchParams } = new URL(request.url);
  const querySecret = searchParams.get("secret");
  const authHeader = request.headers.get("authorization");

  const isValidQuery = querySecret === process.env.CRON_SECRET;
  const isValidHeader = authHeader === `Bearer ${process.env.CRON_SECRET}`;

  if (!isValidQuery && !isValidHeader) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const timestamp = new Date().toISOString();

  try {
    const state = await getState();

    if (state.status !== "running") {
      console.log(`[${timestamp}] Cron skipped — status: ${state.status}`);
      return NextResponse.json({
        skipped: true,
        reason: `Status is ${state.status}`,
      });
    }

    const emailRecord = await getNextPendingEmail();

    if (!emailRecord) {
      await updateState({ status: "completed" });
      console.log(`[${timestamp}] DB is empty — all done`);
      return NextResponse.json({ completed: true, message: "All done!" });
    }

    console.log(`[${timestamp}] Processing: ${emailRecord.email}`);

    const result = await subscribeToSubstack(emailRecord.email);

    if (result.success) {
      await deleteEmailAfterSubscribe(emailRecord.id);
      await updateState({
        processed_count: state.processed_count + 1,
        subscribed_count: state.subscribed_count + 1,
        last_processed_at: new Date().toISOString(),
      });
      console.log(
        `[${timestamp}] ✅ Subscribed & deleted: ${emailRecord.email}`,
      );
    } else {
      if (result.statusCode === 429) {
        await incrementAttempt(emailRecord.id);
        await updateState({ status: "paused" });
        console.warn(`[${timestamp}] ⚠️ Rate limited — paused`);
        return NextResponse.json({
          rateLimited: true,
          message: "Rate limited — automation paused",
        });
      }

      await incrementAttempt(emailRecord.id);
      await updateState({
        processed_count: state.processed_count + 1,
        last_processed_at: new Date().toISOString(),
      });
      console.error(
        `[${timestamp}] ❌ Failed: ${emailRecord.email} — ${result.message}`,
      );
    }

    return NextResponse.json({
      processed: emailRecord.email,
      success: result.success,
      message: result.message,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error(`[${timestamp}] 💥 Critical error:`, message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
