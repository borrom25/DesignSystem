import type { Color } from "@/types";
import { fillVariants } from "@/styles/variants/fill";

export const fillClasses: Record<Color, string> = {
  brand: fillVariants.brand,
  action: fillVariants.action,
  danger: fillVariants.danger,
  positive: fillVariants.positive,
  warning: fillVariants.warning,
  info: fillVariants.info,
  inverse: fillVariants.inverse,
  contrastDark: fillVariants.contrastDark,
  contrastLight: fillVariants.contrastLight,
  generic: fillVariants.generic,
};
