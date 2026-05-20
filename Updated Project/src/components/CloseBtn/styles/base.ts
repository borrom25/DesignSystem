import { scalingClasses } from "@/styles/shared";
import type { Size } from "@/types";

export const baseClasses =
  "relative inline-flex items-center justify-center cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-brand-heavy disabled:pointer-events-none disabled:opacity-50 hover:opacity-80 " +
  scalingClasses;

export const iconClasses =
  "block shrink-0 cursor-pointer [&_svg]:block [&_svg]:size-full [&_svg]:cursor-pointer [&_.close-cross]:fill-inverse-additional-heavy";

export const sizeClasses: Record<Size, string> = {
  xs: "size-9",
  sm: "size-11",
  md: "size-12",
} as const;

export const iconSizeMap: Record<Size, number> = {
  xs: 12,
  sm: 16,
  md: 20,
} as const;

export const errorClasses = new Map<boolean, string>([
  [true, "[&_.close-circle]:fill-danger-text-medium"],
  [false, "[&_.close-circle]:fill-inverse-text-light"],
]);
