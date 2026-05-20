import type { Size } from "@/types";
import {
  dropZoneActiveClasses as sharedActiveClasses,
  dropZoneDisabledClasses as sharedDisabledClasses,
  dropZoneStateClasses as sharedStateClasses,
} from "@/shared/DropZone";

export const dropZoneSizeClasses: Record<Size, string> = {
  xs: "w-[120px] h-[120px]",
  sm: "w-[140px] h-[140px]",
  md: "w-[160px] h-[160px]",
};

export const dropZoneBaseClasses =
  "flex flex-col items-center justify-center px-6 py-0 aspect-square rounded-scale-xl border border-dashed cursor-pointer transition-[border-color,background-color] duration-150 gap-2";

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
