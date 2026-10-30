import { PropsWithChildren, useLayoutEffect, useState } from "react";
import { LanguageContext } from "./language-context";

export function LanguageProvider({ children }: PropsWithChildren) {
  const [language, setLanguage] = useState<string>("ru");

  useLayoutEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
