import type { Size } from "@/types";

export const sizeClasses: Record<Size, string> = {
  xs: "min-h-(--size-input-xs-height) [--input-height:var(--size-input-xs-height)] [--input-gap-container-content:var(--size-input-xs-gap-container-content)] px-(--size-input-xs-padding-x) gap-(--size-input-xs-gap-body) rounded-lg text-sm font-medium leading-sm tracking-sm h-auto",
  sm: "min-h-(--size-input-sm-height) [--input-height:var(--size-input-sm-height)] [--input-gap-container-content:var(--size-input-sm-gap-container-content)] px-(--size-input-sm-padding-x) gap-(--size-input-sm-gap-body) rounded-lg text-md font-medium leading-md tracking-md h-auto",
  md: "min-h-(--size-input-md-height) [--input-height:var(--size-input-md-height)] [--input-gap-container-content:var(--size-input-md-gap-container-content)] px-(--size-input-md-padding-x) gap-(--size-input-md-gap-body) rounded-lg text-md font-medium leading-md tracking-md min-w-[420px] h-auto",
} as const;

export const containerSizeClasses: Record<Size, string> = {
  xs: "min-h-(--size-input-xs-height) max-h-[calc(var(--size-input-xs-height)_*_2)]",
  sm: "min-h-(--size-input-sm-height) max-h-[calc(var(--size-input-sm-height)_*_2)]",
  md: "min-h-(--size-input-md-height) max-h-[calc(var(--size-input-md-height)_*_2)]",
} as const;

export const clearButtonWrapperSizeClasses: Record<Size, string> = {
  xs: "pt-[calc((var(--size-input-xs-height)_-_1lh)_/_2)]",
  sm: "pt-[calc((var(--size-input-sm-height)_-_1lh)_/_2)]",
  md: "pt-[calc((var(--size-input-md-height)_-_1lh)_/_2)]",
} as const;

export const floatingLabelOffsetSizeClasses: Record<Size, string> = {
  xs: "left-(--size-input-xs-padding-x)",
  sm: "left-(--size-input-sm-padding-x)",
  md: "left-(--size-input-md-padding-x)",
} as const;

export const floatingLabelActiveTypographySizeClasses: Record<Size, string> = {
  xs: "text-xs leading-xs tracking-xs",
  sm: "text-sm leading-sm tracking-sm",
  md: "text-sm leading-sm tracking-sm",
} as const;

export const nativePlaceholderTypographySizeClasses: Record<Size, string> = {
  xs: "",
  sm: "[&::placeholder]:text-md [&::placeholder]:leading-md [&::placeholder]:tracking-md",
  md: "[&::placeholder]:text-md [&::placeholder]:leading-md [&::placeholder]:tracking-md",
} as const;

export const nativeActiveWithoutTagsShiftSizeClasses: Record<Size, string> = {
  xs: "translate-y-[calc(var(--generic-spacing-6)_+_var(--input-gap-container-content,var(--generic-spacing-05)))]",
  sm: "translate-y-[calc(var(--generic-spacing-7)_+_var(--input-gap-container-content,var(--generic-spacing-05)))]",
  md: "translate-y-[calc(var(--generic-spacing-8)_+_var(--input-gap-container-content,var(--generic-spacing-05)))]",
} as const;
