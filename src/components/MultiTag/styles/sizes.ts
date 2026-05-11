import type { Size } from "@/types";

export const multiTagTriggerSizeClasses: Record<Size, string> = {
  xs: "min-h-[36px] py-0 gap-(--size-component-xs-gap) rounded-xs text-xs font-medium leading-xs tracking-xs",
  sm: "min-h-[40px] py-0 gap-(--size-component-sm-gap) rounded-sm text-sm font-medium leading-sm tracking-sm",
  md: "min-h-[44px] py-0 gap-(--size-component-md-gap) rounded-md text-md font-medium leading-md tracking-md",
} as const;

export const multiTagTriggerInlinePaddingClasses: Record<Size, string> = {
  xs: "px-6",
  sm: "px-7",
  md: "px-9",
} as const;

export const multiTagTriggerInlinePaddingWithValueClasses: Record<
  Size,
  string
> = {
  xs: "px-1",
  sm: "px-1",
  md: "px-1",
} as const;

export const multiTagFieldInlinePaddingClasses: Record<Size, string> = {
  xs: "px-6",
  sm: "px-7",
  md: "px-9",
} as const;

export const tagsContainerClasses =
  "flex flex-wrap items-center content-start gap-1 flex-1 min-w-0 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]";

export const tagsContainerPaddingClasses: Record<Size, string> = {
  xs: "py-0",
  sm: "py-0",
  md: "py-0",
} as const;

export const tagsContainerWrappedClasses = "my-1";

export const controlsContainerClasses =
  "shrink-0 flex items-center self-center";

export const controlsContainerSizeClasses: Record<Size, string> = {
  xs: "gap-1",
  sm: "gap-2",
  md: "gap-2",
} as const;

export const controlsContainerWrappedClasses: Record<Size, string> = {
  xs: "self-start pt-[4px]",
  sm: "self-start pt-[4px]",
  md: "self-start pt-[4px]",
} as const;

export const tagRowHeightMap: Record<Size, number> = {
  xs: 28,
  sm: 32,
  md: 36,
} as const;

export const tagGap = 4;
