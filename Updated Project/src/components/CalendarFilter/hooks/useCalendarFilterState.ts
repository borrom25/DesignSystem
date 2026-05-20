import { useCallback, useMemo } from "react";
import { useDraftState } from "@/hooks/useDraftState/useDraftState.ts";
import {
  areCalendarFilterDatesEqual,
  normalizeCalendarFilterDate,
} from "../CalendarFilter.utils.ts";
import {
  UseCalendarFilterStateOptions,
  UseCalendarFilterStateReturn,
} from "../CalendarFilter.types.ts";

export function useCalendarFilterState(
  options: UseCalendarFilterStateOptions = {}
): UseCalendarFilterStateReturn {
  const { value, defaultValue, onChange } = options;

  const normalizedValue = useMemo(
    () => normalizeCalendarFilterDate(value),
    [value]
  );

  const normalizedDefault = useMemo(
    () => normalizeCalendarFilterDate(defaultValue),
    [defaultValue]
  );

  const handleChange = useCallback(
    (nextValue: Date | undefined) => {
      onChange?.(normalizeCalendarFilterDate(nextValue));
    },
    [onChange]
  );

  const draftState = useDraftState<Date | undefined>({
    value: normalizedValue,
    defaultValue: normalizedDefault,
    onChange: handleChange,
    isEqual: areCalendarFilterDatesEqual,
    isEmpty: (value) => value === undefined,
  });

  const setDraft = useCallback(
    (nextValue: Date | undefined) => {
      draftState.setDraft(normalizeCalendarFilterDate(nextValue));
    },
    [draftState]
  );

  return {
    ...draftState,
    setDraft,
  };
}
