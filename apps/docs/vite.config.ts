import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig, loadEnv } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function normalizeBaseUrl(baseUrl: string | undefined) {
  if (!baseUrl) return "/";

  const withLeadingSlash = baseUrl.startsWith("/") ? baseUrl : `/${baseUrl}`;
  const withTrailingSlash = withLeadingSlash.endsWith("/")
    ? withLeadingSlash
    : `${withLeadingSlash}/`;

  return withTrailingSlash;
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, path.resolve(__dirname, "../.."), "");
  const docsBaseUrl = normalizeBaseUrl(env.VITE_DOCS_BASE_URL);

  return {
    root: __dirname,
    base: docsBaseUrl,
    plugins: [react(), tailwindcss()],
    server: {
      fs: {
        allow: [path.resolve(__dirname, "../..")],
      },
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "../../src"),
        "@components": path.resolve(__dirname, "../../src/components"),
        "@styles": path.resolve(__dirname, "../../src/styles"),
        "@providers": path.resolve(__dirname, "../../src/providers"),
        "@types": path.resolve(__dirname, "../../src/types"),
        "@docs": path.resolve(__dirname, "./src"),
      },
    },
  };
});
