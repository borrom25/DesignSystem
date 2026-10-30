import type { Size } from "@/types";
import {
  dropZoneActiveClasses as sharedActiveClasses,
  dropZoneDisabledClasses as sharedDisabledClasses,
  dropZoneStateClasses as sharedStateClasses,
} from "@/shared/DropZone";

export const dropZoneSizeClasses: Record<Size, string> = {
  xs: "min-h-[88px]",
  sm: "min-h-[104px]",
  md: "min-h-[120px]",
};

export const dropZoneBaseClasses =
  "relative flex w-full flex-col items-center justify-center p-6 rounded-scale-xl border border-dashed cursor-pointer transition-[border-color,background-color] duration-150 gap-2";

export const dropZoneStateClasses = sharedStateClasses;

export const dropZoneActiveClasses = sharedActiveClasses;

export const dropZoneErrorClasses =
  "border-danger-line-light bg-generic-medium hover:bg-generic-medium-hover";

export const dropZoneDisabledClasses = sharedDisabledClasses;

export const dropZoneTextBaseClasses =
  "font-roboto-flex not-italic text-primary text-center";

export const dropZoneTextSizeClasses: Record<Size, string> = {
  xs: "text-xs leading-xs tracking-xs font-medium",
  sm: "text-sm leading-sm tracking-sm font-medium",
  md: "text-md leading-md tracking-md font-medium",
};

export const dropZoneTextDisabledClasses = "text-hint";

export const dropZoneTextBlockClasses = "flex flex-col items-center gap-1";

export const dropZonePlaceholderBaseClasses =
  "font-roboto-flex font-normal text-hint text-center max-w-md";

export const dropZonePlaceholderSizeClasses: Record<Size, string> = {
  xs: "text-xs leading-xs tracking-xs",
  sm: "text-xs leading-xs tracking-xs",
  md: "text-sm leading-sm tracking-sm",
};

export const dropZonePlaceholderDisabledClasses = "text-hint";
