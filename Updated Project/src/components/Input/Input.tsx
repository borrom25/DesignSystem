import { cn } from "@/utils";
import { Size } from "@/types";
import { FieldHint } from "@/components/Field";
import type { InputProps } from "./Input.types";
import { InputVariant } from "./Input.types";
import { wrapperClasses } from "./styles";
import { useInputState } from "./hooks";
import { InputField } from "./ui/InputField";

export function Input({
  size = Size.Md,
  variant = InputVariant.Default,
  error = false,
  disabled = false,
  label,
  required,
  hint,
  hintError,
  iconLeft: IconLeft,
  iconRight: IconRight,
  prefix,
  suffix,
  count,
  maxCount,
  className,
  inputClassName,
  id: idProp,
  clearable = true,
  onClear,
  value: valueProp,
  defaultValue,
  onChange,
  maxLength,
  ref,
  ...restProps
}: InputProps) {
  const {
    adornmentClassName,
    countDisplay,
    handleChange,
    handleClear,
    hasValue,
    hintId,
    iconSize,
    inputId,
    inputValue,
    isError,
    prefixSuffixClassName,
    wrapperClassName,
  } = useInputState({
    size,
    variant,
    disabled,
    error,
    hint,
    hintError,
    id: idProp,
    count,
    maxCount,
    value: valueProp,
    defaultValue,
    onChange,
    onClear,
  });

  return (
    <div className={cn(wrapperClasses, className)}>
      <InputField
        ref={ref}
        wrapperClassName={wrapperClassName}
        adornmentClassName={adornmentClassName}
        prefixSuffixClassName={prefixSuffixClassName}
        iconSize={iconSize}
        iconLeft={IconLeft}
        iconRight={IconRight}
        prefix={prefix}
        suffix={suffix}
        countDisplay={countDisplay}
        clearable={clearable}
        hasValue={hasValue}
        onClear={handleClear}
        size={size}
        label={label}
        required={required}
        disabled={disabled}
        isError={isError}
        inputClassName={inputClassName}
        value={inputValue}
        onChange={handleChange}
        id={inputId}
        maxLength={maxLength ?? maxCount}
        aria-required={required || undefined}
        aria-describedby={hintId}
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
