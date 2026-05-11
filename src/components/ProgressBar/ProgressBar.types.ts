import type { HTMLAttributes } from "react";
import type { LucideIcon } from "lucide-react";
import type { Size } from "@/types";
import type { LabelColor, LabelType } from "@/components/Label/Label.types";

export type ProgressBarStatus = "loading" | "success" | "error";

export interface ProgressBarProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "title"
> {
  icon?: LucideIcon;
  title?: string;
  progress?: number;
  status?: ProgressBarStatus;
  /** Показывать Label со статусом/процентами. Если false — только полоска (при отсутствии title). */
  showStatusLabel?: boolean;
  segmentedItems?: ProgressSegmentItem[];
}

export type StatusLabelConfig = {
  color: LabelColor;
  type: LabelType;
  size: Size;
  rounded: boolean;
  iconOnly?: LucideIcon;
  text?: string;
};

export interface ProgressSegmentItem {
  progress?: number;
  status: ProgressBarStatus;
}

export interface ProgressSegmentProps extends Omit<
  ProgressSegmentItem,
  "progress"
> {
  progress: number;
}
