import { NextRequest, NextResponse } from "next/server";
import { parseCSVContent } from "@/lib/newsletter/csv-parser";
import { bulkInsertEmails } from "@/lib/newsletter/supabase";

export async function POST(request: NextRequest): Promise<NextResponse> {
  // Verify admin secret
  const authHeader = request.headers.get("x-admin-secret");
  if (authHeader !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get("csv") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    if (!file.name.endsWith(".csv")) {
      return NextResponse.json(
        { error: "File must be a .csv" },
        { status: 400 },
      );
    }

    // Max file size 10MB
    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        { error: "File too large (max 10MB)" },
        { status: 400 },
      );
    }

    const content = await file.text();
    const parsed = parseCSVContent(content);

    if (parsed.emails.length === 0) {
      return NextResponse.json(
        { error: "No valid emails found in CSV", parseErrors: parsed.errors },
        { status: 400 },
      );
    }

    const result = await bulkInsertEmails(parsed.emails);

    return NextResponse.json({
      success: true,
      message: `Upload complete`,
      ...result,
      parseErrors: parsed.errors.slice(0, 10), // return first 10 parse errors
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Internal server error";
    console.error("[newsletter/upload] Error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
