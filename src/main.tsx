import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/tokens/index.css";
import {
  ScreenProvider,
  ThemeProvider,
  getInitialClassName,
} from "@/providers";
import App from "./App";
import "./styles/global.css";
import { LanguageProvider } from "./providers/languageProvider/LanguageProvider";

document.documentElement.className = getInitialClassName();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ScreenProvider>
      <ThemeProvider>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </ThemeProvider>
    </ScreenProvider>
  </StrictMode>
);
