import type { ReactNode } from "react";
import type { RowSelectionState } from "@tanstack/react-table";
import type {
  DataTablePopoverActionContext,
  DataTablePopoverActionProps,
} from "../types";

export function getDataTablePopoverActionOptions<TData>(
  popoverAction: boolean | DataTablePopoverActionProps<TData> | undefined
) {
  if (popoverAction === undefined || popoverAction === false) {
    return null;
  }

  return typeof popoverAction === "object" ? popoverAction : {};
}

export function getRowSelectionSignature(rowSelection: RowSelectionState) {
  return Object.keys(rowSelection)
    .filter((rowId) => rowSelection[rowId])
    .sort()
    .join("|");
}

export function resolveDataTablePopoverActionChildren<TData>(
  children: DataTablePopoverActionProps<TData>["children"],
  context: DataTablePopoverActionContext<TData>
) {
  return typeof children === "function" ? children(context) : children;
}

export function resolveDataTablePopoverActionSelectedLabel(
  selectedLabel: DataTablePopoverActionProps<unknown>["selectedLabel"],
  selectedCount: number
): ReactNode {
  if (typeof selectedLabel === "function") {
    return selectedLabel(selectedCount);
  }

  return selectedLabel ?? `Выбрано: ${selectedCount}`;
}
