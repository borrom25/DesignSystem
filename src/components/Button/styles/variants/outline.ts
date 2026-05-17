import type { Color } from "@/types";
import { outlineVariants } from "@/styles/variants/outline";

export const outlineClasses: Record<Color, string> = {
  brand: outlineVariants.brand,
  action: outlineVariants.action,
  danger: outlineVariants.danger,
  positive: outlineVariants.positive,
  warning: outlineVariants.warning,
  info: outlineVariants.info,
  inverse: outlineVariants.inverse,
  contrastDark: outlineVariants.contrastDark,
  contrastLight: outlineVariants.contrastLight,
  generic: outlineVariants.generic,
};
