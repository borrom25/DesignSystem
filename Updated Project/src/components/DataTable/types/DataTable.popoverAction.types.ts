import type { ReactNode } from "react";
import type { Row, Table } from "@tanstack/react-table";

export interface DataTablePopoverActionContext<TData> {
  selectedCount: number;
  selectedRows: Row<TData>[];
  table: Table<TData>;
  hide: () => void;
}

export interface DataTablePopoverActionProps<TData> {
  enabled?: boolean;
  children?:
    | ReactNode
    | ((context: DataTablePopoverActionContext<TData>) => ReactNode);
  selectedLabel?: ReactNode | ((count: number) => ReactNode);
  onClose?: (context: DataTablePopoverActionContext<TData>) => void;
  className?: string;
}
