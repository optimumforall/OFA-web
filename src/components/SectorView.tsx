"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useModal } from "@/context/ModalContext";
import { t } from "@/lib/translations";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import PorQueOFA from "@/components/PorQueOFA";
import Calculadora from "@/components/Calculadora";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";

export type Sector = "belleza" | "oficios";

export default function SectorView({ sector }: { sector: Sector }) {
  const { lang } = useLanguage();
  const { openModal } = useModal();
  const tr = t[lang].sectores[sector];

  return (
    <main id="main-content">
      {/* Sector Hero */}
      <section className="relative min-h-[80vh] flex items-center pt-24 pb-16 overflow-hidden bg-[#FAFAF8]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1D3461]/[0.03] rounded-full translate-x-1/3 -translate-y-1/4" />
        </div>

        <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-block py-1.5 px-4 rounded-full bg-[#1D3461]/10 text-[#1D3461] text-sm font-bold mb-6 tracking-wide">
                ESPECIALISTAS EN GARRAF, TARRAGONA Y PENEDÈS
              </span>
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.12] text-[#1D3461] mb-6">
                {tr.title}
              </h1>
              <p className="text-xl text-[#D4793B] font-semibold mb-6">
                {tr.subtitle}
              </p>
              <p className="text-lg text-[#6B6560] leading-relaxed mb-8">
                {tr.body}
              </p>
              
              <ul className="space-y-4 mb-10">
                {tr.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#1D3461] shrink-0 mt-0.5" />
                    <span className="text-lg text-[#141414] font-medium">{feat}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={openModal}
                className="group inline-flex items-center gap-3 bg-[#1D3461] hover:bg-[#1D3461]/90 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Reserva tu demo gratuita
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <PorQueOFA />
      <Calculadora />
      <FAQ />
      <CTAFinal />
    </main>
  );
}
