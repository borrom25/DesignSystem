import type { PropDefinition } from "@docs/components/ComponentPropsTable";

export const UPLOAD_VALIDATION_GUIDE_ITEMS = [
  "Встроенные проверки: `maxSize` (размер), `accept` (MIME/расширение), для `InputFiles`/`InputFileDrop`/`Uploader` ещё `maxFiles`.",
  "Невалидный файл не попадает в `onChange` / `onFiles` — его отбрасывает компонент.",
  "Все ошибки приходят в единый callback `onValidationError(error)` с полями `code`, `file`, `message` и метаданными.",
  "Кастомные правила задаются через `validateFile(file, context)`: верните `true`, строку ошибки или `{ valid: false, message }`.",
  "Разные лимиты на image / video / audio / pdf задаются внутри `validateFile` по `file.type`. `accept` — белый список типов, `maxSize` — общий потолок.",
  "Визуальное состояние ошибки — снаружи: передайте `error` и `hintError` (или свой toast/Alert) в ответ на `onValidationError`.",
  "Legacy-колбэки `onSizeError` и `onAcceptError` работают как раньше; для новых интеграций достаточно `onValidationError`.",
] as const;

export const UPLOAD_VALIDATION_ERROR_PROPS: PropDefinition[] = [
  {
    name: "code",
    type: '"max-size" | "accept" | "max-files" | "custom"',
    description:
      "Тип ошибки. `custom` — результат `validateFile`, остальные — встроенные проверки.",
  },
  {
    name: "file",
    type: "File",
    description: "Файл, который не прошёл валидацию.",
  },
  {
    name: "message",
    type: "string | undefined",
    description:
      "Текст ошибки от компонента или из `validateFile`. Можно показать в `hintError` или toast.",
  },
  {
    name: "maxSize / accept / maxFiles",
    type: "number | string | undefined",
    description: "Контекст ограничения, из-за которого сработала ошибка.",
  },
];

export function createInputFilesValidationUsageCode(packageName: string) {
  return `import { useState } from "react";
import { InputFiles, type UploadValidationError } from "${packageName}";
import "${packageName}/styles.css";

export function Example() {
  const [files, setFiles] = useState<File[] | null>(null);
  const [error, setError] = useState<UploadValidationError | null>(null);

  return (
    <InputFiles
      label="Документ"
      accept=".pdf,application/pdf"
      maxSize={10 * 1024 * 1024}
      value={files}
      onChange={(next) => {
        setFiles(next);
        setError(null);
      }}
      error={Boolean(error)}
      hintError={error?.message}
      validateFile={(file) => {
        if (file.name.toLowerCase().endsWith(".exe")) {
          return "EXE-файлы запрещены";
        }
        return true;
      }}
      onValidationError={(nextError) => {
        setError(nextError);
      }}
    />
  );
}`;
}

export function createInputFileDropValidationUsageCode(packageName: string) {
  return `import { useState } from "react";
import { InputFileDrop, type UploadValidationError } from "${packageName}";
import "${packageName}/styles.css";

export function Example() {
  const [files, setFiles] = useState<File[] | null>(null);
  const [error, setError] = useState<UploadValidationError | null>(null);
  const mb = (n: number) => n * 1024 * 1024;

  return (
    <InputFileDrop
      label="Вложения"
      hint="Картинки 5 MB, видео 50 MB, аудио 15 MB, PDF 10 MB"
      accept="image/*,video/*,audio/*,.pdf,application/pdf"
      maxSize={mb(50)}
      maxFiles={10}
      value={files}
      onChange={(next) => {
        setFiles(next);
        setError(null);
      }}
      error={Boolean(error)}
      hintError={error?.message}
      validateFile={(file) => {
        if (file.type.startsWith("image/") && file.size > mb(5)) {
          return "Картинка не больше 5 MB";
        }
        if (file.type.startsWith("video/") && file.size > mb(50)) {
          return "Видео не больше 50 MB";
        }
        if (file.type.startsWith("audio/") && file.size > mb(15)) {
          return "Аудио не больше 15 MB";
        }
        if (
          (file.type === "application/pdf" ||
            file.name.toLowerCase().endsWith(".pdf")) &&
          file.size > mb(10)
        ) {
          return "PDF не больше 10 MB";
        }
        return true;
      }}
      onValidationError={(nextError) => {
        setError(nextError);
      }}
    />
  );
}`;
}

export function createInputImgValidationUsageCode(packageName: string) {
  return `import { useState } from "react";
import { InputImg, type UploadValidationError } from "${packageName}";
import "${packageName}/styles.css";

export function Example() {
  const [image, setImage] = useState<File | null>(null);
  const [error, setError] = useState<UploadValidationError | null>(null);

  return (
    <InputImg
      label="Аватар"
      accept="image/png,image/jpeg,image/webp"
      maxSize={5 * 1024 * 1024}
      value={image}
      onChange={(file) => {
        setImage(file);
        setError(null);
      }}
      error={Boolean(error)}
      hintError={error?.message}
      validateFile={(file, context) => {
        if (file.size > context.maxSize) {
          return { valid: false, message: "Слишком большой файл" };
        }
        if (file.name.toLowerCase().includes("invalid")) {
          return "Недопустимое имя файла";
        }
        return true;
      }}
      onValidationError={setError}
    />
  );
}`;
}

export function createUploaderValidationUsageCode(packageName: string) {
  return `import { useState } from "react";
import { Uploader, type UploadValidationError } from "${packageName}";
import "${packageName}/styles.css";

export function Example() {
  const [names, setNames] = useState<string[]>([]);
  const [error, setError] = useState<UploadValidationError | null>(null);

  return (
    <>
      <Uploader
        textSelect="Выберите файл"
        textDrag="или перетащите сюда"
        accept="image/*"
        maxSize={2 * 1024 * 1024}
        multiple
        maxFiles={3}
        validateFile={(file) =>
          file.name.endsWith(".svg") ? "SVG не поддерживается" : true
        }
        onValidationError={setError}
        onFiles={(files) => {
          setNames(files.map((file) => file.name));
          setError(null);
        }}
      />
      {error && <p>{error.code}: {error.message}</p>}
      {names.length > 0 && <p>Выбрано: {names.join(", ")}</p>}
    </>
  );
}`;
}
