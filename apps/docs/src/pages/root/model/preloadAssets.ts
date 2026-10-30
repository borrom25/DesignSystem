import type { Theme } from "@/providers";
import { SHARED_LANDING_ASSETS } from "./sharedLandingAssets.ts";

const loadPatternUrls = async (theme: Theme): Promise<readonly string[]> => {
  if (theme === "dark") {
    const { patternImagesDark } = await import("./patternAssets.dark.ts");
    return patternImagesDark;
  }

  const { patternImagesLight } = await import("./patternAssets.light.ts");
  return patternImagesLight;
};

/** Resolve all landing image URLs for the current theme (code-splits pattern sets). */
export const getLandingPreloadUrls = async (
  theme: Theme
): Promise<string[]> => {
  const patterns = await loadPatternUrls(theme);
  return [...SHARED_LANDING_ASSETS, ...patterns];
};

export { loadPatternUrls };
