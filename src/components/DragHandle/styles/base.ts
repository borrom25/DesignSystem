import type { Size } from "@/types";

export const baseClasses =
  "inline-flex items-center justify-center shrink-0 cursor-grab active:cursor-grabbing text-secondary";

export const iconSizeMap: Record<Size, number> = {
  xs: 16,
  sm: 18,
  md: 20,
} as const;
