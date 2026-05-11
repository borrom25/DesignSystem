import type {
  ColumnTextFilterConfig,
  CustomFilterConfig,
  DateFilterConfig,
  DateRangeFilterConfig,
  ListFilterConfig,
  NumberRangeFilterConfig,
} from "./types/DataTable.filter.types";

export type DataTableListFilterOptions<T = string> = Omit<
  ListFilterConfig<T>,
  "kind"
>;

export type DataTableDateFilterOptions = Omit<DateFilterConfig, "kind">;

export type DataTableColumnFilterOptions = Omit<ColumnTextFilterConfig, "kind">;

export type DataTableDateRangeFilterOptions = Omit<
  DateRangeFilterConfig,
  "kind"
>;

export type DataTableNumberRangeFilterOptions = Omit<
  NumberRangeFilterConfig,
  "kind"
>;

export type DataTableCustomFilterOptions<TValue = unknown> = Omit<
  CustomFilterConfig<TValue>,
  "kind"
>;

export const dataTableFilter = {
  list<T = string>(
    options: DataTableListFilterOptions<T>
  ): ListFilterConfig<T> {
    return {
      kind: "list",
      ...options,
    };
  },

  date(options: DataTableDateFilterOptions = {}): DateFilterConfig {
    return {
      kind: "date",
      ...options,
    };
  },

  columnFilter(
    options: DataTableColumnFilterOptions = {}
  ): ColumnTextFilterConfig {
    return {
      kind: "columnFilter",
      ...options,
    };
  },

  dateRange(
    options: DataTableDateRangeFilterOptions = {}
  ): DateRangeFilterConfig {
    return {
      kind: "dateRange",
      ...options,
    };
  },

  numberRange(
    options: DataTableNumberRangeFilterOptions = {}
  ): NumberRangeFilterConfig {
    return {
      kind: "numberRange",
      ...options,
    };
  },

  custom<TValue = unknown>(
    options: DataTableCustomFilterOptions<TValue>
  ): CustomFilterConfig<TValue> {
    return {
      kind: "custom",
      ...options,
    };
  },
};
