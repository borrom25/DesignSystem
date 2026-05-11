import type { ColumnFiltersState } from "@tanstack/react-table";
import type {
  ColumnFilterConfig,
  FilterSchema,
} from "../types/DataTable.filter.types";

interface FilterableColumn {
  id?: string;
  accessorKey?: string | number;
  filter?: ColumnFilterConfig;
  columns?: FilterableColumn[];
}

function isObjectRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function isEmptyFilterValue(value: unknown): boolean {
  if (value === undefined || value === null || value === "") return true;
  if (Array.isArray(value) && value.length === 0) return true;
  if (value instanceof Date) return Number.isNaN(value.getTime());
  if (isObjectRecord(value)) {
    if ("start" in value && "end" in value) {
      return isEmptyFilterValue(value.start) && isEmptyFilterValue(value.end);
    }

    if ("min" in value && "max" in value) {
      return isEmptyFilterValue(value.min) && isEmptyFilterValue(value.max);
    }
  }

  return false;
}

export function valuesToColumnFiltersState<TSchema extends FilterSchema>(
  values: TSchema
): ColumnFiltersState {
  return Object.entries(values)
    .filter(([, value]) => !isEmptyFilterValue(value))
    .map(([id, value]) => ({ id, value }));
}

export function columnFiltersStateToValues<TSchema extends FilterSchema>(
  state: ColumnFiltersState,
  defaultValues: TSchema
): TSchema {
  const result = { ...defaultValues };
  for (const { id, value } of state) {
    if (id in defaultValues) {
      (result as Record<string, unknown>)[id] = value;
    }
  }
  return result;
}

function getColumnFilterId(column: FilterableColumn): string | null {
  if (column.id) return column.id;
  if (typeof column.accessorKey === "string") return column.accessorKey;
  if (typeof column.accessorKey === "number") return String(column.accessorKey);
  return null;
}

function getColumnFilterDefaultValue(filter: ColumnFilterConfig): unknown {
  if ("defaultValue" in filter) {
    return filter.defaultValue;
  }

  if (filter.kind === "list") {
    return [];
  }

  if (filter.kind === "dateRange") {
    return { start: undefined, end: undefined };
  }

  if (filter.kind === "numberRange") {
    return { min: undefined, max: undefined };
  }

  return undefined;
}

export function getDataTableFilterDefaultValues(
  columns: readonly FilterableColumn[] = []
): FilterSchema {
  const defaultValues: FilterSchema = {};

  const collect = (column: FilterableColumn) => {
    if (column.filter) {
      const id = getColumnFilterId(column);

      if (id) {
        defaultValues[id] = getColumnFilterDefaultValue(column.filter);
      }
    }

    column.columns?.forEach(collect);
  };

  columns.forEach(collect);

  return defaultValues;
}
