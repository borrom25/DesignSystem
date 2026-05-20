export const calendarButtonContainerClasses =
  "flex items-center justify-center shrink-0 h-full rounded-l-none";

export const calendarButtonContainerSizeClasses = {
  xs: "w-(--size-component-xs-height) rounded-r-xs",
  sm: "w-[32px] rounded-r-sm",
  md: "w-[36px] rounded-r-md",
} as const;

export const calendarButtonContainerDisabledClasses =
  "opacity-50 cursor-not-allowed";

export const calendarButtonClasses =
  "relative flex items-center justify-center w-full h-full";

export const calendarButtonIconClasses =
  "flex items-center justify-center text-complementary transition-opacity duration-150";

export const calendarButtonIconHoverClasses =
  "group-hover/date-range:opacity-0";

export const calendarButtonCloseClasses =
  "absolute inset-0 flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-150";

export const calendarButtonCloseHoverClasses =
  "group-hover/date-range:pointer-events-auto group-hover/date-range:opacity-100";

export const dateRangeCalendarClasses =
  "!w-max !h-fit [&>div]:!flex-row [&>div>div]:w-[324px] [&>div>div]:shrink-0";

export const dateRangePopoverContentClasses =
  "flex min-h-0 items-stretch self-stretch";

export const dateRangeTimeBarPanelClasses =
  "flex min-h-0 shrink-0 self-stretch flex-col overflow-hidden rounded-r-lg rounded-l-none border border-line border-l-0 bg-generic p-4 pl-0 shadow-none";
