import { ru } from "date-fns/locale";
import { cn } from "@/utils";
import { Calendar } from "@/components/Calendar";
import { calendarMonthsDefault } from "../constants";
import type { DateRangeValue } from "../DateRange.types";
import { dateRangeStyles } from "../styles";

export interface DateRangeCalendarProps {
  value: DateRangeValue;
  onSelect: (range: { from?: Date; to?: Date } | undefined) => void;
  displayMonth?: Date;
  numberOfMonths?: number;
  disabled?: boolean;
  className?: string;
}

export function DateRangeCalendar({
  value,
  onSelect,
  displayMonth,
  numberOfMonths = calendarMonthsDefault,
  disabled = false,
  className,
}: DateRangeCalendarProps) {
  return (
    <Calendar
      mode="range"
      value={{
        from: value.start,
        to: value.end,
      }}
      onChange={onSelect}
      displayMonth={displayMonth}
      numberOfMonths={numberOfMonths}
      locale={ru}
      disabled={disabled}
      showSelectedDate={false}
      className={cn(dateRangeStyles.calendar, className)}
    />
  );
}
