import type { PropDefinition } from "@docs/components/ComponentPropsTable";

export const AVATAR_PROPS: PropDefinition[] = [
  {
    name: "size",
    type: "number",
    description: "Размер аватара в пикселях",
  },
  {
    name: "src / alt",
    type: "string",
    description: "URL изображения и альтернативный текст",
  },
  {
    name: "initials",
    type: "string",
    description: "Инициалы, если изображение не загрузилось",
  },
  {
    name: "withBorder",
    type: "boolean",
    description: "Отображение рамки вокруг аватара",
    defaultValue: "false",
  },
  {
    name: "showEditBadge",
    type: "boolean",
    description: "Показывает badge редактирования",
    defaultValue: "false",
  },
];
