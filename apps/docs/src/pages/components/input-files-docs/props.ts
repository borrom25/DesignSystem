import type { PropDefinition } from "@docs/components/ComponentPropsTable";

export const INPUT_FILES_PROPS: readonly PropDefinition[] = [
  {
    name: "value / defaultValue",
    type: "File[] | null",
    description:
      "Выбранные файлы для контролируемого или неконтролируемого использования компонента.",
  },
  {
    name: "onChange",
    type: "(files: File[] | null) => void",
    description:
      "Получает новый набор файлов после выбора, перетаскивания или удаления. Невалидные файлы сюда не попадают.",
  },
  {
    name: "multiple / maxFiles",
    type: "boolean / number",
    description:
      "Разрешают множественную загрузку и ограничивают максимальное количество файлов. Превышение лимита даёт ошибку `max-files`.",
  },
  {
    name: "accept / maxSize",
    type: "string / number",
    description:
      "Определяют допустимые MIME-типы/расширения и предельный размер одного файла в байтах.",
  },
  {
    name: "validateFile",
    type: "(file, context) => boolean | string | { valid, message }",
    description:
      "Кастомная проверка после `maxSize` и `accept`. Строка или `{ valid: false }` отклоняет файл с кодом `custom`.",
  },
  {
    name: "onValidationError",
    type: "(error: UploadValidationError) => void",
    description:
      "Единый канал ошибок: `max-size`, `accept`, `max-files`, `custom`. Используйте, чтобы выставить `hintError` или показать toast.",
  },
  {
    name: "onSizeError / onAcceptError",
    type: "(file: File) => void",
    description:
      "Legacy-колбэки для размера и типа. Вызываются вместе с `onValidationError` для совместимости.",
  },
  {
    name: "viewMode / showDownload / downloadUrl",
    type: "boolean / string",
    description:
      "Переводят компонент в режим просмотра уже загруженных файлов и включают скачивание.",
  },
  {
    name: "isLoading / uploaderPercent",
    type: "boolean / number",
    description: "Используются для отображения состояния загрузки и прогресса.",
  },
  {
    name: "label / subtitle / hint / hintError / placeholder",
    type: "field props",
    description:
      "Настраивают контент вокруг зоны загрузки. `hintError` обычно заполняют из `onValidationError`.",
  },
];
