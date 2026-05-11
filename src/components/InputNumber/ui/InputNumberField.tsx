import { closeButtonSize, cn } from "@/utils";
import { InputAdornment, inputClearButtonClasses } from "@/shared/Input";
import type { InputNumberFieldProps } from "../InputNumber.types";
import { inputNumberStyles } from "../styles";
import { StepperButtons } from "./StepperButtons";
import { CloseBtn } from "@/components/CloseBtn";

export function InputNumberField({
  wrapperClassName,
  adornmentClassName,
  disabled = false,
  isError = false,
  inputClassName,
  onIncrement,
  onDecrement,
  clearable,
  hasValue,
  size,
  onClear,
  setInputRef,
  ...inputProps
}: InputNumberFieldProps) {
  return (
    <div className={wrapperClassName}>
      <input
        ref={setInputRef}
        type="number"
        disabled={disabled}
        className={cn(
          inputNumberStyles.native,
          inputNumberStyles.nativeNumber,
          disabled && inputNumberStyles.nativeDisabled,
          inputClassName
        )}
        aria-invalid={isError || undefined}
        {...inputProps}
        autoComplete="off"
      />

      {clearable && hasValue && (
        <CloseBtn
          size={closeButtonSize(size)}
          onMouseDown={(event) => {
            event.preventDefault();
          }}
          onClick={onClear}
          disabled={disabled}
          className={cn(inputClearButtonClasses)}
          aria-label="Clear"
        />
      )}

      <InputAdornment
        disabled={disabled}
        containerClassName={inputNumberStyles.stepperContainer}
        containerDisabledClassName={inputNumberStyles.stepperContainerDisabled}
      >
        <StepperButtons
          disabled={disabled}
          adornmentClassName={adornmentClassName}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      </InputAdornment>
    </div>
  );
}
