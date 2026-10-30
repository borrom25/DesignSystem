import { format, isBefore, isSameDay, isValid, parse } from "date-fns";
import type { TimeValue } from "@/components/TimeBar";
import { dateFormat } from "../constants";
import type {
  DateRangeBound,
  DateRangeDateInput,
  DateRangeNativeValue,
  DateRangeValue,
} from "../DateRange.types";
import { isDateInputComplete } from "./dateInput";

export const toNativeDate = (
  value: DateRangeDateInput | undefined
): Date | undefined => {
  if (!value) {
    return undefined;
  }

  if (value instanceof Date) {
    return isValid(value) ? value : undefined;
  }

  if (!value.isValid()) {
    return undefined;
  }

  const nativeDate = value.toDate();
  return isValid(nativeDate) ? nativeDate : undefined;
};

export const normalizeDateRangeValue = (
  value?: DateRangeValue
): DateRangeNativeValue => {
  if (!value) {
    return {};
  }

  return {
    start: toNativeDate(value.start),
    end: toNativeDate(value.end),
  };
};

export const getOppositeBound = (bound: DateRangeBound): DateRangeBound =>
  bound === "start" ? "end" : "start";

export const getFieldClickBound = (
  value: DateRangeNativeValue
): DateRangeBound => (value.start && !value.end ? "end" : "start");

export const applyTimeToDate = (date: Date, time: TimeValue): Date => {
  const nextDate = new Date(date);
  nextDate.setHours(time.hours, time.minutes, time.seconds, 0);
  return nextDate;
};

export const omitDraftValue = (
  draftValue: Partial<Record<DateRangeBound, string>>,
  bound?: DateRangeBound
) => {
  if (!bound) {
    return {};
  }

  const nextDraftValue = { ...draftValue };
  delete nextDraftValue[bound];

  return nextDraftValue;
};

export const parseDateInput = (value: string): Date | undefined => {
  if (!isDateInputComplete(value)) {
    return undefined;
  }

  const parsed = parse(value, dateFormat, new Date());

  if (!isValid(parsed) || format(parsed, dateFormat) !== value) {
    return undefined;
  }

  return parsed;
};

export const getSelectedDate = (
  range: { from?: Date; to?: Date } | undefined,
  activeBound: DateRangeBound,
  currentValue: DateRangeNativeValue
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

export const getNextValueForBound = (
  currentValue: DateRangeNativeValue,
  activeBound: DateRangeBound,
  selectedDate: Date | undefined,
  showTimeBar: boolean
): DateRangeNativeValue => {
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
