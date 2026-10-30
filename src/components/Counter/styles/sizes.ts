import type { Size } from "@/types";

export const sizeClasses: Record<Size, string> = {
  xs: "h-[15px] min-w-[15px] px-[4px] text-[9px] leading-none",
  sm: "h-[16px] min-w-[17px] px-[5px] text-[10px] leading-none",
  md: "h-[20px] min-w-[20px] px-[6px] text-[12px] leading-none",
} as const;

export const contentClasses: Record<Size, string> = {
  xs: "inline-flex items-center justify-center text-center translate-y-[0.5px]",
  sm: "inline-flex items-center justify-center text-center translate-y-[1px]",
  md: "inline-flex items-center justify-center text-center translate-y-px",
} as const;
