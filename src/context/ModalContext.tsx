"use client";

import { createContext, useContext, ReactNode } from "react";

const DEMO_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfwO8WQjvt2dhRKBGbPoZx21w4kYqGXLLvWi7XK9tSYO23RLg/viewform?usp=header";

interface ModalContextType {
  openModal: () => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const openModal = () => window.open(DEMO_FORM_URL, "_blank", "noopener,noreferrer");
  const closeModal = () => {};

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
