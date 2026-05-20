export const sliderWrapperClasses = "group relative w-full py-6";

export const sliderContainerClasses = "relative w-full h-[6px]";

export const sliderTrackClasses =
  "absolute inset-0 h-[6px] w-full rounded-scale-md bg-generic-medium";

export const sliderActiveTrackClasses =
  "absolute left-0 top-0 h-full rounded-l-scale-md";

export const sliderThumbWrapperClasses =
  "absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center";

export const sliderValuePopoverClasses =
  "absolute bottom-[calc(100%+8px)] left-1/2 -translate-x-1/2 translate-y-1 rounded-xs bg-generic px-(--generic-spacing-3) py-(--generic-spacing-2) text-center font-roboto-flex text-sm font-semibold leading-sm tracking-sm text-primary whitespace-nowrap pointer-events-none opacity-0 transition-all duration-150 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-active:translate-y-[2px] group-active:scale-93 shadow-popover";

export const sliderValuePopoverAlwaysShowClasses = "translate-y-0 !opacity-100";

export const sliderValuePopoverDisabledClasses =
  "group-active:translate-y-0 group-active:scale-100";

export const sliderValuePopoverArrowClasses =
  "absolute left-1/2 top-full -translate-x-1/2 text-white";

export const sliderThumbClasses =
  "w-4 h-4 cursor-pointer rounded-full flex items-center justify-center";

export const sliderThumbCircleClasses = "fill-white stroke-brand-line-heavy";

export const sliderInputClasses =
  "absolute -inset-y-3 inset-x-0 w-full opacity-0 cursor-pointer disabled:cursor-not-allowed z-10";
