import type { ReactNode, ButtonHTMLAttributes } from "react";
import type { Size } from "@/types";
import type { BaseFieldProps } from "@/types/field.ts";
import type {
  BaseSelectOption,
  BaseTriggerProps,
  BaseValueProps,
  BaseContentProps,
  BaseScrollProps,
} from "@/shared/Select";

export type MultiSelectOption<T extends string | number = string> = {
  value: T;
  label: ReactNode;
  disabled?: boolean;
  icon?: BaseSelectOption["icon"];
};

export type MultiSelectContextValue<T extends string | number = string> = {
  value: T[];
  open: boolean;
  disabled: boolean;
  size: Size;
  label?: ReactNode;
  required?: boolean;
  clearable?: boolean;
  setOpen: (open: boolean) => void;
  onClear?: () => void;
};

export type MultiSelectRenderValue<T extends string | number = string> = (
  selected: MultiSelectOption<T>[]
) => ReactNode;
export type MultiSelectRenderItem<T extends string | number = string> = (
  option: MultiSelectOption<T>,
  state: { selected: boolean }
) => ReactNode;

type BaseMultiSelectProps<T extends string | number = string> =
  BaseFieldProps & {
    value?: T[];
    defaultValue?: T[];
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    options?: MultiSelectOption<T>[];
    size?: Size;
    placeholder?: string;
    disabled?: boolean;
    name?: string;
    className?: string;
    triggerClassName?: string;
    contentClassName?: string;
    itemClassName?: string;
    maxHeight?: number | "available";
    matchTriggerWidth?: boolean;
    onScrollEnd?: () => void;
    scrollEndOffset?: number;
    side?: "top" | "bottom" | "left" | "right";
    sideOffset?: number;
    align?: "start" | "center" | "end";
    isLoading?: boolean;
    hasMore?: boolean;
    children?: ReactNode;
    renderValue?: MultiSelectRenderValue<T>;
    renderItem?: MultiSelectRenderItem<T>;
    selectedLabel?: string;
    selectAll?: boolean;
    selectAllLabel?: string;
    clearable?: boolean;
    onClear?: () => void;
  };

type MultiSelectWithReturnAll<T extends string | number = string> =
  BaseMultiSelectProps<T> & {
    returnAll: true;
    onValueChange?: (value: T[] | "all") => void;
  };

type MultiSelectWithoutReturnAll<T extends string | number = string> =
  BaseMultiSelectProps<T> & {
    returnAll?: false;
    onValueChange?: (value: T[]) => void;
  };

export type MultiSelectProps<T extends string | number = string> =
  | MultiSelectWithReturnAll<T>
  | MultiSelectWithoutReturnAll<T>;

export type UseMultiSelectStateProps<T extends string | number = string> = {
  value?: T[];
  defaultValue?: T[];
  onValueChange?: MultiSelectProps<T>["onValueChange"];
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  onClear?: () => void;
  options?: MultiSelectOption<T>[];
  returnAll?: MultiSelectProps<T>["returnAll"];
};

export type MultiSelectTriggerProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children"
> &
  BaseTriggerProps & {
    open?: boolean;
    isFilled?: boolean;
    clearable?: boolean;
    onClear?: () => void;
    hasValue?: boolean;
  };

export type MultiSelectValueProps<T extends string | number = string> = Omit<
  BaseValueProps,
  "children"
> & {
  selectedOptions: MultiSelectOption<T>[];
  renderValue?: (selected: MultiSelectOption<T>[]) => ReactNode;
  selectedLabel?: string;
  size?: Size;
  error?: boolean;
};

export type MultiSelectContentProps = BaseContentProps &
  BaseScrollProps & {
    side?: "top" | "bottom" | "left" | "right";
    sideOffset?: number;
    align?: "start" | "center" | "end";
    selectAll?: boolean;
    selectAllLabel?: string;
    allSelected?: boolean;
    someSelected?: boolean;
    onSelectAll?: () => void;
  };

export type MultiSelectAllProps = {
  label: string;
  checked: boolean;
  indeterminate: boolean;
  onToggle: () => void;
};
