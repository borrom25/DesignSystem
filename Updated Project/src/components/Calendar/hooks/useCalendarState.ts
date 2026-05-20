import { useState, useCallback, useMemo, useEffect } from "react";
import {
  startOfMonth,
  addMonths,
  subMonths,
  setMonth,
  setYear,
  isSameDay,
  isAfter,
  isBefore,
  startOfDay,
} from "date-fns";
import type { CalendarView } from "../Calendar.types";
import {
  getInitialDatesFromValue,
  callOnChange,
  handleSingleDateSelection,
  handleRangeDateSelection,
  handleMultipleDateSelection,
  type UseCalendarStateOptions,
} from "./useCalendarState.utils";

export function useCalendarState(options: UseCalendarStateOptions) {
  const {
    mode,
    value,
    disabled,
    minDate,
    maxDate,
    displayMonth,
    numberOfMonths = 1,
    pickerType = "full",
  } = options;

  const isControlled = value !== undefined;

  const getInitialDates = (): Date[] => {
    return getInitialDatesFromValue(options);
  };

  const [internalDates, setInternalDates] = useState<Date[]>(getInitialDates);
  const [currentMonth, setCurrentMonth] = useState<Date>(() => {
    if (displayMonth) {
      return startOfMonth(displayMonth);
    }

    const dates = getInitialDates();
    return dates.length > 0 ? startOfMonth(dates[0]) : startOfMonth(new Date());
  });

  const initialViewMap: Record<string, CalendarView> = {
    month: "months",
    year: "years",
    full: "days",
  };

  const [view, setView] = useState<CalendarView>(
    () => initialViewMap[pickerType]
  );

  useEffect(() => {
    if (!displayMonth) {
      return;
    }

    setCurrentMonth(startOfMonth(displayMonth));
  }, [displayMonth]);

  const selectedDates = useMemo(() => {
    if (!isControlled) return internalDates;
    if (value === undefined) return [];
    return getInitialDatesFromValue(options);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isControlled, value, internalDates, mode]);

  const rangeStart = useMemo(
    () => (mode === "range" ? selectedDates[0] : undefined),
    [mode, selectedDates]
  );

  const rangeEnd = useMemo(
    () => (mode === "range" ? selectedDates[1] : undefined),
    [mode, selectedDates]
  );

  const isDateDisabled = useCallback(
    (date: Date): boolean => {
      if (disabled === true) return true;

      const normalizedDate = startOfDay(date);

      if (minDate && isBefore(normalizedDate, startOfDay(minDate))) return true;
      if (maxDate && isAfter(normalizedDate, startOfDay(maxDate))) return true;

      if (Array.isArray(disabled)) {
        return disabled.some((d) => isSameDay(normalizedDate, d));
      }

      if (typeof disabled === "function") {
        return disabled(normalizedDate);
      }

      return false;
    },
    [disabled, minDate, maxDate]
  );

  const handleDateSelect = useCallback(
    (date: Date) => {
      if (isDateDisabled(date)) return;

      const normalizedDate = startOfDay(date);

      const handlers = {
        single: () => {
          const newValue = handleSingleDateSelection(
            normalizedDate,
            selectedDates
          );
          if (!isControlled) setInternalDates(newValue ? [newValue] : []);
          callOnChange(options, newValue);
        },
        range: () => {
          const { range, dates } = handleRangeDateSelection(
            normalizedDate,
            selectedDates
          );
          if (!isControlled) setInternalDates(dates);
          callOnChange(options, range);
        },
        multiple: () => {
          const newDates = handleMultipleDateSelection(
            normalizedDate,
            selectedDates
          );
          if (!isControlled) setInternalDates(newDates);
          callOnChange(options, newDates);
        },
      };

      handlers[mode]();
    },
    [mode, selectedDates, isControlled, options, isDateDisabled]
  );

  const goToPrevMonth = useCallback(() => {
    setCurrentMonth((prev) => subMonths(prev, 1));
  }, []);

  const goToNextMonth = useCallback(() => {
    setCurrentMonth((prev) => addMonths(prev, 1));
  }, []);

  const handleMonthSelect = useCallback(
    (month: number, year?: number) => {
      if (pickerType === "month" && mode === "single") {
        setCurrentMonth((prev) => {
          const dateWithMonth = setMonth(prev, month);
          const newDate = startOfDay(
            year !== undefined ? setYear(dateWithMonth, year) : dateWithMonth
          );

          if (!isControlled) setInternalDates([newDate]);
          callOnChange(options, newDate);

          return newDate;
        });
        return;
      }

      setCurrentMonth((prev) => {
        const dateWithMonth = setMonth(prev, month);
        return year !== undefined
          ? setYear(dateWithMonth, year)
          : dateWithMonth;
      });

      if (pickerType !== "month") {
        setView("days");
      }
    },
    [pickerType, mode, isControlled, options]
  );

  const handleYearSelect = useCallback(
    (year: number) => {
      if (pickerType === "year" && mode === "single") {
        setCurrentMonth((prev) => {
          const newDate = startOfDay(setYear(prev, year));

          if (!isControlled) setInternalDates([newDate]);
          callOnChange(options, newDate);

          return newDate;
        });
        return;
      }

      setCurrentMonth((prev) => setYear(prev, year));

      if (pickerType !== "year") {
        setView("months");
      }
    },
    [pickerType, mode, isControlled, options]
  );

  const handleViewChange = useCallback(
    (newView: CalendarView) => {
      const allowedViews: Record<string, Set<CalendarView>> = {
        month: new Set(["months", "years"]),
        year: new Set(["years"]),
        full: new Set(["days", "months", "years"]),
      };

      if (allowedViews[pickerType].has(newView)) {
        setView(newView);
      }
    },
    [pickerType]
  );

  const visibleMonths = useMemo(() => {
    return Array.from({ length: numberOfMonths }, (_, i) =>
      addMonths(currentMonth, i)
    );
  }, [currentMonth, numberOfMonths]);

  return {
    currentMonth,
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
  };
}
