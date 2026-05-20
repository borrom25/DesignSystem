import { useCallback, useMemo } from "react";
import { isSameDay, isSameMonth, isToday, startOfDay } from "date-fns";
import { cn } from "@/utils";
import { calendarStyles } from "../styles";
import type { UseCalendarClassNamesOptions } from "../Calendar.types";
import { getRangeFlags } from "../Calendar.utils";

export function useCalendarClassNames({
  mode,
  selectedDates,
  rangeStart,
  rangeEnd,
  currentMonth,
  isDateDisabled,
}: UseCalendarClassNamesOptions) {
  const selectedDateTimestamps = useMemo(
    () => new Set(selectedDates.map((date) => startOfDay(date).getTime())),
    [selectedDates]
  );

  const isDateSelected = useCallback(
    (date: Date): boolean =>
      isSameMonth(date, currentMonth) &&
      selectedDateTimestamps.has(startOfDay(date).getTime()),
    [currentMonth, selectedDateTimestamps]
  );

  const getDayClassName = useCallback(
    (date: Date): string => {
      const isOutside = !isSameMonth(date, currentMonth);
      const isSelected = isDateSelected(date);
      const isTodayDate = isToday(date);
      const isDisabled = isDateDisabled(date);
      const { isInRange: rawIsInRange } = getRangeFlags({
        mode,
        date,
        rangeStart,
        rangeEnd,
      });
      const isInRange = !isOutside && rawIsInRange;

      return cn(
        calendarStyles.day.base,
        !isDisabled && !isSelected && !isInRange && calendarStyles.day.hover,
        isSelected && calendarStyles.day.selected,
        isInRange && !isSelected && calendarStyles.day.inRange,
        !isSelected && !isInRange && isTodayDate && calendarStyles.day.today,
        isOutside && !isSelected && !isInRange && calendarStyles.day.outside,
        isDisabled && calendarStyles.day.disabled
      );
    },
    [mode, isDateSelected, rangeStart, rangeEnd, currentMonth, isDateDisabled]
  );

  const getDayWrapperClassName = useCallback(
    (date: Date): string => {
      const isOutside = !isSameMonth(date, currentMonth);
      const { hasRange, isRangeStart, isRangeEnd, isInRange } = getRangeFlags({
        mode,
        date,
        rangeStart,
        rangeEnd,
      });

      if (
        isOutside ||
        !hasRange ||
        (rangeStart && rangeEnd && isSameDay(rangeStart, rangeEnd))
      ) {
        return "";
      }

      if (isRangeStart) {
        return calendarStyles.day.wrapperRangeStart;
      }
      if (isRangeEnd) {
        return calendarStyles.day.wrapperRangeEnd;
      }
      if (isInRange) {
        return calendarStyles.day.wrapperInRange;
      }

      return "";
    },
    [mode, rangeStart, rangeEnd, currentMonth]
  );

  return {
    isDateSelected,
    getDayClassName,
    getDayWrapperClassName,
  };
}
