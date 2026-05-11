import type { Size } from "@/types";

export const paginationBaseStyles = {
  wrapper: "inline-flex items-center gap-(--size-btn-sm-gap)",
  pageNumbers: "inline-flex items-center gap-(--size-btn-sm-gap)",
  ellipsis:
    "inline-flex items-center justify-center text-secondary select-none pointer-events-none border border-transparent",
  inputWrapper: "ml-2",
} as const;

export const ellipsisSizeClasses: Record<Size, string> = {
  xs: "w-(--size-btn-xs-h) h-(--size-btn-xs-h) text-xs",
  sm: "w-(--size-btn-sm-h) h-(--size-btn-sm-h) text-sm",
  md: "w-(--size-btn-md-h) h-(--size-btn-md-h) text-md",
} as const;

export const pageButtonClasses: Record<Size, string> = {
  xs: "!w-(--size-btn-xs-h) !px-0 justify-center",
  sm: "!w-(--size-btn-sm-h) !px-0 justify-center",
  md: "!w-(--size-btn-md-h) !px-0 justify-center",
} as const;

export const iconButtonClasses: Record<Size, string> = {
  xs: "!w-(--size-btn-xs-h) !px-0 justify-center",
  sm: "!w-(--size-btn-sm-h) !px-0 justify-center",
  md: "!w-(--size-btn-md-h) !px-0 justify-center",
} as const;
