import type { PropDefinition } from "@docs/components/ComponentPropsTable";

export const COUNTER_PROPS: PropDefinition[] = [
  {
    name: "count",
    type: "number",
    description: "Числовое значение счетчика",
  },
  {
    name: "maxCount",
    type: "number",
    description: "Ограничение для формата, например 99+",
  },
  {
    name: "size",
    type: "xs, sm, md",
    description: "Размер счетчика",
    defaultValue: "sm",
  },
  {
    name: "variant",
    type: "accent, neutral, white",
    description: "Цветовой вариант",
    defaultValue: "accent",
  },
  {
    name: "empty",
    type: "boolean",
    description: "Показывает только форму без значения",
    defaultValue: "false",
  },
  {
    name: "disabled",
    type: "boolean",
    description: "Неактивное состояние",
    defaultValue: "false",
  },
];
