import type { Size } from "@/types";

export const dateChipSizeClasses: Record<Size, string> = {
  xs: "text-xs leading-xs tracking-xs",
  sm: "text-sm leading-sm tracking-sm",
  md: "text-md leading-md tracking-md",
} as const;

export const dateRangeIconSizeMap: Record<Size, number> = {
  xs: 14,
  sm: 16,
  md: 18,
} as const;
