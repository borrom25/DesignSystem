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
  dropZoneTextBlockClasses,
  dropZonePlaceholderBaseClasses,
  dropZonePlaceholderSizeClasses,
  dropZonePlaceholderDisabledClasses,
} from "./dropZone";
import {
  loadingProgressWrapperClasses,
  loadingProgressBarClasses,
} from "./loading";
import {
  contentClasses,
  filesListClasses,
  filesListShadowClasses,
} from "./files";

export const inputFileDropStyles = {
  wrapper: wrapperClasses,
  content: contentClasses,
  filesList: filesListClasses,
  filesListShadow: filesListShadowClasses,
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
    textBlock: dropZoneTextBlockClasses,
    placeholder: dropZonePlaceholderBaseClasses,
    placeholderSize: dropZonePlaceholderSizeClasses,
    placeholderDisabled: dropZonePlaceholderDisabledClasses,
  },
  loading: {
    progressWrapper: loadingProgressWrapperClasses,
    progressBar: loadingProgressBarClasses,
  },
} as const;
