import { Skeleton } from "@/components/Skeleton";
import { cn } from "@/utils";
import { tableStyles } from "../styles";
import type { ColumnDef, TableSkeletonBodyProps } from "../types";
import {
  getDataTableColumnWidthStyle,
  getStickyPosition,
  isServiceColumn,
} from "../utils/columnLayout";

export function TableSkeletonBody<TData>({
  table,
  beforeStickyRightColumnIds,
  bordered = false,
  className,
  cellClassName,
  rowCount,
}: TableSkeletonBodyProps<TData>) {
  const columns = table.getVisibleLeafColumns();
  const rows = Array.from({ length: rowCount }, (_, index) => index);

  return (
    <tbody className={cn(tableStyles.body, className)} aria-hidden>
      {rows.map((rowIndex) => (
        <tr key={rowIndex} className={tableStyles.row}>
          {columns.map((column) => {
            const isServiceCell = isServiceColumn(column.id);
            const stickyPosition = getStickyPosition(
              (column.columnDef as ColumnDef<TData>).sticky
            );
            const isBeforeStickyRight = beforeStickyRightColumnIds.has(
              column.id
            );
            const widthStyle = getDataTableColumnWidthStyle(
              column.id,
              column.getSize()
            );

            return (
              <td
                key={column.id}
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
                {!isServiceCell && (
                  <Skeleton className={tableStyles.skeletonBar} />
                )}
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
}
