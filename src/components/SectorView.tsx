"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, PhoneOff, Clock, AlertCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useModal } from "@/context/ModalContext";
import { t } from "@/lib/translations";

export type Sector = "belleza" | "oficios";

const sectorData = {
  es: {
    belleza: {
      badge: "Salones de belleza · Peluquerías · Estética",
      painTitle: "¿Te suena familiar?",
      pains: [
        { icon: PhoneOff, text: "Estás con una clienta y suena el teléfono. Tienes que elegir entre atender y perder la cita." },
        { icon: Clock, text: "Fuera de horario, alguien llama para reservar. Nadie coge. La clienta llama a la competencia." },
        { icon: AlertCircle, text: "Confirmar citas manualmente te roba 30 minutos al día que podrías dedicar a trabajar." },
      ],
      solutionTitle: "Con Elia, todo eso desaparece.",
      demo: "Prueba Elia gratis — habla con ella ahora mismo",
    },
    oficios: {
      badge: "Cerrajeros · Fontaneros · Electricistas",
      painTitle: "¿Te suena familiar?",
      pains: [
        { icon: PhoneOff, text: "Estás en una obra y llama alguien con una urgencia. No puedes coger el teléfono. Pierdes el cliente." },
        { icon: Clock, text: "De madrugada llaman urgencias y tú no puedes estar siempre disponible. La llamada va a la competencia." },
        { icon: AlertCircle, text: "Recibes consultas de presupuesto que te consumen horas y a veces no contratan." },
      ],
      solutionTitle: "Con Elia, cada llamada queda atendida.",
      demo: "Prueba Elia gratis — habla con ella ahora mismo",
    },
  },
  ca: {
    belleza: {
      badge: "Salons de bellesa · Perruqueries · Estètica",
      painTitle: "Et sona familiar?",
      pains: [
        { icon: PhoneOff, text: "Ets amb una clienta i sona el telèfon. Has de triar entre atendre i perdre la cita." },
        { icon: Clock, text: "Fora d'horari, algú truca per reservar. Ningú agafa. La clienta truca a la competència." },
        { icon: AlertCircle, text: "Confirmar cites manualment et roba 30 minuts al dia que podries dedicar a treballar." },
      ],
      solutionTitle: "Amb l'Elia, tot això desapareix.",
      demo: "Prova l'Elia gratis — parla amb ella ara mateix",
    },
    oficios: {
      badge: "Serrallers · Lampistes · Electricistes",
      painTitle: "Et sona familiar?",
      pains: [
        { icon: PhoneOff, text: "Ets en una obra i truca algú amb una urgència. No pots agafar el telèfon. Perds el client." },
        { icon: Clock, text: "De matinada truquen urgències i tu no pots estar sempre disponible. La trucada va a la competència." },
        { icon: AlertCircle, text: "Reps consultes de pressupost que et consumeixen hores i de vegades no contracten." },
      ],
      solutionTitle: "Amb l'Elia, cada trucada queda atesa.",
      demo: "Prova l'Elia gratis — parla amb ella ara mateix",
    },
  },
};

const WHATSAPP_DEMO_URL = "https://wa.me/14155238886?text=join%20greater-knew";

export default function SectorView({ sector }: { sector: Sector }) {
  const { lang } = useLanguage();
  const { openModal } = useModal();
  const tr = t[lang].sectores[sector];
  const sd = sectorData[lang][sector];

  const openChat = () => window.dispatchEvent(new Event("elia:open"));

  return (
    <main>
      {/* Hero */}
      <section className="bg-[#FAFAF8] pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-block text-xs font-semibold text-[#D4793B] bg-[#D4793B]/10 px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
              {sd.badge}
            </span>
            <h1 className="font-heading font-bold text-3xl md:text-5xl text-[#1D3461] leading-tight mb-5">
              {tr.title}
            </h1>
            <p className="text-xl text-[#6B6560] max-w-2xl mx-auto leading-relaxed mb-8">
              {tr.subtitle}
            </p>
            <button
              onClick={openModal}
              className="group inline-flex items-center justify-center gap-2 bg-[#1D3461] hover:bg-[#1D3461]/90 text-white font-semibold px-8 h-12 rounded-xl text-base transition-colors"
            >
              {lang === "ca" ? "Reserva la teva demo gratis" : "Reserva tu demo gratis"}
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
            <p className="mt-4 text-sm text-[#6B6560]">
              {lang === "ca" ? "Sense compromís · Configuració en 48h" : "Sin compromiso · Configuración en 48h"}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pain points */}
      <section className="py-20 lg:py-28 bg-[#F2F0EC]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#1D3461]">
              {sd.painTitle}
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-5">
            {sd.pains.map((pain, i) => {
              const Icon = pain.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white border border-[#E2DED8] rounded-2xl p-6"
                >
                  <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={20} className="text-red-400" />
                  </div>
                  <p className="text-[#3D3935] leading-relaxed">{pain.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 lg:py-28 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#1D3461] mb-4">
              {sd.solutionTitle}
            </h2>
            <p className="text-[#6B6560] text-lg max-w-2xl mx-auto">{tr.body}</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-5">
            {tr.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white border border-[#E2DED8] rounded-2xl p-6 flex items-start gap-4"
              >
                <CheckCircle2 size={20} className="text-[#1D3461] flex-shrink-0 mt-0.5" />
                <p className="text-[#3D3935] leading-relaxed">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo CTA */}
      <section className="py-20 lg:py-28 bg-[#1D3461]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/80 text-sm font-medium">
                {lang === "ca" ? "En directe · Respon en segons" : "En directo · Responde en segundos"}
              </span>
            </div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
              {sd.demo}
            </h2>
            <p className="text-white/60 text-lg mb-10">
              {lang === "ca"
                ? "Parla amb l'Elia al xat d'aquesta pàgina o per WhatsApp — exactament com ho farien els teus clients."
                : "Habla con Elia en el chat de esta página o por WhatsApp — exactamente como lo harían tus clientes."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                onClick={openChat}
                className="group inline-flex items-center justify-center gap-2 bg-white text-[#1D3461] hover:bg-white/90 font-semibold px-7 h-12 rounded-xl text-base transition-colors"
              >
                {lang === "ca" ? "Obrir el xat" : "Abrir el chat"}
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
              <a
                href={WHATSAPP_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#25D366]/90 text-white font-semibold px-7 h-12 rounded-xl text-base transition-colors"
              >
                {lang === "ca" ? "Provar per WhatsApp" : "Probar por WhatsApp"}
              </a>
            </div>
            <button
              onClick={openModal}
              className="text-white/50 hover:text-white/80 text-sm transition-colors underline underline-offset-4"
            >
              {lang === "ca"
                ? "O reserva una demo de 20 min amb el nostre equip →"
                : "O reserva una demo de 20 min con nuestro equipo →"}
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
