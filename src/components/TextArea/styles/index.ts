import {
  textAreaBaseClasses,
  textAreaStateClasses,
  textAreaDisabledClasses,
  textAreaErrorClasses,
  textAreaNativeClasses,
  textAreaNativeDisabledClasses,
  textAreaWrapperInnerClasses,
  textAreaClearButtonClasses,
  textAreaResizeHandleClasses,
  textAreaResizeVerticalClasses,
  textAreaResizeBothClasses,
  textAreaResizeIconClasses,
} from "./base";
import { textAreaSizeClasses } from "./sizes";

export {
  textAreaBaseClasses,
  textAreaStateClasses,
  textAreaDisabledClasses,
  textAreaErrorClasses,
  textAreaNativeClasses,
  textAreaNativeDisabledClasses,
  textAreaWrapperInnerClasses,
  textAreaClearButtonClasses,
  textAreaResizeHandleClasses,
  textAreaResizeVerticalClasses,
  textAreaResizeBothClasses,
  textAreaResizeIconClasses,
};
export { textAreaSizeClasses } from "./sizes";

export const textAreaStyles = {
  base: textAreaBaseClasses,
  state: textAreaStateClasses,
  disabled: textAreaDisabledClasses,
  error: textAreaErrorClasses,
  native: textAreaNativeClasses,
  nativeDisabled: textAreaNativeDisabledClasses,
  size: textAreaSizeClasses,
  wrapperInner: textAreaWrapperInnerClasses,
  clearButton: textAreaClearButtonClasses,
  resizeHandle: textAreaResizeHandleClasses,
  resizeVertical: textAreaResizeVerticalClasses,
  resizeBoth: textAreaResizeBothClasses,
  resizeIcon: textAreaResizeIconClasses,
} as const;
