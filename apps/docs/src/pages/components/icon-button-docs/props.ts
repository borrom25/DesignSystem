import type { PropDefinition } from "@docs/components/ComponentPropsTable";

export const ICON_BUTTON_PROPS: readonly PropDefinition[] = [
  {
    name: "icon",
    type: "LucideIcon",
    description: "Иконка кнопки",
  },
  {
    name: "type",
    type: "flat, ghost, icon",
    description: "Визуальный стиль кнопки",
  },
  {
    name: "color",
    type: "brand, danger, positive, action, warning, info, inverse",
    description: "Цветовая схема компонента",
  },
  {
    name: "size",
    type: "xs, sm, md",
    description: "Размер кнопки",
  },
  {
    name: "showBadge",
    type: "boolean",
    description: "Показывает бейдж поверх иконки",
    defaultValue: "false",
  },
  {
    name: "rounded / disabled",
    type: "boolean",
    description: "Скругление и неактивное состояние",
  },
];
