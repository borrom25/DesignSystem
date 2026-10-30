import type { PropDefinition } from "@docs/components/ComponentPropsTable";

export const CARD_PROPS: PropDefinition[] = [
  {
    name: "size",
    type: '"xs" | "sm" | "md"',
    description: "Определяет внутренние отступы и плотность карточки.",
    defaultValue: '"md"',
  },
  {
    name: "variant",
    type: '"basic" | "secondary"',
    description: "Переключает стиль поверхности карточки.",
    defaultValue: '"basic"',
  },
  {
    name: "padding",
    type: "VerticalPaddingStyle",
    description: "Позволяет явно переопределить вертикальные отступы.",
  },
  {
    name: "title",
    type: "ReactNode",
    description: "Заголовок карточки в верхней части.",
  },
  {
    name: "subtitle",
    type: "ReactNode",
    description: "Второстепенный текст под заголовком.",
  },
  {
    name: "titleProps",
    type: "CardTextProps",
    description:
      "Пропсы для Text заголовка: `variant`, `weight`, `color`, `shade` (например `color: TextColor.Brand, shade: TextShade.Heavy`). Переопределяют дефолты size.",
  },
  {
    name: "subtitleProps",
    type: "CardTextProps",
    description:
      "Пропсы для Text подзаголовка: `variant`, `weight`, `color`, `shade` (например `color: TextColor.Basic, shade: TextShade.Hint`). Переопределяют дефолты size.",
  },
  {
    name: "actionSlot",
    type: "ReactNode",
    description: "Зона для кнопки или иного действия в шапке карточки.",
  },
  {
    name: "children",
    type: "ReactNode",
    description: "Основное содержимое карточки.",
  },
  {
    name: "hoverable",
    type: "boolean",
    description: "Включает интерактивность карточки при наведении.",
    defaultValue: "false",
  },
];
