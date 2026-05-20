import { Calendar } from "@/components/Calendar";
import { FilterPanel } from "@/components/Filter";
import { cn } from "@/utils";
import { useCalendarFilterState } from "./hooks/useCalendarFilterState.ts";
import { calendarFilterStyles } from "./styles";
import { CalendarFilterPanelProps } from "./CalendarFilter.types.ts";

export function CalendarFilterPanel({
  value,
  defaultValue,
  onApply,
  className = calendarFilterStyles.panel,
  width,
  calendarClassName = calendarFilterStyles.calendar,
  resetLabel,
  applyLabel,
  calendarProps,
}: CalendarFilterPanelProps) {
  const filter = useCalendarFilterState({
    value,
    defaultValue,
    onChange: onApply,
  });

  const { displayMonth, ...restCalendarProps } = calendarProps ?? {};

  return (
    <FilterPanel
      className={className}
      width={width}
      bodyClassName={calendarFilterStyles.filterBody}
      maxBodyHeight="none"
      showSearch={false}
      onReset={filter.clear}
      onApply={filter.apply}
      resetLabel={resetLabel}
      applyLabel={applyLabel}
      applyDisabled={!filter.isDirty}
      resetDisabled={filter.isEmpty && !filter.draft}
    >
      <Calendar
        mode="single"
        value={filter.draft}
        onChange={filter.setDraft}
        displayMonth={filter.draft ?? displayMonth}
        className={cn(calendarFilterStyles.popoverSurface, calendarClassName)}
        {...restCalendarProps}
      />
    </FilterPanel>
  );
}
