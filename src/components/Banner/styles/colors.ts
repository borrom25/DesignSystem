import type { Color } from "@/types";
import { colorVariants } from "@/styles";

export const colorClasses: Record<Color, string> = {
  brand: colorVariants.brand,
  action: colorVariants.action,
  danger: colorVariants.danger,
  positive: colorVariants.positive,
  warning: colorVariants.warning,
  info: colorVariants.info,
  inverse: colorVariants.inverse,
  contrastDark: colorVariants.contrastDark,
  contrastLight: colorVariants.contrastLight,
};
