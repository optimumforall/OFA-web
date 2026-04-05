"use client";

import { motion } from "framer-motion";
import { ClipboardList, Mic, CalendarCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useModal } from "@/context/ModalContext";
import { t } from "@/lib/translations";

const icons = [ClipboardList, Mic, CalendarCheck];
const numbers = ["01", "02", "03"];

export default function ComoFunciona() {
  const { lang } = useLanguage();
  const { openModal } = useModal();
  const tr = t[lang].como;

  return (
    <section id="como-funciona" className="scroll-mt-28 py-24 lg:py-32 bg-[#F2F0EC]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mb-16">
          <p className="text-sm font-semibold text-[#D4793B] uppercase tracking-widest mb-3">{tr.label}</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#1D3461] leading-tight">
            {tr.h2a}<br />{tr.h2b}
          </h2>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-14 left-[calc(16.66%+1.25rem)] right-[calc(16.66%+1.25rem)] h-px bg-[#E2DED8] z-0" />
          <div className="grid lg:grid-cols-3 gap-8 relative z-10">
            {tr.steps.map((step, i) => {
              const Icon = icons[i];
              return (
                <motion.div key={numbers[i]} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: i * 0.12, ease: "easeOut" }}>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 bg-[#1D3461] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <Icon size={22} className="text-white" />
                    </div>
                    <span className="font-heading font-bold text-5xl text-[#1D3461]/10 leading-none select-none">{numbers[i]}</span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-[#1D3461] mb-3 leading-snug">{step.title}</h3>
                  <p className="text-[#6B6560] leading-relaxed mb-4 text-base">{step.body}</p>
                  <span className="inline-block text-xs font-semibold text-[#D4793B] bg-[#D4793B]/10 px-3 py-1 rounded-full">{step.detail}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 bg-white rounded-2xl border border-[#E2DED8] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-heading font-bold text-xl text-[#1D3461] mb-1">{tr.stripTitle}</p>
            <p className="text-[#6B6560]">{tr.stripBody}</p>
          </div>
          <button onClick={openModal}
            className="flex-shrink-0 bg-[#1D3461] hover:bg-[#1D3461]/90 text-white font-semibold px-7 py-3 rounded-xl transition-colors text-base whitespace-nowrap">
            {tr.stripCta}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
