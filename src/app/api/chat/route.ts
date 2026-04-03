// Permitir hasta 30s de duración para Edge/Serverless functions
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // 1. Extraemos el user, la sesión o usamos un ID temporal para que N8N tenga contexto
    const sessionId = "web-session-ofa";

    // Extraemos solo el texto del último mensaje que escribió el usuario
    const lastUserMessage = messages.filter((m: any) => m.role === 'user').pop()?.content || "";

    // 2. Hacemos la llamada HTTP a tu servidor privado de N8N
    const n8nResponse = await fetch("https://n8n.srv1537180.hstgr.cloud/webhook/ofa-chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sessionId,
        chatInput: lastUserMessage
      }),
    });

    if (!n8nResponse.ok) {
      const errText = await n8nResponse.text();
      throw new Error(`Error en n8n: ${n8nResponse.status} ${errText}`);
    }

    const n8nData = await n8nResponse.json();
    
    // N8N por defecto suele devolver la respuesta del Agente IA en la propiedad "output".
    // Si la estructura cambia, pillamos el primer string útil.
    let botText = n8nData?.output || n8nData?.text || n8nData?.response || "Recibido. Hubo un error de formato en N8N.";
    if (typeof n8nData === "string") botText = n8nData;

    // 3. Empaquetamos la respuesta para simular un "texto en streaming" simulado
    // que es el formato exacto que el hook useChat de Next.js (Vercel) requiere en el frontend.
    // El formato de Vercel AI SDK es '0:"chunk"'
    const formattedChunk = `0:"${botText.replace(/\n/g, '\\n').replace(/"/g, '\\"')}"\n`;

    return new Response(formattedChunk, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'x-vercel-ai-data-stream': 'v1'
      }
    });

  } catch (error) {
    console.error("Error contactando con n8n:", error);
    const errorChunk = `0:"Error del servidor. Por favor, contacta por WhatsApp."\n`;
    return new Response(errorChunk, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'x-vercel-ai-data-stream': 'v1'
      }
    });
  }
}
