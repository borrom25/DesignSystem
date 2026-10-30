import type { ComponentDocsConfig } from "../createComponentDocsPage";
import { renderLineControls } from "./controls";
import { LinePreview } from "./preview";
import { LINE_PROPS } from "./props";
import { LINE_DEFAULT_STATE, type LinePlaygroundState } from "./types";
import { createLineUsageCode } from "./usage";

export const lineDocsConfig: ComponentDocsConfig<LinePlaygroundState> = {
  title: "Line",
  description:
    "Line комбинирует аватар, текст и набор действий в строку списка с горизонтальной или вертикальной компоновкой.",
  props: LINE_PROPS,
  initialState: LINE_DEFAULT_STATE,
  createUsageCode: createLineUsageCode,
  renderPreview: LinePreview,
  renderControls: renderLineControls,
};
