import type { ReactNode } from "react";
import type { CalendarSingleProps } from "@/components/Calendar/Calendar.types";
import type { DateRangeProps, DateRangeValue } from "@/components/DateRange";
import type { InputNumberProps } from "@/components/InputNumber";
import type {
  FilterListOption,
  FilterListGroup,
} from "@/components/FilterList/FilterList.types";

type InputPropsType = Omit<
  InputNumberProps,
  "value" | "onChange" | "label" | "required" | "hint" | "hintError" | "error"
>;

export type DateRangeFilterValue = DateRangeValue;

export interface ListFilterConfig<T = string> {
  kind: "list";
  defaultValue?: T[];
  popoverWidth?: number;
  options?: FilterListOption<T>[];
  groups?: FilterListGroup<T>[];
  searchable?: boolean;
  searchPlaceholder?: string;
  selectAll?: boolean;
  selectAllLabel?: ReactNode;
  emptyMessage?: ReactNode;
  getSearchText?: (option: FilterListOption<T>) => string;
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
  calendarProps?: Omit<
    CalendarSingleProps,
    "mode" | "value" | "defaultValue" | "onChange" | "className"
  >;
  resetLabel?: ReactNode;
  applyLabel?: ReactNode;
  className?: string;
}

export interface DateRangeFilterConfig {
  kind: "dateRange";
  defaultValue?: DateRangeValue;
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
    | "label"
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
  | ColumnTextFilterConfig
  | DateFilterConfig
  | DateRangeFilterConfig
  | NumberRangeFilterConfig
  | CustomFilterConfig;

export type FilterValue = unknown;

export type FilterSchema = Record<string, FilterValue>;

export interface DataTableFiltersState<
  TSchema extends FilterSchema = FilterSchema,
> {
  values: TSchema;
  setValue: <K extends keyof TSchema>(id: K, value: TSchema[K]) => void;
  getValue: <K extends keyof TSchema>(id: K) => TSchema[K];
  clearValue: (id: keyof TSchema) => void;
  clearAll: () => void;
  hasValue: (id: keyof TSchema) => boolean;
  activeCount: number;
}
