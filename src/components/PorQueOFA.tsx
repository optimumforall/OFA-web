"use client";

import { motion, type Variants } from "framer-motion";
import { MapPin, Users, Headphones, Layers } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

const icons = [MapPin, Users, Layers, Headphones];
const accents = [false, true, false, false];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function PorQueOFA() {
  const { lang } = useLanguage();
  const tr = t[lang].porQue;

  return (
    <section id="por-que-ofa" className="scroll-mt-28 py-24 lg:py-32 bg-[#F2F0EC]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div>
            <p className="text-sm font-semibold text-[#D4793B] uppercase tracking-widest mb-3">{tr.label}</p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#1D3461] leading-tight">
              {tr.h2a}<br />{tr.h2b}<br />{tr.h2c}
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-[#6B6560] text-lg leading-relaxed max-w-md">{tr.body}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {tr.cards.map((card, i) => {
            const Icon = icons[i];
            const accent = accents[i];
            return (
              <motion.div
                key={card.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={i}
                variants={fadeUp}
                className={`rounded-2xl p-7 ${accent ? "bg-[#1D3461] text-white" : "bg-white border border-[#E2DED8]"}`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${accent ? "bg-white/10" : "bg-[#1D3461]/8"}`}>
                  <Icon size={20} className={accent ? "text-[#D4793B]" : "text-[#1D3461]"} />
                </div>
                <h3 className={`font-heading font-bold text-xl mb-3 ${accent ? "text-white" : "text-[#1D3461]"}`}>{card.title}</h3>
                <p className={`text-base leading-relaxed ${accent ? "text-white/75" : "text-[#6B6560]"}`}>{card.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
