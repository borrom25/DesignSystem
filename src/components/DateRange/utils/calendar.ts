import { calendarMonthsDefault, calendarMonthsWithTimeBar } from "../constants";
import type { DateRangeBound, DateRangeValue } from "../DateRange.types";

export const getCalendarDisplayMonth = (
  activeBound: DateRangeBound | null,
  currentValue: DateRangeValue
): Date => {
  if (activeBound === "end") {
    return currentValue.end ?? currentValue.start ?? new Date();
  }

  return currentValue.start ?? currentValue.end ?? new Date();
};

export const getCalendarMonthCount = (showTimeBar: boolean): number =>
  showTimeBar ? calendarMonthsWithTimeBar : calendarMonthsDefault;

export const buildCalendarKey = (
  activeBound: DateRangeBound | null,
  displayMonth: Date,
  calendarMonths: number,
  open: boolean
): string =>
  `${activeBound ?? "none"}-${displayMonth.getFullYear()}-${displayMonth.getMonth()}-${calendarMonths}-${open ? "open" : "closed"}`;
