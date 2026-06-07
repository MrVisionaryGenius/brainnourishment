import { NextRequest, NextResponse } from "next/server";
import { getDashboardStats } from "@/lib/newsletter/supabase";

export async function GET(request: NextRequest): Promise<NextResponse> {
  const authHeader = request.headers.get("x-admin-secret");
  if (authHeader !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const stats = await getDashboardStats();
    return NextResponse.json(stats);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to get stats";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
