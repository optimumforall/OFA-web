"use client";

import { createContext, useContext, useState, useEffect } from "react";

type Lang = "es" | "ca";

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
}>({ lang: "es", setLang: () => {} });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  // Restore persisted language on mount
  useEffect(() => {
    const stored = localStorage.getItem("ofa-lang");
    if (stored === "ca" || stored === "es") setLangState(stored);
  }, []);

  function setLang(l: Lang) {
    setLangState(l);
    localStorage.setItem("ofa-lang", l);
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
