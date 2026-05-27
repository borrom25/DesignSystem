import type { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export type StepBarItemType = "successful" | "error";

export interface StepBarItem<T extends string | number = string> {
  id: T;
  label: string | ReactNode;
  disabled?: boolean;
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
  type?: StepBarItemType;
}

export interface StepBarProps<T extends string | number = string> {
  items: StepBarItem<T>[];
  active?: T;
  onChangeStep: (step: T) => void;
  onClickSuccessButton?: () => void;
  className?: string;
  successButtonText?: string;
}

export interface UseStepBarProps<T extends string | number = string> {
  items: StepBarItem<T>[];
  active: T;
  onChangeStep: (step: T) => void;
}
