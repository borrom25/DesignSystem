import { MutableRefObject, useCallback, useRef } from "react";
import { useClearField } from "@/shared/hooks";
import type { UseInputNumberValueProps } from "../InputNumber.types";

export function useInputNumberValue({
  value,
  onChange,
  min,
  max,
  step,
  disabled,
  onClear,
  ref,
}: UseInputNumberValueProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleIncrement = useCallback(() => {
    if (disabled) return;

    const currentValue = value ?? 0;
    const newValue = currentValue + step;

    if (max !== undefined && newValue > max) {
      onChange?.(max);
    } else {
      onChange?.(newValue);
    }
  }, [value, step, max, disabled, onChange]);

  const handleDecrement = useCallback(() => {
    if (disabled) return;

    const currentValue = value ?? 0;
    const newValue = currentValue - step;

    if (min !== undefined && newValue < min) {
      onChange?.(min);
    } else {
      onChange?.(newValue);
    }
  }, [value, step, min, disabled, onChange]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;

      if (inputValue === "" || inputValue === "-") {
        onChange?.(undefined);
        return;
      }

      const numValue = parseFloat(inputValue);

      if (isNaN(numValue)) {
        return;
      }

      let clampedValue = numValue;

      if (min !== undefined && clampedValue < min) {
        clampedValue = min;
      }

      if (max !== undefined && clampedValue > max) {
        clampedValue = max;
      }

      onChange?.(clampedValue);
    },
    [min, max, onChange]
  );

  const setInputRef = useCallback(
    (node: HTMLInputElement | null) => {
      inputRef.current = node;

      if (typeof ref === "function") {
        ref(node);
        return;
      }

      if (ref)
        (ref as MutableRefObject<HTMLInputElement | null>).current = node;
    },
    [ref]
  );

  const handleClearClick = useClearField({ ref: inputRef, onClear });

  return {
    handleIncrement,
    handleDecrement,
    handleChange,
    handleClearClick,
    setInputRef,
  };
}
