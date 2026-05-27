export * from "@/shared/Input/styles";
export { wrapperClasses } from "@/components/Field/styles";

import { sharedInputStyles } from "@/shared/Input/styles";

export const inputStyles = {
  base: sharedInputStyles.base,
  state: sharedInputStyles.state,
  disabled: sharedInputStyles.disabled,
  error: sharedInputStyles.error,
  clear: sharedInputStyles.clear,
  clearDisabled: sharedInputStyles.clearDisabled,
  clearError: sharedInputStyles.clearError,
  adornment: sharedInputStyles.adornment,
  adornmentDisabled: sharedInputStyles.adornmentDisabled,
  prefixSuffix: sharedInputStyles.prefixSuffix,
  prefixSuffixDisabled: sharedInputStyles.prefixSuffixDisabled,
  count: sharedInputStyles.count,
  body: sharedInputStyles.body,
  native: sharedInputStyles.native,
  nativeFullHeight: sharedInputStyles.nativeFullHeight,
  nativeDisabled: sharedInputStyles.nativeDisabled,
  nativeWithFloatingLabel: sharedInputStyles.nativeWithFloatingLabel,
  nativePlaceholderHidden: sharedInputStyles.nativePlaceholderHidden,
  nativePlaceholderVisible: sharedInputStyles.nativePlaceholderVisible,
  floatingLabel: sharedInputStyles.floatingLabel,
  floatingLabelActive: sharedInputStyles.floatingLabelActive,
  floatingLabelDisabled: sharedInputStyles.floatingLabelDisabled,
  floatingLabelRequiredMark: sharedInputStyles.floatingLabelRequiredMark,
  clearButton: sharedInputStyles.clearButton,
  rightSlot: sharedInputStyles.rightSlot,
  size: sharedInputStyles.size,
  clearSize: sharedInputStyles.clearSize,
  floatingLabelSize: sharedInputStyles.floatingLabelSize,
  floatingLabelActiveSize: sharedInputStyles.floatingLabelActiveSize,
  iconSizeMap: sharedInputStyles.iconSizeMap,
} as const;
