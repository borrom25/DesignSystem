import { useMemo } from "react";
import { cn } from "@/utils";
import type { YearsViewProps } from "../Calendar.types";
import { calendarStyles } from "../styles";
import { getYearStateClassName } from "../Calendar.utils";

export function YearsView({ currentYear, onYearSelect }: YearsViewProps) {
  const { years, nextYears } = useMemo(() => {
    const startYear = Math.floor(currentYear / 12) * 12;
    return {
      years: Array.from({ length: 12 }, (_, i) => startYear + i),
      nextYears: Array.from({ length: 3 }, (_, i) => startYear + 12 + i),
    };
  }, [currentYear]);

  return (
    <div className={calendarStyles.viewContainer}>
      <div className={calendarStyles.year.grid}>
        {years.map((year) => {
          const isActive = year === currentYear;

          return (
            <button
              key={year}
              type="button"
              onClick={() => onYearSelect(year)}
              className={cn(
                calendarStyles.year.item,
                getYearStateClassName(isActive)
              )}
            >
              {year}
            </button>
          );
        })}
        {nextYears.map((year) => (
          <button
            key={`next-${year}`}
            type="button"
            onClick={() => onYearSelect(year)}
            className={cn(
              calendarStyles.year.item,
              calendarStyles.year.nextDecade
            )}
          >
            {year}
          </button>
        ))}
      </div>
    </div>
  );
}
