import type { Size } from "@/types";

export const sizeGapClasses: Record<Size, string> = {
  xs: "gap-2",
  sm: "gap-2.5",
  md: "gap-3",
} as const;

export const titleSizeClasses: Record<Size, string> = {
  xs: "text-xs leading-xxs",
  sm: "text-sm leading-sm",
  md: "text-md leading-md",
} as const;

export const subtitleSizeClasses: Record<Size, string> = {
  xs: "text-xxs leading-xxs",
  sm: "text-xs leading-xs",
  md: "text-sm leading-sm",
} as const;

export const avatarSizeMap: Record<Size, number> = {
  xs: 32,
  sm: 44,
  md: 64,
} as const;

export const labelSizeMap: Record<Size, Size> = {
  xs: "xs",
  sm: "xs",
  md: "sm",
} as const;
