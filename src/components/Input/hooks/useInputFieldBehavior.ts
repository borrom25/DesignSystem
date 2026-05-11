import { useCallback, useMemo, useState } from "react";
import type { FocusEventHandler, MouseEventHandler } from "react";
import type { InputFieldProps } from "../ui/InputField.types";
import { getInputFadeOutStyle } from "../ui/InputField.utils";

export type UseInputFieldBehaviorProps = Pick<
  InputFieldProps,
  "hasValue" | "onFocus" | "onBlur" | "onMouseUp"
>;

export function useInputFieldBehavior({
  hasValue = false,
  onFocus,
  onBlur,
  onMouseUp,
}: UseInputFieldBehaviorProps) {
  const [isFocused, setIsFocused] = useState(false);

  const fadeOutStyle = useMemo(
    () => getInputFadeOutStyle({ isFocused, hasValue }),
    [isFocused, hasValue]
  );

  const handleFocus: FocusEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      setIsFocused(true);
      onFocus?.(event);
    },
    [onFocus]
  );

  const handleBlur: FocusEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      setIsFocused(false);
      onBlur?.(event);
    },
    [onBlur]
  );

  const handleMouseUp: MouseEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      onMouseUp?.(event);
    },
    [onMouseUp]
  );

  return { fadeOutStyle, handleFocus, handleBlur, handleMouseUp, isFocused };
}
