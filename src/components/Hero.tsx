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
    <section className="relative min-h-screen flex items-center pt-20 md:pt-32 overflow-hidden bg-[#FAFAF8]">
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

          {/* Right - visual */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="relative">
            <div className="bg-white rounded-2xl border border-[#E2DED8] shadow-lg p-6 relative z-10">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-semibold text-[#1D3461]">{tr.statusLabel}</span>
                </div>
                <span className="text-xs text-[#6B6560] bg-[#F2F0EC] px-2.5 py-1 rounded-full">24/7</span>
              </div>

              <div className="space-y-3 mb-5">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#1D3461] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <PhoneCall size={14} className="text-white" />
                  </div>
                  <div className="bg-[#F2F0EC] rounded-xl rounded-tl-none px-4 py-2.5 max-w-[280px] md:max-w-[320px]">
                    <p className="text-sm text-[#1D3461] leading-snug">"{tr.callMsg1}"</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 flex-row-reverse">
                  <div className="w-8 h-8 bg-[#D4793B] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MessageSquare size={14} className="text-white" />
                  </div>
                  <div className="bg-[#1D3461] rounded-xl rounded-tr-none px-4 py-2.5 max-w-[280px] md:max-w-[320px]">
                    <p className="text-sm text-white leading-snug">"{tr.callReply}"</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#1D3461] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <PhoneCall size={14} className="text-white" />
                  </div>
                  <div className="bg-[#F2F0EC] rounded-xl rounded-tl-none px-4 py-2.5">
                    <p className="text-sm text-[#1D3461]">"{tr.callMsg2}"</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-100 rounded-xl p-3 flex items-center gap-3">
                <Calendar size={16} className="text-green-600 flex-shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-green-700">{tr.confirmTitle}</p>
                  <p className="text-xs text-green-600">{tr.confirmSub}</p>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-10 -left-2 md:-bottom-16 md:-left-12 bg-[#D4793B] rounded-xl shadow-lg px-4 py-3 z-30 transform hover:scale-105 transition-transform duration-300">
              <p className="text-xs text-white/80 font-medium">{tr.stat1label}</p>
              <p className="text-2xl font-bold font-heading text-white">3–5</p>
              <p className="text-xs text-white/80">{tr.stat1sub}</p>
            </div>

            <div className="pointer-events-none absolute -top-10 -right-2 md:-top-16 md:-right-12 bg-[#D4793B] rounded-xl shadow-lg px-4 py-3 z-30 transform hover:scale-105 transition-transform duration-300">
              <p className="text-xs text-white/80 font-medium">{tr.stat2label}</p>
              <p className="text-2xl font-bold font-heading text-white">4–6h</p>
              <p className="text-xs text-white/80">{tr.stat2sub}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
