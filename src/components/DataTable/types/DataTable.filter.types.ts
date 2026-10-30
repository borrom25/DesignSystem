import type { ReactNode } from "react";
import type { CalendarBaseProps } from "@/components/Calendar/Calendar.types";
import type {
  DateRangeNativeValue,
  DateRangeProps,
} from "@/components/DateRange";
import type { InputNumberProps } from "@/components/InputNumber";
import type {
  FilterListOption,
  FilterListGroup,
} from "@/components/FilterList/FilterList.types";

type InputPropsType = Omit<
  InputNumberProps,
  "value" | "onChange" | "label" | "required" | "hint" | "hintError" | "error"
>;

export type DateRangeFilterValue = DateRangeNativeValue;

export interface ListFilterConfig<T = string> {
  kind: "list";
  defaultValue?: T[];
  popoverWidth?: number;
  options?: FilterListOption<T>[];
  groups?: FilterListGroup<T>[];
  searchable?: boolean;
  searchPlaceholder?: string;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  filterOptionsLocally?: boolean;
  selectAll?: boolean;
  selectAllLabel?: ReactNode;
  emptyMessage?: ReactNode;
  getSearchText?: (option: FilterListOption<T>) => string;
  onScrollEnd?: () => void;
  scrollEndOffset?: number;
  isLoading?: boolean;
  hasMore?: boolean;
  className?: string;
}

export interface RadioFilterConfig<T = string> {
  kind: "radio";
  defaultValue?: T;
  popoverWidth?: number;
  options?: FilterListOption<T>[];
  groups?: FilterListGroup<T>[];
  searchable?: boolean;
  searchPlaceholder?: string;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  filterOptionsLocally?: boolean;
  emptyMessage?: ReactNode;
  getSearchText?: (option: FilterListOption<T>) => string;
  onScrollEnd?: () => void;
  scrollEndOffset?: number;
  isLoading?: boolean;
  hasMore?: boolean;
  resetLabel?: ReactNode;
  applyLabel?: ReactNode;
  className?: string;
}

export interface ColumnTextFilterConfig {
  kind: "columnFilter";
  defaultValue?: string;
  popoverWidth?: number;
  searchPlaceholder?: string;
  resetLabel?: ReactNode;
  applyLabel?: ReactNode;
  className?: string;
}

export interface DateFilterConfig {
  kind: "date";
  defaultValue?: Date;
  popoverWidth?: number;
  calendarProps?: Omit<CalendarBaseProps, "className">;
  resetLabel?: ReactNode;
  applyLabel?: ReactNode;
  className?: string;
}

export interface DateRangeFilterConfig {
  kind: "dateRange";
  defaultValue?: DateRangeNativeValue;
  popoverWidth?: number;
  placeholderStart?: string;
  placeholderEnd?: string;
  dateRangeProps?: Omit<
    DateRangeProps,
    | "value"
    | "defaultValue"
    | "onChange"
    | "onClear"
    | "showTimeBar"
    | "placeholderStart"
    | "placeholderEnd"
    | "required"
    | "hint"
    | "hintError"
    | "error"
  >;
  resetLabel?: ReactNode;
  applyLabel?: ReactNode;
  className?: string;
}

export interface NumberRangeValue {
  min?: number;
  max?: number;
}

export interface NumberRangeFilterConfig {
  kind: "numberRange";
  defaultValue?: NumberRangeValue;
  popoverWidth?: number;
  minPlaceholder?: string;
  maxPlaceholder?: string;
  minInputProps?: InputPropsType;
  maxInputProps?: InputPropsType;
  resetLabel?: ReactNode;
  applyLabel?: ReactNode;
  className?: string;
}

export interface CustomFilterConfig<TValue = unknown> {
  kind: "custom";
  defaultValue?: TValue;
  render: (props: CustomFilterRenderProps<TValue>) => ReactNode;
  className?: string;
}

export interface CustomFilterRenderProps<TValue = unknown> {
  value: TValue;
  onChange: (value: TValue) => void;
  onClear: () => void;
}

export type ColumnFilterConfig<T = string> =
  | ListFilterConfig<T>
  | RadioFilterConfig<T>
  | ColumnTextFilterConfig
  | DateFilterConfig
  | DateRangeFilterConfig
  | NumberRangeFilterConfig
  | CustomFilterConfig;

export type FilterValue = unknown;

export type FilterSchema = Record<string, FilterValue>;

export type DataTableScopeKey = string;

export interface DataTableScopedStateOptions {
  scopeKey?: DataTableScopeKey;
}

export interface DataTableFiltersState<
  TSchema extends FilterSchema = FilterSchema,
> {
  values: TSchema;
  setValue<K extends keyof TSchema>(id: K, value: TSchema[K]): void;
  getValue<K extends keyof TSchema>(id: K): TSchema[K];
  clearValue(id: keyof TSchema): void;
  clearAll(): void;
  hasValue(id: keyof TSchema): boolean;
  activeCount: number;
}
