import type { PropDefinition } from "@docs/components/ComponentPropsTable";

export const LABEL_PROPS: readonly PropDefinition[] = [
  {
    name: "type",
    type: "fill, outline, flat, text",
    description: "Отвечает за визуальный стиль компонента",
  },
  {
    name: "color",
    type: "brand, danger, positive, action, warning, info, inverse",
    description: "Задает цветовую схему",
  },
  {
    name: "size",
    type: "xs, sm, md",
    description: "Размер компонента",
  },
  {
    name: "iconLeft / iconRight / iconOnly",
    type: "LucideIcon",
    description: "Добавляет иконки слева/справа или только иконку",
  },
  {
    name: "rounded",
    type: "boolean",
    description: "Скругляет компонент, где это поддерживается",
    defaultValue: "false",
  },
  {
    name: "disabled",
    type: "boolean",
    description: "Неактивное состояние",
    defaultValue: "false",
  },
];
