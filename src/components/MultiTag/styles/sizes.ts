import type { Size } from "@/types";

export const multiTagTriggerSizeClasses: Record<Size, string> = {
  xs: "min-h-(--size-input-xs-height) [--input-height:var(--size-input-xs-height)] [--input-gap-container-content:var(--size-input-xs-gap-container-content)] px-(--size-input-xs-padding-x) gap-(--size-input-xs-gap-body) rounded-xs text-xs font-medium leading-xs tracking-xs h-auto",
  sm: "min-h-(--size-input-sm-height) [--input-height:var(--size-input-sm-height)] [--input-gap-container-content:var(--size-input-sm-gap-container-content)] px-(--size-input-sm-padding-x) gap-(--size-input-sm-gap-body) rounded-sm text-sm font-medium leading-sm tracking-sm h-auto",
  md: "min-h-(--size-input-md-height) [--input-height:var(--size-input-md-height)] [--input-gap-container-content:var(--size-input-md-gap-container-content)] px-(--size-input-md-padding-x) gap-(--size-input-md-gap-body) rounded-md text-md font-medium leading-md tracking-md h-auto",
} as const;

export const multiTagFieldInlinePaddingClasses: Record<Size, string> = {
  xs: "px-(--size-input-xs-padding-x)",
  sm: "px-(--size-input-sm-padding-x)",
  md: "px-(--size-input-md-padding-x)",
} as const;

export const tagsContainerSizeClasses: Record<Size, string> = {
  xs: "min-h-(--size-input-xs-height)",
  sm: "min-h-(--size-input-sm-height)",
  md: "min-h-(--size-input-md-height)",
} as const;

export const controlsContainerSizeClasses: Record<Size, string> = {
  xs: "gap-1",
  sm: "gap-2",
  md: "gap-2",
} as const;

export const controlsContainerWithTagsSizeClasses: Record<Size, string> = {
  xs: "pt-[calc((var(--size-input-xs-height)_-_1lh)_/_2)]",
  sm: "pt-[calc((var(--size-input-sm-height)_-_1lh)_/_2)]",
  md: "pt-[calc((var(--size-input-md-height)_-_1lh)_/_2)]",
} as const;

export const labelZoneSpacerClasses: Record<Size, string> = {
  xs: "shrink-0 h-[calc(var(--generic-spacing-0)_+_1lh_+_var(--generic-spacing-2,var(--generic-spacing-05)))]",
  sm: "shrink-0 h-[calc(var(--generic-spacing-0)_+_1lh_+_var(--generic-spacing-2,var(--generic-spacing-05)))]",
  md: "shrink-0 h-[calc(var(--generic-spacing-0)_+_1lh_+_var(--generic-spacing-0,var(--generic-spacing-05)))]",
} as const;

export const labelZoneOffsetClasses: Record<Size, string> = {
  xs: "pt-[calc(var(--generic-spacing-0)_+_1lh_+_var(--generic-spacing-2,var(--generic-spacing-05)))]",
  sm: "pt-[calc(var(--generic-spacing-0)_+_1lh_+_var(--generic-spacing-2,var(--generic-spacing-05)))]",
  md: "pt-[calc(var(--generic-spacing-0)_+_1lh_+_var(--generic-spacing-0,var(--generic-spacing-05)))]",
} as const;

export const tagRowHeightMap: Record<Size, number> = {
  xs: 28,
  sm: 32,
  md: 36,
} as const;

export const tagGap = 4;
