import { cn } from "@/utils";
import { Size } from "@/types";
import { FieldLabel, FieldHint } from "@/components/Field";
import { wrapperClasses } from "@/components/Field/styles";
import { useInputIds } from "@/components/Input/hooks/useInputIds";
import type { InputNumberProps } from "./InputNumber.types";
import { useInputNumberClassNames } from "./hooks/useInputNumberClassNames";
import { useInputNumberValue } from "./hooks/useInputNumberValue";
import { InputNumberField } from "./ui/InputNumberField";

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

  const { adornmentClassName, wrapperClassName } = useInputNumberClassNames({
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
    <div className={cn(wrapperClasses, className)}>
      {label && (
        <FieldLabel
          size={size}
          required={required}
          disabled={disabled}
          htmlFor={inputId}
        >
          {label}
        </FieldLabel>
      )}

      <InputNumberField
        size={size}
        clearable={clearable}
        hasValue={typeof value === "number"}
        wrapperClassName={wrapperClassName}
        adornmentClassName={adornmentClassName}
        disabled={disabled}
        isError={isError}
        inputClassName={inputClassName}
        id={inputId}
        value={value ?? ""}
        onChange={handleChange}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        min={min}
        max={max}
        step={step}
        aria-required={required || undefined}
        aria-describedby={hintId}
        onClear={handleClearClick}
        setInputRef={setInputRef}
        {...restProps}
      />

      {(hintError || hint) && (
        <FieldHint size={size} error={isError} id={hintId}>
          {hintError || hint}
        </FieldHint>
      )}
    </div>
  );
}
