import type { Size } from "@/types";

export const withActionSlotClasses = "relative";

export const headerTextClasses = "flex min-w-0 flex-col gap-0_5";

export const headerTextWithActionClasses = "pr-10";

export const titleClasses =
  "font-roboto-flex text-body-b1 font-bold leading-body-b1 tracking-body-b1 text-primary";

export const subtitleClasses =
  "font-roboto-flex text-sm font-regular leading-sm tracking-sm text-secondary";

export const actionSlotClasses = "absolute z-10 flex shrink-0 items-start";

export const actionSlotPositionClasses: Record<Size, string> = {
  xs: "top-3 right-3",
  sm: "top-6 right-6",
  md: "top-7 right-9",
};

export const contentLayoutClasses = "flex flex-col gap-4";
