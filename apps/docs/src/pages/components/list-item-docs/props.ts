import type { PropDefinition } from "@docs/components/ComponentPropsTable";

export const LIST_ITEM_PROPS: readonly PropDefinition[] = [
  {
    name: "title",
    type: "string",
    description: "Текст пункта (альтернатива children)",
  },
  {
    name: "children",
    type: "ReactNode",
    description: "Кастомный контент пункта (альтернатива title)",
  },
  {
    name: "size",
    type: "xs, sm, md",
    description: "Размер компонента",
    defaultValue: "xs",
  },
  {
    name: "variant",
    type: "default, danger",
    description: "Визуальный вариант",
    defaultValue: "default",
  },
  {
    name: "selected",
    type: "boolean",
    description: "Состояние выбора",
    defaultValue: "false",
  },
  {
    name: "checkbox",
    type: "boolean",
    description: "Показывает чекбокс слева",
    defaultValue: "false",
  },
  {
    name: "leading",
    type: "ReactNode",
    description: "Слот слева перед checkbox/radio (например DragHandle)",
  },
  {
    name: "radio",
    type: "boolean",
    description: "Показывает радиокнопку слева",
    defaultValue: "false",
  },
  {
    name: "avatar",
    type: "AvatarProps",
    description: "Аватар слева от текста",
  },
  {
    name: "iconLeft",
    type: "LucideIcon",
    description: "Иконка слева от текста",
  },
  {
    name: "iconRight",
    type: "LucideIcon",
    description: "	Иконка справа от текста",
  },
  {
    name: "suffix",
    type: "ReactNode",
    description: "Дополнительный контент справа перед iconRight",
  },
  {
    name: "iconOnly",
    type: "boolean",
    description: "Компактный режим только с иконкой",
    defaultValue: "false",
  },
  {
    name: "hideSelectedOutline",
    type: "boolean",
    description: "Скрывает фон выделенного состояния",
    defaultValue: "false",
  },
  {
    name: "scaling",
    type: "boolean",
    description: "Включает scale-анимацию при взаимодействии",
    defaultValue: "true",
  },
  {
    name: "wrapText",
    type: "boolean",
    description:
      "Переносит длинный текст на следующую строку. При `false` обрезает в одну строку",
    defaultValue: "true",
  },
  {
    name: "disabled",
    type: "boolean",
    description: "Неактивное состояние",
    defaultValue: "false",
  },
];
