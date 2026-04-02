"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useModal } from "@/context/ModalContext";
import { t } from "@/lib/translations";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import PorQueOFA from "@/components/PorQueOFA";
import Calculadora from "@/components/Calculadora";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import SectorShowcase from "@/components/SectorShowcase";

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
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column (Text) */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-block py-1.5 px-4 rounded-full bg-[#1D3461]/10 text-[#1D3461] text-[13px] font-bold mb-6 tracking-wide uppercase">
                Expertos en Garraf y Tarragona
              </span>
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.12] text-[#1D3461] mb-6">
                {tr.title}
              </h1>
              <p className="text-xl text-[#D4793B] font-semibold mb-6">
                {tr.subtitle}
              </p>
              <p className="text-base text-[#6B6560] leading-relaxed mb-8 max-w-[480px]">
                {tr.body}
              </p>
              
              <ul className="space-y-4 mb-8">
                {tr.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#1D3461] shrink-0 mt-0.5" />
                    <span className="text-base text-[#141414] font-medium leading-snug">{feat}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={openModal}
                className="group inline-flex items-center gap-3 bg-[#1D3461] hover:bg-[#1D3461]/90 text-white font-semibold px-7 h-12 rounded-xl text-base transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Reserva tu demo gratis
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Right Column (Image Generator) */}
            <motion.div 
              initial={{ opacity: 0, x: 32 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }} 
              className="relative aspect-square md:aspect-[4/3] lg:aspect-square w-full rounded-3xl overflow-hidden shadow-2xl border border-[#E2DED8]"
            >
               <Image 
                  src={sector === 'belleza' ? '/belleza_hero.png' : '/oficios_hero.png'} 
                  alt={tr.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-1000" 
                  priority 
               />
               <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      <SectorShowcase sector={sector} />
      <PorQueOFA />
      <Calculadora />
      <FAQ />
      <CTAFinal />
    </main>
  );
}
