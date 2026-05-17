export * from "./stepper";

import * as sharedInput from "@/shared/Input/styles";
import * as inputNumberStepper from "./stepper";
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
} as const;
