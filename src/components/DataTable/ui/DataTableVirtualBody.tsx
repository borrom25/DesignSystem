import { useMemo } from "react";
import { TableRow } from "./DataTableRow";
import { cn } from "@/utils";
import { tableStyles } from "../styles";
import { useVirtualScroll } from "../hooks/useVirtualScroll";
import type { TableVirtualBodyProps } from "../types";
import { getDataTableRowDomKey } from "../utils/rowKeys";

export function TableVirtualBody<TData>({
  rows,
  columnSignature,
  columnCount,
  beforeStickyRightColumnIds,
  parentRef,
  rowHeight,
  overscan,
  onScrollEnd,
  onRowClick,
  onRowDoubleClick,
  rowClassName,
  cellClassName,
  bordered = false,
  className,
}: TableVirtualBodyProps<TData>) {
  const { virtualItems, paddingTop, paddingBottom } = useVirtualScroll({
    count: rows.length,
    rowHeight,
    overscan,
    parentRef,
    onScrollEnd,
  });

  const rowStyle = useMemo(
    () => ({
      height: `${rowHeight}px`,
      contentVisibility: "auto" as const,
      containIntrinsicSize: `auto ${rowHeight}px`,
    }),
    [rowHeight]
  );

  return (
    <tbody className={cn(tableStyles.body, className)}>
      {paddingTop > 0 && (
        <tr aria-hidden="true" data-table-virtual-spacer="top">
          <td
            colSpan={columnCount}
            style={{ height: `${paddingTop}px`, padding: 0, border: 0 }}
          />
        </tr>
      )}
      {virtualItems.map((virtualItem) => {
        const row = rows[virtualItem.index];
        if (!row) return null;

        return (
          <TableRow
            key={getDataTableRowDomKey(row.id, columnSignature)}
            row={row}
            rowIndex={virtualItem.index}
            isSelected={row.getIsSelected()}
            isExpanded={row.getIsExpanded()}
            onRowClick={onRowClick}
            onRowDoubleClick={onRowDoubleClick}
            rowClassName={rowClassName}
            cellClassName={cellClassName}
            bordered={bordered}
            beforeStickyRightColumnIds={beforeStickyRightColumnIds}
            style={rowStyle}
          />
        );
      })}
      {paddingBottom > 0 && (
        <tr aria-hidden="true" data-table-virtual-spacer="bottom">
          <td
            colSpan={columnCount}
            style={{ height: `${paddingBottom}px`, padding: 0, border: 0 }}
          />
        </tr>
      )}
    </tbody>
  );
}
