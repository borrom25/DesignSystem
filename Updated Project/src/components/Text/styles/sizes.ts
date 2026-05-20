import type { Size } from "@/types";

export const sizeClasses: Record<Size, string> = {
  xs: "text-xs tracking-xs",
  sm: "text-sm tracking-sm",
  md: "text-md tracking-md",
} as const;
