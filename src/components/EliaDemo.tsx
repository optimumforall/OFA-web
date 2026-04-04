"use client";

import { motion } from "framer-motion";
import { MessageSquare, Smartphone, ArrowRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const WHATSAPP_DEMO_URL = "https://wa.me/14155238886?text=join%20greater-knew";

const steps = [
  "Abre WhatsApp en tu móvil",
  'Envía el mensaje "join greater-knew" al número',
  "Escríbele lo que quieras — Elia responde al instante",
];

export default function EliaDemo() {
  const { lang } = useLanguage();

  return (
    <section className="py-20 lg:py-28 bg-[#F2F0EC]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <p className="text-[#D4793B] text-sm font-semibold uppercase tracking-widest mb-3">
            Demo en vivo
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#1D3461] leading-tight mb-4">
            Habla con Elia antes de decidir
          </h2>
          <p className="text-[#6B6560] text-lg max-w-2xl mx-auto leading-relaxed">
            Elia es el asistente que configuramos para cada negocio. Puedes probarla ahora mismo —
            en esta web o directamente en WhatsApp — para ver cómo respondería con tu información.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Web chat */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="bg-white rounded-2xl border border-[#E2DED8] p-7 flex flex-col"
          >
            <div className="w-11 h-11 bg-[#1D3461]/10 rounded-xl flex items-center justify-center mb-5">
              <MessageSquare size={22} className="text-[#1D3461]" />
            </div>
            <h3 className="font-heading font-bold text-xl text-[#1D3461] mb-2">
              Pruébala en esta web
            </h3>
            <p className="text-[#6B6560] text-sm leading-relaxed mb-6 flex-1">
              El chat de Elia está activo ahora mismo en la esquina inferior derecha de esta página.
              Ábrelo y escríbele cualquier pregunta sobre automatización, precios o cómo podría
              ayudar a tu negocio.
            </p>
            <div className="flex items-center gap-2 text-sm text-[#6B6560] bg-[#F2F0EC] rounded-xl px-4 py-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0" />
              <span>
                Busca el botón azul{" "}
                <span className="font-semibold text-[#1D3461]">↘ abajo a la derecha</span>
              </span>
            </div>
          </motion.div>

          {/* WhatsApp demo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="bg-white rounded-2xl border border-[#E2DED8] p-7 flex flex-col"
          >
            <div className="w-11 h-11 bg-[#25D366]/10 rounded-xl flex items-center justify-center mb-5">
              <Smartphone size={22} className="text-[#25D366]" />
            </div>
            <h3 className="font-heading font-bold text-xl text-[#1D3461] mb-2">
              Pruébala en WhatsApp
            </h3>
            <p className="text-[#6B6560] text-sm leading-relaxed mb-5">
              Habla con Elia exactamente igual que lo harían tus clientes. Tres pasos:
            </p>

            <ol className="space-y-3 mb-6 flex-1">
              {steps.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={17} className="text-[#25D366] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[#3D3935] leading-snug">{step}</span>
                </li>
              ))}
            </ol>

            <a
              href={WHATSAPP_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#25D366]/90 text-white font-semibold px-6 h-11 rounded-xl text-sm transition-colors"
            >
              Abrir en WhatsApp
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </a>

            <p className="text-xs text-[#6B6560] mt-3 text-center">
              Número de demo · El tuyo se configura con tu cuenta de WhatsApp Business
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
