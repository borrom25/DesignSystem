import type { Size } from "@/types";
import {
  inputFloatingLabelActiveSizeClasses,
  inputFloatingLabelSizeClasses,
  inputIconSizeMap,
  inputSizeClasses,
} from "@/shared/Input/styles";

export const triggerSizeClasses: Record<Size, string> = inputSizeClasses;

export const iconSizeMap: Record<Size, number> = inputIconSizeMap;

export const iconSlotSizeClasses: Record<Size, string> = {
  xs: "w-4 h-4",
  sm: "w-4 h-4",
  md: "w-5 h-5",
} as const;

export const labelSizeClasses: Record<Size, string> = {
  xs: "text-xs leading-xs tracking-xs",
  sm: "text-sm leading-sm tracking-sm",
  md: "text-md leading-md tracking-md",
} as const;

export const floatingLabelSizeClasses: Record<Size, string> =
  inputFloatingLabelSizeClasses;

export const floatingLabelActiveSizeClasses: Record<Size, string> =
  inputFloatingLabelActiveSizeClasses;

export const hintSizeClasses: Record<Size, string> = {
  xs: "text-xs leading-xs tracking-xs",
  sm: "text-xs leading-xs tracking-xs",
  md: "text-sm leading-sm tracking-sm",
} as const;

export const triggerStackedSizeClasses: Record<Size, string> = {
  xs: "min-h-(--size-input-xs-height) [--input-height:var(--size-input-xs-height)] [--input-gap-container-content:var(--size-input-xs-gap-container-content)] px-(--size-input-xs-padding-x) gap-(--size-input-xs-gap-body) rounded-lg text-sm font-medium leading-sm tracking-sm h-auto",
  sm: "min-h-(--size-input-sm-height) [--input-height:var(--size-input-sm-height)] [--input-gap-container-content:var(--size-input-sm-gap-container-content)] px-(--size-input-sm-padding-x) gap-(--size-input-sm-gap-body) rounded-lg text-md font-medium leading-md tracking-md h-auto",
  md: "min-h-(--size-input-md-height) [--input-height:var(--size-input-md-height)] [--input-gap-container-content:var(--size-input-md-gap-container-content)] px-(--size-input-md-padding-x) gap-(--size-input-md-gap-body) rounded-lg text-md font-medium leading-md tracking-md min-w-[420px] h-auto",
} as const;
