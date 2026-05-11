import { useState, useMemo } from "react";
import { endOfDay, startOfDay } from "date-fns";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  type SortingState,
  type ColumnFiltersState,
  type VisibilityState,
  type RowSelectionState,
  type FilterFn,
} from "@tanstack/react-table";
import { rankItem } from "@tanstack/match-sorter-utils";
import type { UseTableOptions } from "../types";
import type {
  DateRangeFilterValue,
  NumberRangeValue,
} from "../types/DataTable.filter.types";

const fuzzyFilter = (
  row: { getValue: (columnId: string) => unknown },
  columnId: string,
  value: string,
  addMeta: (meta: { itemRank: ReturnType<typeof rankItem> }) => void
) => {
  const itemRank = rankItem(row.getValue(columnId), value);
  addMeta({ itemRank });
  return itemRank.passed;
};

const listColumnFilter: FilterFn<unknown> = (row, columnId, filterValue) => {
  if (!Array.isArray(filterValue) || filterValue.length === 0) {
    return true;
  }

  const rowValue = row.getValue(columnId);

  if (Array.isArray(rowValue)) {
    return filterValue.some((value) =>
      rowValue.some((item) => Object.is(item, value))
    );
  }

  return filterValue.some((value) => Object.is(rowValue, value));
};

const toDateValue = (value: unknown): Date | null => {
  if (value instanceof Date) {
    return Number.isNaN(value.getTime()) ? null : value;
  }

  if (typeof value === "string" || typeof value === "number") {
    const parsed = new Date(value);
    return Number.isNaN(parsed.getTime()) ? null : parsed;
  }

  return null;
};

const hasTimePart = (value: Date): boolean =>
  value.getHours() !== 0 ||
  value.getMinutes() !== 0 ||
  value.getSeconds() !== 0 ||
  value.getMilliseconds() !== 0;

const toStartBoundaryDate = (value: unknown): Date | null => {
  const dateValue = toDateValue(value);

  if (!dateValue) {
    return null;
  }

  return hasTimePart(dateValue) ? dateValue : startOfDay(dateValue);
};

const toEndBoundaryDate = (value: unknown): Date | null => {
  const dateValue = toDateValue(value);

  if (!dateValue) {
    return null;
  }

  return hasTimePart(dateValue) ? dateValue : endOfDay(dateValue);
};

const toNumberValue = (value: unknown): number | null => {
  if (typeof value === "number") {
    return Number.isFinite(value) ? value : null;
  }

  if (typeof value === "string") {
    const normalized = value.trim().replace(",", ".");

    if (normalized === "") {
      return null;
    }

    const directNumber = Number(normalized);

    if (Number.isFinite(directNumber)) {
      return directNumber;
    }

    const match = normalized.match(/-?\d+(?:\.\d+)?/);

    if (!match) {
      return null;
    }

    const parsed = Number(match[0]);
    return Number.isFinite(parsed) ? parsed : null;
  }

  return null;
};

const isSameDay = (left: Date, right: Date): boolean =>
  left.getFullYear() === right.getFullYear() &&
  left.getMonth() === right.getMonth() &&
  left.getDate() === right.getDate();

const dateColumnFilter: FilterFn<unknown> = (row, columnId, filterValue) => {
  if (filterValue === undefined || filterValue === null || filterValue === "") {
    return true;
  }

  const rowDate = toDateValue(row.getValue(columnId));
  const filterDate = toDateValue(filterValue);

  if (!rowDate || !filterDate) {
    return false;
  }

  return isSameDay(rowDate, filterDate);
};

const columnTextFilter: FilterFn<unknown> = (row, columnId, filterValue) => {
  if (typeof filterValue !== "string" || filterValue.trim() === "") {
    return true;
  }

  const rowValue = row.getValue(columnId);

  if (rowValue === undefined || rowValue === null) {
    return false;
  }

  return String(rowValue)
    .toLowerCase()
    .includes(filterValue.trim().toLowerCase());
};

const dateRangeColumnFilter: FilterFn<unknown> = (
  row,
  columnId,
  filterValue
) => {
  const range = (filterValue ?? {}) as DateRangeFilterValue;
  const start = toStartBoundaryDate(range.start);
  const end = toEndBoundaryDate(range.end);

  if (!start && !end) {
    return true;
  }

  const rowDate = toDateValue(row.getValue(columnId));

  if (!rowDate) {
    return false;
  }

  if (start && rowDate < start) {
    return false;
  }

  if (end && rowDate > end) {
    return false;
  }

  return true;
};

const numberRangeColumnFilter: FilterFn<unknown> = (
  row,
  columnId,
  filterValue
) => {
  const range = (filterValue ?? {}) as NumberRangeValue;
  const min = toNumberValue(range.min);
  const max = toNumberValue(range.max);

  if (min === null && max === null) {
    return true;
  }

  const rowNumber = toNumberValue(row.getValue(columnId));

  if (rowNumber === null) {
    return false;
  }

  if (min !== null && rowNumber < min) {
    return false;
  }

  if (max !== null && rowNumber > max) {
    return false;
  }

  return true;
};

export function useTable<TData>(options: UseTableOptions<TData>) {
  const {
    data,
    columns,
    sorting: controlledSorting,
    onSortingChange,
    columnFilters: controlledColumnFilters,
    onColumnFiltersChange,
    globalFilter: controlledGlobalFilter,
    onGlobalFilterChange,
    columnVisibility: controlledColumnVisibility,
    onColumnVisibilityChange,
    rowSelection: controlledRowSelection,
    onRowSelectionChange,
    enableSorting = true,
    enableFiltering = true,
    enableColumnFilters = true,
    enableGlobalFilter = true,
    enableRowSelection = false,
    enableMultiRowSelection = true,
    manualSorting = false,
    manualFiltering = false,
    manualPagination = false,
    enableColumnResizing = true,
    columnResizeMode = "onChange",
    getRowId,
  } = options;

  const [internalSorting, setInternalSorting] = useState<SortingState>([]);
  const [internalColumnFilters, setInternalColumnFilters] =
    useState<ColumnFiltersState>([]);
  const [internalGlobalFilter, setInternalGlobalFilter] = useState<string>("");
  const [internalColumnVisibility, setInternalColumnVisibility] =
    useState<VisibilityState>({});
  const [internalRowSelection, setInternalRowSelection] =
    useState<RowSelectionState>({});

  const sorting = controlledSorting ?? internalSorting;
  const columnFilters = controlledColumnFilters ?? internalColumnFilters;
  const globalFilter = controlledGlobalFilter ?? internalGlobalFilter;
  const columnVisibility =
    controlledColumnVisibility ?? internalColumnVisibility;
  const rowSelection = controlledRowSelection ?? internalRowSelection;

  const handleSortingChange = onSortingChange ?? setInternalSorting;
  const handleColumnFiltersChange =
    onColumnFiltersChange ?? setInternalColumnFilters;
  const handleGlobalFilterChange =
    onGlobalFilterChange ?? setInternalGlobalFilter;
  const handleColumnVisibilityChange =
    onColumnVisibilityChange ?? setInternalColumnVisibility;
  const handleRowSelectionChange =
    onRowSelectionChange ?? setInternalRowSelection;

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
      globalFilter,
      columnVisibility,
      rowSelection,
    },
    onSortingChange: handleSortingChange,
    onColumnFiltersChange: handleColumnFiltersChange,
    onGlobalFilterChange: handleGlobalFilterChange,
    onColumnVisibilityChange: handleColumnVisibilityChange,
    onRowSelectionChange: handleRowSelectionChange,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: manualSorting ? undefined : getSortedRowModel(),
    getFilteredRowModel: manualFiltering ? undefined : getFilteredRowModel(),
    enableSorting,
    enableFilters: enableFiltering,
    enableColumnFilters,
    enableGlobalFilter,
    enableRowSelection,
    enableMultiRowSelection,
    manualSorting,
    manualFiltering,
    manualPagination,
    enableColumnResizing,
    columnResizeMode,
    globalFilterFn: fuzzyFilter,
    filterFns: {
      dataTableList: listColumnFilter,
      dataTableDate: dateColumnFilter,
      dataTableColumnFilter: columnTextFilter,
      dataTableDateRange: dateRangeColumnFilter,
      dataTableNumberRange: numberRangeColumnFilter,
    },
    getRowId,
  });

  const rows = useMemo(
    () => table.getRowModel().rows,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [table.getRowModel().rows]
  );

  return {
    table,
    rows,
    sorting,
    columnFilters,
    globalFilter,
    columnVisibility,
    rowSelection,
    setSorting: handleSortingChange,
    setColumnFilters: handleColumnFiltersChange,
    setGlobalFilter: handleGlobalFilterChange,
    setColumnVisibility: handleColumnVisibilityChange,
    setRowSelection: handleRowSelectionChange,
  };
}
