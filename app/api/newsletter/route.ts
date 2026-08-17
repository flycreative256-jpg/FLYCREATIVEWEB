import { NextRequest, NextResponse } from "next/server";
import { syncToGoogleSheets } from "@/lib/googleSheets";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();

    console.log("📬 [NEW NEWSLETTER SUBSCRIBER]:", cleanEmail, "at", new Date().toISOString());
    syncToGoogleSheets("NEWSLETTER", { email: cleanEmail }).catch((err) => console.warn("Google Sheet newsletter sync notice:", err));

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for subscribing to Fly Creative growth reveals!"
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Error in /api/newsletter:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error." },
      { status: 500 }
    );
  }
}
