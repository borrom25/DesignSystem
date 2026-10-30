import type { ComponentDocsConfig } from "../createComponentDocsPage";
import { renderPieChartControls } from "./controls";
import { PieChartPreview } from "./preview";
import { PIE_CHART_PROPS } from "./props";
import { PIE_CHART_DEFAULT_STATE, type PieChartPlaygroundState } from "./types";
import { createPieChartUsageCode } from "./usage";

export const pieChartDocsConfig: ComponentDocsConfig<PieChartPlaygroundState> =
  {
    title: "PieChart",
    developers: [],
    description:
      "PieChart подходит для отображения структуры данных и долей категорий. Для donut-варианта можно добавить центральный текст с ключевым показателем.",
    props: PIE_CHART_PROPS,
    initialState: PIE_CHART_DEFAULT_STATE,
    createUsageCode: createPieChartUsageCode,
    renderPreview: PieChartPreview,
    renderControls: renderPieChartControls,
  };
