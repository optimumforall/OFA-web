"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, PhoneCall, Calendar, MessageSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/translations";
import { FormModal } from "./FormModal";

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1D3461]/[0.03] rounded-full translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#D4793B]/[0.05] rounded-full -translate-x-1/3 translate-y-1/4" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 lg:py-28 w-full">
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
              className="text-lg text-[#6B6560] leading-relaxed mb-4 max-w-[480px]">
              {tr.p1}
            </motion.p>

            <motion.p initial="hidden" animate="visible" custom={0.25} variants={fadeUp}
              className="text-base text-[#6B6560] leading-relaxed mb-8 max-w-[480px]">
              {tr.p2}
            </motion.p>

            <motion.div initial="hidden" animate="visible" custom={0.35} variants={fadeUp}
              className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setIsModalOpen(true)}
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
                  <div className="bg-[#F2F0EC] rounded-xl rounded-tl-none px-4 py-2.5 max-w-[260px]">
                    <p className="text-sm text-[#1D3461] leading-snug">"{tr.callMsg1}"</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 flex-row-reverse">
                  <div className="w-8 h-8 bg-[#D4793B] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MessageSquare size={14} className="text-white" />
                  </div>
                  <div className="bg-[#1D3461] rounded-xl rounded-tr-none px-4 py-2.5 max-w-[260px]">
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

            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl border border-[#E2DED8] shadow-md px-4 py-3 z-20">
              <p className="text-xs text-[#6B6560] font-medium">{tr.stat1label}</p>
              <p className="text-2xl font-bold font-heading text-[#1D3461]">3–5</p>
              <p className="text-xs text-[#6B6560]">{tr.stat1sub}</p>
            </div>

            <div className="absolute -top-4 -right-4 bg-[#D4793B] rounded-xl shadow-md px-4 py-3 z-20">
              <p className="text-xs text-white/80 font-medium">{tr.stat2label}</p>
              <p className="text-2xl font-bold font-heading text-white">4–6h</p>
              <p className="text-xs text-white/80">{tr.stat2sub}</p>
            </div>
          </motion.div>
        </div>
      </div>

      <FormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
