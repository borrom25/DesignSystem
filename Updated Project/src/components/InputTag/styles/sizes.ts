import type { Size } from "@/types";

export const sizeClasses: Record<Size, string> = {
  xs: "min-h-(--size-input-xs-height) [--input-height:var(--size-input-xs-height)] [--input-gap-container-content:var(--size-input-xs-gap-container-content)] py-(--size-input-xs-padding-inputtag-y) px-(--size-input-xs-padding-x) gap-(--size-input-xs-gap-body) rounded-lg text-sm font-medium leading-sm tracking-sm",
  sm: "min-h-(--size-input-sm-height) [--input-height:var(--size-input-sm-height)] [--input-gap-container-content:var(--size-input-sm-gap-container-content)] py-(--size-input-sm-padding-inputtag-y) px-(--size-input-sm-padding-x) gap-(--size-input-sm-gap-body) rounded-lg text-md font-medium leading-md tracking-md",
  md: "min-h-(--size-input-md-height) [--input-height:var(--size-input-md-height)] [--input-gap-container-content:var(--size-input-md-gap-container-content)] py-(--size-input-md-padding-inputtag-y) px-(--size-input-md-padding-x) gap-(--size-input-md-gap-body) rounded-lg text-md font-medium leading-md tracking-md min-w-[420px]",
} as const;

export const containerSizeClasses: Record<Size, string> = {
  xs: "min-h-[calc(var(--size-input-xs-height)_-_var(--size-input-xs-padding-inputtag-y)_*_2)] max-h-[calc(var(--size-input-xs-height)_*_2)]",
  sm: "min-h-[calc(var(--size-input-sm-height)_-_var(--size-input-sm-padding-inputtag-y)_*_2)] max-h-[calc(var(--size-input-sm-height)_*_2)]",
  md: "min-h-[calc(var(--size-input-md-height)_-_var(--size-input-md-padding-inputtag-y)_*_2)] max-h-[calc(var(--size-input-md-height)_*_2)]",
} as const;

export const clearButtonWrapperSizeClasses: Record<Size, string> = {
  xs: "pt-[calc((var(--size-input-xs-height)_-_var(--size-input-xs-padding-inputtag-y)_*_2_-_1lh)_/_2)]",
  sm: "pt-[calc((var(--size-input-sm-height)_-_var(--size-input-sm-padding-inputtag-y)_*_2_-_1lh)_/_2)]",
  md: "pt-[calc((var(--size-input-md-height)_-_var(--size-input-md-padding-inputtag-y)_*_2_-_1lh)_/_2)]",
} as const;
