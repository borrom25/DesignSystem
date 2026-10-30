import { cn } from "@/utils";
import {
  dropZoneActiveClasses as sharedActiveClasses,
  dropZoneDisabledClasses as sharedDisabledClasses,
  dropZoneStateClasses as sharedStateClasses,
} from "@/shared/DropZone";

export const uploaderBaseClasses =
  "relative flex w-full p-6 flex-col justify-center items-center gap-2 border border-dashed text-center transition-[border-color,background-color] duration-150 cursor-pointer rounded-md";

export const uploaderStateClasses = cn(sharedStateClasses, "hover:rounded-md");
export const uploaderActiveClasses = sharedActiveClasses;
export const uploaderDisabledClasses = sharedDisabledClasses;
export const uploaderErrorClasses =
  "border-danger-line-light bg-generic-medium hover:border-danger-line-light hover:bg-generic-medium";

export const uploaderIconClasses = "text-brand-text-heavy";
export const uploaderIconDisabledClasses = "text-hint";

export const uploaderButtonClasses =
  "inline-flex items-center justify-center p-2 rounded-sm bg-brand-light";
export const uploaderButtonDisabledClasses = "rounded-sm bg-generic-disabled";

export const uploaderTextRowClasses = "flex items-center gap-2";

export const uploaderTextBaseClasses =
  "font-roboto-flex not-italic text-sm font-medium leading-sm tracking-sm";
export const uploaderTextSelectClasses = `${uploaderTextBaseClasses} text-brand-text-heavy`;
export const uploaderTextSelectDisabledClasses = "text-hint";
export const uploaderTextDragClasses = `${uploaderTextBaseClasses} text-primary`;
export const uploaderPlaceholderClasses = `${uploaderTextBaseClasses} text-hint text-center max-w-md`;
export const placeholderFullWidthClasses = "max-w-full w-full";
