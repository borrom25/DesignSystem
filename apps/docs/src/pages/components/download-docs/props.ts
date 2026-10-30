import type { PropDefinition } from "@docs/components/ComponentPropsTable";

export const DOWNLOAD_PROPS: readonly PropDefinition[] = [
  {
    name: "fileName",
    type: "ReactNode",
    description: "Имя файла, отображаемое в заголовке",
  },
  {
    name: "fileSize",
    type: "ReactNode",
    description: "Размер файла под именем",
  },
  {
    name: "icon",
    type: "LucideIcon",
    description: "Иконка слева от имени файла",
    defaultValue: "FileText",
  },
  {
    name: "withBackground",
    type: "boolean",
    description: "Показывать фон у блока файла",
    defaultValue: "true",
  },
  {
    name: "action",
    type: "ReactNode",
    description: "Кастомный слот действия вместо кнопки скачивания",
  },
  {
    name: "onActionClick",
    type: "() => void",
    description: "Обработчик клика по кнопке скачивания по умолчанию",
  },
  {
    name: "actionAriaLabel",
    type: "string",
    description: "ARIA-лейбл кнопки скачивания",
    defaultValue: '"Скачать файл"',
  },
];
