import type { Size } from "@/types";

export const dateRangeSectionInputSizeClasses: Record<Size, string> = {
  xs: "[font-size:var(--font-size-sm)] [font-weight:var(--sm-medium)] leading-sm tracking-sm",
  sm: "[font-size:var(--font-size-md)] [font-weight:var(--xs-medium)] leading-md tracking-md",
  md: "[font-size:var(--font-size-md)] [font-weight:var(--xs-medium)] leading-md tracking-md",
} as const;

export const dateRangeLabelCenteredSizeClasses: Record<Size, string> = {
  xs: "text-xs leading-xs tracking-xs font-medium",
  sm: "text-sm leading-sm tracking-sm font-medium",
  md: "text-md leading-md tracking-md font-medium",
} as const;

export const dateRangeLabelActiveSizeClasses: Record<Size, string> = {
  xs: "[font-size:var(--font-size-xs)] [font-weight:var(--xs-medium)] leading-xs tracking-xs",
  sm: "[font-size:var(--font-size-xs)] [font-weight:var(--xs-medium)] leading-xs tracking-xs",
  md: "[font-size:var(--font-size-sm)] [font-weight:var(--xs-medium)] leading-sm tracking-sm",
} as const;

export const dateRangeIconSizeMap: Record<Size, number> = {
  xs: 14,
  sm: 16,
  md: 18,
} as const;
