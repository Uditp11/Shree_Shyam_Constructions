"use client";

import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";
import en from "./en.json";
import hi from "./hi.json";

type Language = "en" | "hi";

/* eslint-disable @typescript-eslint/no-explicit-any */
const translations: Record<Language, any> = { en, hi };

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === "en" ? "hi" : "en"));
  }, []);

  const t = useCallback(
    (key: string) => {
      const keys = key.split(".");
      let value: any = translations[language];
      for (const k of keys) {
        value = value?.[k];
      }
      return value ?? key;
    },
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useTranslation must be used within LanguageProvider");
  return context;
}
