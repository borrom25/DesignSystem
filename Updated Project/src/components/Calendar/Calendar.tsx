import { format, getMonth, getYear } from "date-fns";
import { ru } from "date-fns/locale";
import { cn } from "@/utils";
import type { CalendarProps } from "./Calendar.types";
import { calendarStyles } from "./styles";
import { useCalendarState } from "./hooks/useCalendarState";
import type { UseCalendarStateOptions } from "./hooks/useCalendarState.utils";
import { getCalendarDisplayDate } from "./Calendar.utils";
import { CalendarHeader } from "./ui/CalendarHeader";
import { CalendarGrid } from "./ui/CalendarGrid";
import { MonthsView } from "./ui/MonthsView";
import { YearsView } from "./ui/YearsView";

export function Calendar({
  mode = "single",
  value,
  defaultValue,
  onChange,
  disabled,
  minDate,
  maxDate,
  displayMonth,
  locale = ru,
  numberOfMonths = 1,
  weekStartsOn = 1,
  showSelectedDate = true,
  pickerType = "full",
  className,
  ...restProps
}: CalendarProps) {
  const {
    visibleMonths,
    selectedDates,
    rangeStart,
    rangeEnd,
    view,
    isDateDisabled,
    handleDateSelect,
    goToPrevMonth,
    goToNextMonth,
    handleMonthSelect,
    handleYearSelect,
    handleViewChange,
  } = useCalendarState({
    mode,
    value,
    defaultValue,
    onChange,
    disabled,
    minDate,
    maxDate,
    displayMonth,
    numberOfMonths,
    pickerType,
  } as UseCalendarStateOptions);

  const displayDate = getCalendarDisplayDate(mode, selectedDates);

  const formattedDisplayDate = format(displayDate, "EEEE, d MMMM", { locale });
  const renderedMonths =
    view === "days" ? visibleMonths : visibleMonths.slice(0, 1);

  return (
    <div
      className={cn(calendarStyles.base, className)}
      role="application"
      aria-label="Календарь"
      {...restProps}
    >
      <div className={calendarStyles.container}>
        {renderedMonths.map((monthDate, index) => {
          const isLast = index === renderedMonths.length - 1;
          const showNavigation = renderedMonths.length === 1 || isLast;
          const month = getMonth(monthDate);
          const year = getYear(monthDate);

          return (
            <div
              key={monthDate.toISOString()}
              className={calendarStyles.monthContainer}
            >
              {showSelectedDate && index === 0 && (
                <div className={calendarStyles.selectedDateHeader}>
                  {formattedDisplayDate}
                </div>
              )}

              <CalendarHeader
                currentMonth={monthDate}
                view={view}
                onViewChange={handleViewChange}
                onPrevMonth={goToPrevMonth}
                onNextMonth={goToNextMonth}
                showNavigation={showNavigation}
                locale={locale}
                pickerType={pickerType}
              />

              {view === "days" && pickerType === "full" && (
                <CalendarGrid
                  currentMonth={monthDate}
                  mode={mode}
                  selectedDates={selectedDates}
                  rangeStart={rangeStart}
                  rangeEnd={rangeEnd}
                  onDateSelect={handleDateSelect}
                  isDateDisabled={isDateDisabled}
                  weekStartsOn={weekStartsOn}
                  locale={locale}
                />
              )}

              {view === "months" &&
                (pickerType === "full" || pickerType === "month") &&
                index === 0 && (
                  <MonthsView
                    currentYear={year}
                    currentMonth={month}
                    onMonthSelect={handleMonthSelect}
                    locale={locale}
                  />
                )}

              {view === "years" &&
                (pickerType === "full" ||
                  pickerType === "month" ||
                  pickerType === "year") &&
                index === 0 && (
                  <YearsView
                    currentYear={year}
                    onYearSelect={handleYearSelect}
                  />
                )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
