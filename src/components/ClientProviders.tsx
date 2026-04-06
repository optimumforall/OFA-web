"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import { ModalProvider } from "@/context/ModalContext";

import { AccessibilityProvider } from "@/context/AccessibilityContext";

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <AccessibilityProvider>
      <LanguageProvider>
        <ModalProvider>
          {children}
        </ModalProvider>
      </LanguageProvider>
    </AccessibilityProvider>
  );
}
