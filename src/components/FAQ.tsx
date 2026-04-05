"use client";

import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/context/LanguageContext";
import { useModal } from "@/context/ModalContext";
import { t } from "@/lib/translations";

export default function FAQ() {
  const { lang } = useLanguage();
  const { openModal } = useModal();
  const tr = t[lang].faq;

  return (
    <section id="faq" className="scroll-mt-28 py-24 lg:py-32 bg-[#FAFAF8]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55 }}>
            <p className="text-sm font-semibold text-[#D4793B] uppercase tracking-widest mb-3">{tr.label}</p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#1D3461] leading-tight mb-6">
              {tr.h2a}<br />{tr.h2b}<br />{tr.h2c}
            </h2>
            <p className="text-[#6B6560] leading-relaxed mb-6">{tr.body}</p>
            <button onClick={openModal}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#D4793B] hover:text-[#D4793B]/80 transition-colors">
              optimum.for.all@gmail.com →
            </button>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.1 }}>
            <Accordion className="space-y-2">
              {tr.items.map((faq, i) => (
                <AccordionItem key={i} value={i}
                  className="bg-white border border-[#E2DED8] rounded-xl px-5 transition-colors">
                  <AccordionTrigger className="font-heading font-semibold text-[#1D3461] text-left py-5 text-base">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#6B6560] leading-relaxed pb-5 text-base">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
