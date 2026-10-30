import { PinInput, PinInputType } from "@/components";
import { Size } from "@/types";
import {
  PlaygroundSelectControl,
  PlaygroundSwitchControl,
} from "@docs/components/ComponentPlaygroundControls";
import type { PropDefinition } from "@docs/components/ComponentPropsTable";
import type { KeyboardEvent } from "react";
import {
  createComponentDocsPage,
  type ComponentDocsConfig,
} from "./createComponentDocsPage";

const PIN_INPUT_SIZE_OPTIONS = [
  { value: Size.Xs, label: "Xs" },
  { value: Size.Sm, label: "Sm" },
  { value: Size.Md, label: "Md" },
] as const;

const PIN_INPUT_TYPE_OPTIONS = [
  { value: PinInputType.Default, label: "Default" },
  { value: PinInputType.Masked, label: "Masked" },
] as const;

type PinInputPlaygroundState = {
  code: string[];
  size: Size;
  type: PinInputType;
  disabled: boolean;
  error: boolean;
  autoFocus: boolean;
};

const PIN_INPUT_DEFAULT_STATE: PinInputPlaygroundState = {
  code: ["", "", "", "", "", ""],
  size: Size.Md,
  type: PinInputType.Default,
  disabled: false,
  error: false,
  autoFocus: true,
};

const PIN_INPUT_PROPS: PropDefinition[] = [
  {
    name: "value",
    type: "string",
    description:
      "Контролируемое значение одной ячейки. Компонент принимает только одну цифру.",
  },
  {
    name: "onChange",
    type: "(value: string) => void",
    description:
      "Вызывается при каждом изменении значения и подходит для сборки OTP- или PIN-цепочек.",
  },
  {
    name: "onComplete",
    type: "(value: string) => void",
    description:
      "Срабатывает, когда ячейка получила допустимое значение. Удобно для автоматического перехода к следующему полю.",
  },
  {
    name: "type",
    type: '"default" | "masked"',
    description:
      "Переключает обычный режим показа цифры и замаскированный вариант для PIN-кодов.",
    defaultValue: '"default"',
  },
  {
    name: "size",
    type: '"xs" | "sm" | "md"',
    description: "Определяет размер ячейки ввода.",
    defaultValue: '"md"',
  },
  {
    name: "error / disabled / autoFocus",
    type: "boolean",
    description:
      "Управляют ошибочным состоянием, блокировкой ввода и фокусом на первом рендере.",
  },
  {
    name: "input props",
    type: "InputHTMLAttributes<HTMLInputElement>",
    description:
      "Компонент также принимает стандартные HTML-атрибуты поля, например `onKeyDown` или `data-*`.",
  },
];

type PinInputPreviewArgs = {
  updateState: (patch: Partial<PinInputPlaygroundState>) => void;
};

function PinInputPreview(
  state: PinInputPlaygroundState,
  { updateState }: PinInputPreviewArgs
) {
  const focusInput = (index: number) => {
    const nextInput = document.querySelector(
      `input[data-pin-preview-index="${index}"]`
    ) as HTMLInputElement | null;

    nextInput?.focus();
  };

  const handleChange = (index: number, value: string) => {
    const nextCode = [...state.code];
    nextCode[index] = value;
    updateState({ code: nextCode });
  };

  const handleComplete = (index: number) => {
    if (index < state.code.length - 1) {
      focusInput(index + 1);
    }
  };

  const handleBackspace = (
    index: number,
    event: KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key !== "Backspace") return;
    if (state.code[index] !== "") return;
    if (index <= 0) return;

    const previousIndex = index - 1;
    const nextCode = [...state.code];
    nextCode[previousIndex] = "";
    updateState({ code: nextCode });
    focusInput(previousIndex);
  };

  return (
    <div className="space-y-3">
      <div className="space-y-2">
        <p className="text-sm text-primary">Введите код подтверждения</p>

        <div className="flex items-center gap-2">
          {state.code.map((digit, index) => (
            <div key={index} className="flex items-center gap-2">
              <PinInput
                size={state.size}
                type={state.type}
                value={digit}
                error={state.error}
                disabled={state.disabled}
                autoFocus={state.autoFocus && index === 0}
                onChange={(value) => handleChange(index, value)}
                onComplete={() => handleComplete(index)}
                onKeyDown={(event) => handleBackspace(index, event)}
                data-pin-preview-index={index}
              />
              {index === 2 ? (
                <span className="text-sm text-secondary">-</span>
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <p className="text-xs text-secondary">
        Код: {state.code.join("") || "(пусто)"} | Формат: 3-3
      </p>
    </div>
  );
}

type PinInputControlsArgs = {
  updateState: (patch: Partial<PinInputPlaygroundState>) => void;
};

function renderPinInputControls(
  state: PinInputPlaygroundState,
  { updateState }: PinInputControlsArgs
) {
  return (
    <>
      <PlaygroundSelectControl
        label="Size"
        options={PIN_INPUT_SIZE_OPTIONS}
        value={state.size}
        onChange={(value) => updateState({ size: value as Size })}
      />
      <PlaygroundSelectControl
        label="Type"
        options={PIN_INPUT_TYPE_OPTIONS}
        value={state.type}
        onChange={(value) => updateState({ type: value as PinInputType })}
      />
      <PlaygroundSwitchControl
        label="Auto focus"
        checked={state.autoFocus}
        onChange={(value) => updateState({ autoFocus: value })}
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
    </>
  );
}

function createPinInputUsageCode(
  packageName: string,
  state: PinInputPlaygroundState
) {
  const typeValue = state.type === PinInputType.Masked ? "Masked" : "Default";

  return `import { useState } from "react";
import { PinInput, PinInputType } from "${packageName}";
import "${packageName}/styles.css";

export function Example() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);

  const handleChange = (index: number, value: string) => {
    setCode((prevCode) => {
      const nextCode = [...prevCode];
      nextCode[index] = value;
      return nextCode;
    });
  };

  const focusInput = (index: number) => {
    const nextInput = document.querySelector(
      \`input[data-pin-index="\${index}"]\`
    ) as HTMLInputElement | null;

    nextInput?.focus();
  };

  return (
    <div className="flex items-center gap-2">
      {code.map((digit, index) => (
        <div key={index} className="flex items-center gap-2">
          <PinInput
            value={digit}
            onChange={(nextValue) => handleChange(index, nextValue)}
            onComplete={() => {
              if (index < code.length - 1) {
                focusInput(index + 1);
              }
            }}
            size="${state.size}"
            type={PinInputType.${typeValue}}${
              state.autoFocus ? "\n            autoFocus={index === 0}" : ""
            }${state.disabled ? "\n            disabled" : ""}${
              state.error ? "\n            error" : ""
            }
            data-pin-index={index}
          />
          {index === 2 ? <span>-</span> : null}
        </div>
      ))}
    </div>
  );
}`;
}

const pinInputDocsConfig: ComponentDocsConfig<PinInputPlaygroundState> = {
  title: "PinInput",
  description:
    "PinInput используется для ввода одной цифры и обычно собирается в цепочку для OTP-, SMS- и PIN-кодов. На странице показан типовой сценарий ввода кода из 6 символов, сгруппированных в формате 3-3.",
  props: PIN_INPUT_PROPS,
  initialState: PIN_INPUT_DEFAULT_STATE,
  createUsageCode: createPinInputUsageCode,
  renderPreview: PinInputPreview,
  renderControls: renderPinInputControls,
};

const PinInputPage = createComponentDocsPage(pinInputDocsConfig);

export default PinInputPage;
