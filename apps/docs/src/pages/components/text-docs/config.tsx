import type { ComponentDocsConfig } from "../createComponentDocsPage";
import { renderTextControls } from "./controls";
import { TextPreview } from "./preview";
import { TEXT_PROPS } from "./props";
import { TEXT_DEFAULT_STATE, type TextPlaygroundState } from "./types";
import { createTextUsageCode } from "./usage";

export const textDocsConfig: ComponentDocsConfig<TextPlaygroundState> = {
  title: "Text",
  description:
    "Text управляет базовой типографикой интерфейса: размером, насыщенностью, HTML-элементом, цветовыми пресетами, а также опциональным выравниванием, переносом и декорацией текста.",
  props: TEXT_PROPS,
  initialState: TEXT_DEFAULT_STATE,
  createUsageCode: createTextUsageCode,
  renderPreview: TextPreview,
  renderControls: renderTextControls,
};
