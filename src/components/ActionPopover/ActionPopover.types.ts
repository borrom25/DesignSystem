import type { HTMLAttributes, ReactNode } from "react";

export interface ActionPopoverProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "children"
> {
  selectedLabel?: ReactNode;
  children?: ReactNode;
  onClose?: () => void;
  closeAriaLabel?: string;
}

export interface ActionPopoverLayoutState {
  showSelectedLabel: boolean;
  showContent: boolean;
  showClose: boolean;
}
