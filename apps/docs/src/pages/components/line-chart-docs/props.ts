import type { PropDefinition } from "@docs/components/ComponentPropsTable";

export const LINE_CHART_PROPS: PropDefinition[] = [
  {
    name: "data",
    type: "TData[]",
    description: "Массив точек данных для оси X",
  },
  {
    name: "series",
    type: "Array<{ dataKey: keyof TData; label?: string }>",
    description: "Список линий: ключ значения и подпись в легенде",
  },
  {
    name: "title",
    type: "string",
    description: "Заголовок графика",
  },
  {
    name: "lineType",
    type: "CurveType",
    description: "Тип кривой линии (например linear, monotone, step)",
  },
  {
    name: "showDots",
    type: "boolean",
    description: "Показывает точки на значениях",
    defaultValue: "true",
  },
];
