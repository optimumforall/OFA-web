"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, Globe } from "lucide-react";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { useLanguage } from "@/context/LanguageContext";
import { useModal } from "@/context/ModalContext";
import { useAccessibility } from "@/context/AccessibilityContext";
import { t } from "@/lib/translations";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAFAF8]/95 backdrop-blur-sm border-b border-[#E2DED8] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between" aria-label="Navegación principal">
        <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity" aria-label="Optimum for All — Inicio">
          <Image
            src="/Logo.png"
            alt=""
            width={56}
            height={56}
            className="h-14 w-auto md:h-14 object-contain"
            priority
          />
          <span className="font-heading font-bold text-xl text-[#1D3461] tracking-tight">
            Optimum<span className="text-[#D4793B]"> for All</span>
          </span>
        </a>

        <ul className="hidden xl:flex items-center gap-6" role="list">
          {tr.links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm font-medium text-[#6B6560] hover:text-[#1D3461] transition-colors duration-200">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden xl:flex items-center gap-3 shrink-0">
          <button onClick={toggleLargeText} aria-label="Agrandar texto" className="flex items-center justify-center w-8 h-8 rounded-md bg-[#F2F0EC] hover:bg-[#E2DED8] text-[#1D3461] font-bold transition-colors">
            aA
          </button>
          
          <button onClick={() => setLang(lang === 'es' ? 'ca' : 'es')} aria-label="Cambiar idioma" className="flex items-center gap-1.5 px-2.5 h-8 rounded-md bg-[#F2F0EC] hover:bg-[#E2DED8] text-[#1D3461] text-[11px] font-bold transition-colors uppercase tracking-wider">
            <Globe size={13} className="opacity-70" />
            {lang === 'es' ? 'ES/CA' : 'CA/ES'}
          </button>

          <div className="w-px h-4 bg-[#E2DED8] mx-1"></div>

          <a href="mailto:optimum.for.all@gmail.com" className="text-sm font-medium text-[#6B6560] hover:text-[#1D3461] transition-colors flex items-center gap-1.5 ml-1">
            <Phone size={14} />
            {tr.contact}
          </a>
          <button onClick={openModal} className="inline-flex items-center justify-center bg-[#1D3461] hover:bg-[#1D3461]/90 text-white font-semibold text-sm px-5 h-9 rounded-lg transition-colors">
            {tr.cta}
          </button>
        </div>

        <Sheet>
          <SheetTrigger className="xl:hidden p-2 text-[#1D3461] hover:bg-[#F2F0EC] rounded-lg transition-colors" aria-label="Abrir menú">
            <Menu size={22} />
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] bg-[#FAFAF8]">
            <div className="flex flex-col h-full pt-4">
              <div className="flex items-center justify-between mb-8">
                <span className="flex items-center gap-2.5">
                  <Image src="/Logo.png" alt="" width={36} height={36} className="h-9 w-auto object-contain" />
                  <span className="font-heading font-bold text-lg text-[#1D3461]">
                    Optimum<span className="text-[#D4793B]"> for All</span>
                  </span>
                </span>
                <SheetClose className="p-2 text-[#6B6560] hover:text-[#141414] rounded-lg transition-colors" aria-label="Cerrar menú">
                  <X size={20} />
                </SheetClose>
              </div>
              <ul className="flex flex-col gap-1" role="list">
                {tr.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="block px-3 py-3 text-base font-medium text-[#1D3461] hover:bg-[#F2F0EC] rounded-lg transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pb-6">
                <button onClick={openModal} className="flex items-center justify-center w-full bg-[#1D3461] hover:bg-[#1D3461]/90 text-white font-semibold py-2.5 rounded-lg transition-colors">
                  {tr.cta}
                </button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
