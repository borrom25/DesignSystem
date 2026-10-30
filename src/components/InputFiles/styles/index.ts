import { wrapperClasses } from "@/components/Field/styles";
import {
  previewBaseClasses,
  previewStateClasses,
  previewErrorClasses,
  previewSizeClasses,
  previewInfoClasses,
  previewNameClasses,
  previewSizeTextClasses,
  previewActionsClasses,
  previewIconClasses,
  previewIconViewModeClasses,
  previewIconErrorClasses,
  previewIconSuccessClasses,
  previewLoadingClasses,
  previewIconLoadingClasses,
  previewListClasses,
} from "./filePreview";

export const inputFilesStyles = {
  wrapper: wrapperClasses,
  preview: {
    list: previewListClasses,
    base: previewBaseClasses,
    state: previewStateClasses,
    error: previewErrorClasses,
    size: previewSizeClasses,
    info: previewInfoClasses,
    name: previewNameClasses,
    sizeText: previewSizeTextClasses,
    actions: previewActionsClasses,
    icon: previewIconClasses,
    iconViewMode: previewIconViewModeClasses,
    iconError: previewIconErrorClasses,
    iconSuccess: previewIconSuccessClasses,
    iconLoading: previewIconLoadingClasses,
    loading: previewLoadingClasses,
  },
} as const;
