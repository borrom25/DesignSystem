import { useCallback, useMemo } from "react";
import { TableRow } from "./DataTableRow";
import { DataTableExpandedContentRow } from "./DataTableExpandedContentRow";
import { cn } from "@/utils";
import { tableStyles } from "../styles";
import { useVirtualScroll } from "../hooks/useVirtualScroll";
import type { Row, TableVirtualBodyProps } from "../types";
import { getDataTableRowDomKey } from "../utils/rowKeys";

type VirtualTableBodyItem<TData> =
  | {
      type: "row";
      key: string;
      row: Row<TData>;
      rowIndex: number;
    }
  | {
      type: "expandedContent";
      key: string;
      row: Row<TData>;
      rowIndex: number;
    };

const defaultExpandedContentEstimateSize = 280;

export function TableVirtualBody<TData>({
  table,
  rows,
  columnSignature,
  columnCount,
  beforeStickyRightColumnIds,
  parentRef,
  rowHeight,
  expandedContentEstimateSize = defaultExpandedContentEstimateSize,
  overscan,
  onScrollEnd,
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
}: TableVirtualBodyProps<TData>) {
  const items = useMemo(() => {
    const nextItems: VirtualTableBodyItem<TData>[] = [];

    rows.forEach((row, rowIndex) => {
      const rowKey = getDataTableRowDomKey(row.id, columnSignature);
      nextItems.push({
        type: "row",
        key: rowKey,
        row,
        rowIndex,
      });

      if (
        renderExpandedContent &&
        row.getIsExpanded() &&
        (getRowCanExpandContent?.(row) ?? true)
      ) {
        nextItems.push({
          type: "expandedContent",
          key: `${rowKey}:expanded-content`,
          row,
          rowIndex,
        });
      }
    });

    return nextItems;
  }, [columnSignature, getRowCanExpandContent, renderExpandedContent, rows]);

  const estimateSize = useCallback(
    (index: number) =>
      items[index]?.type === "expandedContent"
        ? expandedContentEstimateSize
        : rowHeight,
    [expandedContentEstimateSize, items, rowHeight]
  );

  const getItemKey = useCallback(
    (index: number) => items[index]?.key ?? index,
    [items]
  );

  const { virtualizer, virtualItems, paddingTop, paddingBottom } =
    useVirtualScroll({
      count: items.length,
      rowHeight,
      estimateSize,
      getItemKey,
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
        const item = items[virtualItem.index];
        if (!item) return null;

        if (item.type === "expandedContent") {
          if (!renderExpandedContent) return null;

          return (
            <DataTableExpandedContentRow
              key={item.key}
              table={table}
              row={item.row}
              columnCount={columnCount}
              renderExpandedContent={renderExpandedContent}
              className={expandedContentClassName}
              virtualIndex={virtualItem.index}
              measureElement={virtualizer.measureElement}
            />
          );
        }

        return (
          <TableRow
            key={item.key}
            table={table}
            row={item.row}
            rowIndex={item.rowIndex}
            isSelected={item.row.getIsSelected()}
            isExpanded={item.row.getIsExpanded()}
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
