import { NextRequest, NextResponse } from "next/server";
import {
  getState,
  updateState,
  getNextPendingEmail,
  deleteEmailAfterSubscribe, // ← changed
  incrementAttempt,
} from "@/lib/newsletter/supabase";
import { subscribeToSubstack } from "@/lib/newsletter/substack";

export async function GET(request: NextRequest): Promise<NextResponse> {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
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
      // DB is empty — all emails processed
      await updateState({ status: "completed" });
      console.log(`[${timestamp}] DB is empty — all done`);
      return NextResponse.json({ completed: true, message: "All done!" });
    }

    console.log(`[${timestamp}] Processing: ${emailRecord.email}`);

    const result = await subscribeToSubstack(emailRecord.email);

    if (result.success) {
      // ✅ Success → DELETE from DB immediately
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
      // ❌ Failed — rate limit → pause
      if (result.statusCode === 429) {
        await incrementAttempt(emailRecord.id);
        await updateState({ status: "paused" });
        console.warn(`[${timestamp}] ⚠️ Rate limited — paused`);
        return NextResponse.json({
          rateLimited: true,
          message: "Rate limited — automation paused",
        });
      }

      // ❌ Failed — increment attempt (deleted auto on 3rd fail by incrementAttempt)
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
