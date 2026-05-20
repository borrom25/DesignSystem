import { memo, useCallback } from "react";
import { flexRender } from "@tanstack/react-table";
import { cn } from "@/utils";
import { tableStyles } from "../styles";
import type { TableRowProps } from "../types";
import { getDataTableCellLayout } from "../utils/cellLayout";

function TableRowComponent<TData>({
  row,
  rowIndex,
  isSelected = false,
  isExpanded = false,
  beforeStickyRightColumnIds,
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
      data-expanded={isExpanded ? "true" : undefined}
      data-table-row-index={rowIndex}
      data-table-row-id={row.id}
    >
      {row.getVisibleCells().map((cell) => {
        const {
          isServiceCell,
          stickyPosition,
          isBeforeStickyRight,
          widthStyle,
        } = getDataTableCellLayout(cell, beforeStickyRightColumnIds);

        return (
          <td
            key={cell.id}
            className={cn(
              tableStyles.cell,
              isServiceCell && tableStyles.cellSelection,
              bordered && tableStyles.cellBordered,
              isBeforeStickyRight && tableStyles.cellBeforeStickyRight,
              stickyPosition === "left" && tableStyles.cellStickyLeft,
              stickyPosition === "right" && tableStyles.cellStickyRight,
              !isServiceCell && cellClassName
            )}
            style={widthStyle}
          >
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </td>
        );
      })}
    </tr>
  );
}

export const TableRow = memo(TableRowComponent) as typeof TableRowComponent;
