import { useState, useEffect, useRef, useCallback } from "react";
import {
  UseDebouncedValueOptions,
  UseDebouncedValueReturn,
} from "./useDebouncedValue.type.ts";

export function useDebouncedValue<T>(
  initialValue: T,
  options: UseDebouncedValueOptions = {}
): UseDebouncedValueReturn<T> {
  const { delay = 300, leading = false } = options;

  const [value, setValueState] = useState<T>(initialValue);
  const [debouncedValue, setDebouncedValue] = useState<T>(initialValue);
  const [isPending, setIsPending] = useState(false);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isFirstUpdate = useRef(true);

  const setValue = useCallback(
    (newValue: T) => {
      setValueState(newValue);

      if (leading && isFirstUpdate.current) {
        setDebouncedValue(newValue);
        isFirstUpdate.current = false;
        return;
      }

      setIsPending(true);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setDebouncedValue(newValue);
        setIsPending(false);
        timeoutRef.current = null;
      }, delay);
    },
    [delay, leading]
  );

  const flush = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setDebouncedValue(value);
    setIsPending(false);
  }, [value]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return {
    value,
    debouncedValue,
    setValue,
    flush,
    isPending,
  };
}
