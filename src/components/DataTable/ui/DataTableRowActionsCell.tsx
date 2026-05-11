import { memo, useMemo } from "react";
import type { Row } from "@tanstack/react-table";
import type { ButtonDropItem } from "@/components/ButtonDrop/ButtonDrop.types";
import { DataTableRowActions } from "./DataTableRowActions";

export interface DataTableRowActionsCellProps<TData> {
  row: Row<TData>;
  rowActions: (row: Row<TData>) => ButtonDropItem[] | null | undefined;
}

function DataTableRowActionsCellComponent<TData>({
  row,
  rowActions,
}: DataTableRowActionsCellProps<TData>) {
  const actions = useMemo(() => rowActions(row) ?? [], [row, rowActions]);

  return <DataTableRowActions actions={actions} />;
}

export const DataTableRowActionsCell = memo(
  DataTableRowActionsCellComponent
) as typeof DataTableRowActionsCellComponent;
