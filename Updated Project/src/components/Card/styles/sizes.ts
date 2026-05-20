import type { Size } from "@/types";

export const cardSizeClasses: Record<Size, string> = {
  xs: "p-3",
  sm: "p-6",
  md: "py-7 px-9",
} as const;
