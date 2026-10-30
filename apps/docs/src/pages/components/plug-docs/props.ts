import type { PropDefinition } from "@docs/components/ComponentPropsTable";

export const PLUG_PROPS: PropDefinition[] = [
  {
    name: "imageItem",
    type: "ReactNode",
    description: "Иллюстрация или иконка над текстом состояния.",
  },
  {
    name: "title",
    type: "ReactNode",
    description: "Основной заголовок пустого состояния.",
  },
  {
    name: "subtitle",
    type: "ReactNode",
    description: "Дополнительное пояснение под заголовком.",
  },
  {
    name: "actionSlot",
    type: "ReactNode",
    description: "Кнопка или набор действий для выхода из empty state.",
  },
  {
    name: "className",
    type: "string",
    description: "Позволяет расширить стили контейнера.",
  },
];
