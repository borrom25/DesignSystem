import type { PropDefinition } from "@docs/components/ComponentPropsTable";

export const INPUT_FILE_DROP_PROPS: readonly PropDefinition[] = [
  {
    name: "value / defaultValue",
    type: "File[] | null",
    description:
      "Выбранные файлы для контролируемого или неконтролируемого использования.",
  },
  {
    name: "onChange",
    type: "(files: File[] | null) => void",
    description:
      "Получает новый набор файлов после выбора, drop или удаления. Невалидные файлы сюда не попадают.",
  },
  {
    name: "accept / maxSize / maxFiles",
    type: "string / number / number",
    description:
      "MIME/расширения (`image/*`, `video/*`, `audio/*`, `.pdf`), общий лимит размера и максимальное количество. Разные лимиты по типам — в `validateFile`.",
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
      "Единый канал ошибок: `max-size`, `accept`, `max-files`, `custom`. Используйте для `hintError` или toast.",
  },
  {
    name: "onSizeError / onAcceptError",
    type: "(file: File) => void",
    description:
      "Legacy-колбэки для размера и типа. Вызываются вместе с `onValidationError`.",
  },
  {
    name: "textUpload / textLoading",
    type: "string",
    description: "Тексты в зоне загрузки и во время loading.",
  },
  {
    name: "textMode",
    type: "boolean",
    description:
      "Текстовая зона без иконки. Фраза и требования задаются `textDrop` и `placeholder`.",
  },
  {
    name: "textDrop / placeholder",
    type: "string",
    description:
      "Фраза зоны и требования к файлу под ней. Показываются при `textMode`. `subtitle` остаётся подписью под лейблом.",
  },
  {
    name: "loading / progress / onCancelUpload",
    type: "boolean / number / () => void",
    description:
      "Состояние загрузки DropZone, прогресс-бар и отмена (CloseBtn).",
  },
  {
    name: "label / hint / hintError / size / disabled / error",
    type: "field props",
    description:
      "Полевые пропсы как у InputImg. `hintError` обычно заполняют из `onValidationError`.",
  },
];
