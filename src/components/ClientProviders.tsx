"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import { ModalProvider } from "@/context/ModalContext";

import { ThemeProvider } from "@/context/ThemeContext";
import { AccessibilityProvider } from "@/context/AccessibilityContext";

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <AccessibilityProvider>
        <LanguageProvider>
          <ModalProvider>
            {children}
          </ModalProvider>
        </LanguageProvider>
      </AccessibilityProvider>
    </ThemeProvider>
  );
}
