import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "./src/index.ts"),
      formats: ["es", "cjs"],
      fileName: (format) => (format === "es" ? "index.js" : "index.cjs"),
      cssFileName: "borrom-ds-test",
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "@radix-ui/react-popover",
        "@radix-ui/react-slot",
        "clsx",
        "date-fns",
        "lucide-react",
        "react-day-picker",
        "tailwind-merge",
      ],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@/tokens": path.resolve(__dirname, "./src/tokens"),
      "@/components": path.resolve(__dirname, "./src/components"),
      "@/styles": path.resolve(__dirname, "./src/styles"),
      "@/providers": path.resolve(__dirname, "./src/providers"),
      "@/types": path.resolve(__dirname, "./src/types"),
      "@/utils": path.resolve(__dirname, "./src/utils"),
      "@/hooks": path.resolve(__dirname, "./src/hooks"),
    },
  },
});
