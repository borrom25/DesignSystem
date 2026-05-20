import { useMemo } from "react";
import type { TableColumnsModalOption } from "./TableColumnsModal.types";
import type { UseTableColumnsModalOptionsParams } from "./TableColumnsModal.types";
import { getTableColumnsModalOption } from "./TableColumnsModal.utils";

export function useTableColumnsModalOptions<
  TData = unknown,
  T extends string = string,
>({
  columns,
  options,
}: UseTableColumnsModalOptionsParams<TData, T>): TableColumnsModalOption<T>[] {
  return useMemo(() => {
    if (options && options.length > 0) {
      return options;
    }

    if (!columns || columns.length === 0) {
      return [];
    }

    return columns.reduce<TableColumnsModalOption<T>[]>((acc, column) => {
      const option = getTableColumnsModalOption<TData, T>(column);

      if (option) {
        acc.push(option);
      }

      return acc;
    }, []);
  }, [columns, options]);
}
