import type { ReactNode } from "react";
import type { Color, Size, Type } from "@/types";

export type ButtonDropItem<T extends string | number = string> = {
  label: ReactNode;
  value: T;
  disabled?: boolean;
  onClick?: () => void;
};

export type ButtonDropProps<T extends string | number = string> = {
  value?: T;
  onChange?: (value: T) => void;
  items: ButtonDropItem<T>[];
  placeholder?: string;
  color?: Color;
  type?: Type;
  size?: Size;
  disabled?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  hideChevron?: boolean;
  iconOnly?: boolean;
  className?: string;
  contentClassName?: string;
  matchTriggerWidth?: boolean;
};
