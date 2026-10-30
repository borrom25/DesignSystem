import type { PropDefinition } from "@docs/components/ComponentPropsTable";

export const TAG_PROPS: readonly PropDefinition[] = [
  {
    name: "size",
    type: "xs, sm, md",
    description: "Размер тега",
  },
  {
    name: "leftContent",
    type: "ReactNode",
    description: "Контент слева от текста, например иконка",
  },
  {
    name: "avatar",
    type: "AvatarProps",
    description: "Аватар вместо leftContent",
  },
  {
    name: "onClose",
    type: "() => void",
    description: "Показывает кнопку закрытия и обработчик удаления",
  },
  {
    name: "error",
    type: "boolean",
    description: "Состояние ошибки",
    defaultValue: "false",
  },
  {
    name: "disabled",
    type: "boolean",
    description: "Неактивное состояние",
    defaultValue: "false",
  },
];
