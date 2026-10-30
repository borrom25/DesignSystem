import type {
  LabelColor,
  ProgressBarStatus,
  TextColor,
  TextShade,
  TextVariant,
} from "@/components";
import type { Size } from "@/types";

export type ProgressMode = "single" | "segmented";
export type ProgressValue = "0" | "25" | "50" | "75" | "100";

export type ProgressBarPlaygroundState = {
  title: string;
  titleVariant: TextVariant | "default";
  titleColor: TextColor | "default";
  titleShade: TextShade | "default";
  labelSize: Size | "default";
  labelColor: LabelColor | "default";
  labelPosition: "top" | "end" | "default";
  status: ProgressBarStatus;
  progress: ProgressValue;
  mode: ProgressMode;
  showStatusLabel: boolean;
};

export const PROGRESS_BAR_DEFAULT_STATE: ProgressBarPlaygroundState = {
  title: "Загрузка отчета",
  titleVariant: "default",
  titleColor: "default",
  titleShade: "default",
  labelSize: "default",
  labelColor: "default",
  labelPosition: "default",
  status: "loading",
  progress: "50",
  mode: "single",
  showStatusLabel: true,
};
