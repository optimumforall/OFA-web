"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

const DEMO_MAILTO = "mailto:optimum.for.all@gmail.com?subject=Solicito%20demo%20de%20Optimum%20for%20All";

export default function CTAFinal() {
  const { lang } = useLanguage();
  const tr = t[lang].cta;

  return (
    <section id="demo" className="py-24 lg:py-32 bg-[#1D3461] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.02] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#D4793B]/10 rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut" }}>
          <p className="text-[#D4793B] text-sm font-semibold uppercase tracking-widest mb-4">{tr.label}</p>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-white leading-tight mb-6">{tr.h2}</h2>
          <p className="text-white/60 text-xl leading-relaxed mb-10 max-w-2xl mx-auto">{tr.body}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href={DEMO_MAILTO}
              className="group inline-flex items-center justify-center gap-2 bg-[#D4793B] hover:bg-[#D4793B]/90 text-white font-semibold px-8 h-12 rounded-xl text-base transition-colors">
              {tr.cta1}
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a href="mailto:optimum.for.all@gmail.com"
              className="inline-flex items-center justify-center gap-2 text-white hover:bg-white/10 font-semibold h-12 px-6 rounded-xl text-base border border-white/20 transition-colors">
              <Mail size={16} />
              {tr.cta2}
            </a>
          </div>

          <p className="text-white/40 text-sm">{tr.hint}</p>
        </motion.div>
      </div>
    </section>
  );
}
