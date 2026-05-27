import { useCallback, useState } from "react";
import type {
  ChangeEventHandler,
  FocusEventHandler,
  TextareaHTMLAttributes,
} from "react";

type UseTextAreaFieldStateProps = Pick<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "value" | "defaultValue" | "onFocus" | "onBlur" | "onChange"
>;

export function useTextAreaFieldState({
  value,
  defaultValue,
  onFocus,
  onBlur,
  onChange,
}: UseTextAreaFieldStateProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [uncontrolledValue, setUncontrolledValue] = useState(
    defaultValue ?? ""
  );

  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : uncontrolledValue;
  const hasValue = String(currentValue ?? "").length > 0;
  const isLabelActive = isFocused || hasValue;
  const isPlaceholderVisible = isFocused;

  const handleFocus: FocusEventHandler<HTMLTextAreaElement> = useCallback(
    (event) => {
      setIsFocused(true);
      onFocus?.(event);
    },
    [onFocus]
  );

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
  };
}
