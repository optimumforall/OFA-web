"use client";

import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/translations";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { Sector } from "./SectorView";
import Image from "next/image";

export default function SectorShowcase({ sector }: { sector: Sector }) {
  const { lang } = useLanguage();
  // @ts-ignore - showcase exists in our updated translation.ts
  const title = t[lang].sectores?.showcase || "Concéntrate en lo importante. Nuestro asistente atiende las llamadas por ti.";
  
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  
  const imgSrc = sector === "belleza" ? "/manicurista_hero.png" : "/carpintero_hero.png";

  return (
    <section ref={containerRef} className="relative w-full h-[60vh] md:h-[70vh] min-h-[500px] overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax & Blur */}
      <motion.div 
        style={{ y }} 
        className="absolute inset-0 w-full h-[130%] -top-[15%] z-0"
      >
        <Image
          src={imgSrc}
          alt="Focus showcase"
          fill
          className="object-cover blur-[3px]"
          sizes="100vw"
        />
        {/* Dark Vignette Overlay for perfect text contrast */}
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* Floating Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-[4rem] font-heading font-bold text-white leading-tight drop-shadow-2xl"
        >
          {title}
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 mx-auto w-16 h-1 bg-[#D4793B] rounded-full"
        />
      </div>
    </section>
  );
}
