import { InputPhone, InputPhoneValueFormat, InputVariant } from "@/components";
import { Size } from "@/types";
import {
  PlaygroundSelectControl,
  PlaygroundSwitchControl,
  PlaygroundTextControl,
} from "@docs/components/ComponentPlaygroundControls";
import type { PropDefinition } from "@docs/components/ComponentPropsTable";
import type { Country } from "react-phone-number-input";
import {
  createComponentDocsPage,
  type ComponentDocsConfig,
} from "./createComponentDocsPage";

const INPUT_PHONE_SIZE_OPTIONS = [
  { value: Size.Xs, label: "Xs" },
  { value: Size.Sm, label: "Sm" },
  { value: Size.Md, label: "Md" },
] as const;

const INPUT_PHONE_VARIANT_OPTIONS = [
  { value: InputVariant.Default, label: "Default" },
  { value: InputVariant.Clear, label: "Clear" },
] as const;

const INPUT_PHONE_COUNTRY_OPTIONS = [
  { value: "RU", label: "Russia" },
  { value: "KZ", label: "Kazakhstan" },
  { value: "TR", label: "Turkey" },
  { value: "US", label: "United States" },
] as const satisfies readonly { value: Country; label: string }[];

type InputPhonePlaygroundState = {
  value: string;
  size: Size;
  variant: InputVariant;
  country: Country;
  disabled: boolean;
  error: boolean;
  required: boolean;
  showFlagIsland: boolean;
  nationalFormat: boolean;
};

const INPUT_PHONE_DEFAULT_STATE: InputPhonePlaygroundState = {
  value: "+79991234567",
  size: Size.Md,
  variant: InputVariant.Default,
  country: "RU",
  disabled: false,
  error: false,
  required: true,
  showFlagIsland: false,
  nationalFormat: false,
};

const INPUT_PHONE_PROPS: PropDefinition[] = [
  {
    name: "value / defaultValue",
    type: "string",
    description:
      "Текущее значение номера. Компонент принимает как пустое значение, так и номер с кодом страны.",
  },
  {
    name: "onValueChange",
    type: "(value, meta) => void",
    description:
      "Вызывает колбэк после нормализации номера и передает строковое значение вместе с метаданными страны.",
  },
  {
    name: "country / defaultCountry / countries",
    type: "Country | Country[]",
    description:
      "Позволяют управлять выбранной страной и ограничивать список доступных кодов.",
  },
  {
    name: "valueFormat",
    type: '"international" | "national"',
    description:
      "Определяет, в каком виде `onValueChange` возвращает значение наружу.",
    defaultValue: '"international"',
  },
  {
    name: "showFlagIsland",
    type: "boolean",
    description:
      "Переключает альтернативный вариант отображения флага в префиксе.",
    defaultValue: "false",
  },
  {
    name: "size / variant / disabled / error",
    type: "Input props",
    description:
      "Сохраняют поведение базового `Input`: размеры, визуальный стиль и состояния поля.",
  },
  {
    name: "label / hint / hintError / placeholder / onClear",
    type: "field props",
    description:
      "Используются для подписи, подсказки, текста ошибки и очистки введенного номера.",
  },
];

type InputPhonePreviewArgs = {
  updateState: (patch: Partial<InputPhonePlaygroundState>) => void;
};

function InputPhonePreview(
  state: InputPhonePlaygroundState,
  { updateState }: InputPhonePreviewArgs
) {
  return (
    <div className="w-[360px]">
      <InputPhone
        label="Телефон"
        placeholder="900 000-00-00"
        hint={
          state.error
            ? undefined
            : "Введите номер в локальном или международном формате"
        }
        hintError={state.error ? "Проверьте формат номера" : undefined}
        value={state.value}
        size={state.size}
        variant={state.variant}
        country={state.country}
        disabled={state.disabled}
        required={state.required}
        showFlagIsland={state.showFlagIsland}
        valueFormat={
          state.nationalFormat
            ? InputPhoneValueFormat.National
            : InputPhoneValueFormat.International
        }
        error={state.error}
        onCountryChange={(country) => updateState({ country })}
        onValueChange={(value) => updateState({ value })}
        onClear={() => updateState({ value: "" })}
      />
    </div>
  );
}

type InputPhoneControlsArgs = {
  updateState: (patch: Partial<InputPhonePlaygroundState>) => void;
};

function renderInputPhoneControls(
  state: InputPhonePlaygroundState,
  { updateState }: InputPhoneControlsArgs
) {
  return (
    <>
      <PlaygroundTextControl
        label="Value"
        value={state.value}
        onChange={(value) => updateState({ value })}
      />
      <PlaygroundSelectControl
        label="Size"
        options={INPUT_PHONE_SIZE_OPTIONS}
        value={state.size}
        onChange={(value) => updateState({ size: value as Size })}
      />
      <PlaygroundSelectControl
        label="Variant"
        options={INPUT_PHONE_VARIANT_OPTIONS}
        value={state.variant}
        onChange={(value) => updateState({ variant: value as InputVariant })}
      />
      <PlaygroundSelectControl
        label="Country"
        options={INPUT_PHONE_COUNTRY_OPTIONS}
        value={state.country}
        onChange={(value) => updateState({ country: value as Country })}
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
        label="Flag island"
        checked={state.showFlagIsland}
        onChange={(value) => updateState({ showFlagIsland: value })}
      />
      <PlaygroundSwitchControl
        label="National format"
        checked={state.nationalFormat}
        onChange={(value) => updateState({ nationalFormat: value })}
      />
    </>
  );
}

function createInputPhoneUsageCode(
  packageName: string,
  state: InputPhonePlaygroundState
) {
  return `import { useState } from "react";
import { InputPhone, InputPhoneValueFormat, InputVariant } from "${packageName}";
import "${packageName}/styles.css";

export function Example() {
  const [value, setValue] = useState("${state.value}");

  return (
    <InputPhone
      label="Телефон"
      placeholder="900 000-00-00"
      value={value}
      onValueChange={(nextValue) => setValue(nextValue)}
      onClear={() => setValue("")}
      defaultCountry="${state.country}"
      size="${state.size}"
      variant={InputVariant.${state.variant === InputVariant.Clear ? "Clear" : "Default"}}${
        state.required ? "\n      required" : ""
      }${state.disabled ? "\n      disabled" : ""}${
        state.error
          ? '\n      error\n      hintError="Проверьте формат номера"'
          : '\n      hint="Введите номер в локальном или международном формате"'
      }${state.showFlagIsland ? "\n      showFlagIsland" : ""}${
        state.nationalFormat
          ? "\n      valueFormat={InputPhoneValueFormat.National}"
          : ""
      }
    />
  );
}`;
}

const inputPhoneDocsConfig: ComponentDocsConfig<InputPhonePlaygroundState> = {
  title: "InputPhone",
  description:
    "InputPhone объединяет ввод телефона, выбор страны и форматирование значения в одном поле. Компонент подходит для форм регистрации, профилей и CRM-интерфейсов.",
  props: INPUT_PHONE_PROPS,
  initialState: INPUT_PHONE_DEFAULT_STATE,
  createUsageCode: createInputPhoneUsageCode,
  renderPreview: InputPhonePreview,
  renderControls: renderInputPhoneControls,
};

const InputPhonePage = createComponentDocsPage(inputPhoneDocsConfig);

export default InputPhonePage;
