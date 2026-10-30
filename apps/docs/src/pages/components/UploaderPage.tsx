import { useState } from "react";
import { Uploader, type UploadValidationError } from "@/components";
import { PlaygroundSwitchControl } from "@docs/components/ComponentPlaygroundControls";
import { ComponentDescription } from "@docs/components/ComponentDescription";
import { ComponentDocsPage } from "@docs/components/ComponentDocsPage";
import { ComponentPlayground } from "@docs/components/ComponentPlayground";
import {
  ComponentPropsTable,
  type PropDefinition,
} from "@docs/components/ComponentPropsTable";
import { ComponentUsage } from "@docs/components/ComponentUsage";
import packageJson from "../../../../../package.json";
import { createUploaderValidationUsageCode } from "./upload-validation-docs/content";
import { ValidationDocsSections } from "./upload-validation-docs/ValidationDocsSections";

type UploaderPlaygroundState = {
  disabled: boolean;
  multiple: boolean;
  isDragActive: boolean;
  selectedNames: string[];
  lastError: UploadValidationError | null;
};

const UPLOADER_DEFAULT_STATE: UploaderPlaygroundState = {
  disabled: false,
  multiple: false,
  isDragActive: false,
  selectedNames: [],
  lastError: null,
};

const UPLOADER_PROPS: PropDefinition[] = [
  {
    name: "onFiles",
    type: "(files: File[]) => void",
    description:
      "Получает только валидные файлы после выбора или drop. Используйте для standalone-сценариев без InputFiles.",
  },
  {
    name: "accept / maxSize / maxFiles / multiple",
    type: "string / number / boolean",
    description:
      "Встроенные ограничения. Без `onFiles` / `onValidationError` / `validateFile` Uploader остаётся презентационным и не валидирует сам.",
  },
  {
    name: "validateFile",
    type: "(file, context) => boolean | string | { valid, message }",
    description: "Кастомная проверка файла. Ошибка уходит с кодом `custom`.",
  },
  {
    name: "onValidationError",
    type: "(error: UploadValidationError) => void",
    description:
      "Единый канал ошибок валидации. Тот же формат, что у InputFiles и InputImg.",
  },
  {
    name: "onSizeError / onAcceptError",
    type: "(file: File) => void",
    description: "Legacy-колбэки для размера и типа файла.",
  },
  {
    name: "onDrop / onInputChange",
    type: "event handlers",
    description:
      "Низкоуровневые обработчики. Если нужна валидация, предпочитайте `onFiles` + `onValidationError`.",
  },
  {
    name: "textSelect / textDrag / placeholder / disabled / isDragActive",
    type: "UI props",
    description: "Тексты зоны загрузки и визуальные состояния.",
  },
];

function createUploaderUsageCode(
  packageName: string,
  state: UploaderPlaygroundState
) {
  return `import { useState } from "react";
import { Uploader } from "${packageName}";
import "${packageName}/styles.css";

export function Example() {
  const [names, setNames] = useState<string[]>([]);

  return (
    <>
      <Uploader
        textSelect="Выберите файл"
        textDrag="или перетащите сюда"
        placeholder="Можно перетаскивать файлы прямо в зону загрузки"
        accept="*"
        multiple={${state.multiple}}
        disabled={${state.disabled}}
        onFiles={(files) => setNames(files.map((file) => file.name))}
      />
      {names.length > 0 && <p>Выбрано: {names.join(", ")}</p>}
    </>
  );
}`;
}

export default function UploaderPage() {
  const [state, setState] = useState(UPLOADER_DEFAULT_STATE);
  const packageName = packageJson.name;

  const updateState = (patch: Partial<UploaderPlaygroundState>) => {
    setState((prev) => ({ ...prev, ...patch }));
  };

  return (
    <ComponentDocsPage>
      <ComponentPlayground
        title="Uploader"
        preview={
          <div className="flex w-[420px] max-w-full flex-col gap-3">
            <Uploader
              textSelect="Выберите файл"
              textDrag="или перетащите сюда"
              placeholder="Можно перетаскивать файлы прямо в зону загрузки"
              accept="*"
              maxSize={5 * 1024 * 1024}
              multiple={state.multiple}
              maxFiles={state.multiple ? 3 : 1}
              disabled={state.disabled}
              isDragActive={state.isDragActive}
              onDragEnter={() => updateState({ isDragActive: true })}
              onDragLeave={() => updateState({ isDragActive: false })}
              onDrop={() => updateState({ isDragActive: false })}
              validateFile={(file) => {
                if (file.name.toLowerCase().endsWith(".exe")) {
                  return "EXE-файлы запрещены";
                }
                return true;
              }}
              onValidationError={(error) => updateState({ lastError: error })}
              onFiles={(files) =>
                updateState({
                  selectedNames: files.map((file) => file.name),
                  lastError: files.length > 0 ? null : state.lastError,
                })
              }
            />

            <p className="text-xs text-secondary">
              {state.selectedNames.length > 0
                ? `Выбрано: ${state.selectedNames.join(", ")}`
                : "Файлы не выбраны"}
            </p>

            {state.lastError ? (
              <p className="text-xs text-danger-text-medium">
                [{state.lastError.code}]{" "}
                {state.lastError.message ?? state.lastError.file.name}
              </p>
            ) : null}
          </div>
        }
        controls={
          <>
            <PlaygroundSwitchControl
              label="Multiple"
              checked={state.multiple}
              onChange={(value) => updateState({ multiple: value })}
            />
            <PlaygroundSwitchControl
              label="Disabled"
              checked={state.disabled}
              onChange={(value) => updateState({ disabled: value })}
            />
          </>
        }
      />

      <ComponentUsage code={createUploaderUsageCode(packageName, state)} />

      <ComponentDescription text="Uploader — базовая drag-and-drop зона. Внутри InputFiles она используется как UI без собственной валидации. В standalone-режиме передайте `onFiles`, `validateFile` и/или `onValidationError`, чтобы включить тот же пайплайн ошибок, что у InputFiles и InputImg." />

      <ComponentPropsTable items={UPLOADER_PROPS} />

      <ValidationDocsSections
        usageTitle="Standalone-валидация Uploader"
        usageCode={createUploaderValidationUsageCode(packageName)}
      />
    </ComponentDocsPage>
  );
}
