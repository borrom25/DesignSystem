import type { Size } from "@/types";

export const islandSizeClasses: Record<Size, string> = {
  xs: "h-(--size-component-sm-height) py-0 px-(--generic-spacing-3) [gap:var(--generic-spacing-3)] text-sm leading-sm tracking-sm",
  sm: "h-(--size-component-sm-height) py-0 px-(--generic-spacing-3) [gap:var(--generic-spacing-3)] text-md leading-md tracking-md",
  md: "h-(--size-component-md-height) py-0 px-(--generic-spacing-4) [gap:var(--generic-spacing-3)] text-md leading-md tracking-md",
};

export const inputPhoneWrapperSizeClasses: Record<Size, string> = {
  xs: "pr-(--size-input-xs-padding-x) pl-[var(--generic-spacing-3)]",
  sm: "pr-(--size-input-sm-padding-x) pl-[var(--generic-spacing-3)]",
  md: "pr-(--size-input-md-padding-x) pl-[var(--generic-spacing-3)]",
};

export const iconSizeClasses: Record<Size, string> = {
  xs: "h-[18px] w-[18px]",
  sm: "h-[20px] w-[20px]",
  md: "h-[24px] w-[24px]",
};

export const islandIconSizes: Record<Size, number> = {
  xs: 18,
  sm: 20,
  md: 24,
};
