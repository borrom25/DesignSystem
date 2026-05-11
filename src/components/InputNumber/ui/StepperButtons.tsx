import { ChevronUp, ChevronDown } from "lucide-react";
import { cn } from "@/utils";
import { inputNumberStyles } from "../styles";

export interface StepperButtonsProps {
  disabled?: boolean;
  adornmentClassName: string;
  onIncrement: () => void;
  onDecrement: () => void;
}

export function StepperButtons({
  disabled = false,
  adornmentClassName,
  onIncrement,
  onDecrement,
}: StepperButtonsProps) {
  return (
    <>
      <button
        type="button"
        onClick={onIncrement}
        disabled={disabled}
        className={cn(
          inputNumberStyles.stepperButtonBase,
          inputNumberStyles.stepperButtonTop,
          adornmentClassName,
          !disabled && inputNumberStyles.stepperButtonHover
        )}
        aria-label="Increment"
      >
        <ChevronUp size={12} />
      </button>

      <button
        type="button"
        onClick={onDecrement}
        disabled={disabled}
        className={cn(
          inputNumberStyles.stepperButtonBase,
          inputNumberStyles.stepperButtonBottom,
          adornmentClassName,
          !disabled && inputNumberStyles.stepperButtonHover
        )}
        aria-label="Decrement"
      >
        <ChevronDown size={12} />
      </button>
    </>
  );
}
