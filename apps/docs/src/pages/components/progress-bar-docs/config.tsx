import type { ComponentDocsConfig } from "../createComponentDocsPage";
import { renderProgressBarControls } from "./controls";
import { ProgressBarPreview } from "./preview";
import { PROGRESS_BAR_PROPS } from "./props";
import {
  PROGRESS_BAR_DEFAULT_STATE,
  type ProgressBarPlaygroundState,
} from "./types";
import { createProgressBarUsageCode } from "./usage";

export const progressBarDocsConfig: ComponentDocsConfig<ProgressBarPlaygroundState> =
  {
    title: "ProgressBar",
    developers: [],
    description:
      "ProgressBar отображает ход выполнения задачи в линейном формате и поддерживает как единичный, так и сегментированный режим.",
    props: PROGRESS_BAR_PROPS,
    initialState: PROGRESS_BAR_DEFAULT_STATE,
    createUsageCode: createProgressBarUsageCode,
    renderPreview: ProgressBarPreview,
    renderControls: renderProgressBarControls,
  };
