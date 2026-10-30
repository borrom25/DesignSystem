import type { ReactNode } from "react";
import type { Size } from "@/types";
import {
  TextColor,
  TextShade,
  TextVariant,
  TextWeight,
  type TextProps,
} from "@/components/Text";
import type { CardTextProps } from "./Card.types";

type TypographyProps = {
  variant: TextVariant;
  weight: TextWeight;
};

type ColorProps = Pick<TextProps, "color" | "shade">;

export const cardTitleTypography: Record<Size, TypographyProps> = {
  md: { variant: TextVariant.H2, weight: TextWeight.Bold },
  sm: { variant: TextVariant.H3, weight: TextWeight.Bold },
  xs: { variant: TextVariant.B1, weight: TextWeight.Semibold },
};

export const cardSubtitleTypography: Record<Size, TypographyProps> = {
  md: { variant: TextVariant.B1, weight: TextWeight.Medium },
  sm: { variant: TextVariant.B1, weight: TextWeight.Medium },
  xs: { variant: TextVariant.B2, weight: TextWeight.Medium },
};

function mergeCardTextProps(
  defaults: {
    typography: TypographyProps;
    color: ColorProps;
  },
  children: ReactNode,
  overrides?: CardTextProps
): TextProps {
  const { color, shade, ...rest } = overrides ?? {};

  return {
    ...defaults.typography,
    color: color ?? defaults.color.color,
    shade: shade ?? (color !== undefined ? undefined : defaults.color.shade),
    ...rest,
    children,
  };
}

export function resolveCardTitleProps(
  size: Size,
  children: ReactNode,
  overrides?: CardTextProps
): TextProps {
  return mergeCardTextProps(
    {
      typography: cardTitleTypography[size],
      color: { color: TextColor.Basic, shade: TextShade.Primary },
    },
    children,
    overrides
  );
}

export function resolveCardSubtitleProps(
  size: Size,
  children: ReactNode,
  overrides?: CardTextProps
): TextProps {
  return mergeCardTextProps(
    {
      typography: cardSubtitleTypography[size],
      color: { color: TextColor.Basic, shade: TextShade.Secondary },
    },
    children,
    overrides
  );
}
