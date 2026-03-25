import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nome, email e messaggio sono obbligatori" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Email non valida" },
        { status: 400 }
      );
    }

    // TODO: Integrate with email service (Resend, SendGrid, etc.)
    // For now, log the contact request
    console.log("Contact form submission:", {
      name,
      email,
      phone,
      service,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: "Messaggio ricevuto con successo" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Errore interno del server" },
      { status: 500 }
    );
  }
}
