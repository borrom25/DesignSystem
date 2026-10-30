import type { CSSProperties } from "react";
import type {
  TextCategory,
  TextColor,
  TextShade,
  TextVariant,
  TextWeight,
} from "../constants";
import {
  COLOR_CATEGORY_TOKEN,
  TextColor as TextColorConst,
} from "../constants";

export const buildTypographyStyles = (
  category?: TextCategory,
  variant?: TextVariant,
  weight?: TextWeight,
  colorCategory?: TextColor,
  colorShade?: TextShade
): CSSProperties => {
  const styles: CSSProperties = {};

  if (category && variant) {
    const base = `--typography-${category}-${variant}`;
    styles.fontSize = `calc(var(${base}-font-size) * 1px)`;
    styles.lineHeight = `calc(var(${base}-line-height) * 1px)`;
    styles.letterSpacing = `calc(var(${base}-letter-spacing) * 1px)`;
    if (weight) styles.fontWeight = `var(${base}-font-weight-${weight})`;
  }

  if (colorCategory) {
    const resolvedShade =
      colorShade ??
      (colorCategory === TextColorConst.Basic ? "secondary" : "heavy");
    styles.color = `var(--text-${COLOR_CATEGORY_TOKEN[colorCategory]}-${resolvedShade})`;
  }

  return styles;
};
