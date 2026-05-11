import type { Size } from "@/types";

export const sizeClasses: Record<Size, string> = {
  xs: "py-(--spacing-1) pr-(--spacing-6) pl-(--spacing-1) gap-(--spacing-1) rounded-xs text-xs font-medium leading-xs tracking-xs",
  sm: "py-(--spacing-1) pr-(--spacing-6) pl-(--spacing-1) gap-(--spacing-1) rounded-sm text-sm font-medium leading-sm tracking-sm",
  md: "py-(--spacing-1) pr-(--spacing-6) pl-(--spacing-1) gap-(--spacing-1) rounded-md text-md font-medium leading-md tracking-md",
} as const;

export const containerSizeClasses: Record<Size, string> = {
  xs: "min-h-[28px] max-h-[60px]",
  sm: "min-h-[32px] max-h-[68px]",
  md: "min-h-[36px] max-h-[76px]",
} as const;

export const clearButtonWrapperSizeClasses: Record<Size, string> = {
  xs: "pt-[4px]",
  sm: "pt-[5px]",
  md: "pt-[5px]",
} as const;
