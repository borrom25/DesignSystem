import { cn } from "@/utils/cn";
import {
  dropZoneActiveClasses as sharedActiveClasses,
  dropZoneDisabledClasses as sharedDisabledClasses,
  dropZoneStateClasses as sharedStateClasses,
} from "@/shared/DropZone";

export const dropZoneBaseClasses =
  "flex w-full p-6 flex-col justify-center items-center gap-2 border border-dashed text-center transition-[border-color,background-color] duration-150 cursor-pointer rounded-md";

export const dropZoneStateClasses = cn(sharedStateClasses, "hover:rounded-md");

export const dropZoneActiveClasses = sharedActiveClasses;

export const dropZoneDisabledClasses = sharedDisabledClasses;

export const dropZoneIconClasses = "text-brand-text-heavy";
export const dropZoneIconDisabledClasses = "text-hint";

export const dropZoneButtonClasses =
  "inline-flex items-center justify-center p-2 rounded-sm bg-brand-light";

export const dropZoneButtonDisabledClasses = "rounded-sm bg-generic-disabled";

export const dropZoneTextRowClasses = "flex items-center gap-2";

export const dropZoneTextBaseClasses =
  "font-roboto-flex not-italic text-sm font-medium leading-sm tracking-sm";

export const dropZoneTextSelectClasses = `${dropZoneTextBaseClasses} text-brand-text-heavy`;
export const dropZoneTextSelectDisabledClasses = "text-hint";

export const dropZoneTextDragClasses = `${dropZoneTextBaseClasses} text-primary`;

export const dropZonePlaceholderClasses = `${dropZoneTextBaseClasses} text-hint text-center max-w-md`;
