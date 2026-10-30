import { DateRange, Text, TextVariant } from "@/components";
import type { DateRangeValue } from "@/components";
import {
  PlaygroundSelectControl,
  PlaygroundSwitchControl,
  PlaygroundTextControl,
} from "@docs/components/ComponentPlaygroundControls";
import type { PropDefinition } from "@docs/components/ComponentPropsTable";
import { Size } from "@/types";
import type { ComponentDocsConfig } from "../createComponentDocsPage";

type DateRangePlaygroundState = {
  size: Size;
  hint: string;
  hintError: string;
  required: boolean;
  disabled: boolean;
  error: boolean;
  startError: boolean;
  endError: boolean;
  showTimeBar: boolean;
  placeholderStart: string;
  placeholderEnd: string;
  value: DateRangeValue;
};

const DATE_RANGE_DEFAULT_STATE: DateRangePlaygroundState = {
  size: Size.Md,
  hint: "Выберите диапазон дат",
  hintError: "",
  required: false,
  disabled: false,
  error: false,
  startError: false,
  endError: false,
  showTimeBar: false,
  placeholderStart: "Дата поступления",
  placeholderEnd: "Дата закрытия",
  value: {
    start: new Date(2026, 6, 1, 9, 0, 0),
    end: new Date(2026, 6, 10, 18, 0, 0),
  },
};

const DATE_RANGE_SIZE_OPTIONS = [
  { value: Size.Xs, label: "xs" },
  { value: Size.Sm, label: "sm" },
  { value: Size.Md, label: "md" },
] as const;

const DATE_RANGE_PROPS: PropDefinition[] = [
  {
    name: "value / defaultValue",
    type: "DateRangeValue ({ start?: Date | Dayjs; end?: Date | Dayjs })",
    description:
      "Текущее значение диапазона дат в controlled и uncontrolled режимах. Границы принимают `Date` или `Dayjs`.",
  },
  {
    name: "onChange",
    type: "(value: DateRangeValue) => void",
    description:
      "Вызывается при изменении даты начала, конца или времени. Тип совпадает с `value`: границы как `Date | Dayjs` (в runtime возвращается `Date`).",
  },
  {
    name: "onClear",
    type: "() => void",
    description: "Колбэк очистки выбранного диапазона.",
  },
  {
    name: "showTimeBar",
    type: "boolean",
    defaultValue: "false",
    description: "Показывает панель выбора времени рядом с календарем.",
  },
  {
    name: "size",
    type: "xs | sm | md",
    defaultValue: "md",
    description: "Размер поля выбора диапазона.",
  },
  {
    name: "hint / hintError",
    type: "string",
    description: "Подсказки поля.",
  },
  {
    name: "required / disabled",
    type: "boolean",
    description:
      "Состояния обязательности (звёздочка в углу поля) и недоступности поля.",
  },
  {
    name: "error / startError / endError",
    type: "boolean",
    description: "Общее состояние ошибки и ошибки отдельных границ диапазона.",
  },
  {
    name: "placeholderStart / placeholderEnd",
    type: "string",
    description:
      "Плейсхолдеры для полей даты начала и даты окончания диапазона.",
  },
  {
    name: "timeBarFooter",
    type: "ReactNode",
    description: "Кастомный футер для встроенного TimeBar.",
  },
];

function stringifyDateForCode(value?: DateRangeValue["start"]): string {
  if (!value) return "undefined";

  return `new Date("${value.toISOString()}")`;
}

function createDateRangeUsageCode(
  packageName: string,
  state: DateRangePlaygroundState
) {
  const hint = JSON.stringify(state.hint);
  const hintError = JSON.stringify(state.hintError);
  const placeholderStart = JSON.stringify(state.placeholderStart);
  const placeholderEnd = JSON.stringify(state.placeholderEnd);

  return `import { useState } from "react";
import { DateRange } from "${packageName}";
import type { DateRangeValue } from "${packageName}";
import "${packageName}/styles.css";

export function Example() {
  const [value, setValue] = useState<DateRangeValue>({
    start: ${stringifyDateForCode(state.value.start)},
    end: ${stringifyDateForCode(state.value.end)},
  });

  return (
    <DateRange
      size="${state.size}"
      hint={${hint}}
      hintError={${hintError}}
      required={${state.required}}
      disabled={${state.disabled}}
      error={${state.error}}
      startError={${state.startError}}
      endError={${state.endError}}
      showTimeBar={${state.showTimeBar}}
      placeholderStart={${placeholderStart}}
      placeholderEnd={${placeholderEnd}}
      value={value}
      onChange={setValue}
    />
  );
}`;
}

function DateRangePreview(
  state: DateRangePlaygroundState,
  {
    updateState,
  }: {
    updateState: (patch: Partial<DateRangePlaygroundState>) => void;
  }
) {
  return (
    <div className="flex w-[360px] flex-col gap-(--spacing-3)">
      <DateRange
        size={state.size}
        hint={state.hint}
        hintError={state.hintError || undefined}
        required={state.required}
        disabled={state.disabled}
        error={state.error}
        startError={state.startError}
        endError={state.endError}
        showTimeBar={state.showTimeBar}
        placeholderStart={state.placeholderStart}
        placeholderEnd={state.placeholderEnd}
        value={state.value}
        onChange={(value) => updateState({ value })}
      />

      <Text variant={TextVariant.C1} className="text-secondary">
        Выбрано:{" "}
        {state.value.start || state.value.end
          ? `${state.value.start?.toLocaleString("ru-RU") ?? "—"} — ${state.value.end?.toLocaleString("ru-RU") ?? "—"}`
          : "не выбрано"}
      </Text>
    </div>
  );
}

function renderDateRangeControls(
  state: DateRangePlaygroundState,
  {
    updateState,
  }: {
    updateState: (patch: Partial<DateRangePlaygroundState>) => void;
  }
) {
  return (
    <>
      <PlaygroundSelectControl
        label="Size"
        options={DATE_RANGE_SIZE_OPTIONS}
        value={state.size}
        onChange={(size) => updateState({ size })}
      />
      <PlaygroundTextControl
        label="Hint"
        value={state.hint}
        onChange={(hint) => updateState({ hint })}
      />
      <PlaygroundTextControl
        label="Hint error"
        value={state.hintError}
        onChange={(hintError) => updateState({ hintError })}
      />
      <PlaygroundTextControl
        label="Placeholder start"
        value={state.placeholderStart}
        onChange={(placeholderStart) => updateState({ placeholderStart })}
      />
      <PlaygroundTextControl
        label="Placeholder end"
        value={state.placeholderEnd}
        onChange={(placeholderEnd) => updateState({ placeholderEnd })}
      />
      <PlaygroundSwitchControl
        label="Required"
        checked={state.required}
        onChange={(required) => updateState({ required })}
      />
      <PlaygroundSwitchControl
        label="Disabled"
        checked={state.disabled}
        onChange={(disabled) => updateState({ disabled })}
      />
      <PlaygroundSwitchControl
        label="Error"
        checked={state.error}
        onChange={(error) => updateState({ error })}
      />
      <PlaygroundSwitchControl
        label="Start error"
        checked={state.startError}
        onChange={(startError) => updateState({ startError })}
      />
      <PlaygroundSwitchControl
        label="End error"
        checked={state.endError}
        onChange={(endError) => updateState({ endError })}
      />
      <PlaygroundSwitchControl
        label="Show time bar"
        checked={state.showTimeBar}
        onChange={(showTimeBar) => updateState({ showTimeBar })}
      />
    </>
  );
}

export const dateRangeDocsConfig: ComponentDocsConfig<DateRangePlaygroundState> =
  {
    title: "DateRange",
    description:
      "DateRange используется для выбора диапазона дат и, при необходимости, времени для каждой границы диапазона.",
    props: DATE_RANGE_PROPS,
    initialState: DATE_RANGE_DEFAULT_STATE,
    createUsageCode: createDateRangeUsageCode,
    renderPreview: DateRangePreview,
    renderControls: renderDateRangeControls,
  };
