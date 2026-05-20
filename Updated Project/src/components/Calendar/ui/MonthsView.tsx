import { format, setMonth } from "date-fns";
import { ru } from "date-fns/locale";
import { cn } from "@/utils";
import type { MonthsViewProps } from "../Calendar.types";
import { calendarStyles } from "../styles";
import { getMonthStateClassName } from "../Calendar.utils";

const MONTHS = Array.from({ length: 12 }, (_, i) => i);
const NEXT_YEAR_MONTHS = Array.from({ length: 3 }, (_, i) => i);

export function MonthsView({
  currentYear,
  currentMonth,
  onMonthSelect,
  locale = ru,
}: MonthsViewProps) {
  return (
    <div className={calendarStyles.month.container}>
      <div className={calendarStyles.month.grid}>
        {MONTHS.map((month) => {
          const date = setMonth(new Date(currentYear, 0, 1), month);
          const monthName = format(date, "LLLL", { locale });
          const isActive = month === currentMonth;

          return (
            <button
              key={month}
              type="button"
              onClick={() => onMonthSelect(month)}
              className={cn(
                calendarStyles.month.item,
                getMonthStateClassName(isActive)
              )}
            >
              {monthName}
            </button>
          );
        })}
        {NEXT_YEAR_MONTHS.map((month) => {
          const date = setMonth(new Date(currentYear + 1, 0, 1), month);
          const monthName = format(date, "LLLL", { locale });

          return (
            <button
              key={`next-${month}`}
              type="button"
              onClick={() => {
                onMonthSelect(month, currentYear + 1);
              }}
              className={cn(
                calendarStyles.month.item,
                calendarStyles.month.nextYear
              )}
            >
              {monthName}
            </button>
          );
        })}
      </div>
    </div>
  );
}
