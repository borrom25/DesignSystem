import type { ComponentDocsConfig } from "../createComponentDocsPage";
import { renderLineChartControls } from "./controls";
import { LineChartPreview } from "./preview";
import { LINE_CHART_PROPS } from "./props";
import {
  LINE_CHART_DEFAULT_STATE,
  type LineChartPlaygroundState,
} from "./types";
import { createLineChartUsageCode } from "./usage";

export const lineChartDocsConfig: ComponentDocsConfig<LineChartPlaygroundState> =
  {
    title: "LineChart",
    developers: [],
    description:
      "LineChart подходит для визуализации трендов во времени и сравнений нескольких метрик в одной сетке.",
    props: LINE_CHART_PROPS,
    initialState: LINE_CHART_DEFAULT_STATE,
    createUsageCode: createLineChartUsageCode,
    renderPreview: LineChartPreview,
    renderControls: renderLineChartControls,
  };
