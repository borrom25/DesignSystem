import type { Size } from "@/types";

export const dateRangeSectionInputSizeClasses: Record<Size, string> = {
  xs: "text-body-b2 leading-body-b2 tracking-body-b2 font-body-b2-medium",
  sm: "text-body-b1 leading-body-b1 tracking-body-b1 font-body-b1-medium",
  md: "text-body-b1 leading-body-b1 tracking-body-b1 font-body-b1-medium",
} as const;

export const dateRangeLabelCenteredSizeClasses: Record<Size, string> = {
  xs: "text-body-b2 leading-body-b2 tracking-body-b2 font-body-b2-medium",
  sm: "text-body-b1 leading-body-b1 tracking-body-b1 font-body-b1-medium",
  md: "text-body-b1 leading-body-b1 tracking-body-b1 font-body-b1-medium",
} as const;

export const dateRangeLabelActiveSizeClasses: Record<Size, string> = {
  xs: "text-body-b3 leading-body-b3 tracking-body-b3 font-body-b3-regular",
  sm: "[font-size:var(--font-size-body-b2)] [line-height:var(--line-height-body-b2)] [letter-spacing:var(--letter-spacing-body-b2)] font-body-b2-regular",
  md: "text-body-b2 leading-body-b2 tracking-body-b2 font-body-b2-regular",
} as const;

export const dateRangeIconSizeMap: Record<Size, number> = {
  xs: 14,
  sm: 16,
  md: 18,
} as const;

export const dateRangeLabelActiveOffsetSizeClasses: Record<Size, string> = {
  xs: "-translate-y-0.5",
  sm: "translate-y-0.5",
  md: "",
} as const;
