import type { Size } from "@/types";

export const sizeClasses: Record<Size, string> = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-md",
} as const;

export const daySizeClasses: Record<Size, string> = {
  xs: "size-7 text-xs",
  sm: "size-8 text-sm",
  md: "size-9 text-sm",
} as const;

export const weekdaySizeClasses: Record<Size, string> = {
  xs: "size-7 text-xxs",
  sm: "size-8 text-xs",
  md: "size-9 text-xs",
} as const;

export const containerPaddingClasses: Record<Size, string> = {
  xs: "p-3",
  sm: "p-4",
  md: "p-6",
} as const;

export const gapClasses: Record<Size, string> = {
  xs: "gap-2",
  sm: "gap-3",
  md: "gap-4",
} as const;
