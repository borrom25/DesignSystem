import type { ComponentDocsConfig } from "../createComponentDocsPage";
import { renderCardControls } from "./controls";
import { CardPreview } from "./preview";
import { CARD_PROPS } from "./props";
import { CARD_DEFAULT_STATE, type CardPlaygroundState } from "./types";
import { createCardUsageCode } from "./usage";

export const cardDocsConfig: ComponentDocsConfig<CardPlaygroundState> = {
  title: "Card",
  description:
    "Card объединяет контент, метаданные и действия внутри единой поверхности. Компонент подходит для виджетов, summary-блоков и самостоятельных секций.",
  props: CARD_PROPS,
  initialState: CARD_DEFAULT_STATE,
  createUsageCode: createCardUsageCode,
  renderPreview: CardPreview,
  renderControls: renderCardControls,
};
