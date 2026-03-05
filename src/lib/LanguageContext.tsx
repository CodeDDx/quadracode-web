"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { translations, Lang, Translations } from "./translations";

type LanguageContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "sk",
  setLang: () => {},
  t: translations.sk,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("sk");

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, t: translations[lang] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
