import type { ComponentDocsConfig } from "../createComponentDocsPage";
import { renderSegmentedControls } from "./controls";
import { SEGMENTED_PROPS } from "./props";
import { SegmentedPreview } from "./preview";
import {
  SEGMENTED_DEFAULT_STATE,
  type SegmentedPlaygroundState,
} from "./types";
import { createSegmentedUsageCode } from "./usage";

export const segmentedDocsConfig: ComponentDocsConfig<SegmentedPlaygroundState> =
  {
    title: "Segmented",
    description:
      "Segmented переключает значение между несколькими взаимоисключающими вариантами и визуально подсвечивает активный элемент индикатором.",
    props: SEGMENTED_PROPS,
    initialState: SEGMENTED_DEFAULT_STATE,
    createUsageCode: createSegmentedUsageCode,
    renderPreview: SegmentedPreview,
    renderControls: renderSegmentedControls,
  };
