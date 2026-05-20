import type { Size } from "@/types";

export const sizeClasses: Record<Size, string> = {
  xs: "py-[3px] px-[4px] min-w-[15px] text-[9px] leading-none",
  sm: "py-[3px] px-[5px] min-w-[16px] text-[10px] leading-none",
  md: "py-[4px] px-[6px] min-w-[20px] text-[12px] leading-none",
} as const;

export const contentOffsetClasses: Record<Size, string> = {
  xs: "translate-y-[0.5px]",
  sm: "translate-y-[0.5px]",
  md: "",
} as const;
