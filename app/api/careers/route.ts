import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, position, experience, driveLink, note, fileName } = body;

    // 1. Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please enter your full name." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== "string" || phone.trim().length < 7) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid phone number." },
        { status: 400 }
      );
    }

    const appId = `FLY-APP-${Date.now().toString(36).toUpperCase()}`;

    const applicationData = {
      appId,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      position: position || "General Application",
      experience: experience || "Fresher",
      driveLink: driveLink ? String(driveLink).trim() : "None",
      note: note ? String(note).trim() : "None",
      fileName: fileName ? String(fileName).trim() : "None",
      submittedAt: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      status: "PENDING_REVIEW"
    };

    // 2. Server Log
    console.log("💼 [NEW JOB APPLICATION RECEIVED]:", JSON.stringify(applicationData, null, 2));

    // 3. Success Response
    return NextResponse.json(
      {
        success: true,
        message: "Application submitted successfully! Our HR team will review your profile.",
        applicationId: appId
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Error in /api/careers:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error. Please try again or WhatsApp your resume directly." },
      { status: 500 }
    );
  }
}
