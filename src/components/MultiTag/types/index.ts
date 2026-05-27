import type { ReactNode, Ref } from "react";
import type { Size } from "@/types";
import type { BaseFieldProps } from "@/types/field";
import type {
  BaseSelectOption,
  BaseContentProps,
  BaseScrollProps,
} from "@/shared/Select";

export type MultiTagOption<T extends string | number = string> = {
  value: T;
  label: ReactNode;
  disabled?: boolean;
  icon?: BaseSelectOption["icon"];
};

type BaseMultiTagProps<T extends string | number = string> = BaseFieldProps & {
  value?: T[];
  defaultValue?: T[];
  options?: MultiTagOption<T>[];
  size?: Size;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  triggerClassName?: string;
  contentClassName?: string;
  maxHeight?: number | "available";
  matchTriggerWidth?: boolean;
  onScrollEnd?: () => void;
  scrollEndOffset?: number;
  isLoading?: boolean;
  hasMore?: boolean;
  children?: ReactNode;
  selectAll?: boolean;
  selectAllLabel?: string;
  clearable?: boolean;
  onClear?: () => void;
  maxVisibleRows?: number;
};

type MultiTagWithReturnAll<T extends string | number = string> =
  BaseMultiTagProps<T> & {
    returnAll: true;
    onChange?: (value: T[] | "all") => void;
  };

type MultiTagWithoutReturnAll<T extends string | number = string> =
  BaseMultiTagProps<T> & {
    returnAll?: false;
    onChange?: (value: T[]) => void;
  };

export type MultiTagProps<T extends string | number = string> =
  | MultiTagWithReturnAll<T>
  | MultiTagWithoutReturnAll<T>;

export type MultiTagTriggerProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "children" | "ref"
> & {
  size?: Size;
  error?: boolean;
  open?: boolean;
  isFilled?: boolean;
  disabled?: boolean;
  ref?: Ref<HTMLDivElement>;
  children?: ReactNode;
  clearable?: boolean;
  onClear?: () => void;
  maxVisibleRows?: number;
  label?: ReactNode;
  required?: boolean;
};

export type MultiTagValueProps<T extends string | number = string> = {
  size?: Size;
  placeholder?: string;
  selectedOptions: MultiTagOption<T>[];
  disabled?: boolean;
  error?: boolean;
  onRemove?: (value: T) => void;
  label?: ReactNode;
  open?: boolean;
};

export type MultiTagContentProps = BaseContentProps &
  BaseScrollProps & {
    selectAll?: boolean;
    selectAllLabel?: string;
    allSelected?: boolean;
    someSelected?: boolean;
    onSelectAll?: () => void;
  };
