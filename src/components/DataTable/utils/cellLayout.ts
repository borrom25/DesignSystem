import type { Cell } from "@tanstack/react-table";
import type { ColumnDef, StickyPosition } from "../types";
import { getStickyPosition, isServiceColumn } from "./columnLayout";

export interface DataTableCellLayout {
  isServiceCell: boolean;
  stickyPosition?: StickyPosition;
  isBeforeStickyRight: boolean;
  widthStyle?: { width: number };
}

export function getDataTableCellLayout<TData>(
  cell: Cell<TData, unknown>,
  beforeStickyRightColumnIds: ReadonlySet<string>
): DataTableCellLayout {
  const isServiceCell = isServiceColumn(cell.column.id);
  const stickyPosition = getStickyPosition(
    (cell.column.columnDef as ColumnDef<TData>).sticky
  );

  return {
    isServiceCell,
    stickyPosition,
    isBeforeStickyRight: beforeStickyRightColumnIds.has(cell.column.id),
    widthStyle: isServiceCell ? undefined : { width: cell.column.getSize() },
  };
}
