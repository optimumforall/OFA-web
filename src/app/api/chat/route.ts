import { openai } from '@ai-sdk/openai';
import { streamText, convertToCoreMessages } from 'ai';

// Permitir hasta 30s de duración para Edge/Serverless functions
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const systemPrompt = `Eres el IA Comercial experto de Optimum for All.
Optimum for All es una startup catalana líder que diseña asistentes de voz (IA) telefónicos para negocios locales (peluquerías, estéticas, cerrajeros, electricistas).
Tu objetivo es responder a los clientes directamente por el chat de la web de forma cercana, concisa y muy persuasiva (1 o 2 párrafos máximo).

Datos clave:
- Nuestro asistente de voz coge el teléfono 24/7 y atiende de forma natural (como un humano).
- El asistente agenda citas automáticamente y responde FAQs.
- El cliente no tiene que descargar ni aprender a usar ninguna app. Nosotros lo instalamos en 48h.

Directrices:
1. Responde a su duda con seguridad y profesionalidad.
2. NUNCA inventes precios. Dile que depende del volumen y le invitas a tener una reunión.
3. El objetivo fundamental de esta charla es que el usuario haga click en los botones de "Reserva tu Demo" de la web para hablar con un agente humano.`;

    const result = await streamText({
      model: openai('gpt-4o-mini'),
      system: systemPrompt,
      messages: convertToCoreMessages(messages),
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error("Error en OpenAI puro:", error);
    return new Response(
      `0:"Error del servidor (OpenAI directo). Revisa la API Key."\n`, 
      { headers: { 'Content-Type': 'text/plain; charset=utf-8', 'x-vercel-ai-data-stream': 'v1' } }
    );
  }
}
