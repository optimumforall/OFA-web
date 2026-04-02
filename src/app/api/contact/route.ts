import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    console.log("DEBUG: EMAIL_USER =", process.env.EMAIL_USER);
    console.log("DEBUG: EMAIL_PASS =", process.env.EMAIL_PASS);

    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.warn("Faltan credenciales de Nodemailer. Simulando envío:", { name, email, phone, message });
      return NextResponse.json(
        { success: true, message: "(Simulado) Form submitted successfully" },
        { status: 200 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    console.log("DEBUG: Transporter config:", {
      service: 'gmail',
      user: process.env.EMAIL_USER,
      passLength: process.env.EMAIL_PASS?.length,
    });

    try {
      const verified = await transporter.verify();
      console.log('Transporter verified:', verified);
    } catch (error) {
      console.error('Transporter verification failed:', error);
    }

    const mailOptions = {
      from: `"Optimum for All" <${process.env.EMAIL_USER}>`,
      to: "optimum.for.all@gmail.com",
      replyTo: email,
      subject: `Nuevo contacto de Demo: ${name}`,
      text: `Has recibido una nueva solicitud de contacto.\n\nNombre: ${name}\nEmail: ${email}\nTeléfono: ${phone || "No indicado"}\n\nMensaje:\n${message || "Sin mensaje"}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto;">
          <h2>Nueva solicitud de Demo / Contacto</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Teléfono:</strong> ${phone || "No indicado"}</p>
          <br/>
          <p><strong>Mensaje:</strong></p>
          <p style="white-space: pre-wrap; background: #f4f4f4; padding: 12px; border-radius: 6px;">${message || "Sin mensaje"}</p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info);

    return NextResponse.json(
      { success: true, message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

