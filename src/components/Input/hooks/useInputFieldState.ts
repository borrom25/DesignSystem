import { useCallback, useRef } from "react";
import type { MouseEventHandler, MutableRefObject } from "react";
import { useClearField } from "@/shared/hooks";
import type { InputFieldProps } from "../ui/InputField.types";
import { useInputFieldBehavior } from "./useInputFieldBehavior";

type UseInputFieldStateProps = Pick<
  InputFieldProps,
  | "hasValue"
  | "onFocus"
  | "onBlur"
  | "onMouseUp"
  | "onClear"
  | "disabled"
  | "ref"
>;

const interactiveSelector =
  "button,a,input,textarea,select,[role='button'],[tabindex]:not([tabindex='-1'])";

export function useInputFieldState({
  hasValue = false,
  onFocus,
  onBlur,
  onMouseUp,
  onClear,
  disabled,
  ref,
}: UseInputFieldStateProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { fadeOutStyle, handleFocus, handleBlur, handleMouseUp, isFocused } =
    useInputFieldBehavior({
      hasValue,
      onFocus,
      onBlur,
      onMouseUp,
    });

  const setInputRef = useCallback(
    (node: HTMLInputElement | null) => {
      inputRef.current = node;

      if (typeof ref === "function") {
        ref(node);
        return;
      }

      if (ref) {
        (ref as MutableRefObject<HTMLInputElement | null>).current = node;
      }
    },
    [ref]
  );

  const handleClearClick = useClearField({ ref: inputRef, onClear });

  const handleWrapperMouseDown: MouseEventHandler<HTMLElement> = useCallback(
    (event) => {
      if (disabled || !(event.target instanceof Element)) return;
      if (event.target.closest(interactiveSelector)) return;

      event.preventDefault();
      inputRef.current?.focus();
    },
    [disabled]
  );

  return {
    fadeOutStyle,
    handleBlur,
    handleClearClick,
    handleFocus,
    handleMouseUp,
    handleWrapperMouseDown,
    isFocused,
    setInputRef,
  };
}
