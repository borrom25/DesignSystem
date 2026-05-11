import { useMemo } from "react";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import type { CalendarGridProps } from "../Calendar.types";
import { calendarStyles } from "../styles";
import { useCalendarClassNames } from "../hooks/useCalendarClassNames";
import { buildCalendarDays, getLocalizedWeekdays } from "../Calendar.utils";

export function CalendarGrid({
  currentMonth,
  mode,
  selectedDates,
  rangeStart,
  rangeEnd,
  onDateSelect,
  isDateDisabled,
  weekStartsOn = 1,
  locale = ru,
}: CalendarGridProps) {
  const { getDayClassName, getDayWrapperClassName, isDateSelected } =
    useCalendarClassNames({
      mode,
      selectedDates,
      rangeStart,
      rangeEnd,
      currentMonth,
      isDateDisabled,
    });

  const days = useMemo(
    () => buildCalendarDays(currentMonth, weekStartsOn),
    [currentMonth, weekStartsOn]
  );

  const weekdays = useMemo(
    () => getLocalizedWeekdays(locale, weekStartsOn),
    [locale, weekStartsOn]
  );

  return (
    <div className={calendarStyles.grid}>
      {weekdays.map((day, index) => (
        <div key={`weekday-${index}`} className={calendarStyles.weekday}>
          {day}
        </div>
      ))}

      {days.map((date) => {
        const isDisabled = isDateDisabled(date);
        return (
          <div
            key={date.toISOString()}
            className={getDayWrapperClassName(date)}
          >
            <button
              type="button"
              className={getDayClassName(date)}
              onClick={() => !isDisabled && onDateSelect(date)}
              disabled={isDisabled}
              aria-label={format(date, "d MMMM yyyy", { locale })}
              aria-selected={isDateSelected(date)}
            >
              {format(date, "d")}
            </button>
          </div>
        );
      })}
    </div>
  );
}
