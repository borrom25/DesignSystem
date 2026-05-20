import type { Size } from "@/types";

export const sizeClasses: Record<Size, string> = {
  xs: "h-12 py-0 px-4 rounded-xs text-xs font-medium leading-xs tracking-xs",
  sm: "h-13 py-0 px-5 rounded-sm text-sm font-medium leading-sm tracking-sm",
  md: "h-14 py-0 px-6 rounded-md text-md font-medium leading-md tracking-md",
} as const;

export const gapClasses: Record<Size, string> = {
  xs: "gap-2",
  sm: "gap-3",
  md: "gap-3",
} as const;

export const withAvatarSizeClasses: Record<Size, string> = {
  xs: "pr-4",
  sm: "pr-4",
  md: "pr-6",
} as const;

export const avatarSizeMap: Record<Size, number> = {
  xs: 27,
  sm: 31,
  md: 35,
};
