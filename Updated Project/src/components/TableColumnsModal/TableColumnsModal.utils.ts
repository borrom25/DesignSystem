import { isValidElement } from "react";
import type { ColumnDef } from "@/components/Table";
import type { TableColumnsModalOption } from "./TableColumnsModal.types";

export function normalizeTableColumnsSelection<T extends string>(
  value: T[],
  optionIds: T[]
): T[] {
  const selectedIds = new Set(value);

  return optionIds.filter((id) => selectedIds.has(id));
}

export function getTableColumnsModalColumnId<TData>(
  column: ColumnDef<TData>
): string | null {
  if ("id" in column && typeof column.id === "string") {
    return column.id;
  }

  if ("accessorKey" in column && typeof column.accessorKey === "string") {
    return column.accessorKey;
  }

  return null;
}

export function getTableColumnsModalOption<TData, T extends string = string>(
  column: ColumnDef<TData>
): TableColumnsModalOption<T> | null {
  const id = getTableColumnsModalColumnId(column);

  if (!id) {
    return null;
  }

  const { header } = column;

  if (typeof header === "string" || typeof header === "number") {
    return {
      id: id as T,
      label: header,
    };
  }

  if (isValidElement(header)) {
    return {
      id: id as T,
      label: header,
    };
  }

  return {
    id: id as T,
    label: id,
  };
}
