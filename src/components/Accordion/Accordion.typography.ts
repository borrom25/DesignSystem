import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/utils";
import {
  COLOR_CATEGORY_TOKEN,
  TextColor,
  TextShade,
  TextVariant,
  TextWeight,
  type TextProps,
} from "@/components/Text";
import type { AccordionTextProps } from "./Accordion.types";
import { accordionStyles } from "./styles";

const titleTypography = {
  variant: TextVariant.B1,
  weight: TextWeight.Medium,
} as const;

const subtitleTypography = {
  variant: TextVariant.B2,
  weight: TextWeight.Medium,
} as const;

function resolveAccordionTextProps({
  as,
  typography,
  colorClassName,
  defaultHoverClassName,
  children,
  disabled,
  overrides,
}: {
  as: TextProps["as"];
  typography: { variant: TextVariant; weight: TextWeight };
  colorClassName: string;
  defaultHoverClassName?: string;
  children: ReactNode;
  disabled?: boolean;
  overrides?: AccordionTextProps;
}): TextProps {
  const { color, shade, className, hoverClassName, ...rest } = overrides ?? {};
  const hasCustomColor = color !== undefined || shade !== undefined;
  const resolvedHoverClassName = disabled
    ? undefined
    : (hoverClassName ?? (hasCustomColor ? undefined : defaultHoverClassName));

  return {
    as,
    ...typography,
    color: disabled ? undefined : color,
    shade: disabled ? undefined : shade,
    className: cn(colorClassName, resolvedHoverClassName, className),
    ...rest,
    children,
  };
}

export function resolveAccordionTitleProps(
  children: ReactNode,
  disabled?: boolean,
  overrides?: AccordionTextProps
): TextProps {
  return resolveAccordionTextProps({
    as: "h2",
    typography: titleTypography,
    colorClassName: accordionStyles.title,
    defaultHoverClassName: accordionStyles.titleHover,
    children,
    disabled,
    overrides,
  });
}

export function resolveAccordionSubtitleProps(
  children: ReactNode,
  disabled?: boolean,
  overrides?: AccordionTextProps
): TextProps {
  return resolveAccordionTextProps({
    as: "p",
    typography: subtitleTypography,
    colorClassName: accordionStyles.subtitle,
    children,
    disabled,
    overrides,
  });
}

export function hasAccordionCustomTextColor(overrides?: AccordionTextProps) {
  return overrides?.color !== undefined || overrides?.shade !== undefined;
}

export function resolveAccordionTextColorVar(
  overrides?: AccordionTextProps
): string | undefined {
  const color = overrides?.color;
  if (!color) return undefined;

  const shade =
    overrides?.shade ??
    (color === TextColor.Basic ? TextShade.Secondary : TextShade.Heavy);

  return `var(--text-${COLOR_CATEGORY_TOKEN[color]}-${shade})`;
}

export function resolveAccordionIconHoverStyle(
  overrides?: AccordionTextProps,
  disabled?: boolean
): CSSProperties | undefined {
  if (disabled) return undefined;

  const colorVar = resolveAccordionTextColorVar(overrides);
  if (!colorVar) return undefined;

  return {
    "--accordion-icon-hover-color": colorVar,
  } as CSSProperties;
}
