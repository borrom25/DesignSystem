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

type StepBarItems = readonly StepBarItem<string | number>[];
type StepBarItemId<TItems extends StepBarItems> = TItems[number]["id"];
export type StepBarTransitionDirection = "forward" | "backward" | "same";

export interface StepBarTransitionMeta<
  TStepId extends string | number = string,
> {
  previousStep: TStepId;
  nextStep: TStepId;
  direction: StepBarTransitionDirection;
}

export interface StepBarProps<TItems extends StepBarItems = StepBarItems> {
  items: TItems;
  active?: StepBarItemId<TItems>;
  defaultActive?: StepBarItemId<TItems>;
  onChangeStep?: (step: StepBarItemId<TItems>) => void;
  onStepTransition?: (
    meta: StepBarTransitionMeta<StepBarItemId<TItems>>
  ) => void;
  onClickSuccessButton?: () => void;
  className?: string;
  successButtonText?: string;
  loadingPrev?: boolean;
  loadingNext?: boolean;
  loadingSuccess?: boolean;
}

export interface UseStepBarProps<TItems extends StepBarItems = StepBarItems> {
  items: TItems;
  active?: StepBarItemId<TItems>;
  defaultActive?: StepBarItemId<TItems>;
  onChangeStep?: (step: StepBarItemId<TItems>) => void;
  onStepTransition?: (
    meta: StepBarTransitionMeta<StepBarItemId<TItems>>
  ) => void;
}
