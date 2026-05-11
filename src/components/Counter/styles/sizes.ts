import type { Size } from "@/types";

export const sizeClasses: Record<Size, string> = {
  xs: "py-[3px] px-[4px] min-w-[15px] text-[9px] leading-[9px]",
  sm: "pt-[4px] pb-[3px] px-[5px] min-w-[16px] text-[10px] leading-[10px]",
  md: "py-[4px] px-[6px] min-w-[20px] text-[12px] leading-[12px]",
} as const;

export const contentOffsetClasses: Record<Size, string> = {
  xs: "",
  sm: "",
  md: "translate-y-[1px]",
} as const;
