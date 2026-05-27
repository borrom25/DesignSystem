import { Fragment } from "react";
import { TableRow } from "./DataTableRow";
import { DataTableExpandedContentRow } from "./DataTableExpandedContentRow";
import { cn } from "@/utils";
import { tableStyles } from "../styles";
import type { TableBodyProps } from "../types";
import { getDataTableRowDomKey } from "../utils/rowKeys";

export function TableBody<TData>({
  table,
  rows,
  columnSignature,
  columnCount,
  beforeStickyRightColumnIds,
  renderExpandedContent,
  getRowCanExpandContent,
  expandedContentClassName,
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
  className,
}: TableBodyProps<TData>) {
  return (
    <tbody className={cn(tableStyles.body, className)}>
      {rows.map((row, index) => {
        const rowKey = getDataTableRowDomKey(row.id, columnSignature);
        const shouldRenderExpandedContent =
          !!renderExpandedContent &&
          row.getIsExpanded() &&
          (getRowCanExpandContent?.(row) ?? true);

        return (
          <Fragment key={rowKey}>
            <TableRow
              table={table}
              row={row}
              rowIndex={index}
              isSelected={row.getIsSelected()}
              isExpanded={row.getIsExpanded()}
              onRowClick={onRowClick}
              onRowDoubleClick={onRowDoubleClick}
              editable={editable}
              editableCellIds={editableCellIds}
              isCellEditable={isCellEditable}
              editablePlaceholder={editablePlaceholder}
              onCellDraftChange={onCellDraftChange}
              onCellValueChange={onCellValueChange}
              cellEditor={cellEditor}
              rowClassName={rowClassName}
              cellClassName={cellClassName}
              bordered={bordered}
              beforeStickyRightColumnIds={beforeStickyRightColumnIds}
            />
            {shouldRenderExpandedContent && (
              <DataTableExpandedContentRow
                table={table}
                row={row}
                columnCount={columnCount}
                renderExpandedContent={renderExpandedContent}
                className={expandedContentClassName}
              />
            )}
          </Fragment>
        );
      })}
    </tbody>
  );
}
