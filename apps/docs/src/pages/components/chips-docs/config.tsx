import type { ComponentDocsConfig } from "../createComponentDocsPage";
import { renderChipsControls } from "./controls";
import { ChipsPreview } from "./preview";
import { CHIPS_PROPS } from "./props";
import { CHIPS_DEFAULT_STATE, type ChipsPlaygroundState } from "./types";
import { createChipsUsageCode } from "./usage";

export const chipsDocsConfig: ComponentDocsConfig<ChipsPlaygroundState> = {
  title: "Chips",
  description:
    "Chips используется для компактного выбора фильтров, тегов и категорий с поддержкой иконок и счетчика.",
  props: CHIPS_PROPS,
  initialState: CHIPS_DEFAULT_STATE,
  createUsageCode: createChipsUsageCode,
  renderPreview: ChipsPreview,
  renderControls: renderChipsControls,
};
