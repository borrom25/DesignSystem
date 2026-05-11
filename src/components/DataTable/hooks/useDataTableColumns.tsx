import { useMemo } from "react";
import type { Row } from "@tanstack/react-table";
import { CheckBox } from "@/components/CheckBox";
import type { ButtonDropItem } from "@/components/ButtonDrop/ButtonDrop.types";
import { Size } from "@/types";
import type { ColumnDef } from "../types";
import { tableStyles } from "../styles";
import {
  selectionColumnId,
  actionsColumnId,
  selectionColumnWidth,
  actionsColumnWidth,
} from "../utils/constants";
import { DataTableRowActionsCell } from "../ui/DataTableRowActionsCell";

export interface UseDataTableColumnsParams<TData> {
  columns: ColumnDef<TData>[];
  enableRowSelection: boolean | ((row: Row<TData>) => boolean);
  stickySelectionColumn: boolean;
  stickyActionsColumn: boolean;
  rowActions?: (row: Row<TData>) => ButtonDropItem[] | null | undefined;
}

export function useDataTableColumns<TData>({
  columns,
  enableRowSelection,
  stickySelectionColumn,
  stickyActionsColumn,
  rowActions,
}: UseDataTableColumnsParams<TData>): ColumnDef<TData>[] {
  return useMemo(() => {
    const resultColumns: ColumnDef<TData>[] = [];

    if (enableRowSelection) {
      const selectionColumn: ColumnDef<TData> = {
        id: selectionColumnId,
        sticky: stickySelectionColumn,
        size: selectionColumnWidth,
        minSize: selectionColumnWidth,
        maxSize: selectionColumnWidth,
        enableSorting: false,
        enableColumnFilter: false,
        enableGlobalFilter: false,
        enableResizing: false,
        header: ({ table }) => (
          <div className={tableStyles.selectionControl}>
            <CheckBox
              size={Size.Xs}
              checked={table.getIsAllRowsSelected()}
              onChange={table.getToggleAllRowsSelectedHandler()}
              onClick={(event) => event.stopPropagation()}
              aria-label="Выбрать все строки"
            />
          </div>
        ),
        cell: ({ row }) => (
          <div className={tableStyles.selectionControl}>
            <CheckBox
              size={Size.Xs}
              checked={row.getIsSelected()}
              disabled={!row.getCanSelect()}
              onChange={row.getToggleSelectedHandler()}
              onClick={(event) => event.stopPropagation()}
              aria-label="Выбрать строку"
            />
          </div>
        ),
      };
      resultColumns.push(selectionColumn);
    }

    resultColumns.push(...(columns as ColumnDef<TData>[]));

    if (rowActions) {
      const actionsColumn: ColumnDef<TData> = {
        id: actionsColumnId,
        sticky: stickyActionsColumn ? "right" : false,
        size: actionsColumnWidth,
        minSize: actionsColumnWidth,
        maxSize: actionsColumnWidth,
        enableSorting: false,
        enableColumnFilter: false,
        enableGlobalFilter: false,
        enableResizing: false,
        header: () => null,
        cell: ({ row }) => (
          <DataTableRowActionsCell row={row} rowActions={rowActions} />
        ),
      };
      resultColumns.push(actionsColumn);
    }

    return resultColumns;
  }, [
    columns,
    enableRowSelection,
    rowActions,
    stickySelectionColumn,
    stickyActionsColumn,
  ]);
}
