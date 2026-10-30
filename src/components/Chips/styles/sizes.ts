import type { Size } from "@/types";

export const sizeClasses: Record<Size, string> = {
  xs: "h-(--size-component-xs-height) px-(--size-component-xs-padding-x) rounded-sm text-xs font-medium",
  sm: "h-(--size-component-sm-height) px-(--size-component-sm-padding-x) rounded-md text-sm font-medium",
  md: "h-(--size-component-md-height) px-(--size-component-md-padding-x) rounded-lg text-md font-medium",
} as const;

export const iconOnlySizeClasses: Record<Size, string> = {
  xs: "size-(--size-component-xs-icon-only-dimensions) p-(--size-component-xs-padding-x) rounded-sm",
  sm: "size-(--size-component-sm-icon-only-dimensions) p-(--size-component-sm-padding-x) rounded-md",
  md: "size-(--size-component-md-icon-only-dimensions) p-(--size-component-md-padding-x) rounded-lg",
} as const;

export const gapClasses: Record<Size, string> = {
  xs: "gap-(--size-component-xs-gap)",
  sm: "gap-(--size-component-sm-gap)",
  md: "gap-(--size-component-md-gap)",
} as const;

export const iconSizeMap: Record<Size, number> = {
  xs: 12,
  sm: 14,
  md: 20,
} as const;
