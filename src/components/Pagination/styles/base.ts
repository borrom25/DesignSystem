import type { Size } from "@/types";

export const paginationBaseStyles = {
  wrapper: "inline-flex items-center gap-(--size-btn-sm-gap)",
  pageNumbers: "relative inline-flex items-center gap-(--size-btn-sm-gap)",
  ellipsis:
    "inline-flex items-center justify-center text-secondary select-none pointer-events-none border border-transparent",
  inputWrapper: "ml-2",
  indicator:
    "pointer-events-none absolute left-0 top-0 z-1 bg-brand-heavy will-change-transform transition-[transform,width,height] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none",
  pageButtonBase:
    "relative z-10 transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none [&[aria-selected=true]]:bg-transparent [&[aria-selected=true]]:text-on-brand [&[aria-selected=true]]:border-transparent [&[aria-selected=true]:hover]:bg-transparent [&[aria-selected=true]:hover]:text-on-brand",
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

export const indicatorSizeClasses: Record<Size, string> = {
  xs: "rounded-xs",
  sm: "rounded-sm",
  md: "rounded-md",
} as const;

export const iconButtonClasses: Record<Size, string> = {
  xs: "!w-(--size-btn-xs-h) !px-0 justify-center",
  sm: "!w-(--size-btn-sm-h) !px-0 justify-center",
  md: "!w-(--size-btn-md-h) !px-0 justify-center",
} as const;
