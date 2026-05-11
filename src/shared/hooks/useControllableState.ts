import { useState, useCallback } from "react";

export type UseControllableStateProps<T> = {
  value?: T;
  defaultValue: T;
  onChange?: (value: T) => void;
};

export function useControllableState<T>({
  value: controlledValue,
  defaultValue,
  onChange,
}: UseControllableStateProps<T>) {
  const [internalValue, setInternalValue] = useState<T>(defaultValue);
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;

  const setValue = useCallback(
    (next: T | ((prev: T) => T)) => {
      const nextValue =
        typeof next === "function" ? (next as (prev: T) => T)(value) : next;

      if (!isControlled) {
        setInternalValue(nextValue);
      }
      onChange?.(nextValue);
    },
    [isControlled, onChange, value]
  );

  return [value, setValue, isControlled] as const;
}

export type UseControllableBooleanProps = {
  value?: boolean;
  defaultValue?: boolean;
  onChange?: (value: boolean) => void;
};

export function useControllableBoolean({
  value: controlledValue,
  defaultValue = false,
  onChange,
}: UseControllableBooleanProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;

  const setValue = useCallback(
    (next: boolean) => {
      if (!isControlled) {
        setInternalValue(next);
      }
      onChange?.(next);
    },
    [isControlled, onChange]
  );

  const toggle = useCallback(() => {
    setValue(!value);
  }, [setValue, value]);

  const setTrue = useCallback(() => setValue(true), [setValue]);
  const setFalse = useCallback(() => setValue(false), [setValue]);

  return { value, setValue, toggle, setTrue, setFalse, isControlled };
}
