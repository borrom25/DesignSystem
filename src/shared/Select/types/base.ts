import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import type { Size } from "@/types";

export type BaseSelectOption = {
  value: string;
  label: ReactNode;
  disabled?: boolean;
  icon?: LucideIcon;
};

export type BaseTriggerProps = {
  size?: Size;
  error?: boolean;
  className?: string;
  children?: ReactNode;
};

export type BaseValueProps = {
  placeholder?: string;
  className?: string;
  children?: ReactNode;
};

export type BaseContentProps = {
  matchTriggerWidth?: boolean;
  maxHeight?: number | "available";
  className?: string;
  children?: ReactNode;
  onScrollEnd?: () => void;
  scrollEndOffset?: number;
};

export type BaseGroupProps = {
  className?: string;
  children?: ReactNode;
};

export type BaseScrollProps = {
  onScrollEnd?: () => void;
  scrollEndOffset?: number;
  isLoading?: boolean;
  hasMore?: boolean;
};
