import { TableRow } from "./DataTableRow";
import { cn } from "@/utils";
import { tableStyles } from "../styles";
import type { TableBodyProps } from "../types";
import { getDataTableRowDomKey } from "../utils/rowKeys";

export function TableBody<TData>({
  rows,
  columnSignature,
  beforeStickyRightColumnIds,
  onRowClick,
  onRowDoubleClick,
  rowClassName,
  cellClassName,
  bordered = false,
  className,
}: TableBodyProps<TData>) {
  return (
    <tbody className={cn(tableStyles.body, className)}>
      {rows.map((row, index) => (
        <TableRow
          key={getDataTableRowDomKey(row.id, columnSignature)}
          row={row}
          rowIndex={index}
          isSelected={row.getIsSelected()}
          isExpanded={row.getIsExpanded()}
          onRowClick={onRowClick}
          onRowDoubleClick={onRowDoubleClick}
          rowClassName={rowClassName}
          cellClassName={cellClassName}
          bordered={bordered}
          beforeStickyRightColumnIds={beforeStickyRightColumnIds}
        />
      ))}
    </tbody>
  );
}
