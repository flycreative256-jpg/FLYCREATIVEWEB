import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    // 1. Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid full name." },
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

    const leadId = `FLY-${Date.now().toString(36).toUpperCase()}`;

    const cleanData = {
      leadId,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      service: service ? String(service).trim() : "General Inquiry",
      message: message ? String(message).trim() : "No message provided",
      timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      source: "Fly Creative Website Contact Form"
    };

    // 2. Server Log
    console.log("🚀 [NEW LEAD RECEIVED - FLY CREATIVE SOLUTIONS]:", JSON.stringify(cleanData, null, 2));

    // 3. Success Response
    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out! Fly Creative team will connect with you within 24 hours.",
        leadId: `FLY-${Date.now().toString(36).toUpperCase()}`
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Error in /api/contact:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error. Please try again or WhatsApp us directly." },
      { status: 500 }
    );
  }
}
