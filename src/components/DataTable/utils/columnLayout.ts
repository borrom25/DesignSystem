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
