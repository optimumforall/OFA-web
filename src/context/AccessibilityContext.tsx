"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AccessibilityContext = createContext<{
  largeText: boolean;
  toggleLargeText: () => void;
}>({ largeText: false, toggleLargeText: () => {} });

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [largeText, setLargeText] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("ofa-large-text");
    if (stored === "true") {
      setLargeText(true);
      document.documentElement.style.fontSize = "18px";
    }
  }, []);

  const toggleLargeText = () => {
    setLargeText((prev) => {
      const newState = !prev;
      if (newState) {
        document.documentElement.style.fontSize = "18px";
        localStorage.setItem("ofa-large-text", "true");
      } else {
        document.documentElement.style.fontSize = "";
        localStorage.setItem("ofa-large-text", "false");
      }
      return newState;
    });
  };

  return (
    <AccessibilityContext.Provider value={{ largeText, toggleLargeText }}>
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  return useContext(AccessibilityContext);
}
