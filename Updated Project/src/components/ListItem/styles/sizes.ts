import type { Size } from "@/types";

export const sizeClasses: Record<Size, string> = {
  xs: "h-14 px-4 rounded-xs",
  sm: "h-15 px-5 rounded-sm",
  md: "h-16 px-5 rounded-md",
} as const;

export const iconOnlySizeClasses: Record<Size, string> = {
  xs: "flex w-14 h-14 px-3 justify-center items-center gap-2",
  sm: "flex w-15 h-15 px-3 justify-center items-center gap-2",
  md: "flex w-16 h-16 px-3 justify-center items-center gap-2",
} as const;

export const titleSizeClasses: Record<Size, string> = {
  xs: "rounded-sm text-sm leading-sm",
  sm: "rounded-sm text-sm leading-sm",
  md: "text-md leading-md",
} as const;

export const iconSizeMap: Record<Size, number> = {
  xs: 16,
  sm: 18,
  md: 20,
} as const;

export const avatarSizeMap: Record<Size, number> = {
  xs: 24,
  sm: 28,
  md: 32,
} as const;
