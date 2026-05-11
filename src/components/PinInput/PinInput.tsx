import {
  useState,
  useRef,
  useEffect,
  type ChangeEvent,
  type FocusEvent,
  type KeyboardEvent,
} from "react";
import { cn } from "@/utils";
import { Size } from "@/types";
import type { PinInputProps } from "./PinInput.types";
import { PinInputType } from "./PinInput.types";
import { pinInputStyles } from "./styles";
import { sanitizePinValue, getPinInputClassName } from "./PinInput.utils";

export function PinInput({
  size = Size.Md,
  type = PinInputType.Default,
  error = false,
  disabled = false,
  value = "",
  onChange,
  onComplete,
  autoFocus = false,
  className,
  onFocus,
  onBlur,
  onKeyDown,
  ...restProps
}: PinInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = sanitizePinValue(e.target.value);

    onChange?.(newValue);
    if (newValue) onComplete?.(newValue);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" || e.key === "Delete") {
      e.preventDefault();
      onChange?.("");
    }

    onKeyDown?.(e);
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    inputRef.current?.select();
    onFocus?.(e);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  const wrapperClassName = getPinInputClassName({
    baseClasses: pinInputStyles.base,
    sizeClasses: pinInputStyles.size[size],
    stateClasses: pinInputStyles.state,
    disabledClasses: pinInputStyles.disabled,
    errorClasses: pinInputStyles.error,
    focusedClasses: pinInputStyles.focused,
    disabled,
    isError: error,
    isFocused,
  });

  const isMasked = type === PinInputType.Masked;
  const hasValue = value !== "";

  return (
    <div className={cn(wrapperClassName, "relative", className)}>
      <input
        ref={inputRef}
        type="text"
        inputMode="numeric"
        maxLength={1}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={disabled}
        className={cn(
          pinInputStyles.native,
          isMasked && hasValue && "text-transparent"
        )}
        aria-invalid={error || undefined}
        {...restProps}
        autoComplete="off"
      />
      {isMasked && hasValue && (
        <div className={pinInputStyles.maskedDot}>
          <div className={pinInputStyles.dot} />
        </div>
      )}
    </div>
  );
}
