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

export type MultiSelectOptionValue = string | number;

export type MultiSelectOption<
  T extends MultiSelectOptionValue = MultiSelectOptionValue,
> = {
  value: T;
  label: ReactNode;
  disabled?: boolean;
  icon?: BaseSelectOption["icon"];
};

export type MultiSelectContextValue<
  T extends MultiSelectOptionValue = MultiSelectOptionValue,
> = {
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

export type MultiSelectRenderValue<
  T extends MultiSelectOptionValue = MultiSelectOptionValue,
> = (selected: MultiSelectOption<T>[]) => ReactNode;
export type MultiSelectRenderItem<
  T extends MultiSelectOptionValue = MultiSelectOptionValue,
> = (option: MultiSelectOption<T>, state: { selected: boolean }) => ReactNode;

type BaseMultiSelectProps<
  T extends MultiSelectOptionValue = MultiSelectOptionValue,
> = BaseFieldProps & {
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
  search?: boolean;
  searchValue?: string;
  defaultSearchValue?: string;
  onSearchChange?: (value: string) => void;
  searchPlaceholder?: string;
  searchClassName?: string;
  getSearchText?: (option: MultiSelectOption<T>) => string;
  selectAll?: boolean;
  selectAllLabel?: string;
  clearable?: boolean;
  onClear?: () => void;
};

type MultiSelectWithReturnAll<
  T extends MultiSelectOptionValue = MultiSelectOptionValue,
> = BaseMultiSelectProps<T> & {
  returnAll: true;
  onValueChange?: (value: T[] | "all") => void;
};

type MultiSelectWithoutReturnAll<
  T extends MultiSelectOptionValue = MultiSelectOptionValue,
> = BaseMultiSelectProps<T> & {
  returnAll?: false;
  onValueChange?: (value: T[]) => void;
};

export type MultiSelectProps<
  T extends MultiSelectOptionValue = MultiSelectOptionValue,
> = MultiSelectWithReturnAll<T> | MultiSelectWithoutReturnAll<T>;

export type UseMultiSelectStateProps<
  T extends MultiSelectOptionValue = MultiSelectOptionValue,
> = {
  value?: T[];
  defaultValue?: T[];
  onValueChange?: MultiSelectProps<T>["onValueChange"];
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  onClear?: () => void;
  options?: MultiSelectOption<T>[];
  selectableOptions?: MultiSelectOption<T>[];
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

export type MultiSelectValueProps<
  T extends MultiSelectOptionValue = MultiSelectOptionValue,
> = Omit<BaseValueProps, "children"> & {
  selectedOptions: MultiSelectOption<T>[];
  renderValue?: MultiSelectRenderValue<T>;
  selectedLabel?: string;
  size?: Size;
  error?: boolean;
};

export type MultiSelectItemProps<
  T extends MultiSelectOptionValue = MultiSelectOptionValue,
> = {
  option: MultiSelectOption<T>;
  selected: boolean;
  onToggle: (value: T) => void;
  className?: string;
  children?: ReactNode;
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
    search?: boolean;
    searchValue?: string;
    onSearchChange?: (value: string) => void;
    onSearchClear?: () => void;
    searchPlaceholder?: string;
    searchClassName?: string;
  };

export type MultiSelectAllProps = {
  label: string;
  checked: boolean;
  indeterminate: boolean;
  onToggle: () => void;
};
