import { createColumnHelper } from "@tanstack/react-table";
import type {
  AccessorFn,
  AccessorFnColumnDef,
  AccessorKeyColumnDef,
  DeepKeys,
  DeepValue,
  DisplayColumnDef,
  GroupColumnDef,
  IdentifiedColumnDef,
  RowData,
} from "@tanstack/react-table";
import type { ColumnFilterConfig } from "./types/DataTable.filter.types";
import {
  dataTableFilter,
  type DataTableColumnFilterOptions,
  type DataTableCustomFilterOptions,
  type DataTableDateFilterOptions,
  type DataTableDateRangeFilterOptions,
  type DataTableListFilterOptions,
  type DataTableNumberRangeFilterOptions,
} from "./dataTableFilter";

type DataTableColumnFilterOption<TValue> = {
  filter?: ColumnFilterConfig<TValue>;
};

type DataTableDisplayColumnDef<TData extends RowData> =
  DisplayColumnDef<TData> & DataTableColumnFilterOption<unknown>;

type DataTableGroupColumnDef<TData extends RowData> = GroupColumnDef<TData> &
  DataTableColumnFilterOption<unknown>;

type DataTableAccessorColumnInput<
  TData extends RowData,
  TAccessor extends AccessorFn<TData> | DeepKeys<TData>,
  TValue,
> =
  TAccessor extends AccessorFn<TData>
    ? DisplayColumnDef<TData, TValue> & DataTableColumnFilterOption<TValue>
    : IdentifiedColumnDef<TData, TValue> & DataTableColumnFilterOption<TValue>;

type DataTableAccessorColumnOutput<
  TData extends RowData,
  TAccessor extends AccessorFn<TData> | DeepKeys<TData>,
  TValue,
> =
  TAccessor extends AccessorFn<TData>
    ? AccessorFnColumnDef<TData, TValue> & DataTableColumnFilterOption<TValue>
    : AccessorKeyColumnDef<TData, TValue> & DataTableColumnFilterOption<TValue>;

export interface DataTableColumnHelper<TData extends RowData> {
  accessor: <
    TAccessor extends AccessorFn<TData> | DeepKeys<TData>,
    TValue extends TAccessor extends AccessorFn<TData, infer TReturn>
      ? TReturn
      : TAccessor extends DeepKeys<TData>
        ? DeepValue<TData, TAccessor>
        : never,
  >(
    accessor: TAccessor,
    column: TAccessor extends AccessorFn<TData>
      ? DisplayColumnDef<TData, TValue> & DataTableColumnFilterOption<TValue>
      : IdentifiedColumnDef<TData, TValue> & DataTableColumnFilterOption<TValue>
  ) => TAccessor extends AccessorFn<TData>
    ? AccessorFnColumnDef<TData, TValue> & DataTableColumnFilterOption<TValue>
    : AccessorKeyColumnDef<TData, TValue> & DataTableColumnFilterOption<TValue>;
  list: <
    TAccessor extends AccessorFn<TData> | DeepKeys<TData>,
    TValue extends TAccessor extends AccessorFn<TData, infer TReturn>
      ? TReturn
      : TAccessor extends DeepKeys<TData>
        ? DeepValue<TData, TAccessor>
        : never,
  >(
    accessor: TAccessor,
    column: Omit<
      DataTableAccessorColumnInput<TData, TAccessor, TValue>,
      "filter"
    > & {
      filter: DataTableListFilterOptions<TValue>;
    }
  ) => DataTableAccessorColumnOutput<TData, TAccessor, TValue>;
  date: <
    TAccessor extends AccessorFn<TData> | DeepKeys<TData>,
    TValue extends TAccessor extends AccessorFn<TData, infer TReturn>
      ? TReturn
      : TAccessor extends DeepKeys<TData>
        ? DeepValue<TData, TAccessor>
        : never,
  >(
    accessor: TAccessor,
    column: Omit<
      DataTableAccessorColumnInput<TData, TAccessor, TValue>,
      "filter"
    > & {
      filter?: DataTableDateFilterOptions;
    }
  ) => DataTableAccessorColumnOutput<TData, TAccessor, TValue>;
  columnFilter: <
    TAccessor extends AccessorFn<TData> | DeepKeys<TData>,
    TValue extends TAccessor extends AccessorFn<TData, infer TReturn>
      ? TReturn
      : TAccessor extends DeepKeys<TData>
        ? DeepValue<TData, TAccessor>
        : never,
  >(
    accessor: TAccessor,
    column: Omit<
      DataTableAccessorColumnInput<TData, TAccessor, TValue>,
      "filter"
    > & {
      filter?: DataTableColumnFilterOptions;
    }
  ) => DataTableAccessorColumnOutput<TData, TAccessor, TValue>;
  dateRange: <
    TAccessor extends AccessorFn<TData> | DeepKeys<TData>,
    TValue extends TAccessor extends AccessorFn<TData, infer TReturn>
      ? TReturn
      : TAccessor extends DeepKeys<TData>
        ? DeepValue<TData, TAccessor>
        : never,
  >(
    accessor: TAccessor,
    column: Omit<
      DataTableAccessorColumnInput<TData, TAccessor, TValue>,
      "filter"
    > & {
      filter?: DataTableDateRangeFilterOptions;
    }
  ) => DataTableAccessorColumnOutput<TData, TAccessor, TValue>;
  numberRange: <
    TAccessor extends AccessorFn<TData> | DeepKeys<TData>,
    TValue extends TAccessor extends AccessorFn<TData, infer TReturn>
      ? TReturn
      : TAccessor extends DeepKeys<TData>
        ? DeepValue<TData, TAccessor>
        : never,
  >(
    accessor: TAccessor,
    column: Omit<
      DataTableAccessorColumnInput<TData, TAccessor, TValue>,
      "filter"
    > & {
      filter?: DataTableNumberRangeFilterOptions;
    }
  ) => DataTableAccessorColumnOutput<TData, TAccessor, TValue>;
  custom: <
    TAccessor extends AccessorFn<TData> | DeepKeys<TData>,
    TValue extends TAccessor extends AccessorFn<TData, infer TReturn>
      ? TReturn
      : TAccessor extends DeepKeys<TData>
        ? DeepValue<TData, TAccessor>
        : never,
  >(
    accessor: TAccessor,
    column: Omit<
      DataTableAccessorColumnInput<TData, TAccessor, TValue>,
      "filter"
    > & {
      filter: DataTableCustomFilterOptions<TValue>;
    }
  ) => DataTableAccessorColumnOutput<TData, TAccessor, TValue>;
  display: (
    column: DataTableDisplayColumnDef<TData>
  ) => DataTableDisplayColumnDef<TData>;
  group: (
    column: DataTableGroupColumnDef<TData>
  ) => DataTableGroupColumnDef<TData>;
}

export function createDataTableColumnHelper<
  TData extends RowData,
>(): DataTableColumnHelper<TData> {
  const helper = createColumnHelper<TData>();

  return {
    accessor: (accessor, column) =>
      helper.accessor(accessor as never, column as never) as never,
    list: (accessor, column) => {
      const { filter, ...columnDef } = column;

      return helper.accessor(
        accessor as never,
        {
          ...columnDef,
          filter: dataTableFilter.list(filter),
          filterFn: columnDef.filterFn ?? "dataTableList",
        } as never
      ) as never;
    },
    date: (accessor, column) => {
      const { filter = {}, ...columnDef } = column;

      return helper.accessor(
        accessor as never,
        {
          ...columnDef,
          filter: dataTableFilter.date(filter),
          filterFn: columnDef.filterFn ?? "dataTableDate",
        } as never
      ) as never;
    },
    columnFilter: (accessor, column) => {
      const { filter = {}, ...columnDef } = column;

      return helper.accessor(
        accessor as never,
        {
          ...columnDef,
          filter: dataTableFilter.columnFilter(filter),
          filterFn: columnDef.filterFn ?? "dataTableColumnFilter",
        } as never
      ) as never;
    },
    dateRange: (accessor, column) => {
      const { filter = {}, ...columnDef } = column;

      return helper.accessor(
        accessor as never,
        {
          ...columnDef,
          filter: dataTableFilter.dateRange(filter),
          filterFn: columnDef.filterFn ?? "dataTableDateRange",
        } as never
      ) as never;
    },
    numberRange: (accessor, column) => {
      const { filter = {}, ...columnDef } = column;

      return helper.accessor(
        accessor as never,
        {
          ...columnDef,
          filter: dataTableFilter.numberRange(filter),
          filterFn: columnDef.filterFn ?? "dataTableNumberRange",
        } as never
      ) as never;
    },
    custom: (accessor, column) => {
      const { filter, ...columnDef } = column;

      return helper.accessor(
        accessor as never,
        {
          ...columnDef,
          filter: dataTableFilter.custom(filter),
        } as never
      ) as never;
    },
    display: (column) =>
      helper.display(column) as DataTableDisplayColumnDef<TData>,
    group: (column) => helper.group(column) as DataTableGroupColumnDef<TData>,
  };
}
