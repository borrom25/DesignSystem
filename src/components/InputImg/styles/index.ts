import { wrapperClasses } from "@/components/Field/styles";
import {
  dropZoneSizeClasses,
  dropZoneBaseClasses,
  dropZoneStateClasses,
  dropZoneActiveClasses,
  dropZoneErrorClasses,
  dropZoneDisabledClasses,
  dropZoneTextBaseClasses,
  dropZoneTextSizeClasses,
  dropZoneTextDisabledClasses,
} from "./dropZone";
import {
  previewSizeClasses,
  previewContainerClasses,
  previewImageClasses,
  previewBackdropClasses,
  previewOverlayClasses,
  previewFileNameBaseClasses,
  previewFileNameSizeClasses,
  previewFileNameErrorClasses,
  previewActionsClasses,
  previewErrorIconClasses,
  previewActionsSizeClasses,
} from "./preview";
import {
  loadingProgressWrapperClasses,
  loadingProgressBarClasses,
} from "./loading";

export const inputImgFillClasses =
  "aspect-auto h-full min-h-0 w-full flex-1 self-stretch";

export const inputImgStyles = {
  wrapper: wrapperClasses,
  wrapperFill: "h-full min-h-0",
  control: "relative w-fit",
  controlFill: "flex w-full min-h-0 flex-1 flex-col",
  requiredMark: "-top-[3px]",
  dropZone: {
    size: dropZoneSizeClasses,
    fill: inputImgFillClasses,
    base: dropZoneBaseClasses,
    state: dropZoneStateClasses,
    active: dropZoneActiveClasses,
    error: dropZoneErrorClasses,
    disabled: dropZoneDisabledClasses,
    text: dropZoneTextBaseClasses,
    textSize: dropZoneTextSizeClasses,
    textDisabled: dropZoneTextDisabledClasses,
  },
  preview: {
    size: previewSizeClasses,
    fill: inputImgFillClasses,
    sizeActions: previewActionsSizeClasses,
    container: previewContainerClasses,
    image: previewImageClasses,
    backdrop: previewBackdropClasses,
    overlay: previewOverlayClasses,
    fileName: previewFileNameBaseClasses,
    fileNameSize: previewFileNameSizeClasses,
    fileNameError: previewFileNameErrorClasses,
    actions: previewActionsClasses,
    errorIcon: previewErrorIconClasses,
  },
  loading: {
    progressWrapper: loadingProgressWrapperClasses,
    progressBar: loadingProgressBarClasses,
  },
} as const;
