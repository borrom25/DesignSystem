import { useMemo } from "react";
import type { Table as TanStackTable } from "@tanstack/react-table";
import { getBeforeStickyRightColumnIds } from "../utils/columnLayout";

export function useDataTableColumnLayout<TData>(table: TanStackTable<TData>) {
  const visibleLeafColumns = table.getVisibleLeafColumns();
  const visibleColumnIds = visibleLeafColumns.map((column) => column.id);
  const visibleColumnSignature = visibleColumnIds.join("|");
  const visibleColumnCount = visibleColumnIds.length;
  const beforeStickyRightColumnIds = useMemo(
    () => getBeforeStickyRightColumnIds(visibleLeafColumns),
    [visibleColumnSignature, visibleLeafColumns]
  );

  return {
    visibleColumnSignature,
    visibleColumnCount,
    beforeStickyRightColumnIds,
  };
}
