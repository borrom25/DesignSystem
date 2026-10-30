import type { PropDefinition } from "@docs/components/ComponentPropsTable";

export const BUTTON_PROPS: PropDefinition[] = [
  {
    name: "type",
    type: "Fill, Outline, Ghost, Flat",
    description: "Отвечает за тип визуального отображения компонента",
  },
  {
    name: "color",
    type: "Brand, Danger, Positive, Action, Warning, Info, Secondary, ContrastLight, ContrastDark",
    description: "Отвечает за цветовую палитру компонента",
  },
  {
    name: "size",
    type: "Xs, Sm, Md",
    description: "Размер кнопки",
  },
  {
    name: "loading",
    type: "boolean",
    description:
      "Состояние загрузки — показывает спиннер, сохраняя размер кнопки",
    defaultValue: "false",
  },
  {
    name: "disabled",
    type: "boolean",
    description: "Отключить кнопку (независимо от loading)",
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
    description: "Иконка для режима «только иконка» (скрывает текст)",
  },
  {
    name: "count",
    type: "number",
    description: "Значение каунтера (бейдж в правом верхнем углу)",
  },
  {
    name: "counterColor",
    type: "Accent, Neutral, White",
    description: "Цвет каунтера",
    defaultValue: "accent",
  },
  {
    name: "scaling",
    type: "boolean",
    description: "Анимация при нажатии",
    defaultValue: "true",
  },
  {
    name: "htmlType",
    type: "button, submit, reset",
    description: "HTML-тип элемента",
    defaultValue: "button",
  },
];
