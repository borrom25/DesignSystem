import { closeButtonSize, cn } from "@/utils";
import { Size } from "@/types";
import { useInputFieldState } from "../hooks";
import { inputStyles } from "../styles";
import type { InputFieldProps } from "./InputField.types";
import { InputRightSlot } from "./InputRightSlot";
import { CloseBtn } from "@/components/CloseBtn";

export function InputField({
  wrapperClassName,
  adornmentClassName,
  prefixSuffixClassName,
  iconSize,
  iconLeft: IconLeft,
  iconRight: IconRight,
  prefix,
  suffix,
  countDisplay,
  clearable = true,
  hasValue = false,
  onClear,
  size = Size.Md,
  label,
  required = false,
  disabled = false,
  isError = false,
  inputClassName,
  placeholder,
  onFocus,
  onBlur,
  onMouseUp,
  style,
  ref,
  ...inputProps
}: InputFieldProps) {
  const {
    fadeOutStyle,
    handleBlur,
    handleClearClick,
    handleFocus,
    handleMouseUp,
    handleWrapperMouseDown,
    isFocused,
    setInputRef,
  } = useInputFieldState({
    hasValue,
    onFocus,
    onBlur,
    onMouseUp,
    onClear,
    disabled,
    ref,
  });
  const hasFloatingLabel = !!label;
  const isFloatingLabelActive = hasFloatingLabel && (isFocused || hasValue);

  return (
    <div className={wrapperClassName} onMouseDown={handleWrapperMouseDown}>
      {hasFloatingLabel && required && (
        <span aria-hidden className={inputStyles.floatingLabelRequiredMark}>
          *
        </span>
      )}

      {IconLeft && (
        <IconLeft
          size={iconSize}
          className={adornmentClassName}
          aria-hidden="true"
        />
      )}

      {prefix && <span className={prefixSuffixClassName}>{prefix}</span>}

      <span className={inputStyles.body}>
        {hasFloatingLabel && (
          <label
            htmlFor={inputProps.id}
            className={cn(
              inputStyles.floatingLabel,
              inputStyles.floatingLabelSize[size],
              isFloatingLabelActive && inputStyles.floatingLabelActive,
              isFloatingLabelActive &&
                inputStyles.floatingLabelActiveSize[size],
              disabled && inputStyles.floatingLabelDisabled
            )}
          >
            {label}
          </label>
        )}

        <input
          {...inputProps}
          ref={setInputRef}
          disabled={disabled}
          className={cn(
            inputStyles.native,
            disabled && inputStyles.nativeDisabled,
            hasFloatingLabel &&
              isFloatingLabelActive &&
              inputStyles.nativeWithFloatingLabel,
            hasFloatingLabel &&
              (isFloatingLabelActive
                ? inputStyles.nativePlaceholderVisible
                : inputStyles.nativePlaceholderHidden),
            inputClassName
          )}
          style={{ ...style, ...fadeOutStyle }}
          placeholder={placeholder}
          autoComplete="off"
          aria-invalid={isError || undefined}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onMouseUp={handleMouseUp}
        />
      </span>

      {clearable && hasValue && !disabled && (
        <CloseBtn
          size={closeButtonSize(size)}
          onMouseDown={(event) => {
            event.preventDefault();
          }}
          onClick={handleClearClick}
          disabled={disabled}
          className={cn(inputStyles.clearButton)}
          aria-label="Clear"
        />
      )}

      {suffix && <span className={prefixSuffixClassName}>{suffix}</span>}

      <InputRightSlot
        iconRight={IconRight}
        iconSize={iconSize}
        adornmentClassName={adornmentClassName}
      />

      {countDisplay && (
        <span className={inputStyles.count} aria-live="polite">
          {countDisplay}
        </span>
      )}
    </div>
  );
}
