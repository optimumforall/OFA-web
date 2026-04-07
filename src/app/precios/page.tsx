'use client';

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useModal } from "@/context/ModalContext";

const WHATSAPP_URL =
  "https://wa.me/34625102259?text=Hola%2C%20quiero%20saber%20los%20precios%20de%20Optimum%20for%20All%20antes%20de%20que%20est%C3%A9n%20publicados.";

const content = {
  es: {
    back: "Volver",
    eyebrow: "Precios",
    h1: "Los precios están casi listos.",
    h1b: "Tú también.",
    body: "Estamos ajustando los últimos detalles para que el precio sea justo — para negocios reales, no para grandes empresas. Si escribes ahora, te damos acceso anticipado y condiciones especiales de lanzamiento.",
    cta1: "Escríbenos por WhatsApp",
    cta2: "Mándanos un email",
    note: "Sin spam. Sin presión. Solo te avisamos cuando esté listo.",
    badge: "Acceso anticipado disponible",
  },
  ca: {
    back: "Tornar",
    eyebrow: "Preus",
    h1: "Els preus estan gairebé a punt.",
    h1b: "Tu també.",
    body: "Estem ajustant els últims detalls perquè el preu sigui just — per a negocis reals, no per a grans empreses. Si escrius ara, et donem accés anticipat i condicions especials de llançament.",
    cta1: "Escriu-nos per WhatsApp",
    cta2: "Envia'ns un email",
    note: "Sense spam. Sense pressió. Només t'avisem quan estigui llest.",
    badge: "Accés anticipat disponible",
  },
};

function PreciosContent() {
  const { lang } = useLanguage();
  const { openModal } = useModal();
  const tr = content[lang];

  return (
    <div className="min-h-screen bg-[#FAFAF8] flex flex-col">
      {/* Minimal nav */}
      <header className="px-6 py-5 flex items-center justify-between max-w-6xl mx-auto w-full">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#6B6560] hover:text-[#1D3461] transition-colors"
        >
          <ArrowLeft size={15} />
          {tr.back}
        </a>
        <span className="font-heading font-bold text-lg text-[#1D3461]">
          Optimum<span className="text-[#D4793B]"> for All</span>
        </span>
      </header>

      {/* Main content — centered */}
      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-2xl w-full">
          {/* Decorative background shapes */}
          <div className="relative">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#D4793B]/5 rounded-full pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#1D3461]/5 rounded-full pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="relative z-10"
            >
              {/* Badge */}
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#D4793B] bg-[#D4793B]/10 border border-[#D4793B]/20 px-3 py-1.5 rounded-full mb-6 uppercase tracking-wide">
                <span className="w-1.5 h-1.5 bg-[#D4793B] rounded-full animate-pulse" />
                {tr.badge}
              </span>

              {/* Headline */}
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-[#1D3461] leading-[1.1] mb-2">
                {tr.h1}
              </h1>
              <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-[#D4793B] leading-[1.1] mb-8">
                {tr.h1b}
              </h2>

              {/* Body */}
              <p className="text-lg md:text-xl text-[#6B6560] leading-relaxed mb-10 max-w-lg">
                {tr.body}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2.5 bg-[#1D3461] hover:bg-[#1D3461]/90 text-white font-semibold px-7 h-13 rounded-xl text-base transition-colors"
                >
                  {/* WhatsApp icon */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  {tr.cta1}
                  <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                </a>

                <button
                  onClick={openModal}
                  className="inline-flex items-center justify-center gap-2 text-[#1D3461] hover:bg-[#F2F0EC] border border-[#E2DED8] font-semibold h-13 px-6 rounded-xl text-base transition-colors"
                >
                  <Mail size={16} />
                  {tr.cta2}
                </button>
              </div>

              <p className="mt-5 text-sm text-[#6B6560]">{tr.note}</p>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Subtle footer */}
      <footer className="px-6 py-5 text-center">
        <p className="text-xs text-[#6B6560]/60">
          © {new Date().getFullYear()} Optimum for All · Barcelona, Cataluña
        </p>
      </footer>
    </div>
  );
}

export default function PreciosPage() {
  return <PreciosContent />;
}
