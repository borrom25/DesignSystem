import type { PropDefinition } from "@docs/components/ComponentPropsTable";

export const SEGMENTED_PROPS: readonly PropDefinition[] = [
  {
    name: "options",
    type: "SegmentedOption[]",
    description: "Массив опций с label и value",
  },
  {
    name: "value / defaultValue",
    type: "string | number",
    description: "Управляемое или начальное значение выбранного сегмента",
  },
  {
    name: "onChange",
    type: "(value) => void",
    description: "Вызывается при выборе нового сегмента",
  },
  {
    name: "position",
    type: "horizontal, vertical",
    description: "Ориентация сегментов",
    defaultValue: "horizontal",
  },
  {
    name: "shape",
    type: "default, round",
    description: "Форма компонента и индикатора",
    defaultValue: "default",
  },
  {
    name: "size",
    type: "xs, sm, md",
    description: "Размер внутренних табов",
    defaultValue: "sm",
  },
  {
    name: "className",
    type: "string",
    description: "Дополнительные CSS-классы контейнера",
  },
];
