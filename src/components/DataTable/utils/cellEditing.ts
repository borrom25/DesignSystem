import type { Cell, Row, Table } from "@tanstack/react-table";
import type {
  TableCellEditContext,
  TableCellEditablePredicate,
  TableCellValueChangeEvent,
  TableCellValueChangeReason,
} from "../types";

export const getDataTableCellId = (rowId: string, columnId: string) =>
  `${rowId}:${columnId}`;

export const formatDataTableCellValue = (value: unknown) =>
  value === null || value === undefined ? "" : String(value);

export const createDataTableCellEditContext = <TData>({
  row,
  cell,
  table,
}: {
  row: Row<TData>;
  cell: Cell<TData, unknown>;
  table: Table<TData>;
}): TableCellEditContext<TData> => {
  const columnId = cell.column.id;

  return {
    row,
    cell,
    table,
    rowId: row.id,
    columnId,
    cellId: getDataTableCellId(row.id, columnId),
    value: cell.getValue(),
  };
};

export const createDataTableCellValueChangeEvent = <TData>(
  context: TableCellEditContext<TData>,
  value: unknown,
  reason: TableCellValueChangeReason
): TableCellValueChangeEvent<TData> => ({
  ...context,
  value,
  previousValue: context.value,
  reason,
});

interface GetIsDataTableCellEditableParams<TData> {
  editable: boolean;
  isServiceCell: boolean;
  editableCellIds?: string[];
  isCellEditable?: TableCellEditablePredicate<TData>;
  editContext: TableCellEditContext<TData>;
}

export const getIsDataTableCellEditable = <TData>({
  editable,
  isServiceCell,
  editableCellIds,
  isCellEditable,
  editContext,
}: GetIsDataTableCellEditableParams<TData>) => {
  const hasEditableCellIds = Boolean(editableCellIds?.length);
  const isListedEditableCell =
    editableCellIds?.includes(editContext.cellId) ||
    editableCellIds?.includes(editContext.cell.id) ||
    false;
  const predicateResult = isCellEditable?.(editContext);

  return (
    editable &&
    !isServiceCell &&
    (isListedEditableCell ||
      predicateResult === true ||
      (!hasEditableCellIds && predicateResult === undefined))
  );
};
