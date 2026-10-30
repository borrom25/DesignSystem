import type { PropDefinition } from "@docs/components/ComponentPropsTable";

export const PROGRESS_BAR_PROPS: PropDefinition[] = [
  {
    name: "title",
    type: "string",
    description: "Заголовок процесса",
  },
  {
    name: "titleVariant",
    type: "TextVariant",
    description: "Типографический вариант заголовка",
  },
  {
    name: "titleColor",
    type: "TextColor",
    description: "Цвет заголовка",
    defaultValue: "TextColor.Basic",
  },
  {
    name: "titleShade",
    type: "TextShade",
    description: "Оттенок цвета заголовка",
  },
  {
    name: "labelSize",
    type: '"xs" | "sm" | "md"',
    description: "Размер лейбла со статусом или процентом",
  },
  {
    name: "labelColor",
    type: "LabelColor",
    description: "Цвет лейбла со статусом или процентом",
  },
  {
    name: "labelPosition",
    type: '"top" | "end"',
    description:
      "Позиция label: сверху справа (рядом с заголовком) или справа от полоски",
    defaultValue: "top, если есть title, иначе end",
  },
  {
    name: "status",
    type: '"loading" | "success" | "error"',
    description: "Статус заполнения полосы",
    defaultValue: '"loading"',
  },
  {
    name: "progress",
    type: "number",
    description: "Процент заполнения от 0 до 100",
    defaultValue: "0",
  },
  {
    name: "showStatusLabel",
    type: "boolean",
    description: "Показывает label со статусом или процентом",
    defaultValue: "true",
  },
  {
    name: "segmentedItems",
    type: "Array<{ progress?: number; status: ProgressBarStatus }>",
    description: "Набор сегментов для составного прогресса",
  },
];
