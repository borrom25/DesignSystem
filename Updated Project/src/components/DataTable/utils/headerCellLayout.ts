import type { Header } from "@tanstack/react-table";
import type { ColumnDef, StickyPosition } from "../types";
import type {
  DataTableFiltersState,
  FilterSchema,
} from "../types/DataTable.filter.types";
import { tableStyles } from "../styles";
import { getStickyPosition, isServiceColumn } from "./columnLayout";

export interface DataTableHeaderCellLayout<TData> {
  columnDef: ColumnDef<TData>;
  canSort: boolean;
  isSorted: false | "asc" | "desc";
  isServiceCol: boolean;
  stickyPosition?: StickyPosition;
  canResize: boolean;
  isResizing: boolean;
  sortButtonStateClass: string;
  filterConfig: ColumnDef<TData>["filter"];
  filterId: string;
  canFilter: boolean;
  isFiltered: boolean;
  widthStyle?: { width: number };
}

export function getDataTableHeaderCellLayout<TData>(
  header: Header<TData, unknown>,
  filters?: DataTableFiltersState<FilterSchema>
): DataTableHeaderCellLayout<TData> {
  const columnDef = header.column.columnDef as ColumnDef<TData>;
  const canSort = header.column.getCanSort();
  const isSorted = header.column.getIsSorted();
  const isServiceCol = isServiceColumn(header.column.id);
  const stickyPosition = getStickyPosition(columnDef.sticky);
  const canResize = header.column.getCanResize() && !isServiceCol;
  const isResizing = header.column.getIsResizing();
  const sortButtonStateClass =
    isSorted === "asc"
      ? tableStyles.sortButtonAsc
      : isSorted === "desc"
        ? tableStyles.sortButtonDesc
        : tableStyles.sortButtonDefault;

  const filterConfig = columnDef.filter;
  const filterId = header.column.id;
  const canFilter = !!filterConfig && !!filters && !isServiceCol;

  return {
    columnDef,
    canSort,
    isSorted,
    isServiceCol,
    stickyPosition,
    canResize,
    isResizing,
    sortButtonStateClass,
    filterConfig,
    filterId,
    canFilter,
    isFiltered: filters?.hasValue(filterId) ?? false,
    widthStyle: isServiceCol ? undefined : { width: header.getSize() },
  };
}
