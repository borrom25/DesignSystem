import type { Size } from "@/types";

export const sizeClasses: Record<Size, string> = {
  xs: "size-9 p-0 rounded-[4px]",
  sm: "size-11 p-0 rounded-[5px]",
  md: "size-12 p-0 rounded-[6px]",
} as const;

export const iconSizeMap: Record<Size, number> = {
  xs: 12,
  sm: 16,
  md: 20,
} as const;
