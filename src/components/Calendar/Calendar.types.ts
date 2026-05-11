import type { HTMLAttributes } from "react";
import type { Locale } from "date-fns";

export const CalendarMode = {
  Single: "single",
  Multiple: "multiple",
  Range: "range",
} as const;

export type CalendarMode = (typeof CalendarMode)[keyof typeof CalendarMode];
export type WeekStartsOn = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type CalendarPickerType = "full" | "month" | "year";

export type CalendarValue<T extends CalendarMode = "single"> =
  T extends "single"
    ? Date | undefined
    : T extends "range"
      ? { from?: Date; to?: Date }
      : Date[];

export interface DateRange {
  from?: Date;
  to?: Date;
}

export type DisabledDates = boolean | Date[] | ((date: Date) => boolean);
export interface RangeFlags {
  hasRange: boolean;
  isRangeStart: boolean;
  isRangeEnd: boolean;
  isInRange: boolean;
}

export interface GetRangeFlagsOptions {
  mode: CalendarMode;
  date: Date;
  rangeStart?: Date;
  rangeEnd?: Date;
}

export const CalendarView = {
  Days: "days",
  Months: "months",
  Years: "years",
} as const;

export type CalendarView = (typeof CalendarView)[keyof typeof CalendarView];

export interface CalendarBaseProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "onChange" | "defaultValue"
> {
  disabled?: DisabledDates;
  minDate?: Date;
  maxDate?: Date;
  displayMonth?: Date;
  locale?: Locale;
  numberOfMonths?: number;
  weekStartsOn?: WeekStartsOn;
  showSelectedDate?: boolean;
  pickerType?: CalendarPickerType;
}

export interface CalendarSingleProps extends CalendarBaseProps {
  mode?: "single";
  value?: Date;
  defaultValue?: Date;
  onChange?: (date: Date | undefined) => void;
}

export interface CalendarMultipleProps extends CalendarBaseProps {
  mode: "multiple";
  value?: Date[];
  defaultValue?: Date[];
  onChange?: (dates: Date[]) => void;
}

export interface CalendarRangeProps extends CalendarBaseProps {
  mode: "range";
  value?: DateRange;
  defaultValue?: DateRange;
  onChange?: (range: DateRange) => void;
}

export type CalendarProps =
  | CalendarSingleProps
  | CalendarMultipleProps
  | CalendarRangeProps;

export interface CalendarLocale {
  yearLabel?: string;
  yearSuffix?: string;
}

export interface CalendarHeaderProps {
  currentMonth: Date;
  view: CalendarView;
  onViewChange: (view: CalendarView) => void;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  showNavigation?: boolean;
  locale?: Locale;
  pickerType?: CalendarPickerType;
  localeText?: CalendarLocale;
}

export interface CalendarGridProps {
  currentMonth: Date;
  mode: CalendarMode;
  selectedDates: Date[];
  rangeStart?: Date;
  rangeEnd?: Date;
  onDateSelect: (date: Date) => void;
  isDateDisabled: (date: Date) => boolean;
  weekStartsOn?: WeekStartsOn;
  locale?: Locale;
}

export interface MonthsViewProps {
  currentYear: number;
  currentMonth: number;
  onMonthSelect: (month: number, year?: number) => void;
  locale?: Locale;
}

export interface YearsViewProps {
  currentYear: number;
  onYearSelect: (year: number) => void;
  minYear?: number;
  maxYear?: number;
}

export interface UseCalendarStateSingleOptions {
  mode: "single";
  value?: Date;
  defaultValue?: Date;
  onChange?: (date: Date | undefined) => void;
  disabled?: DisabledDates;
  minDate?: Date;
  maxDate?: Date;
  displayMonth?: Date;
  numberOfMonths?: number;
  pickerType?: CalendarPickerType;
}

export interface UseCalendarStateRangeOptions {
  mode: "range";
  value?: DateRange;
  defaultValue?: DateRange;
  onChange?: (range: DateRange) => void;
  disabled?: DisabledDates;
  minDate?: Date;
  maxDate?: Date;
  displayMonth?: Date;
  numberOfMonths?: number;
  pickerType?: CalendarPickerType;
}

export interface UseCalendarStateMultipleOptions {
  mode: "multiple";
  value?: Date[];
  defaultValue?: Date[];
  onChange?: (dates: Date[]) => void;
  disabled?: DisabledDates;
  minDate?: Date;
  maxDate?: Date;
  displayMonth?: Date;
  numberOfMonths?: number;
  pickerType?: CalendarPickerType;
}

export interface UseCalendarClassNamesOptions {
  mode: CalendarMode;
  selectedDates: Date[];
  rangeStart?: Date;
  rangeEnd?: Date;
  currentMonth: Date;
  isDateDisabled: (date: Date) => boolean;
}
