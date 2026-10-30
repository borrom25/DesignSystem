import type { ComponentDocsConfig } from "../createComponentDocsPage";
import { renderInputControls } from "./controls";
import { InputPreview } from "./preview";
import { INPUT_PROPS } from "./props";
import { INPUT_DEFAULT_STATE, type InputPlaygroundState } from "./types";
import { createInputUsageCode } from "./usage";

export const inputDocsConfig: ComponentDocsConfig<InputPlaygroundState> = {
  title: "Input",
  description:
    "Input используется для ввода коротких текстовых значений с поддержкой подписи, подсказок, иконок и счетчика.",
  props: INPUT_PROPS,
  initialState: INPUT_DEFAULT_STATE,
  createUsageCode: createInputUsageCode,
  renderPreview: InputPreview,
  renderControls: renderInputControls,
};
