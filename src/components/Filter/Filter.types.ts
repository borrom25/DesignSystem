import type { ReactNode } from "react";
import type { Color, Size, Type } from "@/types";

export interface FilterPanelProps {
  className?: string;
  width?: number;
  bodyClassName?: string;
  footerClassName?: string;
  children?: ReactNode;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  onSearchClear?: () => void;
  searchPlaceholder?: string;
  searchSlot?: ReactNode;
  showSearch?: boolean;
  maxBodyHeight?: number | string;
  onReset?: () => void;
  onApply?: () => void;
  resetLabel?: ReactNode;
  applyLabel?: ReactNode;
  resetDisabled?: boolean;
  applyDisabled?: boolean;
  resetButtonType?: Type;
  resetButtonColor?: Color;
  applyButtonType?: Type;
  applyButtonColor?: Color;
  actionButtonSize?: Size;
  footer?: ReactNode;
}
