import type { ComponentDocsConfig } from "../createComponentDocsPage";
import { renderBarChartVerticalControls } from "./controls";
import { BarChartVerticalPreview } from "./preview";
import { BAR_CHART_VERTICAL_PROPS } from "./props";
import {
  BAR_CHART_VERTICAL_DEFAULT_STATE,
  type BarChartVerticalPlaygroundState,
} from "./types";
import { createBarChartVerticalUsageCode } from "./usage";

export const barChartVerticalDocsConfig: ComponentDocsConfig<BarChartVerticalPlaygroundState> =
  {
    title: "BarChartVertical",
    developers: [],
    description:
      "BarChartVertical показывает сравнение значений по категориям и поддерживает несколько серий с общей легендой.",
    props: BAR_CHART_VERTICAL_PROPS,
    initialState: BAR_CHART_VERTICAL_DEFAULT_STATE,
    createUsageCode: createBarChartVerticalUsageCode,
    renderPreview: BarChartVerticalPreview,
    renderControls: renderBarChartVerticalControls,
  };
