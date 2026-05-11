import type { Size } from "@/types";

export const previewBaseClasses =
  "flex items-center justify-between w-full transition-[background-color] duration-150";

export const previewListClasses = "[&>div:not(:last-child)]:border-b";

export const previewStateClasses =
  "border-line bg-generic-light hover:border-line";

export const previewErrorClasses = "border-danger-line-light bg-danger-light";

export const previewSizeClasses: Record<Size, string> = {
  xs: "min-h-8 px-2 py-1.5 gap-2 text-xs leading-xs",
  sm: "min-h-10 px-3 py-2 gap-2.5 text-sm leading-sm",
  md: "min-h-12 px-4 py-2.5 gap-3 text-md leading-md",
};

export const previewInfoClasses =
  "flex items-center gap-4 overflow-hidden min-w-0";

export const previewNameClasses = "truncate text-primary font-medium";

export const previewSizeTextClasses = "shrink-0 text-secondary";

export const previewActionsClasses = "flex items-center gap-1 shrink-0";

export const previewIconClasses = "shrink-0";

export const previewIconViewModeClasses = "text-complementary";

export const previewIconErrorClasses = "text-danger-heavy";

export const previewIconSuccessClasses = "text-positive-heavy";

export const previewIconLoadingClasses = "text-brand-heavy animate-spin";

export const previewLoadingClasses = "text-brand-heavy";

export const previewProgressClasses =
  "shrink-0 text-brand font-medium whitespace-nowrap";
