import type { PropDefinition } from "@docs/components/ComponentPropsTable";

export const TAB_PROPS: readonly PropDefinition[] = [
  {
    name: "children",
    type: "ReactNode",
    description: "Контент таба",
  },
  {
    name: "type",
    type: "fill, ghost, outline",
    description: "Визуальный вариант таба",
    defaultValue: "fill",
  },
  {
    name: "size",
    type: "xs, sm, md",
    description: "Размер таба",
    defaultValue: "md",
  },
  {
    name: "selected",
    type: "boolean",
    description: "Отмечает таб как выбранный и выставляет aria-selected",
    defaultValue: "false",
  },
  {
    name: "iconLeft",
    type: "LucideIcon",
    description: "Иконка слева от текста",
  },
  {
    name: "count",
    type: "number",
    description: "Числовой бейдж справа от текста",
  },
  {
    name: "scaling",
    type: "boolean",
    description: "Включает scale-анимацию при взаимодействии",
    defaultValue: "false",
  },
  {
    name: "asChild",
    type: "boolean",
    description: "Позволяет отрисовать таб через Slot c кастомным элементом",
    defaultValue: "false",
  },
  {
    name: "disabled / onClick / className",
    type: "button attributes",
    description: "Поддерживаются стандартные атрибуты button",
  },
];
