import type { Color } from "@/types";
import { flatVariants } from "@/styles/variants/flat";

export const flatClasses: Record<Color, string> = {
  brand: flatVariants.brand,
  action: flatVariants.action,
  danger: flatVariants.danger,
  positive: flatVariants.positive,
  warning: flatVariants.warning,
  info: flatVariants.info,
  inverse: flatVariants.inverse,
  contrastDark: flatVariants.contrastDark,
  contrastLight: flatVariants.contrastLight,
  generic: flatVariants.generic,
};
