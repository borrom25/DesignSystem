import type { Size } from "@/types";

export const previewSizeClasses: Record<Size, string> = {
  xs: "w-[120px] h-[120px]",
  sm: "w-[140px] h-[140px]",
  md: "w-[160px] h-[160px]",
};

export const previewActionsSizeClasses: Record<Size, string> = {
  xs: "gap-4",
  sm: "gap-5",
  md: "gap-7",
};

export const previewContainerClasses =
  "group relative overflow-hidden rounded-scale-xl aspect-square";

export const previewImageClasses =
  "absolute inset-0 w-full h-full object-cover object-center";

export const previewBackdropClasses =
  "absolute inset-0 z-10 pointer-events-none bg-[rgba(0,0,0,0.25)] backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-150";

export const previewOverlayClasses =
  "absolute inset-0 z-20 flex flex-col items-center justify-center gap-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-150";

export const previewActionsClasses =
  "flex items-center pointer-events-auto relative z-10";

export const previewFileNameBaseClasses =
  "font-roboto-flex not-italic text-contrast-light-text-heavy text-center max-w-[90%] truncate pointer-events-none";

export const previewFileNameSizeClasses: Record<Size, string> = {
  xs: "text-xs leading-xs tracking-xs font-medium",
  sm: "text-sm leading-sm tracking-sm font-medium",
  md: "text-md leading-md tracking-md font-medium",
};

export const previewFileNameErrorClasses = "text-danger-text-medium";

export const previewErrorIconClasses =
  "text-danger-text-medium pointer-events-none";
