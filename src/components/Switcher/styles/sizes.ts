import { Size } from "@/types";

export const sizeClasses: Record<Size, string> = {
  xs: "w-15 h-9",
  sm: "w-16 h-11",
  md: "w-17 h-12",
} as const;

export const circleSizeClasses: Record<Size, string> = {
  xs: "w-5 h-5 peer-checked:w-7 peer-checked:h-7",
  sm: "flex w-7 h-7 peer-checked:w-9 peer-checked:h-9",
  md: "flex w-9 h-9 peer-checked:w-11 peer-checked:h-11",
} as const;

export const minusIconSizeClasses: Record<Size, number> = {
  xs: 16,
  sm: 16,
  md: 20,
} as const;
