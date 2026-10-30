import { useState, useCallback, useMemo } from "react";
import type { TimeValue } from "../TimeBar.types";
import {
  clampTimeValue,
  getCurrentTime,
  getDefaultTimeValue,
  normalizeTimeValue,
} from "../utils";

interface UseTimeBarStateOptions {
  value?: TimeValue;
  defaultValue?: TimeValue;
  onChange?: (value: TimeValue) => void;
  onConfirm?: (value: TimeValue) => void;
  minTime?: TimeValue;
  maxTime?: TimeValue;
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
  minTime,
  maxTime,
}: UseTimeBarStateOptions): UseTimeBarStateReturn {
  const isControlled = value !== undefined;

  const [internalValue, setInternalValue] = useState<TimeValue>(() =>
    normalizeTimeValue(defaultValue || getDefaultTimeValue())
  );

  const timeValue = useMemo(
    () =>
      clampTimeValue(
        isControlled ? normalizeTimeValue(value) : internalValue,
        minTime,
        maxTime
      ),
    [isControlled, value, internalValue, minTime, maxTime]
  );

  const updateValue = useCallback(
    (newValue: TimeValue) => {
      const normalized = clampTimeValue(
        normalizeTimeValue(newValue),
        minTime,
        maxTime
      );
      if (!isControlled) {
        setInternalValue(normalized);
      }
      onChange?.(normalized);
    },
    [isControlled, onChange, minTime, maxTime]
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
