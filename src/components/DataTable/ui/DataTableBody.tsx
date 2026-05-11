import { type Row } from "@tanstack/react-table";
import { TableRow } from "./DataTableRow";
import { cn } from "@/utils";
import { tableStyles } from "../styles";

interface TableBodyProps<TData> {
  rows: Row<TData>[];
  columnSignature: string;
  onRowClick?: (row: Row<TData>) => void;
  onRowDoubleClick?: (row: Row<TData>) => void;
  rowClassName?: string | ((row: Row<TData>) => string);
  cellClassName?: string;
  bordered?: boolean;
  className?: string;
}

export function TableBody<TData>({
  rows,
  columnSignature,
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
          key={`${row.id}:${columnSignature}`}
          row={row}
          rowIndex={index}
          isSelected={row.getIsSelected()}
          onRowClick={onRowClick}
          onRowDoubleClick={onRowDoubleClick}
          rowClassName={rowClassName}
          cellClassName={cellClassName}
          bordered={bordered}
        />
      ))}
    </tbody>
  );
}
