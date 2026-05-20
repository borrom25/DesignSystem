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
} from "@/shared/Select";

export type SelectContextValue<T extends string | number = string> = {
  value?: T;
  open: boolean;
  disabled: boolean;
  size: Size;
  label?: ReactNode;
  required?: boolean;
  onSelect: (value: T) => void;
  setOpen: (open: boolean) => void;
  onClear?: () => void;
};

export type SelectOption = BaseSelectOption;
export type SelectRenderValue = (
  selected: SelectOption | undefined
) => ReactNode;
export type SelectRenderItem = (
  option: SelectOption,
  state: { selected: boolean }
) => ReactNode;

export type SelectProps<T extends string | number = string> =
  BaseFieldProps<T> & {
    value?: T;
    defaultValue?: T;
    onValueChange?: (value?: T) => void;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    options?: SelectOption[];
    disabled?: boolean;
    name?: string;
    size?: Size;
    className?: string;
    triggerClassName?: string;
    contentClassName?: string;
    itemClassName?: string;
    children?: ReactNode;
    placeholder?: string;
    renderValue?: SelectRenderValue;
    renderItem?: SelectRenderItem;
    matchTriggerWidth?: boolean;
    maxHeight?: number | "available";
    onScrollEnd?: () => void;
    scrollEndOffset?: number;
    side?: "top" | "bottom" | "left" | "right";
    sideOffset?: number;
    align?: "start" | "center" | "end";
    onClear?: () => void;
  };

export type SelectTriggerProps = BaseTriggerProps & {
  onClear?: () => void;
};

export type SelectValueProps = BaseValueProps;

export type SelectContentProps = BaseContentProps & {
  side?: "top" | "bottom" | "left" | "right";
  sideOffset?: number;
  align?: "start" | "center" | "end";
};

export type SelectItemProps<T extends string | number = string> = {
  value: T;
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
  icon?: LucideIcon;
};

export type SelectGroupProps = BaseGroupProps;

export type SelectLabelProps = BaseGroupProps;
