import type { Size } from "@/types";

export const cardSizeClasses: Record<Size, string> = {
  xs: "p-3 rounded-scale-xl",
  sm: "p-6 rounded-scale-3xl",
  md: "pt-7 px-9 pb-9 rounded-scale-3xl",
} as const;
