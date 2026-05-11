import type { HTMLAttributes, ReactNode } from "react";
import type { Size } from "@/types";

export type TabsOverflowItem<T extends string | number> = {
  label: ReactNode;
  value: T;
  disabled?: boolean;
  counter?: ReactNode;
};

export type TabsOverflowProps<T extends string | number = string> = Omit<
  HTMLAttributes<HTMLDivElement>,
  "children" | "defaultValue" | "onChange"
> & {
  items: TabsOverflowItem<T>[];
  value?: T;
  defaultValue?: T;
  onValueChange?: (value: T) => void;
  size?: Size;
  disabled?: boolean;
  sideMenu?: boolean;
  moreLabel?: string;
  indicatorOffset?: number;
};

export type TabTriggerProps<T extends string | number> = {
  item: TabsOverflowItem<T>;
  className: string;
  isSelected: boolean;
  isDisabled: boolean;
  registerTabButton: (value: T, element: HTMLButtonElement | null) => void;
  onSelect: (value: T) => void;
};
