import { useMemo } from "react";
import { cn } from "@/utils";
import type { YearsViewProps } from "../Calendar.types";
import { calendarStyles } from "../styles";
import { getYearStateClassName, yearsPerPage } from "../Calendar.utils";

export function YearsView({ currentYear, onYearSelect }: YearsViewProps) {
  const { years, nextYears } = useMemo(() => {
    const startYear = Math.floor(currentYear / yearsPerPage) * yearsPerPage;
    return {
      years: Array.from({ length: yearsPerPage }, (_, i) => startYear + i),
      nextYears: Array.from(
        { length: 3 },
        (_, i) => startYear + yearsPerPage + i
      ),
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
