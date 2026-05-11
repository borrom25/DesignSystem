import { memo, useCallback } from "react";
import { flexRender, type Row } from "@tanstack/react-table";
import { cn } from "@/utils";
import { tableStyles } from "../styles";
import { getStickyPosition, isServiceColumn } from "../utils/columnLayout";
import type { ColumnDef } from "../types";

interface TableRowProps<TData> {
  row: Row<TData>;
  rowIndex?: number;
  isSelected?: boolean;
  onRowClick?: (row: Row<TData>) => void;
  onRowDoubleClick?: (row: Row<TData>) => void;
  rowClassName?: string | ((row: Row<TData>) => string);
  cellClassName?: string;
  bordered?: boolean;
  style?: React.CSSProperties;
}

function TableRowComponent<TData>({
  row,
  rowIndex,
  isSelected = false,
  onRowClick,
  onRowDoubleClick,
  rowClassName,
  cellClassName,
  bordered = false,
  style,
}: TableRowProps<TData>) {
  const isClickable = Boolean(onRowClick || onRowDoubleClick);

  const computedRowClassName =
    typeof rowClassName === "function" ? rowClassName(row) : rowClassName;

  const handleClick = useCallback(() => {
    onRowClick?.(row);
  }, [onRowClick, row]);

  const handleDoubleClick = useCallback(() => {
    onRowDoubleClick?.(row);
  }, [onRowDoubleClick, row]);

  return (
    <tr
      className={cn(
        tableStyles.row,
        tableStyles.rowHoverable,
        isClickable && tableStyles.rowInteractive,
        isSelected && tableStyles.rowSelected,
        computedRowClassName
      )}
      style={style}
      onClick={onRowClick ? handleClick : undefined}
      onDoubleClick={onRowDoubleClick ? handleDoubleClick : undefined}
      data-state={isSelected ? "selected" : undefined}
      data-table-row-index={rowIndex}
      data-table-row-id={row.id}
    >
      {row.getVisibleCells().map((cell) => {
        const isServiceCell = isServiceColumn(cell.column.id);
        const stickyPosition = getStickyPosition(
          (cell.column.columnDef as ColumnDef<TData>).sticky
        );

        return (
          <td
            key={cell.id}
            className={cn(
              tableStyles.cell,
              isServiceCell && tableStyles.cellSelection,
              bordered && tableStyles.cellBordered,
              stickyPosition === "left" && tableStyles.cellStickyLeft,
              stickyPosition === "right" && tableStyles.cellStickyRight,
              !isServiceCell && cellClassName
            )}
            style={isServiceCell ? undefined : { width: cell.column.getSize() }}
          >
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </td>
        );
      })}
    </tr>
  );
}

export const TableRow = memo(TableRowComponent) as typeof TableRowComponent;
