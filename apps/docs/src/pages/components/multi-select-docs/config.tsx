import type { ComponentDocsConfig } from "../createComponentDocsPage";
import { renderMultiSelectControls } from "./controls";
import { MultiSelectPreview } from "./preview";
import { MULTI_SELECT_PROPS } from "./props";
import {
  MULTI_SELECT_DEFAULT_STATE,
  type MultiSelectPlaygroundState,
} from "./types";
import { createMultiSelectUsageCode } from "./usage";

export const multiSelectDocsConfig: ComponentDocsConfig<MultiSelectPlaygroundState> =
  {
    title: "MultiSelect",
    description:
      "MultiSelect используется для множественного выбора значений из списка со счётчиком выбранных опций.",
    props: MULTI_SELECT_PROPS,
    initialState: MULTI_SELECT_DEFAULT_STATE,
    createUsageCode: createMultiSelectUsageCode,
    renderPreview: MultiSelectPreview,
    renderControls: renderMultiSelectControls,
  };
