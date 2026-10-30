import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "@docs/styles.css";
import {
  ScreenProvider,
  ThemeProvider,
  getInitialClassName,
  LanguageProvider,
} from "@/providers";
import { App } from "@docs/App";

function getRouterBasename(baseUrl: string) {
  const pathname = new URL(baseUrl, window.location.origin).pathname;
  const basename = pathname.replace(/\/+$/, "");

  return basename || "/";
}

document.documentElement.className = getInitialClassName();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={getRouterBasename(import.meta.env.BASE_URL)}>
      <ScreenProvider>
        <ThemeProvider>
          <LanguageProvider>
            <App />
          </LanguageProvider>
        </ThemeProvider>
      </ScreenProvider>
    </BrowserRouter>
  </StrictMode>
);
