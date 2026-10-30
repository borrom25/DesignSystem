import type { ComponentDocsConfig } from "../createComponentDocsPage";
import { renderMultiTagControls } from "./controls";
import { MultiTagPreview } from "./preview";
import { MULTI_TAG_PROPS } from "./props";
import { MULTI_TAG_DEFAULT_STATE, type MultiTagPlaygroundState } from "./types";
import { createMultiTagUsageCode } from "./usage";

export const multiTagDocsConfig: ComponentDocsConfig<MultiTagPlaygroundState> =
  {
    title: "MultiTag",
    description:
      "MultiTag используется для множественного выбора значений из списка с отображением выбранных опций в виде тегов.",
    props: MULTI_TAG_PROPS,
    initialState: MULTI_TAG_DEFAULT_STATE,
    createUsageCode: createMultiTagUsageCode,
    renderPreview: MultiTagPreview,
    renderControls: renderMultiTagControls,
  };
