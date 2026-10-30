import { memo, useCallback, useMemo } from "react";
import type { Row } from "@tanstack/react-table";
import type { ButtonDropItem } from "@/components/ButtonDrop/ButtonDrop.types";
import { useDataTableRowActionPopoverContext } from "../hooks/useDataTableRowActionPopover";
import { DataTableRowActions } from "./DataTableRowActions";

export interface DataTableRowActionsCellProps<TData> {
  row: Row<TData>;
  rowActions: (row: Row<TData>) => ButtonDropItem[] | null | undefined;
}

function DataTableRowActionsCellComponent<TData>({
  row,
  rowActions,
}: DataTableRowActionsCellProps<TData>) {
  const popover = useDataTableRowActionPopoverContext();
  const actions = useMemo(() => rowActions(row) ?? [], [row, rowActions]);
  const rowId = row.id;
  const setOpenRow = popover?.setOpenRow;
  const handleOpenChange = useCallback(
    (open: boolean) => {
      setOpenRow?.(rowId, open);
    },
    [rowId, setOpenRow]
  );
  const open = popover
    ? popover.openRowId === rowId && popover.visible
    : undefined;

  return (
    <DataTableRowActions
      rowId={rowId}
      actions={actions}
      open={open}
      onOpenChange={popover ? handleOpenChange : undefined}
    />
  );
}

export const DataTableRowActionsCell = memo(
  DataTableRowActionsCellComponent
) as typeof DataTableRowActionsCellComponent;
