import type { PropDefinition } from "@docs/components/ComponentPropsTable";

export const COPY_LINK_PROPS: readonly PropDefinition[] = [
  {
    name: "value",
    type: "string",
    description: "Строка, которая будет скопирована в буфер обмена при клике",
  },
  {
    name: "defaultText",
    type: "ReactNode",
    description: "Текст кнопки в исходном состоянии",
    defaultValue: '"Копировать ссылку"',
  },
  {
    name: "successText",
    type: "ReactNode",
    description: "Текст кнопки после успешного копирования",
    defaultValue: '"Скопировано"',
  },
  {
    name: "icon",
    type: "LucideIcon",
    description: "Кастомная иконка для исходного состояния",
  },
  {
    name: "successIcon",
    type: "LucideIcon",
    description: "Иконка состояния после успешного копирования",
    defaultValue: "Check",
  },
  {
    name: "successDuration",
    type: "number",
    description: "Длительность success-состояния в миллисекундах",
    defaultValue: "2000",
  },
  {
    name: "size / disabled / scaling",
    type: "Size / boolean / boolean",
    description: "Базовые настройки кнопки, пробрасываемые в Button",
  },
  {
    name: "onCopy / onCopyError",
    type: "(value: string) => void / (error: unknown) => void",
    description: "Колбэки успешного и неуспешного копирования",
  },
];
