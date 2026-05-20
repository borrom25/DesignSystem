import type { ReactNode } from "react";
import type { Size } from "@/types";

export interface FilterListOption<T = string> {
  value: T;
  label: ReactNode;
  disabled?: boolean;
}

export interface FilterListGroup<T = string> {
  label?: ReactNode;
  options: FilterListOption<T>[];
}

export interface FilterListProps<T = string> {
  options?: FilterListOption<T>[];
  groups?: FilterListGroup<T>[];
  value: T[];
  onChange: (value: T[]) => void;
  showSelectAll?: boolean;
  selectAllLabel?: ReactNode;
  size?: Size;
  className?: string;
  groupClassName?: string;
  groupLabelClassName?: string;
  itemClassName?: string;
  getOptionKey?: (option: FilterListOption<T>) => string;
}

export interface FilterListPanelProps<T = string> {
  value: T[];
  onApply: (value: T[]) => void;
  options?: FilterListOption<T>[];
  groups?: FilterListGroup<T>[];
  className?: string;
  width?: number;
  searchPlaceholder?: string;
  showSearch?: boolean;
  showSelectAll?: boolean;
  emptyMessage?: string;
  getSearchText?: (option: FilterListOption<T>) => string;
}

export interface FilterListCountLabelProps {
  label: string;
  count: number;
}
