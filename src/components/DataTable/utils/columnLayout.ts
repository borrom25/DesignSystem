import type { CSSProperties } from "react";
import { selectionColumnId, actionsColumnId } from "./constants";

export function isSelectionColumn(columnId: string): boolean {
  return columnId === selectionColumnId;
}

export function isActionsColumn(columnId: string): boolean {
  return columnId === actionsColumnId;
}

export function isServiceColumn(columnId: string): boolean {
  return isSelectionColumn(columnId) || isActionsColumn(columnId);
}

export function getDataTableColumnWidthStyle(
  columnId: string,
  size: number
): Pick<CSSProperties, "width" | "minWidth" | "maxWidth"> {
  if (isServiceColumn(columnId)) {
    return {
      width: size,
      minWidth: size,
      maxWidth: size,
    };
  }

  return {
    width: size,
    minWidth: size,
  };
}

export function getStickyPosition(
  sticky?: boolean | "left" | "right"
): "left" | "right" | undefined {
  if (sticky === "left" || sticky === "right") {
    return sticky;
  }

  if (sticky) {
    return "left";
  }

  return undefined;
}

interface StickyColumnLike {
  id: string;
  columnDef: unknown;
  parent?: StickyColumnLike | null;
}

function getColumnSticky(
  columnDef: unknown
): boolean | "left" | "right" | undefined {
  if (!columnDef || typeof columnDef !== "object" || !("sticky" in columnDef)) {
    return undefined;
  }

  return (columnDef as { sticky?: boolean | "left" | "right" }).sticky;
}

export function getBeforeStickyRightColumnIds<TColumn extends StickyColumnLike>(
  columns: TColumn[]
): Set<string> {
  const ids = new Set<string>();

  for (let index = 0; index < columns.length - 1; index += 1) {
    const currentColumn = columns[index];
    const nextColumn = columns[index + 1];

    if (
      currentColumn &&
      nextColumn &&
      getStickyPosition(getColumnSticky(nextColumn.columnDef)) === "right"
    ) {
      let column: StickyColumnLike | null | undefined = currentColumn;

      while (column) {
        ids.add(column.id);
        column = column.parent;
      }
    }
  }

  return ids;
}
