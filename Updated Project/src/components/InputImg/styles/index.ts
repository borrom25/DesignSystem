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

export const inputImgStyles = {
  wrapper: wrapperClasses,
  dropZone: {
    size: dropZoneSizeClasses,
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
