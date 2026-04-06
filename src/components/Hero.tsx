"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, PhoneCall, Calendar, MessageSquare } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/context/LanguageContext";
import { useModal } from "@/context/ModalContext";
import { t } from "@/lib/translations";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  const { lang } = useLanguage();
  const tr = t[lang].hero;
  const { openModal } = useModal();

  return (
    <section className="relative min-h-screen flex items-center pt-20 md:pt-32 overflow-hidden bg-[#FAFAF8] dark:bg-[#0B1120] bg-grid-pattern text-slate-500/5 dark:text-white/5">
      {/* Background Image with Frosted Glass Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/main_hero.png"
          alt="Optimum for All"
          fill
          priority
          sizes="100vw"
          className="object-cover scale-105"
        />
        {/* The Magic Velo: semi-transparent wash + heavy blur */}
        <div className="absolute inset-0 bg-[#FAFAF8]/90 backdrop-blur-2xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 lg:py-28 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - copy */}
          <div>
            <motion.h1 initial="hidden" animate="visible" custom={0.1} variants={fadeUp}
              className="font-heading font-bold text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.12] text-[#1D3461] mb-6">
              {tr.h1a}
              <br />
              <span className="text-[#D4793B]">{tr.h1b}</span>
            </motion.h1>

            <motion.p initial="hidden" animate="visible" custom={0.2} variants={fadeUp}
              className="text-lg text-[#6B6560] leading-relaxed mb-5 max-w-[480px]">
              {tr.p1}
            </motion.p>

            <motion.p initial="hidden" animate="visible" custom={0.28} variants={fadeUp}
              className="text-sm text-[#6B6560]/70 mb-8">
              {tr.sectors}
            </motion.p>

            <motion.div initial="hidden" animate="visible" custom={0.35} variants={fadeUp}
              className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={openModal}
                className="group inline-flex items-center gap-2 bg-[#1D3461] hover:bg-[#1D3461]/90 text-white font-semibold px-7 h-12 rounded-xl text-base transition-colors">
                {tr.cta}
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
              <a href="#como-funciona"
                className="inline-flex items-center justify-center text-[#1D3461] hover:bg-[#F2F0EC] font-semibold h-12 px-6 rounded-xl text-base transition-colors">
                {tr.ctaSecondary}
              </a>
            </motion.div>

            <motion.p initial="hidden" animate="visible" custom={0.45} variants={fadeUp}
              className="mt-5 text-sm text-[#6B6560]">
              {tr.note}
            </motion.p>
          </div>

          {/* Right - Flow Visualization Inspiration: ttiflows.es */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative h-[450px] md:h-[550px] flex items-center justify-center">
            
            {/* Connection Lines (SVG) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" preserveAspectRatio="none">
              <motion.path
                d="M 150 150 L 300 250 L 150 350"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="8 8"
                className="text-[#D4793B]/20 dark:text-[#D4793B]/40"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.8 }}
              />
            </svg>

            {/* Step 1: Llamada */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute top-[10%] left-[5%] md:left-[10%] z-10"
            >
              <div className="bg-white dark:bg-[#1E293B] border border-[#E2DED8] dark:border-white/10 rounded-2xl shadow-xl p-5 w-56 md:w-64 transform hover:-translate-y-1 transition-transform cursor-default">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#1D3461] rounded-xl flex items-center justify-center">
                    <PhoneCall size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[#D4793B] uppercase tracking-tighter">Entrante</p>
                    <p className="text-sm font-bold text-[#1D3461] dark:text-white">Llamada de Cliente</p>
                  </div>
                </div>
                <div className="h-1.5 w-full bg-[#F2F0EC] dark:bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="h-full w-1/2 bg-[#D4793B]" 
                  />
                </div>
              </div>
            </motion.div>

            {/* Step 2: IA Elia (Central) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="relative z-20"
            >
              <div className="bg-[#1D3461] dark:bg-[#3B82F6] rounded-full p-1.5 shadow-2xl">
                <motion.div 
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white dark:bg-[#1E293B] flex items-center justify-center relative overflow-hidden"
                >
                  <Image src="/Logo.png" alt="Elia IA" width={80} height={80} className="relative z-10" />
                  <div className="absolute inset-0 bg-[#D4793B]/5 animate-pulse" />
                </motion.div>
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#D4793B] text-white text-[11px] font-bold px-4 py-1 rounded-full shadow-lg whitespace-nowrap">
                IA ANALIZANDO...
              </div>
            </motion.div>

            {/* Step 3: Cita */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute bottom-[10%] right-[5%] md:right-[10%] z-10"
            >
              <div className="bg-white dark:bg-[#1E293B] border border-[#E2DED8] dark:border-white/10 rounded-2xl shadow-xl p-5 w-56 md:w-64 transform hover:-translate-y-1 transition-transform cursor-default">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                      <Calendar size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-green-600 uppercase tracking-tighter">Confirmado</p>
                      <p className="text-sm font-bold text-[#1D3461] dark:text-white">Cita en Google Cal</p>
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 dark:bg-green-500/10 rounded-lg p-2 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  <p className="text-[11px] text-green-700 dark:text-green-400 font-medium">Sincronización completa</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Stats - Adapted */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[20%] right-0 md:-right-8 bg-[#D4793B] rounded-xl shadow-lg px-4 py-2.5 z-30 transform -rotate-3"
            >
              <p className="text-[10px] text-white/80 font-bold uppercase">Ahorro</p>
              <p className="text-xl font-bold font-heading text-white">4–6h</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
