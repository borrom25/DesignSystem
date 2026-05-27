import { useState, useCallback } from "react";
import { format, isValid } from "date-fns";
import type { TimeValue } from "@/components/TimeBar";
import { dateFormat, dateTimeFormat } from "../constants";
import type {
  DateRangeBound,
  DateRangeValue,
  UseDateRangeValueProps,
} from "../DateRange.types";
import { isDateInputEmpty, normalizeDateInputValue } from "../utils/dateInput";
import {
  applyTimeToDate,
  getNextValueForBound,
  getOppositeBound,
  getSelectedDate,
  omitDraftValue,
  parseDateInput,
} from "../utils/dateRangeValue";

export const useDateRangeValue = ({
  value: controlledValue,
  defaultValue,
  onChange,
  onClear,
  disabled,
  showTimeBar = false,
}: UseDateRangeValueProps) => {
  const [internalValue, setInternalValue] = useState<DateRangeValue>(
    defaultValue ?? {}
  );
  const [draftInputValue, setDraftInputValue] = useState<
    Partial<Record<DateRangeBound, string>>
  >({});

  const isControlled = controlledValue !== undefined;
  const currentValue = isControlled ? controlledValue : internalValue;

  const updateValue = useCallback(
    (newValue: DateRangeValue) => {
      if (disabled) return;

      if (!isControlled) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
    },
    [disabled, isControlled, onChange]
  );

  const handleBoundSelect = useCallback(
    (
      activeBound: DateRangeBound,
      range: { from?: Date; to?: Date } | undefined
    ) => {
      if (disabled) return;

      const selectedDate = getSelectedDate(range, activeBound, currentValue);
      const newValue = getNextValueForBound(
        currentValue,
        activeBound,
        selectedDate,
        showTimeBar
      );

      updateValue(newValue);
      setDraftInputValue((draftValue) =>
        omitDraftValue(draftValue, activeBound)
      );

      const nextActiveBound: DateRangeBound =
        showTimeBar && newValue[activeBound]
          ? activeBound
          : newValue.start && newValue.end
            ? getOppositeBound(activeBound)
            : "end";

      return { nextActiveBound, nextValue: newValue };
    },
    [currentValue, disabled, showTimeBar, updateValue]
  );

  const handleClear = useCallback(() => {
    if (disabled) return;

    updateValue({});
    setDraftInputValue({});
    onClear?.();
  }, [disabled, onClear, updateValue]);

  const handleTimeSelect = useCallback(
    (bound: DateRangeBound, time: TimeValue) => {
      if (disabled) return;

      const targetDate = currentValue[bound];
      if (!targetDate || !isValid(targetDate)) return;

      updateValue({
        ...currentValue,
        [bound]: applyTimeToDate(targetDate, time),
      });
    },
    [currentValue, disabled, updateValue]
  );

  const formatDate = useCallback(
    (date: Date | undefined): string => {
      if (!date || !isValid(date)) return "";
      return format(date, showTimeBar ? dateTimeFormat : dateFormat);
    },
    [showTimeBar]
  );

  const handleBoundInputChange = useCallback(
    (bound: DateRangeBound, rawValue: string) => {
      if (disabled || showTimeBar) return;

      const normalizedValue = normalizeDateInputValue(rawValue);
      setDraftInputValue((draftValue) => ({
        ...draftValue,
        [bound]: normalizedValue,
      }));
    },
    [disabled, showTimeBar]
  );

  const handleBoundInputCommit = useCallback(
    (bound: DateRangeBound) => {
      if (disabled || showTimeBar) return;

      const normalizedCurrent = {
        start: currentValue.start,
        end: currentValue.end,
      };
      const sourceValue =
        draftInputValue[bound] ?? formatDate(normalizedCurrent[bound]);
      const parsedDate = parseDateInput(sourceValue);

      if (!sourceValue || isDateInputEmpty(sourceValue)) {
        const nextValue =
          bound === "start"
            ? { start: undefined, end: normalizedCurrent.end }
            : { start: normalizedCurrent.start, end: undefined };
        updateValue(nextValue);
        setDraftInputValue((draftValue) => omitDraftValue(draftValue, bound));
        return;
      }

      if (!parsedDate) {
        setDraftInputValue((draftValue) => omitDraftValue(draftValue, bound));
        return;
      }

      updateValue({
        ...normalizedCurrent,
        [bound]: parsedDate,
      });
      setDraftInputValue((draftValue) => omitDraftValue(draftValue, bound));
    },
    [
      currentValue,
      disabled,
      draftInputValue,
      formatDate,
      showTimeBar,
      updateValue,
    ]
  );

  return {
    value: currentValue,
    startInputValue: draftInputValue.start ?? formatDate(currentValue.start),
    endInputValue: draftInputValue.end ?? formatDate(currentValue.end),
    hasValue: !!currentValue.start || !!currentValue.end,
    handleClear,
    handleBoundSelect,
    handleTimeSelect,
    handleBoundInputChange,
    handleBoundInputCommit,
  };
};
