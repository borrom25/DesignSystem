import type { PropDefinition } from "@docs/components/ComponentPropsTable";

export const CHIPS_PROPS: readonly PropDefinition[] = [
  {
    name: "children",
    type: "ReactNode",
    description: "Текст чипса (недоступен в режиме iconOnly)",
  },
  {
    name: "size",
    type: "xs, sm, md",
    description: "Размер компонента",
    defaultValue: "md",
  },
  {
    name: "type",
    type: "fill, outline",
    description: "Визуальный стиль чипса",
    defaultValue: "fill",
  },
  {
    name: "selected",
    type: "boolean",
    description: "Состояние выбора",
    defaultValue: "false",
  },
  {
    name: "iconLeft",
    type: "LucideIcon",
    description: "Иконка слева от текста",
  },
  {
    name: "iconRight",
    type: "LucideIcon",
    description: "Иконка справа от текста",
  },
  {
    name: "iconOnly",
    type: "LucideIcon",
    description: "Режим только с иконкой без текста и счетчика",
  },
  {
    name: "count",
    type: "number",
    description: "Числовой счетчик внутри компонента",
  },
  {
    name: "scaling",
    type: "boolean",
    description: "Включает scale-анимацию при взаимодействии",
    defaultValue: "true",
  },
  {
    name: "disabled",
    type: "boolean",
    description: "Неактивное состояние",
    defaultValue: "false",
  },
  {
    name: "asChild",
    type: "boolean",
    description: "Позволяет отрисовать чипс через Slot с кастомным элементом",
    defaultValue: "false",
  },
];
