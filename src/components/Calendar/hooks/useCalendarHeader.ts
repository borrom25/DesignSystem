import { useCallback, useMemo } from "react";
import { format, getYear } from "date-fns";
import type { Locale } from "date-fns";
import { CalendarView } from "../Calendar.types";
import type {
  CalendarHeaderProps,
  CalendarView as CalendarViewType,
  CalendarLocale,
} from "../Calendar.types";

const nextViewMap: Record<CalendarViewType, CalendarViewType> = {
  [CalendarView.Days]: CalendarView.Months,
  [CalendarView.Months]: CalendarView.Years,
  [CalendarView.Years]: CalendarView.Days,
};

const yearsPerPage = 12;

const defaultLocaleText: Required<CalendarLocale> = {
  yearLabel: "Год",
  yearSuffix: "год",
};

function getNextView(view: CalendarViewType): CalendarViewType {
  return nextViewMap[view];
}

function getYearsRangeTitle(currentMonth: Date): string {
  const year = getYear(currentMonth);
  const startYear = Math.floor(year / yearsPerPage) * yearsPerPage;
  return `${startYear} - ${startYear + yearsPerPage - 1}`;
}

function getMonthsViewTitle(
  currentMonth: Date,
  pickerType?: string,
  localeText?: CalendarLocale
): string {
  const year = getYear(currentMonth);
  const texts = { ...defaultLocaleText, ...localeText };

  return pickerType === "month"
    ? texts.yearLabel
    : `${year} ${texts.yearSuffix}`;
}

function getDaysViewTitle(currentMonth: Date, locale?: Locale): string {
  return format(currentMonth, "LLLL yyyy", { locale });
}

export function useCalendarHeader({
  currentMonth,
  view,
  onViewChange,
  onPrevMonth,
  onNextMonth,
  locale,
  pickerType,
  localeText,
}: CalendarHeaderProps) {
  const isDaysView = view === CalendarView.Days;

  const title = useMemo(() => {
    const titleGenerators: Record<CalendarViewType, () => string> = {
      [CalendarView.Years]: () => getYearsRangeTitle(currentMonth),
      [CalendarView.Months]: () =>
        getMonthsViewTitle(currentMonth, pickerType, localeText),
      [CalendarView.Days]: () => getDaysViewTitle(currentMonth, locale),
    };

    return titleGenerators[view]();
  }, [currentMonth, locale, localeText, pickerType, view]);

  const handleTitleClick = useCallback(() => {
    onViewChange(getNextView(view));
  }, [onViewChange, view]);

  const handlePrev = useCallback(() => {
    if (isDaysView) {
      onPrevMonth();
    }
  }, [isDaysView, onPrevMonth]);

  const handleNext = useCallback(() => {
    if (isDaysView) {
      onNextMonth();
    }
  }, [isDaysView, onNextMonth]);

  return {
    isDaysView,
    title,
    handleTitleClick,
    handlePrev,
    handleNext,
  };
}
