import { type ReactNode } from "react";
import { Alerts } from "@/components/Alert/Alerts";
import { Modals } from "@/components/Modal";
import { ScreenProvider } from "./screenProvider";
import { ThemeProvider } from "./themeProvider";

export interface KitProviderProps {
  children: ReactNode;
  withScreenProvider?: boolean;
  withThemeProvider?: boolean;
}

export function UIKitProvider({
  children,
  withScreenProvider = true,
  withThemeProvider = true,
}: KitProviderProps) {
  const content = (
    <>
      {children}
      <Modals />
      <Alerts />
    </>
  );

  return withScreenProvider ? (
    <ScreenProvider>
      {withThemeProvider ? <ThemeProvider>{content}</ThemeProvider> : content}
    </ScreenProvider>
  ) : withThemeProvider ? (
    <ThemeProvider>{content}</ThemeProvider>
  ) : (
    content
  );
}
