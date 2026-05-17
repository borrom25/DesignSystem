import type { HTMLAttributes } from "react";
import type { LucideIcon } from "lucide-react";
import type { Color, Size } from "@/types";

export type ProgressPieColors = Exclude<
  Color,
  "inverse" | "contrastDark" | "contrastLight" | "generic"
>;

export type ProgressPieSize = Size | "lg";

export interface ConfigProps {
  showIcon?: boolean;
  showProgress?: boolean;
}

export interface ProgressPieProps extends HTMLAttributes<HTMLDivElement> {
  icon?: LucideIcon;
  progress?: number;
  size: ProgressPieSize;
  color?: ProgressPieColors;
  showIcon?: boolean;
  showProgress?: boolean;
}

export interface ProgressCircleProps {
  color: ProgressPieColors;
  sizePx: number;
  correctedProgress: number;
}
