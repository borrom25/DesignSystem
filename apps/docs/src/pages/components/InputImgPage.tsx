import { useState } from "react";
import { InputImg, type InputImgValue } from "@/components";
import { Size } from "@/types";
import {
  PlaygroundSelectControl,
  PlaygroundSwitchControl,
} from "@docs/components/ComponentPlaygroundControls";
import { ComponentDescription } from "@docs/components/ComponentDescription";
import { ComponentDocsPage } from "@docs/components/ComponentDocsPage";
import { ComponentPlayground } from "@docs/components/ComponentPlayground";
import {
  ComponentPropsTable,
  type PropDefinition,
} from "@docs/components/ComponentPropsTable";
import { ComponentUsage } from "@docs/components/ComponentUsage";
import packageJson from "../../../../../package.json";
import { createInputImgValidationUsageCode } from "./upload-validation-docs/content";
import { ValidationDocsSections } from "./upload-validation-docs/ValidationDocsSections";

const INPUT_IMG_SIZE_OPTIONS = [
  { value: Size.Xs, label: "Xs" },
  { value: Size.Sm, label: "Sm" },
  { value: Size.Md, label: "Md" },
] as const;

const PREVIEW_IMAGE_SRC =
  "data:image/svg+xml,%3Csvg width='400' height='300' viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop stop-color='%233b82f6'/%3E%3Cstop offset='1' stop-color='%238b5cf6'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23g)'/%3E%3Ctext x='200' y='158' text-anchor='middle' font-family='sans-serif' font-size='24' fill='white'%3EPreview%3C/text%3E%3C/svg%3E";

type InputImgPlaygroundState = {
  size: Size;
  disabled: boolean;
  error: boolean;
  required: boolean;
  showLabel: boolean;
  loading: boolean;
  presetPreview: boolean;
  previewHoverEnabled: boolean;
  previewRemoveEnabled: boolean;
  previewZoomEnabled: boolean;
  fill: boolean;
  value: InputImgValue;
};

const INPUT_IMG_DEFAULT_STATE: InputImgPlaygroundState = {
  size: Size.Md,
  disabled: false,
  error: false,
  required: false,
  showLabel: true,
  loading: false,
  presetPreview: false,
  previewHoverEnabled: true,
  previewRemoveEnabled: true,
  previewZoomEnabled: true,
  fill: false,
  value: null,
};

const INPUT_IMG_PROPS: PropDefinition[] = [
  {
    name: "value / defaultValue",
    type: "File | string | null",
    description:
      "Текущее изображение. Компонент принимает как загруженный `File`, так и внешнюю ссылку или data URL.",
  },
  {
    name: "onChange",
    type: "(file: File | null) => void",
    description:
      "Вызывается после выбора нового изображения или удаления. Невалидный файл в `onChange` не попадает.",
  },
  {
    name: "onBeforeUpload",
    type: "(file: File) => void",
    description:
      "Вызывается после успешной валидации, перед `onChange`. Подходит для старта собственной загрузки.",
  },
  {
    name: "accept / maxSize",
    type: "string / number",
    description:
      "Ограничивают допустимые форматы и максимальный размер загружаемого файла.",
  },
  {
    name: "validateFile",
    type: "(file, context) => boolean | string | { valid, message }",
    description:
      "Кастомная проверка после встроенных правил. Ошибка уходит в `onValidationError` с кодом `custom`.",
  },
  {
    name: "onValidationError",
    type: "(error: UploadValidationError) => void",
    description:
      "Единый канал ошибок валидации. Передайте `error.message` в `hintError` или покажите toast.",
  },
  {
    name: "onSizeError / onAcceptError",
    type: "(file: File) => void",
    description:
      "Legacy-колбэки. Для новых сценариев достаточно `onValidationError`.",
  },
  {
    name: "loading / progress / onCancelUpload",
    type: "boolean / number / () => void",
    description:
      "Используются для сценариев асинхронной загрузки с прогрессом и возможностью отмены.",
  },
  {
    name: "size / disabled / error / required",
    type: "visual props",
    description:
      "Управляют размером dropzone, блокировкой, ошибочным состоянием и обязательностью поля.",
  },
  {
    name: "fill",
    type: "boolean",
    description:
      "Растягивает зону загрузки и превью на всю ширину и высоту родителя. Родителю нужна явная высота.",
  },
  {
    name: "previewHoverEnabled / previewRemoveEnabled / previewZoomEnabled",
    type: "boolean",
    description:
      "Позволяют гибко отключать hover-оверлей и отдельные действия в режиме превью.",
  },
  {
    name: "label / hint / hintError / textUpload / textLoading",
    type: "field props",
    description:
      "Позволяют адаптировать подписи и тексты вокруг загрузчика под конкретный сценарий.",
  },
];

function createInputImgUsageCode(
  packageName: string,
  state: InputImgPlaygroundState
) {
  const labelProp = state.showLabel ? '\n      label="Изображение"' : "";

  return `import { useState } from "react";
import { InputImg } from "${packageName}";
import "${packageName}/styles.css";

export function Example() {
  const [image, setImage] = useState<File | null>(null);

  return (
    <InputImg${labelProp}
      hint="Поддерживаются форматы JPG, PNG и WEBP"
      textUpload="Загрузить"
      textLoading="Загрузка"
      accept="image/*"
      maxSize={5 * 1024 * 1024}
      value={image}
      onChange={(file) => setImage(file)}
      size="${state.size}"${state.required ? "\n      required" : ""}${
        state.loading ? "\n      loading\n      progress={68}" : ""
      }${state.disabled ? "\n      disabled" : ""}${
        state.error
          ? '\n      error\n      hintError="Файл слишком большой или имеет неверный формат"'
          : ""
      }${
        !state.previewHoverEnabled ? "\n      previewHoverEnabled={false}" : ""
      }${
        !state.previewRemoveEnabled
          ? "\n      previewRemoveEnabled={false}"
          : ""
      }${!state.previewZoomEnabled ? "\n      previewZoomEnabled={false}" : ""}${
        state.fill ? "\n      fill" : ""
      }
    />
  );
}`;
}

export default function InputImgPage() {
  const [state, setState] = useState(INPUT_IMG_DEFAULT_STATE);
  const packageName = packageJson.name;

  const updateState = (patch: Partial<InputImgPlaygroundState>) => {
    setState((prev) => ({ ...prev, ...patch }));
  };

  const value = state.loading
    ? null
    : (state.value ?? (state.presetPreview ? PREVIEW_IMAGE_SRC : null));

  return (
    <ComponentDocsPage>
      <ComponentPlayground
        title="InputImg"
        preview={
          <div className={state.fill ? "h-80 w-full" : "w-[260px]"}>
            <InputImg
              size={state.size}
              fill={state.fill}
              label={state.showLabel ? "Изображение" : undefined}
              hint={
                state.error
                  ? undefined
                  : "Поддерживаются форматы JPG, PNG и WEBP"
              }
              hintError={
                state.error
                  ? "Файл слишком большой или имеет неверный формат"
                  : undefined
              }
              textUpload="Загрузить"
              textLoading="Загрузка"
              accept="image/*"
              maxSize={5 * 1024 * 1024}
              disabled={state.disabled}
              error={state.error}
              required={state.required}
              loading={state.loading}
              progress={state.loading ? 68 : undefined}
              onCancelUpload={() => updateState({ loading: false })}
              previewHoverEnabled={state.previewHoverEnabled}
              previewRemoveEnabled={state.previewRemoveEnabled}
              previewZoomEnabled={state.previewZoomEnabled}
              value={value}
              onChange={(file) => updateState({ value: file, error: false })}
              validateFile={(file) => {
                if (file.name.toLowerCase().includes("invalid")) {
                  return "Имя файла содержит запрещённое слово";
                }
                return true;
              }}
              onValidationError={(error) => {
                updateState({ error: true });
                console.log(error.code, error.file.name, error.message);
              }}
            />
          </div>
        }
        controls={
          <>
            <PlaygroundSelectControl
              label="Size"
              options={INPUT_IMG_SIZE_OPTIONS}
              value={state.size}
              onChange={(value) => updateState({ size: value as Size })}
            />
            <PlaygroundSwitchControl
              label="Fill"
              checked={state.fill}
              onChange={(value) => updateState({ fill: value })}
            />
            <PlaygroundSwitchControl
              label="Preset preview"
              checked={state.presetPreview}
              onChange={(value) => updateState({ presetPreview: value })}
            />
            <PlaygroundSwitchControl
              label="Loading"
              checked={state.loading}
              onChange={(value) => updateState({ loading: value })}
            />
            <PlaygroundSwitchControl
              label="Label"
              checked={state.showLabel}
              onChange={(value) => updateState({ showLabel: value })}
            />
            <PlaygroundSwitchControl
              label="Required"
              checked={state.required}
              onChange={(value) => updateState({ required: value })}
            />
            <PlaygroundSwitchControl
              label="Disabled"
              checked={state.disabled}
              onChange={(value) => updateState({ disabled: value })}
            />
            <PlaygroundSwitchControl
              label="Error"
              checked={state.error}
              onChange={(value) => updateState({ error: value })}
            />
            <PlaygroundSwitchControl
              label="Preview hover"
              checked={state.previewHoverEnabled}
              onChange={(value) => updateState({ previewHoverEnabled: value })}
            />
            <PlaygroundSwitchControl
              label="Preview remove"
              checked={state.previewRemoveEnabled}
              onChange={(value) => updateState({ previewRemoveEnabled: value })}
            />
            <PlaygroundSwitchControl
              label="Preview zoom"
              checked={state.previewZoomEnabled}
              onChange={(value) => updateState({ previewZoomEnabled: value })}
            />
          </>
        }
      />

      <ComponentUsage code={createInputImgUsageCode(packageName, state)} />

      <ComponentDescription text="InputImg предназначен для загрузки одного изображения с превью, drag-and-drop и поддержкой асинхронной отправки файла. Валидация общая с InputFiles/Uploader: `validateFile` + `onValidationError`." />

      <ComponentPropsTable items={INPUT_IMG_PROPS} />

      <ValidationDocsSections
        usageTitle="Валидация InputImg с hintError"
        usageCode={createInputImgValidationUsageCode(packageName)}
      />
    </ComponentDocsPage>
  );
}
