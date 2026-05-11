import {
  sizeClasses,
  containerSizeClasses,
  clearButtonWrapperSizeClasses,
} from "./sizes.ts";
import {
  clearButtonWrapperClasses,
  inputBaseClasses,
  inputStateClasses,
  inputDisabledClasses,
  inputAdornmentClasses,
  inputAdornmentDisabledClasses,
  inputNativeClasses,
  inputNativeDisabledClasses,
  inputClearButtonClasses,
  tagsContainerClasses,
  wrapperClasses,
  wrapperEmptyClasses,
  wrapperWithTags,
} from "./base.ts";

export const inputTagStyles = {
  base: inputBaseClasses,
  state: inputStateClasses,
  disabled: inputDisabledClasses,
  adornment: inputAdornmentClasses,
  adornmentDisabled: inputAdornmentDisabledClasses,
  native: inputNativeClasses,
  nativeDisabled: inputNativeDisabledClasses,
  clearButton: inputClearButtonClasses,
  size: sizeClasses,
  containerSize: containerSizeClasses,
  wrapper: wrapperClasses,
  wrapperEmpty: wrapperEmptyClasses,
  wrapperWithTags: wrapperWithTags,
  tagsContainer: tagsContainerClasses,
  clearButtonWrapper: clearButtonWrapperClasses,
  clearButtonWrapperSize: clearButtonWrapperSizeClasses,
} as const;
