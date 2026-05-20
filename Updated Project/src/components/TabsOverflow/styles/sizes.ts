import { Size } from "@/types";

export const triggerSizeClasses: Record<Size, string> = {
  xs: "h-(--size-component-xs-height) gap-3 text-xs leading-xs tracking-xs font-medium",
  sm: "h-(--size-component-sm-height) gap-3 text-sm leading-sm tracking-sm font-medium",
  md: "h-(--size-component-md-height) gap-3 text-md leading-md tracking-md font-medium",
} as const;

export const listItemSizeMap: Record<Size, Size> = {
  xs: Size.Xs,
  sm: Size.Xs,
  md: Size.Xs,
} as const;
