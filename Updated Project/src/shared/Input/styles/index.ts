export * from "./base";
export * from "./sizes";

import * as sharedInputBase from "./base";
import * as sharedInputSizes from "./sizes";

export const sharedInputStyles = {
  base: sharedInputBase.inputBaseClasses,
  state: sharedInputBase.inputStateClasses,
  disabled: sharedInputBase.inputDisabledClasses,
  error: sharedInputBase.inputErrorClasses,
  clear: sharedInputBase.inputClearClasses,
  clearDisabled: sharedInputBase.inputClearDisabledClasses,
  clearError: sharedInputBase.inputClearErrorClasses,
  adornment: sharedInputBase.inputAdornmentClasses,
  adornmentDisabled: sharedInputBase.inputAdornmentDisabledClasses,
  prefixSuffix: sharedInputBase.inputPrefixSuffixClasses,
  prefixSuffixDisabled: sharedInputBase.inputPrefixSuffixDisabledClasses,
  count: sharedInputBase.inputCountClasses,
  body: sharedInputBase.inputBodyClasses,
  native: sharedInputBase.inputNativeClasses,
  nativeDisabled: sharedInputBase.inputNativeDisabledClasses,
  nativeWithFloatingLabel: sharedInputBase.inputNativeWithFloatingLabelClasses,
  nativePlaceholderHidden: sharedInputBase.inputNativePlaceholderHiddenClasses,
  nativePlaceholderVisible:
    sharedInputBase.inputNativePlaceholderVisibleClasses,
  floatingLabel: sharedInputBase.inputFloatingLabelClasses,
  floatingLabelActive: sharedInputBase.inputFloatingLabelActiveClasses,
  floatingLabelDisabled: sharedInputBase.inputFloatingLabelDisabledClasses,
  floatingLabelRequiredMark:
    sharedInputBase.inputFloatingLabelRequiredMarkClasses,
  clearButton: sharedInputBase.inputClearButtonClasses,
  rightSlot: sharedInputBase.inputRightSlotClasses,
  size: sharedInputSizes.inputSizeClasses,
  clearSize: sharedInputSizes.inputClearSizeClasses,
  floatingLabelSize: sharedInputSizes.inputFloatingLabelSizeClasses,
  floatingLabelActiveSize: sharedInputSizes.inputFloatingLabelActiveSizeClasses,
  iconSizeMap: sharedInputSizes.inputIconSizeMap,
} as const;
