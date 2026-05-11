import type { ReactNode } from "react";
import { endOfDay, startOfDay } from "date-fns";
import { FilterPanel } from "@/components/Filter";
import {
  FilterList,
  useFilterSearch,
  useFilterState,
} from "@/components/FilterList";
import { DateRange } from "@/components/DateRange";
import { InputNumber } from "@/components/InputNumber";
import type {
  FilterListOption,
  FilterListGroup,
} from "@/components/FilterList/FilterList.types";
import { Calendar } from "@/components/Calendar";
import { usePopover } from "@/components/Popover/Popover.context";
import { useCalendarFilterState } from "@/components";
import { useDraftState } from "@/hooks/useDraftState/useDraftState.ts";
import { Size } from "@/types";
import { cn } from "@/utils";
import type {
  ColumnTextFilterConfig,
  ListFilterConfig,
  DateFilterConfig,
  DateRangeFilterConfig,
  DateRangeFilterValue,
  NumberRangeFilterConfig,
  NumberRangeValue,
  CustomFilterConfig,
  ColumnFilterConfig,
  DataTableFiltersState,
  FilterSchema,
} from "../types/DataTable.filter.types";
import { isEmptyFilterValue } from "../utils/columnFiltersMapping";

const EMPTY_DATE_RANGE_VALUE: DateRangeFilterValue = {
  start: undefined,
  end: undefined,
};

const EMPTY_NUMBER_RANGE_VALUE: NumberRangeValue = {
  min: undefined,
  max: undefined,
};

function toDateValue(value: unknown): Date | undefined {
  if (value instanceof Date) {
    return Number.isNaN(value.getTime()) ? undefined : value;
  }

  if (typeof value === "string" || typeof value === "number") {
    const parsed = new Date(value);
    return Number.isNaN(parsed.getTime()) ? undefined : parsed;
  }

  return undefined;
}

function hasTimePart(value: Date): boolean {
  return (
    value.getHours() !== 0 ||
    value.getMinutes() !== 0 ||
    value.getSeconds() !== 0 ||
    value.getMilliseconds() !== 0
  );
}

function normalizeDateRangeBoundary(
  value: Date | undefined,
  boundary: "start" | "end"
): Date | undefined {
  if (!value) {
    return undefined;
  }

  if (hasTimePart(value)) {
    return value;
  }

  return boundary === "start" ? startOfDay(value) : endOfDay(value);
}

function normalizeDateRangeValue(value: unknown): DateRangeFilterValue {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return EMPTY_DATE_RANGE_VALUE;
  }

  const range = value as Partial<DateRangeFilterValue>;

  return {
    start: toDateValue(range.start),
    end: toDateValue(range.end),
  };
}

function toAppliedDateRangeValue(value: unknown): DateRangeFilterValue {
  const range = normalizeDateRangeValue(value);

  return {
    start: normalizeDateRangeBoundary(range.start, "start"),
    end: normalizeDateRangeBoundary(range.end, "end"),
  };
}

function areDateRangesEqual(
  left: DateRangeFilterValue,
  right: DateRangeFilterValue
): boolean {
  const leftStart = left.start?.getTime();
  const rightStart = right.start?.getTime();
  const leftEnd = left.end?.getTime();
  const rightEnd = right.end?.getTime();

  return leftStart === rightStart && leftEnd === rightEnd;
}

function isDateRangeEmpty(value: DateRangeFilterValue): boolean {
  return !value.start && !value.end;
}

function normalizeNumberRangeValue(value: unknown): NumberRangeValue {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return EMPTY_NUMBER_RANGE_VALUE;
  }

  const range = value as Partial<NumberRangeValue>;

  return {
    min: typeof range.min === "number" ? range.min : undefined,
    max: typeof range.max === "number" ? range.max : undefined,
  };
}

function areNumberRangesEqual(
  left: NumberRangeValue,
  right: NumberRangeValue
): boolean {
  return left.min === right.min && left.max === right.max;
}

function isNumberRangeEmpty(value: NumberRangeValue): boolean {
  return value.min === undefined && value.max === undefined;
}

interface DataTableListFilterProps {
  config: ListFilterConfig;
  value: unknown[];
  onApply: (value: unknown[]) => void;
}

export function DataTableListFilter({
  config,
  value,
  onApply,
}: DataTableListFilterProps) {
  const filter = useFilterState<unknown>({
    value,
    onChange: onApply,
  });

  const search = useFilterSearch<unknown>({
    options: config.options as FilterListOption<unknown>[] | undefined,
    groups: config.groups as FilterListGroup<unknown>[] | undefined,
    getSearchText: config.getSearchText as
      | ((option: FilterListOption<unknown>) => string)
      | undefined,
  });

  const showSearch = config.searchable ?? true;

  return (
    <FilterPanel
      className={config.className}
      width={config.popoverWidth ?? 270}
      showSearch={showSearch}
      searchValue={search.searchValue}
      onSearchChange={search.setSearchValue}
      onSearchClear={search.clearSearch}
      searchPlaceholder={config.searchPlaceholder ?? "Поиск"}
      onReset={() => {
        filter.clear();
        search.clearSearch();
      }}
      onApply={() => {
        filter.apply();
        search.clearSearch();
      }}
      applyDisabled={!filter.isDirty}
      resetDisabled={
        filter.isEmpty && filter.draft.length === 0 && !search.searchValue
      }
    >
      {search.hasResults ? (
        <FilterList
          options={search.filteredOptions}
          groups={search.filteredGroups}
          value={filter.draft}
          onChange={filter.setDraft}
          showSelectAll={config.selectAll ?? true}
          selectAllLabel={config.selectAllLabel}
        />
      ) : (
        <div className="px-2 py-6 text-center text-sm text-secondary">
          {config.emptyMessage ?? "Ничего не найдено"}
        </div>
      )}
    </FilterPanel>
  );
}

interface DataTableColumnFilterProps {
  config: ColumnTextFilterConfig;
  value: string;
  onApply: (value: string) => void;
}

export function DataTableColumnFilter({
  config,
  value,
  onApply,
}: DataTableColumnFilterProps) {
  const filter = useDraftState<string>({
    value,
    defaultValue: config.defaultValue ?? "",
    onChange: onApply,
  });

  return (
    <FilterPanel
      className={config.className}
      width={config.popoverWidth ?? 270}
      showSearch
      searchValue={filter.draft}
      onSearchChange={filter.setDraft}
      onSearchClear={() => filter.setDraft("")}
      searchPlaceholder={config.searchPlaceholder ?? "Поиск"}
      bodyClassName="hidden"
      onReset={filter.clear}
      onApply={filter.apply}
      resetLabel={config.resetLabel}
      applyLabel={config.applyLabel}
      applyDisabled={!filter.isDirty}
      resetDisabled={filter.isEmpty && filter.draft.length === 0}
    />
  );
}

interface DataTableDateFilterProps {
  config: DateFilterConfig;
  value: Date | undefined;
  onApply: (value: Date | undefined) => void;
}

export function DataTableDateFilter({
  config,
  value,
  onApply,
}: DataTableDateFilterProps) {
  const filter = useCalendarFilterState({
    value,
    onChange: onApply,
  });

  const { displayMonth, ...restCalendarProps } = config.calendarProps ?? {};

  return (
    <FilterPanel
      className={config.className}
      width={config.popoverWidth ?? 270}
      bodyClassName="gap-0 overflow-hidden p-0"
      maxBodyHeight="none"
      showSearch={false}
      onReset={filter.clear}
      onApply={filter.apply}
      resetLabel={config.resetLabel}
      applyLabel={config.applyLabel}
      applyDisabled={!filter.isDirty}
      resetDisabled={filter.isEmpty && !filter.draft}
    >
      <Calendar
        mode="single"
        value={filter.draft}
        onChange={filter.setDraft}
        displayMonth={filter.draft ?? displayMonth}
        className="rounded-none border-0"
        {...restCalendarProps}
      />
    </FilterPanel>
  );
}

interface DataTableDateRangeFilterProps {
  config: DateRangeFilterConfig;
  value: DateRangeFilterValue;
  onApply: (value: DateRangeFilterValue) => void;
}

export function DataTableDateRangeFilter({
  config,
  value,
  onApply,
}: DataTableDateRangeFilterProps) {
  const filter = useDraftState<DateRangeFilterValue>({
    value: normalizeDateRangeValue(value),
    defaultValue: normalizeDateRangeValue(config.defaultValue),
    onChange: (nextValue) => onApply(toAppliedDateRangeValue(nextValue)),
    isEqual: areDateRangesEqual,
    isEmpty: isDateRangeEmpty,
  });

  return (
    <FilterPanel
      className={config.className}
      width={config.popoverWidth ?? 274}
      bodyClassName="overflow-visible"
      maxBodyHeight="none"
      showSearch={false}
      onReset={filter.clear}
      onApply={filter.apply}
      resetLabel={config.resetLabel}
      applyLabel={config.applyLabel}
      applyDisabled={!filter.isDirty}
      resetDisabled={filter.isEmpty && isDateRangeEmpty(filter.draft)}
    >
      <DateRange
        {...config.dateRangeProps}
        size={Size.Sm}
        value={filter.draft}
        placeholderStart={config.placeholderStart}
        placeholderEnd={config.placeholderEnd}
        onChange={(nextValue) => {
          filter.setDraft(normalizeDateRangeValue(nextValue));
        }}
        onClear={() => {
          filter.setDraft(EMPTY_DATE_RANGE_VALUE);
        }}
      />
    </FilterPanel>
  );
}

interface DataTableNumberRangeFilterProps {
  config: NumberRangeFilterConfig;
  value: NumberRangeValue;
  onApply: (value: NumberRangeValue) => void;
}

export function DataTableNumberRangeFilter({
  config,
  value,
  onApply,
}: DataTableNumberRangeFilterProps) {
  const filter = useDraftState<NumberRangeValue>({
    value: normalizeNumberRangeValue(value),
    defaultValue: normalizeNumberRangeValue(config.defaultValue),
    onChange: (nextValue) => onApply(normalizeNumberRangeValue(nextValue)),
    isEqual: areNumberRangesEqual,
    isEmpty: isNumberRangeEmpty,
  });

  const {
    className: minInputClassName,
    placeholder: minInputPlaceholder,
    ...minInputProps
  } = config.minInputProps ?? {};
  const {
    className: maxInputClassName,
    placeholder: maxInputPlaceholder,
    ...maxInputProps
  } = config.maxInputProps ?? {};

  return (
    <FilterPanel
      className={config.className}
      width={config.popoverWidth ?? 242}
      bodyClassName="overflow-visible"
      maxBodyHeight="none"
      showSearch={false}
      onReset={filter.clear}
      onApply={filter.apply}
      resetLabel={config.resetLabel}
      applyLabel={config.applyLabel}
      applyDisabled={!filter.isDirty}
      resetDisabled={filter.isEmpty && isNumberRangeEmpty(filter.draft)}
    >
      <div className="flex items-start gap-2">
        <InputNumber
          {...minInputProps}
          size={Size.Sm}
          className={cn("min-w-0 w-full flex-1", minInputClassName)}
          placeholder={minInputPlaceholder ?? config.minPlaceholder ?? "От"}
          value={filter.draft.min}
          onChange={(nextValue) => {
            filter.setDraft((prev) => ({
              ...normalizeNumberRangeValue(prev),
              min: nextValue,
            }));
          }}
        />
        <InputNumber
          {...maxInputProps}
          size={Size.Sm}
          className={cn("min-w-0 w-full flex-1", maxInputClassName)}
          placeholder={maxInputPlaceholder ?? config.maxPlaceholder ?? "До"}
          value={filter.draft.max}
          onChange={(nextValue) => {
            filter.setDraft((prev) => ({
              ...normalizeNumberRangeValue(prev),
              max: nextValue,
            }));
          }}
        />
      </div>
    </FilterPanel>
  );
}

interface DataTableCustomFilterProps {
  config: CustomFilterConfig;
  value: unknown;
  onChange: (value: unknown) => void;
  onClear: () => void;
}

export function DataTableCustomFilter({
  config,
  value,
  onChange,
  onClear,
}: DataTableCustomFilterProps) {
  return <>{config.render({ value, onChange, onClear })}</>;
}

interface DataTableFilterRendererProps {
  config: ColumnFilterConfig;
  filterId: string;
  filters: DataTableFiltersState<FilterSchema>;
}

export function DataTableFilterRenderer({
  config,
  filterId,
  filters,
}: DataTableFilterRendererProps): ReactNode {
  const { setIsOpen } = usePopover();
  const value = filters.getValue(filterId);

  const handleListApply = (newValue: unknown[]) => {
    if (Array.isArray(newValue) && newValue.length === 0) {
      filters.clearValue(filterId);
    } else {
      filters.setValue(filterId, newValue);
    }
    setIsOpen(false);
  };

  const handleDateApply = (newValue: Date | undefined) => {
    if (newValue === undefined) {
      filters.clearValue(filterId);
    } else {
      filters.setValue(filterId, newValue);
    }
    setIsOpen(false);
  };

  const handleTextApply = (newValue: string) => {
    if (!newValue.trim()) {
      filters.clearValue(filterId);
    } else {
      filters.setValue(filterId, newValue);
    }
    setIsOpen(false);
  };

  const handleCustomChange = (newValue: unknown) => {
    filters.setValue(filterId, newValue);
  };

  const handleDateRangeApply = (newValue: DateRangeFilterValue) => {
    if (isEmptyFilterValue(newValue)) {
      filters.clearValue(filterId);
    } else {
      filters.setValue(filterId, newValue);
    }
    setIsOpen(false);
  };

  const handleNumberRangeApply = (newValue: NumberRangeValue) => {
    if (isEmptyFilterValue(newValue)) {
      filters.clearValue(filterId);
    } else {
      filters.setValue(filterId, newValue);
    }
    setIsOpen(false);
  };

  const handleCustomClear = () => {
    filters.clearValue(filterId);
  };

  switch (config.kind) {
    case "list":
      return (
        <DataTableListFilter
          config={config}
          value={(value as unknown[]) ?? []}
          onApply={handleListApply}
        />
      );
    case "date":
      return (
        <DataTableDateFilter
          config={config}
          value={value as Date | undefined}
          onApply={handleDateApply}
        />
      );
    case "columnFilter":
      return (
        <DataTableColumnFilter
          config={config}
          value={(value as string) ?? ""}
          onApply={handleTextApply}
        />
      );
    case "dateRange":
      return (
        <DataTableDateRangeFilter
          config={config}
          value={normalizeDateRangeValue(value)}
          onApply={handleDateRangeApply}
        />
      );
    case "numberRange":
      return (
        <DataTableNumberRangeFilter
          config={config}
          value={normalizeNumberRangeValue(value)}
          onApply={handleNumberRangeApply}
        />
      );
    case "custom":
      return (
        <DataTableCustomFilter
          config={config}
          value={value}
          onChange={handleCustomChange}
          onClear={handleCustomClear}
        />
      );
    default:
      return null;
  }
}
