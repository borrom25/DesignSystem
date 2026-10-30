import type { Size } from "@/types";

export const sizeClasses: Record<Size, string> = {
  xs: "h-12 py-0 px-4 rounded-xs text-xs font-medium leading-xs tracking-xs",
  sm: "h-13 py-0 px-5 rounded-sm text-sm font-medium leading-sm tracking-sm",
  md: "h-14 py-0 px-6 rounded-md text-md font-medium leading-md tracking-md",
} as const;

export const gapClasses: Record<Size, string> = {
  xs: "gap-1",
  sm: "gap-1",
  md: "gap-1.5",
} as const;

export const withAvatarSizeClasses: Record<Size, string> = {
  xs: "pr-2",
  sm: "pr-2.5",
  md: "pr-3",
} as const;

export const avatarSizeMap: Record<Size, number> = {
  xs: 28,
  sm: 32,
  md: 36,
};
