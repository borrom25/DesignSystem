import type { Size } from "@/types";
import { inputSizeClasses } from "@/shared/Input";

export const inputNumberSizeClasses: Record<Size, string> = {
  xs: `${inputSizeClasses.xs} pr-0`,
  sm: `${inputSizeClasses.sm} pr-0`,
  md: `${inputSizeClasses.md} pr-0`,
} as const;

export const inputNumberIconSizeMap: Record<Size, number> = {
  xs: 12,
  sm: 14,
  md: 16,
} as const;
