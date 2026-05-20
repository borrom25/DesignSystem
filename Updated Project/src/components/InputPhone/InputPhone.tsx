import { cn } from "@/utils";
import { Size } from "@/types";
import { FieldHint } from "@/components/Field";
import { wrapperClasses } from "@/components/Field/styles";
import { InputField } from "@/components/Input/ui/InputField";
import { InputVariant } from "@/components/Input";
import type { InputPhoneProps } from "./InputPhone.types";
import { useInputPhoneState } from "./hooks";
import { PhoneFlagIsland, PhonePrefix } from "./ui";
import { phoneDefaultInputMode, phonePattern } from "./InputPhone.utils";
import { inputPhoneStyles } from "./styles";

export function InputPhone({
  size = Size.Md,
  variant = InputVariant.Default,
  error = false,
  disabled = false,
  label,
  required,
  hint,
  hintError,
  iconLeft,
  iconRight,
  suffix,
  count,
  maxCount,
  className,
  inputClassName,
  id: idProp,
  clearable = true,
  value,
  defaultValue,
  onChange,
  onClear,
  placeholder,
  maxLength,
  showFlagIsland = true,
  inputMode = phoneDefaultInputMode,
  ref,
  ...restProps
}: InputPhoneProps) {
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
  } = useInputPhoneState({
    size,
    variant,
    disabled,
    error,
    hint,
    hintError,
    id: idProp,
    count,
    maxCount,
    value,
    defaultValue,
    onChange,
    onClear,
  });

  return (
    <div className={cn(wrapperClasses, className)}>
      <InputField
        ref={ref}
        wrapperClassName={cn(
          wrapperClassName,
          inputPhoneStyles.wrapperSize[size]
        )}
        adornmentClassName={adornmentClassName}
        prefixSuffixClassName={prefixSuffixClassName}
        iconSize={iconSize}
        iconLeft={iconLeft}
        iconRight={iconRight}
        prefix={
          showFlagIsland ? (
            <PhoneFlagIsland size={size} disabled={disabled} />
          ) : (
            <PhonePrefix />
          )
        }
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
        type="tel"
        inputMode={inputMode}
        placeholder={placeholder}
        maxLength={maxLength ?? maxCount}
        pattern={phonePattern}
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
