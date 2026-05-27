import { useState, useMemo, useCallback, useEffect, useRef } from "react";
import { endOfDay, startOfDay } from "date-fns";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getExpandedRowModel,
  type SortingState,
  type ColumnFiltersState,
  type VisibilityState,
  type RowSelectionState,
  type ExpandedState,
  type FilterFn,
  type Row,
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

const defaultMaxExpandedDepth = 4;

const getDefaultSubRows = <TData>(row: TData): TData[] | undefined => {
  const children = (row as { children?: TData[] }).children;

  return Array.isArray(children) ? children : undefined;
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
    expanded: controlledExpanded,
    onExpandedChange,
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
    enableNestedRows = false,
    getSubRows,
    maxExpandedDepth = defaultMaxExpandedDepth,
    enableExpandedContent = false,
    getRowCanExpandContent,
  } = options;

  const [internalSorting, setInternalSorting] = useState<SortingState>([]);
  const [internalColumnFilters, setInternalColumnFilters] =
    useState<ColumnFiltersState>([]);
  const [internalGlobalFilter, setInternalGlobalFilter] = useState<string>("");
  const [internalColumnVisibility, setInternalColumnVisibility] =
    useState<VisibilityState>({});
  const [internalRowSelection, setInternalRowSelection] =
    useState<RowSelectionState>({});
  const [internalExpanded, setInternalExpanded] = useState<ExpandedState>({});
  const wasAllRowsSelectedRef = useRef(false);
  const previousDataLengthRef = useRef(data.length);

  const sorting = controlledSorting ?? internalSorting;
  const columnFilters = controlledColumnFilters ?? internalColumnFilters;
  const globalFilter = controlledGlobalFilter ?? internalGlobalFilter;
  const columnVisibility =
    controlledColumnVisibility ?? internalColumnVisibility;
  const rowSelection = controlledRowSelection ?? internalRowSelection;
  const expanded = controlledExpanded ?? internalExpanded;

  const handleSortingChange = onSortingChange ?? setInternalSorting;
  const handleColumnFiltersChange =
    onColumnFiltersChange ?? setInternalColumnFilters;
  const handleGlobalFilterChange =
    onGlobalFilterChange ?? setInternalGlobalFilter;
  const handleColumnVisibilityChange =
    onColumnVisibilityChange ?? setInternalColumnVisibility;
  const handleRowSelectionChange =
    onRowSelectionChange ?? setInternalRowSelection;
  const handleExpandedChange = onExpandedChange ?? setInternalExpanded;

  const resolvedGetSubRows = useCallback(
    (originalRow: TData, index: number) =>
      getSubRows?.(originalRow, index) ?? getDefaultSubRows(originalRow),
    [getSubRows]
  );

  const enableExpanding = enableNestedRows || enableExpandedContent;

  const getRowCanExpand = useCallback(
    (row: Row<TData>) => {
      const canExpandNestedRows =
        enableNestedRows &&
        row.depth < maxExpandedDepth &&
        row.subRows.length > 0;
      const canExpandContent =
        enableExpandedContent && Boolean(getRowCanExpandContent?.(row));

      return canExpandNestedRows || canExpandContent;
    },
    [
      enableExpandedContent,
      enableNestedRows,
      getRowCanExpandContent,
      maxExpandedDepth,
    ]
  );

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
      globalFilter,
      columnVisibility,
      rowSelection,
      expanded,
    },
    onSortingChange: handleSortingChange,
    onColumnFiltersChange: handleColumnFiltersChange,
    onGlobalFilterChange: handleGlobalFilterChange,
    onColumnVisibilityChange: handleColumnVisibilityChange,
    onRowSelectionChange: handleRowSelectionChange,
    onExpandedChange: handleExpandedChange,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: manualSorting ? undefined : getSortedRowModel(),
    getFilteredRowModel: manualFiltering ? undefined : getFilteredRowModel(),
    getExpandedRowModel: enableExpanding ? getExpandedRowModel() : undefined,
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
    getSubRows: enableNestedRows ? resolvedGetSubRows : undefined,
    getRowCanExpand: enableExpanding ? getRowCanExpand : undefined,
  });

  const rows = useMemo(
    () => table.getRowModel().rows,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [table.getRowModel().rows]
  );

  useEffect(() => {
    if (!enableRowSelection) {
      wasAllRowsSelectedRef.current = false;
      previousDataLengthRef.current = data.length;
      return;
    }

    const rowsWereAdded =
      previousDataLengthRef.current > 0 &&
      data.length > previousDataLengthRef.current;

    if (
      rowsWereAdded &&
      wasAllRowsSelectedRef.current &&
      !table.getIsAllRowsSelected()
    ) {
      previousDataLengthRef.current = data.length;
      table.toggleAllRowsSelected(true);
      return;
    }

    previousDataLengthRef.current = data.length;
    wasAllRowsSelectedRef.current = table.getIsAllRowsSelected();
  }, [data.length, enableRowSelection, table, rowSelection]);

  return {
    table,
    rows,
    sorting,
    columnFilters,
    globalFilter,
    columnVisibility,
    rowSelection,
    expanded,
    setSorting: handleSortingChange,
    setColumnFilters: handleColumnFiltersChange,
    setGlobalFilter: handleGlobalFilterChange,
    setColumnVisibility: handleColumnVisibilityChange,
    setRowSelection: handleRowSelectionChange,
    setExpanded: handleExpandedChange,
  };
}
