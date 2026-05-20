import { ChevronUp, ChevronDown } from "lucide-react";
import { cn } from "@/utils";
import type { CalendarHeaderProps } from "../Calendar.types";
import { calendarStyles } from "../styles";
import { useCalendarHeader } from "../hooks/useCalendarHeader";
import { IconButton } from "@/components/IconButton";
import { Color, Type } from "@/types";

export function CalendarHeader({
  currentMonth,
  view,
  onViewChange,
  onPrevMonth,
  onNextMonth,
  showNavigation = true,
  locale,
  pickerType,
}: CalendarHeaderProps) {
  const { title, handleTitleClick, handlePrev, handleNext } = useCalendarHeader(
    {
      currentMonth,
      view,
      onViewChange,
      onPrevMonth,
      onNextMonth,
      locale,
      pickerType,
    }
  );

  return (
    <div className={calendarStyles.header}>
      <button
        type="button"
        onClick={handleTitleClick}
        className={cn(
          calendarStyles.headerTitle,
          calendarStyles.headerTitleButton
        )}
      >
        {title}
      </button>

      {showNavigation && (
        <div className={calendarStyles.headerNav}>
          <IconButton
            icon={ChevronUp}
            size="sm"
            type={Type.Ghost}
            color={Color.Inverse}
            onClick={handlePrev}
            aria-label="Предыдущий"
            title="Предыдущий"
          />
          <IconButton
            icon={ChevronDown}
            size="sm"
            type={Type.Ghost}
            color={Color.Inverse}
            onClick={handleNext}
            aria-label="Следующий"
            title="Следующий"
          />
        </div>
      )}
    </div>
  );
}
