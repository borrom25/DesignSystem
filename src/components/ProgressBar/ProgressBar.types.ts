import type { HTMLAttributes } from "react";
import type { LucideIcon } from "lucide-react";
import type { Size } from "@/types";
import type { LabelColor, LabelType } from "@/components/Label/Label.types";
import type { TextColor, TextShade, TextVariant } from "@/components/Text";

export type ProgressBarStatus = "loading" | "success" | "error";

export type ProgressBarLabelPosition = "top" | "end";

export interface ProgressBarProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "title"
> {
  icon?: LucideIcon;
  iconSize?: number;
  title?: string;
  titleVariant?: TextVariant;
  titleColor?: TextColor;
  titleShade?: TextShade;
  labelSize?: Size;
  labelColor?: LabelColor;
  labelPosition?: ProgressBarLabelPosition;
  progress?: number;
  status?: ProgressBarStatus;
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
