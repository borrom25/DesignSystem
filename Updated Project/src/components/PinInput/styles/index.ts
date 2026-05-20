export {
  pinInputBaseClasses,
  pinInputStateClasses,
  pinInputFocusedClasses,
  pinInputDisabledClasses,
  pinInputErrorClasses,
  pinInputNativeClasses,
  pinInputMaskedDotClasses,
  pinInputDotClasses,
} from "./base";
export { pinInputSizeClasses } from "./sizes";

import {
  pinInputBaseClasses,
  pinInputStateClasses,
  pinInputFocusedClasses,
  pinInputDisabledClasses,
  pinInputErrorClasses,
  pinInputNativeClasses,
  pinInputMaskedDotClasses,
  pinInputDotClasses,
} from "./base";
import { pinInputSizeClasses } from "./sizes";

export const pinInputStyles = {
  base: pinInputBaseClasses,
  state: pinInputStateClasses,
  focused: pinInputFocusedClasses,
  disabled: pinInputDisabledClasses,
  error: pinInputErrorClasses,
  native: pinInputNativeClasses,
  maskedDot: pinInputMaskedDotClasses,
  dot: pinInputDotClasses,
  size: pinInputSizeClasses,
} as const;
