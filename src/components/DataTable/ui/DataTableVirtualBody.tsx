import { useMemo } from "react";
import { type Row } from "@tanstack/react-table";
import type { RefObject } from "react";
import { TableRow } from "./DataTableRow";
import { cn } from "@/utils";
import { tableStyles } from "../styles";
import { useVirtualScroll } from "../hooks/useVirtualScroll";

interface TableVirtualBodyProps<TData> {
  rows: Row<TData>[];
  columnSignature: string;
  columnCount: number;
  parentRef: RefObject<HTMLDivElement | null>;
  rowHeight: number;
  overscan?: number;
  onScrollEnd?: () => void;
  onRowClick?: (row: Row<TData>) => void;
  onRowDoubleClick?: (row: Row<TData>) => void;
  rowClassName?: string | ((row: Row<TData>) => string);
  cellClassName?: string;
  bordered?: boolean;
  className?: string;
}

export function TableVirtualBody<TData>({
  rows,
  columnSignature,
  columnCount,
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
            key={`${row.id}:${columnSignature}`}
            row={row}
            rowIndex={virtualItem.index}
            isSelected={row.getIsSelected()}
            onRowClick={onRowClick}
            onRowDoubleClick={onRowDoubleClick}
            rowClassName={rowClassName}
            cellClassName={cellClassName}
            bordered={bordered}
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
