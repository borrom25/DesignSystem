import { InputTag } from "@/components";
import { Size } from "@/types";
import {
  PlaygroundSelectControl,
  PlaygroundSwitchControl,
  PlaygroundTextControl,
} from "@docs/components/ComponentPlaygroundControls";
import type { PropDefinition } from "@docs/components/ComponentPropsTable";
import {
  createComponentDocsPage,
  type ComponentDocsConfig,
} from "./createComponentDocsPage";

const INPUT_TAG_SIZE_OPTIONS = [
  { value: Size.Xs, label: "Xs" },
  { value: Size.Sm, label: "Sm" },
  { value: Size.Md, label: "Md" },
] as const;

type InputTagPlaygroundState = {
  tags: string[];
  size: Size;
  disabled: boolean;
  required: boolean;
  emailMode: boolean;
};

const INPUT_TAG_DEFAULT_STATE: InputTagPlaygroundState = {
  tags: ["React", "TypeScript"],
  size: Size.Md,
  disabled: false,
  required: true,
  emailMode: false,
};

const INPUT_TAG_PROPS: PropDefinition[] = [
  {
    name: "value / defaultValue",
    type: "string[]",
    description:
      "Список текущих тегов. Компонент поддерживает как контролируемый, так и неконтролируемый сценарий.",
  },
  {
    name: "onChange",
    type: "(tags: string[]) => void",
    description:
      "Вызывается после добавления, удаления или полной очистки тегов.",
  },
  {
    name: "onCreateTag",
    type: "(rawValue: string) => string | null",
    description:
      "Позволяет нормализовать значение перед добавлением или отклонить невалидный тег.",
  },
  {
    name: "onClear",
    type: "() => void",
    description:
      "Срабатывает при очистке набора тегов через встроенное действие компонента.",
  },
  {
    name: "size / disabled",
    type: '"xs" | "sm" | "md" | boolean',
    description:
      "Определяют размер контейнера с тегами и возможность взаимодействия с полем.",
  },
  {
    name: "label / hint / required / placeholder",
    type: "field props",
    description:
      "Управляют подписью, подсказкой и состоянием обязательного поля.",
  },
];

type InputTagPreviewArgs = {
  updateState: (patch: Partial<InputTagPlaygroundState>) => void;
};

function InputTagPreview(
  state: InputTagPlaygroundState,
  { updateState }: InputTagPreviewArgs
) {
  return (
    <div className="w-[360px] space-y-3">
      <InputTag
        size={state.size}
        label="Теги"
        hint={
          state.emailMode
            ? "Добавляются только валидные email-адреса"
            : "Введите значение и нажмите Enter"
        }
        required={state.required}
        disabled={state.disabled}
        value={state.tags}
        onChange={(tags) => updateState({ tags })}
        onClear={() => updateState({ tags: [] })}
        onCreateTag={
          state.emailMode
            ? (rawValue) => {
                const value = rawValue.trim().toLowerCase();
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(value) ? value : null;
              }
            : undefined
        }
        placeholder={state.emailMode ? "user@example.com" : "Добавить тег..."}
      />

      <p className="text-xs text-secondary">
        Текущие теги: {state.tags.length > 0 ? state.tags.join(", ") : "нет"}
      </p>
    </div>
  );
}

type InputTagControlsArgs = {
  updateState: (patch: Partial<InputTagPlaygroundState>) => void;
};

function renderInputTagControls(
  state: InputTagPlaygroundState,
  { updateState }: InputTagControlsArgs
) {
  return (
    <>
      <PlaygroundTextControl
        label="Tags"
        value={state.tags.join(", ")}
        onChange={(value) =>
          updateState({
            tags: value
              .split(",")
              .map((tag) => tag.trim())
              .filter(Boolean),
          })
        }
      />
      <PlaygroundSelectControl
        label="Size"
        options={INPUT_TAG_SIZE_OPTIONS}
        value={state.size}
        onChange={(value) => updateState({ size: value as Size })}
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
        label="Email mode"
        checked={state.emailMode}
        onChange={(value) => updateState({ emailMode: value, tags: [] })}
      />
    </>
  );
}

function createInputTagUsageCode(
  packageName: string,
  state: InputTagPlaygroundState
) {
  const tags = state.tags.map((tag) => `"${tag}"`).join(", ");

  return `import { useState } from "react";
import { InputTag } from "${packageName}";
import "${packageName}/styles.css";

export function Example() {
  const [tags, setTags] = useState<string[]>([${tags}]);

  return (
    <InputTag
      label="Теги"
      placeholder="${state.emailMode ? "user@example.com" : "Добавить тег..."}"
      hint="${
        state.emailMode
          ? "Добавляются только валидные email-адреса"
          : "Введите значение и нажмите Enter"
      }"
      value={tags}
      onChange={(nextTags) => setTags(nextTags)}
      size="${state.size}"${state.required ? "\n      required" : ""}${
        state.disabled ? "\n      disabled" : ""
      }${
        state.emailMode
          ? "\n      onCreateTag={(rawValue) => {\n        const value = rawValue.trim().toLowerCase();\n        const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n        return emailRegex.test(value) ? value : null;\n      }}"
          : ""
      }
    />
  );
}`;
}

const inputTagDocsConfig: ComponentDocsConfig<InputTagPlaygroundState> = {
  title: "InputTag",
  description:
    "InputTag предназначен для ввода списка значений внутри одного поля. Компонент удобен для тегов, email-адресов, категорий и других коллекций коротких сущностей.",
  props: INPUT_TAG_PROPS,
  initialState: INPUT_TAG_DEFAULT_STATE,
  createUsageCode: createInputTagUsageCode,
  renderPreview: InputTagPreview,
  renderControls: renderInputTagControls,
};

const InputTagPage = createComponentDocsPage(inputTagDocsConfig);

export default InputTagPage;
