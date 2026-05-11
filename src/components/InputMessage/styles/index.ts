import {
  inputMessageWrapperClasses,
  inputMessageTextareaClasses,
  inputMessageActionsClasses,
  inputMessageActionsListClasses,
  inputMessageContainerClasses,
  inputMessageFilesListClasses,
  inputMessageContainerShadowClasses,
} from "./base";
import {
  previewActionsClasses,
  previewBackdropClasses,
  previewButtonContainerClasses,
  previewCloseButtonClasses,
  previewContainerClasses,
  previewFileClasses,
  previewFileNameBaseClasses,
  previewFileSizeBaseClasses,
  previewImageClasses,
  previewOverlayClasses,
} from "./preview.ts";

export const inputMessageStyles = {
  wrapper: inputMessageWrapperClasses,
  container: inputMessageContainerClasses,
  textarea: inputMessageTextareaClasses,
  actions: inputMessageActionsClasses,
  actionsList: inputMessageActionsListClasses,
  filesList: inputMessageFilesListClasses,
  containerShadow: inputMessageContainerShadowClasses,
  preview: {
    container: previewContainerClasses,
    buttonContainer: previewButtonContainerClasses,
    image: previewImageClasses,
    backdrop: previewBackdropClasses,
    overlay: previewOverlayClasses,
    actions: previewActionsClasses,
    closeButton: previewCloseButtonClasses,
    file: previewFileClasses,
    fileName: previewFileNameBaseClasses,
    fileSize: previewFileSizeBaseClasses,
  },
} as const;
