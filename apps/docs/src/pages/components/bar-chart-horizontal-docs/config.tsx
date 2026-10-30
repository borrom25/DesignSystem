import type { ComponentDocsConfig } from "../createComponentDocsPage";
import { renderBarChartHorizontalControls } from "./controls";
import { BarChartHorizontalPreview } from "./preview";
import { BAR_CHART_HORIZONTAL_PROPS } from "./props";
import {
  BAR_CHART_HORIZONTAL_DEFAULT_STATE,
  type BarChartHorizontalPlaygroundState,
} from "./types";
import { createBarChartHorizontalUsageCode } from "./usage";

export const barChartHorizontalDocsConfig: ComponentDocsConfig<BarChartHorizontalPlaygroundState> =
  {
    title: "BarChartHorizontal",
    developers: [],
    previewLayout: "stretch",
    description:
      "BarChartHorizontal показывает доли категорий горизонтальными барами и легендой с подписью и процентом.",
    props: BAR_CHART_HORIZONTAL_PROPS,
    initialState: BAR_CHART_HORIZONTAL_DEFAULT_STATE,
    createUsageCode: createBarChartHorizontalUsageCode,
    renderPreview: BarChartHorizontalPreview,
    renderControls: renderBarChartHorizontalControls,
  };
