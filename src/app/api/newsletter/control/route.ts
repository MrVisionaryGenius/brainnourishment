import { NextRequest, NextResponse } from "next/server";
import { getState, updateState } from "@/lib/newsletter/supabase";
import type { AutomationStatus } from "@/lib/newsletter/types";

export async function POST(request: NextRequest): Promise<NextResponse> {
  const authHeader = request.headers.get("x-admin-secret");
  if (authHeader !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = (await request.json()) as { action: string };
    const { action } = body;

    if (!["start", "pause", "reset"].includes(action)) {
      return NextResponse.json(
        { error: "Invalid action. Use: start | pause | reset" },
        { status: 400 },
      );
    }

    const state = await getState();

    if (action === "start") {
      if (state.status === "completed") {
        return NextResponse.json(
          {
            error:
              "All emails already processed. Upload a new CSV to continue.",
          },
          { status: 400 },
        );
      }
      await updateState({ status: "running" as AutomationStatus });
      return NextResponse.json({
        success: true,
        message: "Automation started",
      });
    }

    if (action === "pause") {
      await updateState({ status: "paused" as AutomationStatus });
      return NextResponse.json({ success: true, message: "Automation paused" });
    }

    if (action === "reset") {
      // Reset state counters only — keeps emails in DB
      await updateState({
        status: "paused" as AutomationStatus,
        processed_count: 0,
        subscribed_count: 0,
        failed_count: 0,
        current_index: 0,
        last_processed_at: null,
      });
      return NextResponse.json({
        success: true,
        message: "State reset. Emails remain in DB.",
      });
    }

    return NextResponse.json({ error: "Unknown action" }, { status: 400 });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Control action failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
