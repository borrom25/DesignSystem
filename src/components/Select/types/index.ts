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

export type SelectOption<T extends string | number = string> =
  BaseSelectOption<T>;
export type SelectRenderValue<T extends string | number = string> = (
  selected: SelectOption<T> | undefined
) => ReactNode;
export type SelectRenderItem<T extends string | number = string> = (
  option: SelectOption<T>,
  state: { selected: boolean }
) => ReactNode;

export type SelectProps<T extends string | number = string> = BaseFieldProps & {
  value?: T;
  defaultValue?: T;
  onValueChange?: (value?: T) => void;
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
