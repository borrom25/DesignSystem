import type { PropDefinition } from "@docs/components/ComponentPropsTable";

export const LINE_PROPS: readonly PropDefinition[] = [
  {
    name: "title",
    type: "string",
    description: "Основной текст строки",
  },
  {
    name: "subtitle",
    type: "string",
    description: "Подзаголовок под title",
  },
  {
    name: "src",
    type: "string",
    description: "Изображение для встроенного Avatar",
  },
  {
    name: "position",
    type: "horizontal, vertical",
    description: "Ориентация компонента",
    defaultValue: "horizontal",
  },
  {
    name: "type",
    type: "default, background, border",
    description: "Стиль контейнера",
    defaultValue: "default",
  },
  {
    name: "leftSlot / rightSlot",
    type: "ReactElement",
    description: "Слоты по краям компонента",
  },
  {
    name: "labelGroup",
    type: "string[]",
    description: "Массив лейблов под текстом",
  },
  {
    name: "disabled",
    type: "boolean",
    description: "Неактивное состояние",
    defaultValue: "false",
  },
];
