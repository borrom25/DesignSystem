import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isAfter,
  isBefore,
  isSameDay,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import { ru } from "date-fns/locale";
import type { Locale } from "date-fns";
import type {
  CalendarMode,
  GetRangeFlagsOptions,
  RangeFlags,
  WeekStartsOn,
} from "./Calendar.types";
import { calendarStyles } from "./styles";

const calendarGridDays = 42;
const weekdayFormat = "EEEEEE";

const monthStateClassNames = [
  calendarStyles.month.inactive,
  calendarStyles.month.active,
] as const;

const yearStateClassNames = [
  calendarStyles.year.inactive,
  calendarStyles.year.active,
] as const;

export function getCalendarDisplayDate(
  mode: CalendarMode,
  selectedDates: Date[],
  fallbackDate = new Date()
) {
  if (mode === "single" && selectedDates.length > 0) {
    return selectedDates[0];
  }

  return fallbackDate;
}

export function getRangeFlags({
  mode,
  date,
  rangeStart,
  rangeEnd,
}: GetRangeFlagsOptions): RangeFlags {
  const hasRange = mode === "range" && !!rangeStart && !!rangeEnd;

  if (!hasRange || !rangeStart || !rangeEnd) {
    return {
      hasRange: false,
      isRangeStart: false,
      isRangeEnd: false,
      isInRange: false,
    };
  }

  return {
    hasRange,
    isRangeStart: isSameDay(date, rangeStart),
    isRangeEnd: isSameDay(date, rangeEnd),
    isInRange: isAfter(date, rangeStart) && isBefore(date, rangeEnd),
  };
}

export function buildCalendarDays(
  currentMonth: Date,
  weekStartsOn: WeekStartsOn
) {
  const start = startOfWeek(startOfMonth(currentMonth), { weekStartsOn });
  const end = endOfWeek(endOfMonth(currentMonth), { weekStartsOn });
  const days = eachDayOfInterval({ start, end });

  const missingDays = calendarGridDays - days.length;
  if (missingDays > 0) {
    const lastDay = days[days.length - 1];
    for (let index = 1; index <= missingDays; index += 1) {
      const nextDay = new Date(lastDay);
      nextDay.setDate(lastDay.getDate() + index);
      days.push(nextDay);
    }
  }

  return days.slice(0, calendarGridDays);
}

export function getLocalizedWeekdays(
  locale: Locale = ru,
  weekStartsOn: WeekStartsOn = 1
) {
  const start = startOfWeek(new Date(), { weekStartsOn });
  return Array.from({ length: 7 }, (_, index) => {
    const day = new Date(start);
    day.setDate(start.getDate() + index);
    const weekday = format(day, weekdayFormat, { locale });
    return weekday.charAt(0).toUpperCase() + weekday.slice(1);
  });
}

export function getMonthStateClassName(isActive: boolean): string {
  return monthStateClassNames[Number(isActive)];
}

export function getYearStateClassName(isActive: boolean): string {
  return yearStateClassNames[Number(isActive)];
}
