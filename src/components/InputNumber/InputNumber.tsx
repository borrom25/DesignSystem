import { Size } from "@/types";
import { useInputIds } from "@/components/Input/hooks/useInputIds";
import type { InputNumberProps } from "./InputNumber.types";
import { useInputNumberClassNames } from "./hooks/useInputNumberClassNames";
import { useInputNumberValue } from "./hooks/useInputNumberValue";
import { Input } from "../Input/Input";
import { StepperButtons } from "./ui/StepperButtons";
import { InputAdornment } from "@/shared/Input";
import { inputNumberStyles } from "./styles";

export function InputNumber({
  size = Size.Md,
  error = false,
  disabled = false,
  label,
  required,
  hint,
  hintError,
  value,
  onChange,
  min,
  max,
  step = 1,
  className,
  inputClassName,
  id: idProp,
  clearable,
  onClear,
  ref,
  ...restProps
}: InputNumberProps) {
  const { inputId, hintId } = useInputIds({ id: idProp, hint, hintError });
  const isError = error || !!hintError;

  const { adornmentClassName } = useInputNumberClassNames({
    size,
    disabled,
    isError,
  });

  const {
    handleIncrement,
    handleDecrement,
    handleChange,
    handleClearClick,
    setInputRef,
  } = useInputNumberValue({
    value,
    onChange,
    min,
    max,
    step,
    disabled,
    onClear,
    ref,
  });

  return (
    <Input
      ref={setInputRef}
      className={className}
      hint={hint}
      hintError={hintError}
      required={required}
      label={label}
      size={size}
      clearable={clearable}
      disabled={disabled}
      error={isError}
      inputClassName={inputClassName}
      id={inputId}
      value={value ?? ""}
      onChange={handleChange}
      min={min}
      max={max}
      step={step}
      aria-required={required || undefined}
      aria-describedby={hintId}
      onClear={handleClearClick}
      suffix={
        <>
          <div className={inputNumberStyles.closeBtnRightPadding} />
          <InputAdornment
            disabled={disabled}
            containerClassName={inputNumberStyles.stepperContainer}
            containerDisabledClassName={
              inputNumberStyles.stepperContainerDisabled
            }
          >
            <StepperButtons
              disabled={disabled}
              adornmentClassName={adornmentClassName}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
            />
          </InputAdornment>
        </>
      }
      {...restProps}
    />
  );
}
