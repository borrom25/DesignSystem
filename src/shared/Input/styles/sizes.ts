import type { Size } from "@/types";

export const inputSizeClasses: Record<Size, string> = {
  xs: "h-(--size-input-xs-height) [--input-height:var(--size-input-xs-height)] px-(--size-input-xs-padding-x) [--input-gap-container-content:var(--size-input-xs-gap-container-content)] gap-(--size-input-xs-gap-body) rounded-lg text-sm font-medium leading-sm tracking-sm",
  sm: "h-(--size-input-sm-height) [--input-height:var(--size-input-sm-height)] px-(--size-input-sm-padding-x) [--input-gap-container-content:var(--size-input-sm-gap-container-content)] gap-(--size-input-sm-gap-body) rounded-lg text-md font-medium leading-md tracking-md",
  md: "h-(--size-input-md-height) [--input-height:var(--size-input-md-height)] px-(--size-input-md-padding-x) [--input-gap-container-content:var(--size-input-md-gap-container-content)] gap-(--size-input-md-gap-body) rounded-lg text-md font-medium leading-md tracking-md min-w-[420px]",
} as const;

export const inputClearSizeClasses: Record<Size, string> = {
  xs: "h-(--size-input-xs-height) py-0 px-1 gap-(--size-input-xs-gap-body) rounded-lg text-sm font-medium leading-sm tracking-sm",
  sm: "h-(--size-input-sm-height) py-0 px-1 gap-(--size-input-sm-gap-body) rounded-lg text-md font-medium leading-md tracking-md",
  md: "h-(--size-input-md-height) py-0 px-1 gap-(--size-input-md-gap-body) rounded-lg text-md font-medium leading-md tracking-md",
} as const;

export const inputFloatingLabelSizeClasses: Record<Size, string> = {
  xs: "left-0 text-sm leading-sm tracking-sm",
  sm: "left-0 text-md leading-md tracking-md",
  md: "left-0 text-md leading-md tracking-md",
} as const;

export const inputFloatingLabelActiveScale = "scale-[0.875]";

export const inputFloatingLabelActiveSizeClasses: Record<Size, string> = {
  xs: inputFloatingLabelActiveScale,
  sm: inputFloatingLabelActiveScale,
  md: inputFloatingLabelActiveScale,
} as const;

export const inputIconSizeMap: Record<Size, number> = {
  xs: 16,
  sm: 16,
  md: 18,
} as const;
