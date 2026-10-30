import type { Size } from "@/types";

export const textAreaSizeClasses: Record<Size, string> = {
  xs: "py-3 pl-[14px] rounded-xs",
  sm: "py-5 pl-[16px] rounded-sm",
  md: "py-6 pl-[18px] rounded-md",
} as const;

export const textAreaFieldShellSizeClasses: Record<Size, string> = {
  xs: "rounded-xs",
  sm: "rounded-sm",
  md: "rounded-md",
} as const;

export const textAreaSizeWithLabelClasses: Record<Size, string> = {
  xs: "pt-[32px] pb-3 pl-[14px]",
  sm: "pt-[34px] pb-5 pl-[16px]",
  md: "pt-[34px] pb-6 pl-[18px]",
} as const;

export const textAreaLabelSizeClasses: Record<Size, string> = {
  xs: "top-[16px] left-[14px] right-12 text-sm leading-sm tracking-sm",
  sm: "top-[19px] left-[16px] right-12 text-md leading-md tracking-md",
  md: "top-[22px] left-[18px] right-12 text-md leading-md tracking-md",
} as const;

export const textAreaLabelActiveSizeClasses: Record<Size, string> = {
  xs: "top-5 line-clamp-none text-xs leading-xs tracking-xs truncate",
  sm: "top-5 line-clamp-none text-sm leading-sm tracking-sm truncate",
  md: "top-5 line-clamp-none text-sm leading-sm tracking-sm truncate",
} as const;

export const textAreaLabelBackdropSizeClasses: Record<Size, string> = {
  xs: "h-[30px]",
  sm: "h-[32px]",
  md: "h-[34px]",
} as const;

export const textAreaNativeTextSizeClasses: Record<Size, string> = {
  xs: "text-primary text-sm leading-sm tracking-sm",
  sm: "text-primary text-md leading-md tracking-md",
  md: "text-primary text-md leading-md tracking-md",
} as const;

export const textAreaNativePlaceholderSizeClasses: Record<Size, string> = {
  xs: "placeholder:text-sm placeholder:leading-sm placeholder:tracking-sm",
  sm: "placeholder:text-md placeholder:leading-md placeholder:tracking-md",
  md: "placeholder:text-md placeholder:leading-md placeholder:tracking-md",
} as const;
