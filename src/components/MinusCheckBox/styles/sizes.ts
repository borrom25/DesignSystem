import type { Size } from "@/types";

export const sizeClasses: Record<Size, string> = {
  xs: "w-9 h-9 p-0_5 rounded-[5px]",
  sm: "flex w-11 h-11 p-0 gap-0 rounded-[5px]",
  md: "flex w-12 h-12 p-0 gap-0 rounded-[5px]",
} as const;

export const iconSizeMap: Record<Size, number> = {
  xs: 16,
  sm: 16,
  md: 20,
} as const;
