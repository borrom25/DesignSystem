import type { Size } from "@/types";

export const labelSizeClasses: Record<Size, string> = {
  xs: "text-xs leading-xs tracking-xs pl-(--component-xs-padding-x)",
  sm: "text-sm leading-sm tracking-sm py-(--generic-spacing-0) px-(--generic-spacing-5)",
  md: "text-sm leading-md tracking-md pl-(--component-md-padding-x)",
} as const;

export const subtitleSizeClasses: Record<Size, string> = {
  xs: "text-xs leading-xs tracking-xs pl-(--component-xs-padding-x)",
  sm: "text-xs leading-xs tracking-xs py-(--generic-spacing-0) px-(--generic-spacing-5)",
  md: "text-sm leading-sm tracking-sm pl-(--component-md-padding-x)",
} as const;

export const hintSizeClasses: Record<Size, string> = {
  xs: "text-xs leading-xs tracking-xs",
  sm: "text-xs leading-xs tracking-xs",
  md: "text-sm leading-sm tracking-sm",
} as const;
