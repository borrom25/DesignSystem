import type { Size } from "@/types";

export const textAreaSizeClasses: Record<Size, string> = {
  xs: "py-3 px-(--size-component-xs-padding-x) rounded-xs text-xs font-medium leading-xs tracking-xs",
  sm: "py-5 px-(--size-component-sm-padding-x) rounded-sm text-sm font-medium leading-sm tracking-sm",
  md: "py-6 px-(--size-component-md-padding-x) rounded-md text-md font-medium leading-md tracking-md",
} as const;
