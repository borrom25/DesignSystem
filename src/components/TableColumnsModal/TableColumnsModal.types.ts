import type { ReactNode } from "react";
import type { ColumnDef } from "@/components/Table";
import type { Size } from "@/types";

export interface TableColumnsModalOption<T extends string = string> {
  id: T;
  label: ReactNode;
}

export interface UseTableColumnsModalOptionsParams<
  TData = unknown,
  T extends string = string,
> {
  columns?: ColumnDef<TData>[];
  options?: TableColumnsModalOption<T>[];
}

export type TableColumnsModalProps<
  TData = unknown,
  T extends string = string,
> = UseTableColumnsModalOptionsParams<TData, T> & {
  open: boolean;
  onOpenChange?: (open: boolean) => void;
  value: T[];
  onApply?: (value: T[]) => void;
  title?: ReactNode;
  subtitle?: ReactNode;
  selectAllLabel?: ReactNode;
  cancelLabel?: ReactNode;
  applyLabel?: ReactNode;
  size?: Size;
  showCloseButton?: boolean;
};
