import type { Size } from "@/types";

export const sizeClasses: Record<Size, string> = {
  xs: "w-9 h-9 p-0 gap-0",
  sm: "w-11 h-11 p-0 gap-0",
  md: "w-12 h-12 p-0 gap-0",
} as const;

export const innerDotSizeClasses: Record<Size, string> = {
  xs: "w-4 h-4 flex-shrink-0",
  sm: "w-5 h-5 flex-shrink-0",
  md: "w-6 h-6 flex-shrink-0",
} as const;
