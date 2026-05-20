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

document.documentElement.className = getInitialClassName();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ScreenProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ScreenProvider>
  </StrictMode>
);
