import type { PropDefinition } from "@docs/components/ComponentPropsTable";

export const PIE_CHART_PROPS: PropDefinition[] = [
  {
    name: "type",
    type: '"pie" | "donut"',
    description: "Определяет вариант отображения: круг или кольцо",
    defaultValue: '"donut"',
  },
  {
    name: "data",
    type: "Array<{ name: string; value: number; caption?: (percent: number) => ReactNode }>",
    description:
      "Список сегментов диаграммы. caption — необязательная вторая строка легенды, получает долю сегмента в процентах",
  },
  {
    name: "hasInteractiveLegend",
    type: "boolean",
    description: "Позволяет скрывать сегменты через легенду",
    defaultValue: "false",
  },
  {
    name: "title",
    type: "string",
    description: 'Текст в центре для типа "donut"',
  },
  {
    name: "subtitle",
    type: "string",
    description: 'Подпись в центре для типа "donut"',
  },
];
