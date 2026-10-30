import type { PropDefinition } from "@docs/components/ComponentPropsTable";

export const BAR_CHART_HORIZONTAL_PROPS: PropDefinition[] = [
  {
    name: "data",
    type: "Array<{ name: string; value: number }>",
    description:
      "Категории и число ответов. Доля считается от суммы value. Если value больше 0, легенда показывает «Ответов: N» и процент",
  },
];
