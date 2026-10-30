import {
  inputMessageWrapperClasses,
  inputMessageTextareaClasses,
  inputMessageActionsClasses,
  inputMessageActionsListClasses,
  inputMessageContainerClasses,
  inputMessageFilesListClasses,
  inputMessageContainerShadowClasses,
} from "./base";
import { fileTilePreviewStyles } from "@/shared/FileTilePreview";

export const inputMessageStyles = {
  wrapper: inputMessageWrapperClasses,
  container: inputMessageContainerClasses,
  textarea: inputMessageTextareaClasses,
  actions: inputMessageActionsClasses,
  actionsList: inputMessageActionsListClasses,
  filesList: inputMessageFilesListClasses,
  containerShadow: inputMessageContainerShadowClasses,
  preview: fileTilePreviewStyles,
} as const;
