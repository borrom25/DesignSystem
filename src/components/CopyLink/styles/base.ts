import type { Size } from "@/types";

export const rootClasses = "[&>span]:w-full";

export const labelClasses = "grid w-full items-center text-left";

export const labelLayerClasses = "col-start-1 row-start-1";

export const labelStateClasses = `${labelLayerClasses} inline-flex w-full items-center justify-between`;

export const labelMeasureClasses = `${labelStateClasses} invisible`;

export const labelAnimatedClasses =
  "transition-opacity duration-450 ease-in-out";

export const labelVisibleClasses = "opacity-100";

export const labelHiddenClasses = "opacity-0 pointer-events-none";

export const contentGapClasses: Record<Size, string> = {
  xs: "gap-(--size-btn-xs-gap)",
  sm: "gap-(--size-btn-sm-gap)",
  md: "gap-(--size-btn-md-gap)",
} as const;

export const iconClasses = "shrink-0";
