import { memo, useCallback } from "react";
import { flexRender } from "@tanstack/react-table";
import { cn } from "@/utils";
import { useDataTableEditorContainer } from "../hooks/useDataTableEditorContainer";
import { tableStyles } from "../styles";
import type {
  TableCellEditContext,
  TableCellValueChangeReason,
  TableRowProps,
} from "../types";
import {
  createDataTableCellEditContext,
  createDataTableCellValueChangeEvent,
  formatDataTableCellValue,
  getIsDataTableCellEditable,
} from "../utils/cellEditing";
import { getDataTableCellLayout } from "../utils/cellLayout";
import { DataTableEditableCellInput } from "./DataTableEditableCellInput";

function TableRowComponent<TData>({
  table,
  row,
  rowIndex,
  isSelected = false,
  isExpanded = false,
  beforeStickyRightColumnIds,
  onRowClick,
  onRowDoubleClick,
  editable = false,
  editableCellIds,
  isCellEditable,
  editablePlaceholder,
  onCellDraftChange,
  onCellValueChange,
  cellEditor,
  rowClassName,
  cellClassName,
  bordered = false,
  style,
}: TableRowProps<TData>) {
  const isClickable = Boolean(onRowClick || onRowDoubleClick);
  const {
    handleEditorContainerMouseDown,
    handleEditorContainerClick,
    handleEditorContainerDoubleClick,
  } = useDataTableEditorContainer();

  const computedRowClassName =
    typeof rowClassName === "function" ? rowClassName(row) : rowClassName;

  const handleClick = useCallback(() => {
    onRowClick?.(row);
  }, [onRowClick, row]);

  const handleDoubleClick = useCallback(() => {
    onRowDoubleClick?.(row);
  }, [onRowDoubleClick, row]);

  const handleCellValueChange = useCallback(
    (
      context: TableCellEditContext<TData>,
      value: unknown,
      reason: TableCellValueChangeReason = "change"
    ) => {
      onCellValueChange?.(
        createDataTableCellValueChangeEvent(context, value, reason)
      );
    },
    [onCellValueChange]
  );

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
        const editContext = createDataTableCellEditContext({
          row,
          cell,
          table,
        });
        const canEditCell = getIsDataTableCellEditable({
          editable,
          isServiceCell,
          editableCellIds,
          isCellEditable,
          editContext,
        });
        const cellContent = canEditCell
          ? (cellEditor?.({
              ...editContext,
              onValueChange: (nextValue) =>
                handleCellValueChange(editContext, nextValue),
            }) ?? (
              <DataTableEditableCellInput
                context={editContext}
                value={formatDataTableCellValue(editContext.value)}
                placeholder={editablePlaceholder}
                onDraftChange={onCellDraftChange}
                onValueChange={onCellValueChange}
              />
            ))
          : flexRender(cell.column.columnDef.cell, cell.getContext());

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
              canEditCell && tableStyles.cellEditable,
              !isServiceCell && cellClassName
            )}
            style={widthStyle}
          >
            {canEditCell ? (
              <div
                className={tableStyles.cellEditor}
                onMouseDown={handleEditorContainerMouseDown}
                onClick={handleEditorContainerClick}
                onDoubleClick={handleEditorContainerDoubleClick}
              >
                {cellContent}
              </div>
            ) : (
              cellContent
            )}
          </td>
        );
      })}
    </tr>
  );
}

export const TableRow = memo(TableRowComponent) as typeof TableRowComponent;
