import type { PropDefinition } from "@docs/components/ComponentPropsTable";

export const BAR_CHART_VERTICAL_PROPS: PropDefinition[] = [
  {
    name: "data",
    type: "TData[]",
    description: "Массив точек данных для отображения по оси X",
  },
  {
    name: "series",
    type: "Array<{ dataKey: keyof TData; label?: string }>",
    description: "Список серий: ключ данных и подпись для легенды",
  },
  {
    name: "title",
    type: "string",
    description: "Заголовок графика",
  },
];
