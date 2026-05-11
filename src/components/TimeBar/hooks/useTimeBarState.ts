import { useState, useCallback, useMemo } from "react";
import type { TimeValue } from "../TimeBar.types";
import {
  getCurrentTime,
  getDefaultTimeValue,
  normalizeTimeValue,
} from "../utils";

interface UseTimeBarStateOptions {
  value?: TimeValue;
  defaultValue?: TimeValue;
  onChange?: (value: TimeValue) => void;
  onConfirm?: (value: TimeValue) => void;
}

interface UseTimeBarStateReturn {
  timeValue: TimeValue;
  setHours: (hours: number) => void;
  setMinutes: (minutes: number) => void;
  setSeconds: (seconds: number) => void;
  setToNow: () => void;
  confirm: () => void;
}

export function useTimeBarState({
  value,
  defaultValue,
  onChange,
  onConfirm,
}: UseTimeBarStateOptions): UseTimeBarStateReturn {
  const isControlled = value !== undefined;

  const [internalValue, setInternalValue] = useState<TimeValue>(() =>
    normalizeTimeValue(defaultValue || getDefaultTimeValue())
  );

  const timeValue = useMemo(() => {
    if (isControlled) {
      return normalizeTimeValue(value);
    }
    return internalValue;
  }, [isControlled, value, internalValue]);

  const updateValue = useCallback(
    (newValue: TimeValue) => {
      const normalized = normalizeTimeValue(newValue);
      if (!isControlled) {
        setInternalValue(normalized);
      }
      onChange?.(normalized);
    },
    [isControlled, onChange]
  );

  const setHours = useCallback(
    (hours: number) => {
      updateValue({ ...timeValue, hours });
    },
    [timeValue, updateValue]
  );

  const setMinutes = useCallback(
    (minutes: number) => {
      updateValue({ ...timeValue, minutes });
    },
    [timeValue, updateValue]
  );

  const setSeconds = useCallback(
    (seconds: number) => {
      updateValue({ ...timeValue, seconds });
    },
    [timeValue, updateValue]
  );

  const setToNow = useCallback(() => {
    const now = getCurrentTime();
    updateValue(now);
  }, [updateValue]);

  const confirm = useCallback(() => {
    onConfirm?.(timeValue);
  }, [onConfirm, timeValue]);

  return {
    timeValue,
    setHours,
    setMinutes,
    setSeconds,
    setToNow,
    confirm,
  };
}
