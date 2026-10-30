import type {
  ChangeEventHandler,
  FocusEventHandler,
  TextareaHTMLAttributes,
} from "react";
import { useCallback, useState } from "react";

type UseTextAreaFieldStateProps = Pick<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "value" | "defaultValue" | "onFocus" | "onBlur" | "onChange"
> & {
  onClear?: () => void;
  clearField: () => void;
};

export function useTextAreaFieldState({
  value,
  defaultValue,
  onFocus,
  onBlur,
  onChange,
  onClear,
  clearField,
}: UseTextAreaFieldStateProps) {
  const isControlled = value !== undefined;
  const [isFocused, setIsFocused] = useState(false);
  const [uncontrolledValue, setUncontrolledValue] = useState(() =>
    defaultValue == null ? "" : String(defaultValue)
  );

  const currentValue = isControlled ? value : uncontrolledValue;
  const hasValue = currentValue != null && String(currentValue) !== "";
  const isLabelActive = isFocused || hasValue;
  const isPlaceholderVisible = isFocused;

  const handleFocus: FocusEventHandler<HTMLTextAreaElement> = useCallback(
    (event) => {
      setIsFocused(true);
      onFocus?.(event);
    },
    [onFocus]
  );

  const handleClear = useCallback(() => {
    if (onClear) {
      onClear();
      return;
    }

    clearField();
  }, [clearField, onClear]);

  const handleBlur: FocusEventHandler<HTMLTextAreaElement> = useCallback(
    (event) => {
      setIsFocused(false);
      onBlur?.(event);
    },
    [onBlur]
  );

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = useCallback(
    (event) => {
      if (!isControlled) setUncontrolledValue(event.target.value);
      onChange?.(event);
    },
    [isControlled, onChange]
  );

  return {
    currentValue,
    hasValue,
    isFocused,
    isLabelActive,
    isPlaceholderVisible,
    handleFocus,
    handleBlur,
    handleChange,
    handleClear,
  };
}
