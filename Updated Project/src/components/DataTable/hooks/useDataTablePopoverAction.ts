import { useCallback, useEffect, useMemo, useState } from "react";
import type { Table } from "@tanstack/react-table";
import type {
  DataTablePopoverActionContext,
  DataTablePopoverActionProps,
} from "../types";
import {
  getDataTablePopoverActionOptions,
  getRowSelectionSignature,
} from "../utils";

interface UseDataTablePopoverActionParams<TData> {
  table: Table<TData>;
  popoverAction?: boolean | DataTablePopoverActionProps<TData>;
}

export function useDataTablePopoverAction<TData>({
  table,
  popoverAction,
}: UseDataTablePopoverActionParams<TData>) {
  const [isHidden, setIsHidden] = useState(false);
  const selectedRows = table.getSelectedRowModel().rows;
  const rowSelection = table.getState().rowSelection;
  const options = getDataTablePopoverActionOptions(popoverAction);

  const selectedRowSignature = useMemo(
    () => getRowSelectionSignature(rowSelection),
    [rowSelection]
  );

  const hide = useCallback(() => {
    setIsHidden(true);
  }, []);

  useEffect(() => {
    setIsHidden(false);
  }, [selectedRowSignature]);

  const context = useMemo<DataTablePopoverActionContext<TData>>(
    () => ({
      selectedCount: selectedRows.length,
      selectedRows,
      table,
      hide,
    }),
    [hide, selectedRows, table]
  );

  return {
    context,
    options,
    shouldShow:
      options !== null &&
      options.enabled !== false &&
      selectedRows.length > 0 &&
      !isHidden,
  };
}
