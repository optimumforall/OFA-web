"use client";

import { useState, useEffect } from "react";
import { Globe, Menu } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useModal } from "@/context/ModalContext";
import { useAccessibility } from "@/context/AccessibilityContext";
import { t } from "@/lib/translations";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang } = useLanguage();
  const { openModal } = useModal();
  const { toggleLargeText } = useAccessibility();
  const tr = t[lang].nav;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-[#FAFAF8]/95 backdrop-blur-md border-[#E2DED8] shadow-sm"
          : "bg-[#FAFAF8]/90 backdrop-blur-sm border-[#E2DED8]/50"
      }`}
    >
      {/* PISO 1: Controles y Branding */}
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4" aria-label="Navegación principal">
        <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity shrink-0" aria-label="Optimum for All — Inicio">
          <Image
            src="/Logo.png"
            alt=""
            width={48}
            height={48}
            className="h-10 w-auto md:h-12 object-contain"
            priority
          />
          <span className="font-heading font-bold text-lg md:text-xl text-[#1D3461] tracking-tight truncate">
            Optimum<span className="text-[#D4793B]"> for All</span>
          </span>
        </a>

        <div className="flex items-center gap-2 md:gap-3 shrink-0">
          <button onClick={toggleLargeText} aria-label="Agrandar texto" className="flex items-center justify-center w-8 h-8 rounded-md bg-[#F2F0EC] hover:bg-[#E2DED8] text-[#1D3461] font-bold transition-colors">
            aA
          </button>
          
          <button onClick={() => setLang(lang === 'es' ? 'ca' : 'es')} aria-label="Cambiar idioma" className="flex items-center gap-1.5 px-2.5 h-8 rounded-md bg-[#F2F0EC] hover:bg-[#E2DED8] text-[#1D3461] text-[11px] font-bold transition-colors uppercase tracking-wider">
            <Globe size={13} className="opacity-70" />
            <span className="hidden sm:inline">{lang === 'es' ? 'ES/CA' : 'CA/ES'}</span>
          </button>

          <div className="w-px h-4 bg-[#E2DED8] mx-1 hidden sm:block"></div>

          {/* CTA Solo Escritorio */}
          <button onClick={openModal} className="hidden sm:inline-flex items-center justify-center bg-[#1D3461] hover:bg-[#1D3461]/90 text-white font-semibold text-sm px-5 h-9 rounded-lg transition-colors">
            {tr.cta}
          </button>

          {/* Menú Hamburguesa Solo Móvil */}
          <div className="block md:hidden ml-1">
            <Sheet>
              <SheetTrigger asChild>
                <button aria-label="Abrir menú" className="flex items-center justify-center w-9 h-9 rounded-md bg-[#F2F0EC] hover:bg-[#E2DED8] text-[#1D3461] transition-colors">
                  <Menu size={20} />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#FAFAF8] border-[#E2DED8] flex flex-col pt-12">
                <SheetTitle className="sr-only">Menú de Navegación</SheetTitle>
                <SheetDescription className="sr-only">Enlaces a secciones de la página.</SheetDescription>
                <nav className="flex flex-col gap-6 mt-4">
                  {tr.links.map((link) => (
                    <a key={link.href} href={link.href} className="text-lg font-semibold text-[#1D3461] hover:text-[#D4793B] transition-colors uppercase tracking-widest">
                      {link.label}
                    </a>
                  ))}
                  <div className="w-full h-px bg-[#E2DED8] my-2"></div>
                  <button onClick={openModal} className="inline-flex items-center justify-center bg-[#D4793B] hover:bg-[#b3632f] text-white font-semibold text-sm px-5 h-11 rounded-lg transition-colors w-full uppercase tracking-widest">
                    {tr.cta}
                  </button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* PISO 2: Nichos y Enlaces - SOLO ESCRITORIO */}
      <div className="hidden md:block border-t border-[#E2DED8]/60 bg-[#FAFAF8]/95">
        <nav className="max-w-6xl mx-auto px-6 h-12 flex items-center justify-center gap-8" aria-label="Navegación secundaria">
          {tr.links.map((link) => (
            <a key={link.href} href={link.href} className="text-[13px] font-semibold text-[#6B6560] hover:text-[#1D3461] transition-colors duration-200 uppercase tracking-widest shrink-0">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
