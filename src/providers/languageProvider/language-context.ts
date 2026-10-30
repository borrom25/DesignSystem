import { createContext, useContext } from "react";

interface LanguageContextProps {
  language: string;
  setLanguage: (language: string) => void;
}

export const LanguageContext = createContext<LanguageContextProps | null>(null);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
