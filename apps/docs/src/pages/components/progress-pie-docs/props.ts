import type { PropDefinition } from "@docs/components/ComponentPropsTable";

export const PROGRESS_PIE_PROPS: PropDefinition[] = [
  {
    name: "size",
    type: '"xs" | "sm" | "md" | "lg"',
    description: "Размер кругового индикатора",
    defaultValue: '"md"',
  },
  {
    name: "progress",
    type: "number",
    description: "Процент заполнения от 0 до 100",
    defaultValue: "0",
  },
  {
    name: "color",
    type: '"brand" | "danger" | "positive" | "action" | "warning" | "info"',
    description: "Цвет активной дуги прогресса",
    defaultValue: '"brand"',
  },
  {
    name: "showIcon",
    type: "boolean",
    description: "Принудительно показывает иконку в центре",
  },
  {
    name: "showProgress",
    type: "boolean",
    description: "Принудительно показывает текст с процентом в центре",
  },
];
