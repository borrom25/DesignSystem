import type { ComponentDocsConfig } from "../createComponentDocsPage";
import { renderLabelControls } from "./controls";
import { LabelPreview } from "./preview";
import { LABEL_PROPS } from "./props";
import { LABEL_DEFAULT_STATE, type LabelPlaygroundState } from "./types";
import { createLabelUsageCode } from "./usage";

export const labelDocsConfig: ComponentDocsConfig<LabelPlaygroundState> = {
  title: "Label",
  description:
    "Label используется для компактного отображения статуса, категории или дополнительной информации.",
  props: LABEL_PROPS,
  initialState: LABEL_DEFAULT_STATE,
  createUsageCode: createLabelUsageCode,
  renderPreview: LabelPreview,
  renderControls: renderLabelControls,
};
