import type { ComponentDocsConfig } from "../createComponentDocsPage";
import { renderSelectControls } from "./controls";
import { SelectPreview } from "./preview";
import { SELECT_PROPS } from "./props";
import { SELECT_DEFAULT_STATE, type SelectPlaygroundState } from "./types";
import { createSelectUsageCode } from "./usage";

export const selectDocsConfig: ComponentDocsConfig<SelectPlaygroundState> = {
  title: "Select",
  description:
    "Select используется для выбора одного значения из списка с поддержкой состояний поля.",
  props: SELECT_PROPS,
  initialState: SELECT_DEFAULT_STATE,
  createUsageCode: createSelectUsageCode,
  renderPreview: SelectPreview,
  renderControls: renderSelectControls,
};
