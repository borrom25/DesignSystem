import type { Size } from "@/types";

export const pinInputSizeClasses: Record<Size, string> = {
  xs: "size-12 rounded-xs text-xs leading-xs tracking-xs",
  sm: "size-14 rounded-sm text-sm leading-sm tracking-sm",
  md: "size-16 rounded-md text-md leading-md tracking-md",
} as const;
