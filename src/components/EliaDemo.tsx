"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Smartphone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const WHATSAPP_DEMO_URL = "https://wa.me/14155238886?text=join%20greater-knew";

export default function EliaDemo() {
  const { lang } = useLanguage();

  const openWebChat = () => {
    window.dispatchEvent(new Event("elia:open"));
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <section id="demo" className="scroll-mt-28 py-24 lg:py-32 bg-[#1D3461] relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/[0.02] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#D4793B]/8 rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-5">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white/80 text-sm font-medium">
              {lang === "ca" ? "En directe · Respon en segons" : "En directo · Responde en segundos"}
            </span>
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-white leading-tight mb-4">
            {lang === "ca" ? "Prova Elia ara mateix." : "Prueba Elia ahora mismo."}
            <br />
            <span className="text-[#D4793B]">
              {lang === "ca" ? "Sense registre. Gratis." : "Sin registro. Gratis."}
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto leading-relaxed">
            {lang === "ca"
              ? "Elia és l'assistent que configurem per a cada negoci. Parla amb ella abans de decidir."
              : "Elia es el asistente que configuramos para cada negocio. Habla con ella antes de decidir."}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {/* Web chat */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="bg-white/10 border border-white/15 rounded-2xl p-7 flex flex-col hover:bg-white/[0.13] transition-colors"
          >
            <div className="w-11 h-11 bg-white/15 rounded-xl flex items-center justify-center mb-5">
              <MessageSquare size={22} className="text-white" />
            </div>
            <h3 className="font-heading font-bold text-xl text-white mb-2">
              {lang === "ca" ? "Xat en aquesta web" : "Chat en esta web"}
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">
              {lang === "ca"
                ? "Fes-li una pregunta sobre el teu negoci i veu com respondria Elia als teus clients."
                : "Hazle una pregunta sobre tu negocio y ve cómo respondería Elia a tus clientes."}
            </p>
            <button
              onClick={openWebChat}
              className="group inline-flex items-center justify-center gap-2 bg-white text-[#1D3461] hover:bg-white/90 font-semibold px-6 h-11 rounded-xl text-sm transition-colors w-full"
            >
              {lang === "ca" ? "Obrir el xat" : "Abrir el chat"}
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </motion.div>

          {/* WhatsApp demo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="bg-[#D4793B]/20 border border-[#D4793B]/30 rounded-2xl p-7 flex flex-col hover:bg-[#D4793B]/25 transition-colors"
          >
            <div className="w-11 h-11 bg-[#D4793B]/30 rounded-xl flex items-center justify-center mb-5">
              <Smartphone size={22} className="text-[#D4793B]" />
            </div>
            <h3 className="font-heading font-bold text-xl text-white mb-2">
              {lang === "ca" ? "Prova per WhatsApp" : "Prueba por WhatsApp"}
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">
              {lang === "ca"
                ? "Parla amb Elia exactament com ho farien els teus clients. En temps real, des del mòbil."
                : "Habla con Elia exactamente igual que tus clientes. En tiempo real, desde tu móvil."}
            </p>
            <a
              href={WHATSAPP_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#25D366]/90 text-white font-semibold px-6 h-11 rounded-xl text-sm transition-colors w-full"
            >
              {lang === "ca" ? "Obrir a WhatsApp" : "Abrir en WhatsApp"}
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <p className="text-white/30 text-xs mt-3 text-center">
              {lang === "ca"
                ? "Envia \"join greater-knew\" per activar la demo"
                : "Envía \"join greater-knew\" para activar la demo"}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
