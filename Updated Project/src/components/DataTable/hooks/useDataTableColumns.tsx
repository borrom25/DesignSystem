import { useMemo } from "react";
import type { ColumnDef, UseDataTableColumnsParams } from "../types";
import {
  createActionsColumn,
  createExpanderColumn,
  createSelectionColumn,
} from "../utils/columnFactories";

export function useDataTableColumns<TData>({
  columns,
  enableRowSelection,
  enableNestedRows,
  stickySelectionColumn,
  stickyActionsColumn,
  rowActions,
}: UseDataTableColumnsParams<TData>): ColumnDef<TData>[] {
  return useMemo(() => {
    const resultColumns: ColumnDef<TData>[] = [];

    if (enableNestedRows) {
      resultColumns.push(createExpanderColumn<TData>(stickySelectionColumn));
    } else if (enableRowSelection) {
      resultColumns.push(createSelectionColumn<TData>(stickySelectionColumn));
    }

    resultColumns.push(...(columns as ColumnDef<TData>[]));

    if (rowActions) {
      resultColumns.push(
        createActionsColumn<TData>(stickyActionsColumn, rowActions)
      );
    }

    return resultColumns;
  }, [
    columns,
    enableRowSelection,
    enableNestedRows,
    rowActions,
    stickySelectionColumn,
    stickyActionsColumn,
  ]);
}
