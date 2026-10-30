import { Alerts } from "@/components/Alert/Alerts";
import { Modals } from "@/components/Modal";
import { type ReactNode } from "react";
import { LanguageProvider } from "./languageProvider";
import { ScreenProvider } from "./screenProvider";
import { ThemeProvider } from "./themeProvider";

export interface KitProviderProps {
  children: ReactNode;
  withScreenProvider?: boolean;
  withThemeProvider?: boolean;
  withLanguageProvider?: boolean;
}

export function UIKitProvider({
  children,
  withScreenProvider = true,
  withThemeProvider = true,
  withLanguageProvider = true,
}: KitProviderProps) {
  const content = (
    <>
      {children}
      <Modals />
      <Alerts />
    </>
  );

  const withLang = withLanguageProvider ? (
    <LanguageProvider>{content}</LanguageProvider>
  ) : (
    content
  );

  const withTheme = withThemeProvider ? (
    <ThemeProvider>{withLang}</ThemeProvider>
  ) : (
    withLang
  );

  return withScreenProvider ? (
    <ScreenProvider>{withTheme}</ScreenProvider>
  ) : (
    withTheme
  );
}
