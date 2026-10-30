import type { ComponentDocsConfig } from "../createComponentDocsPage";
import { renderProgressPieControls } from "./controls";
import { ProgressPiePreview } from "./preview";
import { PROGRESS_PIE_PROPS } from "./props";
import {
  PROGRESS_PIE_DEFAULT_STATE,
  type ProgressPiePlaygroundState,
} from "./types";
import { createProgressPieUsageCode } from "./usage";

export const progressPieDocsConfig: ComponentDocsConfig<ProgressPiePlaygroundState> =
  {
    title: "ProgressPie",
    developers: [],
    description:
      "ProgressPie визуализирует прогресс в компактном круговом формате и адаптирует внутренний контент в зависимости от размера.",
    props: PROGRESS_PIE_PROPS,
    initialState: PROGRESS_PIE_DEFAULT_STATE,
    createUsageCode: createProgressPieUsageCode,
    renderPreview: ProgressPiePreview,
    renderControls: renderProgressPieControls,
  };
