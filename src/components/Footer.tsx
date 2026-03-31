"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

function LinktreeIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13.736 5.853a1.573 1.573 0 0 0-3.472 0l-.992 5.415-3.84-3.84a1.573 1.573 0 0 0-2.225 2.224l3.842 3.841H2.67a1.573 1.573 0 0 0 0 3.147h4.38l-3.842 3.84a1.573 1.573 0 1 0 2.225 2.225l3.84-3.841.992 5.414a1.573 1.573 0 0 0 3.472 0l.992-5.414 3.84 3.84a1.573 1.573 0 1 0 2.225-2.224l-3.841-3.841h4.38a1.573 1.573 0 0 0 0-3.147h-4.38l3.84-3.84a1.573 1.573 0 0 0-2.224-2.225l-3.841 3.841z" />
    </svg>
  );
}

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  const { lang, setLang } = useLanguage();
  const tr = t[lang];

  return (
    <footer className="bg-[#141414] text-white py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Image src="/Logo.png" alt="" width={40} height={40} className="h-10 w-auto object-contain brightness-0 invert" />
              <p className="font-heading font-bold text-xl text-white">
                Optimum<span className="text-[#D4793B]"> for All</span>
              </p>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-[220px]">{tr.footer.tagline}</p>
          </div>

          <div>
            <p className="text-white/30 text-xs uppercase tracking-widest font-semibold mb-4">{tr.footer.nav}</p>
            <ul className="space-y-2.5" role="list">
              {tr.nav.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/60 hover:text-white text-sm transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white/30 text-xs uppercase tracking-widest font-semibold mb-4">{tr.footer.contact}</p>
            <a href="mailto:optimum.for.all@gmail.com"
              className="text-white/60 hover:text-white text-sm transition-colors block mb-4">
              optimum.for.all@gmail.com
            </a>
            <div className="flex items-center gap-3">
              <a href="https://instagram.com/optimum.for.all" target="_blank" rel="noopener noreferrer"
                aria-label="Instagram de Optimum for All"
                className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors text-white/70">
                <InstagramIcon size={17} />
              </a>
              <a href="https://linktr.ee/optimum.for.all" target="_blank" rel="noopener noreferrer"
                aria-label="Linktree de Optimum for All"
                className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors text-white/70">
                <LinktreeIcon size={17} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-7 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1 bg-white/5 rounded-lg p-1" role="group" aria-label="Selector de idioma">
            <button onClick={() => setLang("es")} aria-pressed={lang === "es"} aria-label="Cambiar a castellano"
              className={`text-xs font-semibold px-4 py-2 rounded-md transition-colors min-w-[44px] ${lang === "es" ? "bg-white/10 text-white" : "text-white/40 hover:text-white/70"}`}>
              ES
            </button>
            <button onClick={() => setLang("ca")} aria-pressed={lang === "ca"} aria-label="Canviar a català"
              className={`text-xs font-semibold px-4 py-2 rounded-md transition-colors min-w-[44px] ${lang === "ca" ? "bg-white/10 text-white" : "text-white/40 hover:text-white/70"}`}>
              CA
            </button>
          </div>

          <p className="text-white/30 text-xs">{tr.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
