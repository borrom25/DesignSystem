import { isSameDay, isBefore } from "date-fns";
import type {
  DateRange,
  UseCalendarStateSingleOptions,
  UseCalendarStateRangeOptions,
  UseCalendarStateMultipleOptions,
} from "../Calendar.types";

export type UseCalendarStateOptions =
  | UseCalendarStateSingleOptions
  | UseCalendarStateRangeOptions
  | UseCalendarStateMultipleOptions;

export function getInitialDatesFromValue(
  options: UseCalendarStateOptions
): Date[] {
  const { mode, value, defaultValue } = options;
  const sourceValue = value !== undefined ? value : defaultValue;

  if (!sourceValue) return [];

  if (mode === "single") {
    const singleValue = sourceValue as Date;
    return singleValue ? [singleValue] : [];
  }

  if (mode === "range") {
    const rangeValue = sourceValue as DateRange;
    const dates: Date[] = [];
    if (rangeValue.from) dates.push(rangeValue.from);
    if (rangeValue.to) dates.push(rangeValue.to);
    return dates;
  }

  const multipleValue = sourceValue as Date[];
  return multipleValue || [];
}

export function callOnChange(
  options: UseCalendarStateOptions,
  newValue: Date | undefined | DateRange | Date[]
): void {
  if (options.mode === "single") {
    options.onChange?.(newValue as Date | undefined);
  } else if (options.mode === "range") {
    options.onChange?.(newValue as DateRange);
  } else {
    options.onChange?.(newValue as Date[]);
  }
}

export function handleSingleDateSelection(
  normalizedDate: Date,
  selectedDates: Date[]
): Date | undefined {
  const isAlreadySelected = selectedDates.some((d) =>
    isSameDay(d, normalizedDate)
  );
  return isAlreadySelected ? undefined : normalizedDate;
}

export function handleRangeDateSelection(
  normalizedDate: Date,
  selectedDates: Date[]
): { range: DateRange; dates: Date[] } {
  const [from, to] = selectedDates;

  if (!from || (from && to)) {
    return {
      range: { from: normalizedDate, to: undefined },
      dates: [normalizedDate],
    };
  }

  const newFrom = isBefore(normalizedDate, from) ? normalizedDate : from;
  const newTo = isBefore(normalizedDate, from) ? from : normalizedDate;

  return {
    range: { from: newFrom, to: newTo },
    dates: [newFrom, newTo],
  };
}

export function handleMultipleDateSelection(
  normalizedDate: Date,
  selectedDates: Date[]
): Date[] {
  const isAlreadySelected = selectedDates.some((d) =>
    isSameDay(d, normalizedDate)
  );

  return isAlreadySelected
    ? selectedDates.filter((d) => !isSameDay(d, normalizedDate))
    : [...selectedDates, normalizedDate];
}
