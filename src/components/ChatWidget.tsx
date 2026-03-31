"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  from: "bot" | "user";
  text: string;
};

const quickReplies = [
  { label: "¿Qué es Optimum for All?", answer: "Somos una startup catalana que crea asistentes de voz con inteligencia artificial para pequeños negocios. Tu asistente atiende llamadas, agenda citas y resuelve dudas — las 24 horas, los 7 días. Tú no tienes que estar pendiente del teléfono." },
  { label: "¿Cuánto cuesta?", answer: "Los precios están en la sección de precios del menú. Si prefieres que te los expliquemos según tu tipo de negocio, lo hacemos en la demo — sin compromiso." },
  { label: "¿Cuánto tarda la configuración?", answer: "48 horas. Hacemos una llamada contigo para entender tu negocio y configuramos todo nosotros. No tienes que instalar nada ni tocar nada." },
  { label: "¿Puedo probar gratis?", answer: "Sí. Puedes reservar una demo gratuita de 20 minutos donde te enseñamos cómo quedaría el asistente en tu negocio concreto. Sin ningún compromiso." },
  { label: "¿Funciona en catalán?", answer: "Sí. Nuestro asistente habla en catalán, castellano o el idioma que necesites. Lo configuramos nosotros." },
];

const WHATSAPP_URL = "https://wa.me/34625102259?text=Hola%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20Optimum%20for%20All.";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      from: "bot",
      text: "Hola. ¿En qué puedo ayudarte? Pulsa una pregunta o escríbeme directamente.",
    },
  ]);
  const [input, setInput] = useState("");
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  }, [messages, open]);

  function sendMessage(userText: string, botAnswer: string) {
    setShowQuickReplies(false);
    setMessages((prev) => [
      ...prev,
      { from: "user", text: userText },
    ]);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: botAnswer },
      ]);
    }, 500);
  }

  function handleQuickReply(item: typeof quickReplies[0]) {
    sendMessage(item.label, item.answer);
  }

  function handleSend() {
    const text = input.trim();
    if (!text) return;
    setInput("");
    const lower = text.toLowerCase();
    const match = quickReplies.find((q) =>
      q.label.toLowerCase().split(" ").some((w) => w.length > 3 && lower.includes(w))
    );
    const answer = match
      ? match.answer
      : "No tengo esa respuesta aquí, pero te la damos enseguida. Escríbenos por WhatsApp o reserva una demo gratuita.";
    sendMessage(text, answer);
  }

  function handleKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") handleSend();
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="w-[320px] bg-white rounded-2xl shadow-2xl border border-[#E2DED8] overflow-hidden"
            role="dialog"
            aria-label="Chat de asistencia"
          >
            {/* Header */}
            <div className="bg-[#1D3461] px-4 py-3.5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <div>
                  <p className="text-white font-semibold text-sm leading-tight">
                    Optimum for All
                  </p>
                  <p className="text-white/50 text-xs">Respondemos en minutos</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-white/50 hover:text-white transition-colors p-1 rounded-lg"
                aria-label="Cerrar chat"
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages */}
            <div className="h-60 overflow-y-auto px-4 py-4 space-y-3 bg-[#FAFAF8]">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[240px] px-3.5 py-2.5 rounded-xl text-sm leading-snug ${
                      msg.from === "bot"
                        ? "bg-white border border-[#E2DED8] text-[#141414] rounded-tl-none"
                        : "bg-[#1D3461] text-white rounded-tr-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {/* Quick replies */}
              {showQuickReplies && (
                <div className="space-y-1.5 pt-1">
                  {quickReplies.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => handleQuickReply(item)}
                      className="w-full text-left text-xs font-medium text-[#1D3461] bg-white border border-[#1D3461]/20 hover:border-[#1D3461]/50 hover:bg-[#F2F0EC] px-3 py-2 rounded-lg transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* WhatsApp escalation */}
            <div className="px-4 py-2.5 bg-[#F2F0EC] border-t border-[#E2DED8]">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-semibold text-[#25D366] hover:text-[#25D366]/80 transition-colors"
              >
                <ExternalLink size={12} />
                Hablar por WhatsApp con una persona real
              </a>
            </div>

            {/* Input */}
            <div className="px-3 py-3 border-t border-[#E2DED8] flex items-center gap-2 bg-white">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Escribe tu pregunta..."
                className="flex-1 text-sm bg-[#F2F0EC] rounded-lg px-3 py-2 outline-none text-[#141414] placeholder:text-[#6B6560]"
                aria-label="Mensaje"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="w-9 h-9 bg-[#1D3461] hover:bg-[#1D3461]/90 disabled:opacity-40 rounded-lg flex items-center justify-center transition-colors flex-shrink-0"
                aria-label="Enviar mensaje"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={() => setOpen((o) => !o)}
        whileTap={{ scale: 0.94 }}
        className="w-14 h-14 bg-[#1D3461] hover:bg-[#1D3461]/90 rounded-full shadow-lg flex items-center justify-center transition-colors"
        aria-label={open ? "Cerrar chat" : "Abrir chat de asistencia"}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X size={22} className="text-white" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageSquare size={22} className="text-white" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
