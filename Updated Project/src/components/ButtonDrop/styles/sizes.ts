import { Size } from "@/types";

export const triggerPaddingClasses: Record<Size, string> = {
  xs: "py-0 px-3",
  sm: "[padding:var(--component-sm-padding-y)_var(--component-sm-padding-x)]",
  md: "py-0 px-2",
} as const;

export const listIconSizeClasses: Record<Size, string> = {
  xs: "[&_svg]:size-6",
  sm: "[&_svg]:size-7",
  md: "[&_svg]:size-8",
} as const;

export const listItemSizeMap: Record<Size, Size> = {
  xs: Size.Xs,
  sm: Size.Xs,
  md: Size.Xs,
} as const;
