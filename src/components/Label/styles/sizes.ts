import type { Size } from "@/types";

export const sizeClasses: Record<Size, string> = {
  xs: "py-1 px-3 gap-1 br-sm rounded-(--br-component-md) text-xs font-(--font-weight-medium)",
  sm: "py-1 px-5 gap-1 br-sm rounded-(--br-component-lg) text-sm font-(--font-weight-medium)",
  md: "py-1 px-6 gap-2 br-md rounded-(--br-component-xs) text-md font-(--font-weight-medium)",
} as const;

export const iconOnlySizeClasses: Record<Size, string> = {
  xs: "px-0 py-0 size-9 justify-center br-sm rounded-(--br-component-md)",
  sm: "px-0 py-0 size-11 justify-center br-sm rounded-(--br-component-lg)",
  md: "px-0 py-0 size-12 justify-center br-md rounded-(--br-component-xs)",
} as const;

export const gapClasses: Record<Size, string> = {
  xs: "gap-1",
  sm: "gap-1",
  md: "gap-2",
} as const;

export const iconSizeMap: Record<Size, number> = {
  xs: 12,
  sm: 14,
  md: 16,
} as const;
