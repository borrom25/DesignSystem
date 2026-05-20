export * from "./stepper";
export * from "./compact";

import * as sharedInput from "@/shared/Input/styles";
import * as inputNumberStepper from "./stepper";
import { compactClasses } from "./compact";
import { closeBtnRightPadding } from "./base";

export const inputNumberStyles = {
  adornment: sharedInput.inputAdornmentClasses,
  adornmentDisabled: sharedInput.inputAdornmentDisabledClasses,
  stepperContainer: inputNumberStepper.stepperContainerClasses,
  stepperContainerDisabled: inputNumberStepper.stepperContainerDisabledClasses,
  stepperButtonBase: inputNumberStepper.stepperButtonBaseClasses,
  stepperButtonTop: inputNumberStepper.stepperButtonTopClasses,
  stepperButtonBottom: inputNumberStepper.stepperButtonBottomClasses,
  stepperButtonHover: inputNumberStepper.stepperButtonHoverClasses,
  closeBtnRightPadding: closeBtnRightPadding,
  compact: compactClasses,
} as const;
