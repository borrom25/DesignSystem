export * from "@/shared/Input/styles";
export * from "./sizes";
export * from "./stepper";

import * as sharedInput from "@/shared/Input/styles";
import * as inputNumberSizes from "./sizes";
import * as inputNumberStepper from "./stepper";

export const inputNumberStyles = {
  base: sharedInput.inputBaseClasses,
  state: sharedInput.inputStateClasses,
  disabled: sharedInput.inputDisabledClasses,
  error: sharedInput.inputErrorClasses,
  adornment: sharedInput.inputAdornmentClasses,
  adornmentDisabled: sharedInput.inputAdornmentDisabledClasses,
  native: sharedInput.inputNativeClasses,
  nativeDisabled: sharedInput.inputNativeDisabledClasses,
  nativeNumber: inputNumberStepper.inputNumberNativeClasses,
  size: inputNumberSizes.inputNumberSizeClasses,
  iconSizeMap: inputNumberSizes.inputNumberIconSizeMap,
  stepperContainer: inputNumberStepper.stepperContainerClasses,
  stepperContainerDisabled: inputNumberStepper.stepperContainerDisabledClasses,
  stepperButtonBase: inputNumberStepper.stepperButtonBaseClasses,
  stepperButtonTop: inputNumberStepper.stepperButtonTopClasses,
  stepperButtonBottom: inputNumberStepper.stepperButtonBottomClasses,
  stepperButtonHover: inputNumberStepper.stepperButtonHoverClasses,
} as const;
