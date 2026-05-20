import type { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export type StepBarItemType = "successful" | "error";

export interface StepBarItem {
  id: string;
  label: string | ReactNode;
  disabled?: boolean;
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
  type?: StepBarItemType;
}

export interface StepBarProps {
  items: StepBarItem[];
  active?: StepBarItem["id"];
  onChangeStep: (step: StepBarItem["id"]) => void;
  onClickSuccessButton?: () => void;
  className?: string;
  successButtonText?: string;
}

export interface UseStepBarProps {
  items: StepBarItem[];
  active: StepBarItem["id"];
  onChangeStep: (step: StepBarItem["id"]) => void;
}
