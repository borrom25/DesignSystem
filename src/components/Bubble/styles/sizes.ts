import type { Size } from "@/types";

export const shellSizeClasses: Record<Size, string> = {
  xs: "px-3 py-3",
  sm: "p-4",
  md: "px-6 py-5",
} as const;

export const fileShellSizeClasses: Record<Size, string> = {
  xs: "px-3 py-3",
  sm: "px-3 py-3",
  md: "px-3 py-3",
} as const;

export const textSizeClasses: Record<Size, string> = {
  xs: "text-xs tracking-xs",
  sm: "text-sm tracking-sm",
  md: "text-md tracking-md",
} as const;

export const metaSizeClasses: Record<Size, string> = {
  xs: "text-xxs tracking-xxs",
  sm: "text-xs tracking-xs",
  md: "text-xs tracking-xs",
} as const;

export const mediaBleedClasses: Record<Size, string> = {
  xs: "-m-3",
  sm: "-m-4",
  md: "-mx-6 -my-5",
} as const;

export const imageStandaloneSizeClasses: Record<Size, string> = {
  xs: "w-[214px] h-[198px]",
  sm: "w-[258px] h-[238px]",
  md: "w-[258px] h-[238px]",
} as const;
