import type { ComponentDocsConfig } from "../createComponentDocsPage";
import { renderPlugControls } from "./controls";
import { PlugPreview } from "./preview";
import { PLUG_PROPS } from "./props";
import { PLUG_DEFAULT_STATE, type PlugPlaygroundState } from "./types";
import { createPlugUsageCode } from "./usage";

export const plugDocsConfig: ComponentDocsConfig<PlugPlaygroundState> = {
  title: "Plug",
  description:
    "Plug отображает empty state с иллюстрацией, сообщением и действием. Компонент подходит для пустых списков, отсутствующих результатов поиска и начальных состояний.",
  props: PLUG_PROPS,
  initialState: PLUG_DEFAULT_STATE,
  createUsageCode: createPlugUsageCode,
  renderPreview: PlugPreview,
  renderControls: renderPlugControls,
};
