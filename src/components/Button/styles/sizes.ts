import type { Size } from "@/types";

export const sizeClasses: Record<Size, string> = {
  xs: "h-(--size-btn-xs-h) px-(--size-btn-xs-px) gap-(--size-btn-xs-gap) rounded-xs text-xs font-medium",
  sm: "h-(--size-btn-sm-h) px-(--size-btn-sm-px) gap-(--size-btn-sm-gap) rounded-sm text-sm font-medium",
  md: "h-(--size-btn-md-h) px-(--size-btn-md-px) gap-(--size-btn-md-gap) rounded-md text-md font-medium",
} as const;

export const iconOnlySizeClasses: Record<Size, string> = {
  xs: "size-(--size-btn-xs-h) p-2 rounded-xs",
  sm: "size-(--size-btn-sm-h) p-3 rounded-sm",
  md: "size-(--size-btn-md-h) p-4 rounded-md",
} as const;

export const gapClasses: Record<Size, string> = {
  xs: "gap-(--size-btn-xs-gap)",
  sm: "gap-(--size-btn-sm-gap)",
  md: "gap-(--size-btn-md-gap)",
} as const;

export const iconSizeMap: Record<Size, number> = {
  xs: 16,
  sm: 16,
  md: 20,
} as const;

export function getSizeClasses(size: Size, isIconOnly: boolean): string {
  return isIconOnly ? iconOnlySizeClasses[size] : sizeClasses[size];
}
