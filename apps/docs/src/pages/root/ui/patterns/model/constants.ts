import type { Theme } from "@/providers";
import { patternImagesDark } from "../../../model/patternAssets.dark.ts";
import { patternImagesLight } from "../../../model/patternAssets.light.ts";

export const patternsImages = (theme: Theme) =>
  theme === "dark" ? patternImagesDark : patternImagesLight;
