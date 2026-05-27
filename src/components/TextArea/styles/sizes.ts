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
  xs: "pb-3 pl-[14px]",
  sm: "pb-5 pl-[16px]",
  md: "pb-6 pl-[18px]",
} as const;

export const textAreaLabelSizeClasses: Record<Size, string> = {
  xs: "pt-[8px] pl-[14px] pr-12 text-sm leading-sm tracking-sm",
  sm: "pt-[10px] pl-[16px] pr-12 text-md leading-md tracking-md",
  md: "pt-[12px] pl-[18px] pr-12 text-md leading-md tracking-md",
} as const;

export const textAreaLabelActiveSizeClasses: Record<Size, string> = {
  xs: "text-xs leading-xs tracking-xs",
  sm: "text-sm leading-sm tracking-sm",
  md: "text-sm leading-sm tracking-sm",
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
