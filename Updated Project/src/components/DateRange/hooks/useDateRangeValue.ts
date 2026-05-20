import { useState, useCallback, useMemo } from "react";
import { format, isBefore, isSameDay, isValid } from "date-fns";
import type { TimeValue } from "@/components/TimeBar";
import type {
  DateRangeBound,
  DateRangeValue,
  UseDateRangeValueProps,
} from "../DateRange.types";

const DATE_FORMAT = "dd.MM.yyyy";
const DATE_TIME_FORMAT = "dd.MM.yyyy - HH:mm:ss";
const getOppositeBound = (bound: DateRangeBound): DateRangeBound =>
  bound === "start" ? "end" : "start";

const applyTimeToDate = (date: Date, time: TimeValue): Date => {
  const nextDate = new Date(date);
  nextDate.setHours(time.hours, time.minutes, time.seconds, 0);
  return nextDate;
};

const getSelectedDate = (
  range: { from?: Date; to?: Date } | undefined,
  activeBound: DateRangeBound,
  currentValue: DateRangeValue
) => {
  if (!range?.from && !range?.to) {
    return undefined;
  }

  if (
    activeBound === "end" &&
    currentValue.start &&
    !currentValue.end &&
    range?.from &&
    range?.to
  ) {
    if (isSameDay(range.from, currentValue.start)) {
      return range.to;
    }

    if (isSameDay(range.to, currentValue.start)) {
      return range.from;
    }
  }

  return range?.from ?? range?.to;
};

const getNextValueForBound = (
  currentValue: DateRangeValue,
  activeBound: DateRangeBound,
  selectedDate: Date | undefined,
  showTimeBar: boolean
): DateRangeValue => {
  if (!selectedDate) {
    return {};
  }

  const preserveTimeOrSetDefault = (date: Date, existingDate?: Date): Date => {
    const newDate = new Date(date);

    if (!showTimeBar) {
      return newDate;
    }

    if (existingDate) {
      newDate.setHours(
        existingDate.getHours(),
        existingDate.getMinutes(),
        existingDate.getSeconds(),
        0
      );
    } else {
      newDate.setHours(0, 0, 0, 0);
    }

    return newDate;
  };

  if (activeBound === "start") {
    const preservedStartDate = preserveTimeOrSetDefault(
      selectedDate,
      currentValue.start
    );

    if (currentValue.end && isBefore(currentValue.end, selectedDate)) {
      return {
        start: preservedStartDate,
        end: preserveTimeOrSetDefault(selectedDate, currentValue.end),
      };
    }

    return {
      start: preservedStartDate,
      end: currentValue.end,
    };
  }

  if (!currentValue.start) {
    return {
      start: preserveTimeOrSetDefault(selectedDate, currentValue.end),
      end: undefined,
    };
  }

  if (!currentValue.end) {
    if (isBefore(selectedDate, currentValue.start)) {
      return {
        start: preserveTimeOrSetDefault(selectedDate, currentValue.start),
        end: currentValue.start,
      };
    }
    return {
      start: currentValue.start,
      end: preserveTimeOrSetDefault(selectedDate, currentValue.start),
    };
  }

  if (isBefore(selectedDate, currentValue.start)) {
    return {
      start: preserveTimeOrSetDefault(selectedDate, currentValue.start),
      end: preserveTimeOrSetDefault(selectedDate, currentValue.end),
    };
  }

  return {
    start: currentValue.start,
    end: preserveTimeOrSetDefault(selectedDate, currentValue.end),
  };
};

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
      return format(date, showTimeBar ? DATE_TIME_FORMAT : DATE_FORMAT);
    },
    [showTimeBar]
  );

  const formattedStart = useMemo(
    () => formatDate(currentValue.start),
    [currentValue.start, formatDate]
  );

  const formattedEnd = useMemo(
    () => formatDate(currentValue.end),
    [currentValue.end, formatDate]
  );

  return {
    value: currentValue,
    formattedStart,
    formattedEnd,
    hasValue: !!currentValue.start || !!currentValue.end,
    handleClear,
    handleBoundSelect,
    handleTimeSelect,
  };
};
