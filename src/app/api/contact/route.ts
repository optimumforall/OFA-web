import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Nombre y email son requeridos" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Formato de email inválido" }, { status: 400 });
    }

    if (message && message.length > 5000) {
      return NextResponse.json({ error: "Mensaje demasiado largo" }, { status: 400 });
    }

    const sanitize = (str: string) => str.replace(/<[^>]*>/g, '');
    const sanitizedName = sanitize(name);
    const sanitizedEmail = sanitize(email);
    const sanitizedPhone = phone ? sanitize(phone) : '';
    const sanitizedMessage = message ? sanitize(message) : '';

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.warn("Faltan credenciales de Nodemailer. Simulando envío.");
      return NextResponse.json(
        { success: true, message: "(Simulado) Formulario enviado con éxito" },
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


    const mailOptions = {
      from: `"Optimum for All" <${process.env.EMAIL_USER}>`,
      to: "optimum.for.all@gmail.com",
      replyTo: sanitizedEmail,
      subject: `Nuevo contacto de Demo: ${sanitizedName}`,
      text: `Has recibido una nueva solicitud de contacto.\n\nNombre: ${sanitizedName}\nEmail: ${sanitizedEmail}\nTeléfono: ${sanitizedPhone || "No indicado"}\n\nMensaje:\n${sanitizedMessage || "Sin mensaje"}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto;">
          <h2>Nueva solicitud de Demo / Contacto</h2>
          <p><strong>Nombre:</strong> ${sanitizedName}</p>
          <p><strong>Email:</strong> ${sanitizedEmail}</p>
          <p><strong>Teléfono:</strong> ${sanitizedPhone || "No indicado"}</p>
          <br/>
          <p><strong>Mensaje:</strong></p>
          <p style="white-space: pre-wrap; background: #f4f4f4; padding: 12px; border-radius: 6px;">${sanitizedMessage || "Sin mensaje"}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Formulario enviado con éxito" },
      { status: 200 }
    );
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}

