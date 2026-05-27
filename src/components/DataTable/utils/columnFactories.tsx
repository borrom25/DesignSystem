import type { CSSProperties } from "react";
import { ChevronDown, ChevronsDown } from "lucide-react";
import { CheckBox } from "@/components/CheckBox";
import { Size } from "@/types";
import { cn } from "@/utils";
import type { ColumnDef, Row } from "../types";
import { tableStyles } from "../styles";
import {
  actionsColumnId,
  actionsColumnWidth,
  selectionColumnId,
  selectionColumnWidth,
} from "./constants";
import { DataTableRowActionsCell } from "../ui/DataTableRowActionsCell";
import type { ButtonDropItem } from "@/components/ButtonDrop/ButtonDrop.types";

export function createExpanderColumn<TData>(
  stickySelectionColumn: boolean
): ColumnDef<TData> {
  return {
    id: selectionColumnId,
    sticky: stickySelectionColumn,
    size: selectionColumnWidth,
    minSize: selectionColumnWidth,
    maxSize: selectionColumnWidth,
    enableSorting: false,
    enableColumnFilter: false,
    enableGlobalFilter: false,
    enableResizing: false,
    header: ({ table }) => {
      const isAllExpanded = table.getIsAllRowsExpanded();
      const hasExpandableRows = table
        .getPreExpandedRowModel()
        .flatRows.some((row) => row.getCanExpand());

      return (
        <div className={tableStyles.selectionControl}>
          <button
            type="button"
            disabled={!hasExpandableRows}
            className={tableStyles.expandButton}
            onClick={(event) => {
              event.stopPropagation();
              table.toggleAllRowsExpanded(!isAllExpanded);
            }}
            aria-label={
              isAllExpanded ? "Свернуть все строки" : "Раскрыть все строки"
            }
          >
            <ChevronsDown
              size={16}
              className={cn(
                tableStyles.expandIcon,
                isAllExpanded && tableStyles.expandIconAllExpanded
              )}
            />
          </button>
        </div>
      );
    },
    cell: ({ row }) => {
      const canExpand = row.getCanExpand();
      const isExpanded = row.getIsExpanded();
      const depthStyle = {
        "--data-table-row-depth": row.depth,
      } as CSSProperties;

      return (
        <div className={tableStyles.expandControl} style={depthStyle}>
          {canExpand ? (
            <button
              type="button"
              className={tableStyles.expandButton}
              onClick={(event) => {
                event.stopPropagation();
                row.toggleExpanded();
              }}
              aria-label={isExpanded ? "Свернуть строку" : "Раскрыть строку"}
              aria-expanded={isExpanded}
            >
              <ChevronDown
                size={16}
                className={cn(
                  tableStyles.expandIcon,
                  isExpanded && tableStyles.expandIconExpanded
                )}
              />
            </button>
          ) : (
            <span className={tableStyles.expandButtonPlaceholder} />
          )}
        </div>
      );
    },
  };
}

export function createSelectionColumn<TData>(
  stickySelectionColumn: boolean
): ColumnDef<TData> {
  return {
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
}

export function createActionsColumn<TData>(
  stickyActionsColumn: boolean,
  rowActions: (row: Row<TData>) => ButtonDropItem[] | null | undefined
): ColumnDef<TData> {
  return {
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
}
