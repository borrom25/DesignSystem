import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import type { Size } from "@/types";
import type { BaseFieldProps } from "@/types/field";
import type {
  BaseSelectOption,
  BaseTriggerProps,
  BaseValueProps,
  BaseContentProps,
  BaseGroupProps,
  SelectOptionValue,
} from "@/shared/Select";

export type SelectContextValue<T extends SelectOptionValue = string> = {
  value?: T | null;
  open: boolean;
  disabled: boolean;
  clearable: boolean;
  size: Size;
  label?: ReactNode;
  required?: boolean;
  onSelect: (value: T) => void;
  setOpen: (open: boolean) => void;
  onClear?: () => void;
};

export type SelectOption<T extends SelectOptionValue = string> =
  BaseSelectOption<T>;
export type SelectRenderValue<T extends SelectOptionValue = string> = (
  selected: SelectOption<T> | undefined
) => ReactNode;
export type SelectRenderItem<T extends SelectOptionValue = string> = (
  option: SelectOption<T>,
  state: { selected: boolean }
) => ReactNode;

export type SelectProps<T extends SelectOptionValue = string> =
  BaseFieldProps & {
    value?: T | null;
    defaultValue?: T | null;
    onValueChange?: (value: T | null) => void;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    options?: SelectOption<T>[];
    disabled?: boolean;
    name?: string;
    size?: Size;
    className?: string;
    triggerClassName?: string;
    contentClassName?: string;
    itemClassName?: string;
    children?: ReactNode;
    placeholder?: string;
    renderValue?: SelectRenderValue<T>;
    renderItem?: SelectRenderItem<T>;
    matchTriggerWidth?: boolean;
    maxHeight?: number | "available";
    onScrollEnd?: () => void;
    scrollEndOffset?: number;
    side?: "top" | "bottom" | "left" | "right";
    sideOffset?: number;
    align?: "start" | "center" | "end";
    onClear?: () => void;
    clearable?: boolean;
  };

export type SelectTriggerProps = BaseTriggerProps & {
  clearable?: boolean;
  onClear?: () => void;
};

export type SelectValueProps = BaseValueProps & {
  isFilled?: boolean;
};

export type SelectContentProps = BaseContentProps & {
  side?: "top" | "bottom" | "left" | "right";
  sideOffset?: number;
  align?: "start" | "center" | "end";
};

export type SelectItemProps<T extends SelectOptionValue = string> = {
  value: T;
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
  icon?: LucideIcon;
};

export type SelectGroupProps = BaseGroupProps;

export type SelectLabelProps = BaseGroupProps;
