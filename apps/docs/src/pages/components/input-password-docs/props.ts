import type { PropDefinition } from "@docs/components/ComponentPropsTable";

export const INPUT_PASSWORD_PROPS: PropDefinition[] = [
  {
    name: "value",
    type: "string",
    description: "Контролируемое значение поля пароля.",
  },
  {
    name: "onChange",
    type: "ChangeEventHandler<HTMLInputElement>",
    description: "Обработчик ввода для контролируемого сценария.",
  },
  {
    name: "showPasswordByDefault",
    type: "boolean",
    description:
      "Открывает пароль в текстовом виде при первом рендере компонента.",
    defaultValue: "false",
  },
  {
    name: "size",
    type: '"xs" | "sm" | "md"',
    description: "Размер поля ввода и кнопки переключения видимости.",
    defaultValue: '"md"',
  },
  {
    name: "disabled / error",
    type: "boolean",
    description: "Управляют блокировкой и ошибочным состоянием поля.",
  },
  {
    name: "label / hint / hintError / placeholder",
    type: "field props",
    description:
      "Унаследованы от Input и используются для подсказок, подписи и placeholder-текста.",
  },
  {
    name: "iconLeft / suffix / inputClassName",
    type: "Input props",
    description:
      "Дополнительные настройки базового Input. Кнопка показа пароля подключается автоматически.",
  },
];
