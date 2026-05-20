import type { Color } from "@/types";
import { ghostVariants } from "@/styles/variants/ghost";

export const ghostClasses: Record<Color, string> = {
  brand: ghostVariants.brand,
  action: ghostVariants.action,
  danger: ghostVariants.danger,
  positive: ghostVariants.positive,
  warning: ghostVariants.warning,
  info: ghostVariants.info,
  inverse: ghostVariants.inverse,
  contrastDark: ghostVariants.contrastDark,
  contrastLight: ghostVariants.contrastLight,
  generic: ghostVariants.generic,
};
