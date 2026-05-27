import { useState, useCallback } from "react";
import type { InputMessageProps } from "../InputMessage.types";
import { useMessageFileStore } from "../store";

type UseInputMessageStateProps = Pick<
  InputMessageProps,
  "value" | "defaultValue" | "onChange" | "onSend"
>;

export function useInputMessageState({
  value: controlledValue,
  defaultValue = "",
  onChange,
  onSend,
}: UseInputMessageStateProps) {
  const isControlled = controlledValue !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue);
  const { removeAllFiles, files } = useMessageFileStore();

  const value = isControlled ? controlledValue : internalValue;

  const handleChange = useCallback(
    (newValue: string) => {
      if (!isControlled) {
        setInternalValue(newValue);
      }
      onChange?.({ value: newValue });
    },
    [isControlled, onChange]
  );

  const handleSend = useCallback(() => {
    if (!value.trim() && !files.length) return;
    removeAllFiles();
    onSend?.(value, files);
    if (!isControlled) {
      setInternalValue("");
    }
  }, [value, onSend, isControlled, removeAllFiles, files]);

  return {
    value,
    handleChange,
    handleSend,
  };
}
