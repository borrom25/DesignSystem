import { Text, TextVariant, TimeBar } from "@/components";
import {
  PlaygroundSwitchControl,
  PlaygroundTextControl,
} from "@docs/components/ComponentPlaygroundControls";
import type { PropDefinition } from "@docs/components/ComponentPropsTable";
import type { ComponentDocsConfig } from "../createComponentDocsPage";

type TimeBarPlaygroundState = {
  hours: number;
  minutes: number;
  seconds: number;
  disabled: boolean;
  showSeconds: boolean;
  use24Hour: boolean;
  showNowButton: boolean;
  showConfirmButton: boolean;
  columnsFillHeight: boolean;
  nowButtonText: string;
  confirmButtonText: string;
};

const TIME_BAR_DEFAULT_STATE: TimeBarPlaygroundState = {
  hours: 9,
  minutes: 29,
  seconds: 45,
  disabled: false,
  showSeconds: true,
  use24Hour: true,
  showNowButton: true,
  showConfirmButton: true,
  columnsFillHeight: false,
  nowButtonText: "Сейчас",
  confirmButtonText: "Ок",
};

const TIME_BAR_PROPS: PropDefinition[] = [
  {
    name: "value / defaultValue",
    type: "TimeValue",
    description:
      "Текущее значение времени в формате { hours, minutes, seconds } для controlled и uncontrolled сценариев.",
  },
  {
    name: "onChange",
    type: "(value: TimeValue) => void",
    description:
      "Вызывается при прокрутке колонок и изменении выбранного времени.",
  },
  {
    name: "onConfirm",
    type: "(value: TimeValue) => void",
    description:
      "Колбэк подтверждения, который получает итоговое выбранное время.",
  },
  {
    name: "showSeconds",
    type: "boolean",
    description: "Показывает или скрывает третью колонку секунд.",
    defaultValue: "true",
  },
  {
    name: "use24Hour",
    type: "boolean",
    description: "Переключает формат часов между 24- и 12-часовым режимом.",
    defaultValue: "true",
  },
  {
    name: "showNowButton / showConfirmButton",
    type: "boolean",
    description: "Управляет видимостью штатных кнопок в футере компонента.",
    defaultValue: "true",
  },
  {
    name: "nowButtonText / confirmButtonText",
    type: "string",
    description: "Позволяет переопределить подписи кнопок футера.",
  },
  {
    name: "columnsFillHeight",
    type: "boolean",
    description:
      "Растягивает колонки на всю доступную высоту контейнера, если компонент встроен в высокий layout.",
    defaultValue: "false",
  },
  {
    name: "disabled",
    type: "boolean",
    description: "Полностью блокирует взаимодействие с колонками и кнопками.",
    defaultValue: "false",
  },
  {
    name: "footerSlot",
    type: "ReactNode",
    description: "Позволяет заменить стандартный футер собственным содержимым.",
  },
];

function formatTimePart(value: number) {
  return value.toString().padStart(2, "0");
}

function formatTimePreview(state: TimeBarPlaygroundState) {
  const parts = [
    formatTimePart(state.hours),
    formatTimePart(state.minutes),
    state.showSeconds ? formatTimePart(state.seconds) : null,
  ].filter(Boolean);

  return parts.join(":");
}

function createTimeBarUsageCode(
  packageName: string,
  state: TimeBarPlaygroundState
) {
  return `import { TimeBar } from "${packageName}";
import "${packageName}/styles.css";

export function Example() {
  return (
    <TimeBar
      defaultValue={{ hours: ${state.hours}, minutes: ${state.minutes}, seconds: ${state.seconds} }}
      showSeconds={${state.showSeconds}}
      use24Hour={${state.use24Hour}}
      showNowButton={${state.showNowButton}}
      showConfirmButton={${state.showConfirmButton}}
      nowButtonText="${state.nowButtonText}"
      confirmButtonText="${state.confirmButtonText}"${state.disabled ? "\n      disabled" : ""}${state.columnsFillHeight ? "\n      columnsFillHeight" : ""}
    />
  );
}`;
}

function TimeBarPreview(
  state: TimeBarPlaygroundState,
  {
    updateState,
  }: {
    updateState: (patch: Partial<TimeBarPlaygroundState>) => void;
  }
) {
  return (
    <div>
      <div className="rounded-(--br-component-md) bg-page px-(--spacing-3) py-(--spacing-2)">
        <Text variant={TextVariant.C1} className="text-secondary">
          Выбрано: {formatTimePreview(state)}
        </Text>
      </div>

      <TimeBar
        value={{
          hours: state.hours,
          minutes: state.minutes,
          seconds: state.seconds,
        }}
        onChange={(nextValue) => updateState(nextValue)}
        onConfirm={(nextValue) => updateState(nextValue)}
        disabled={state.disabled}
        showSeconds={state.showSeconds}
        use24Hour={state.use24Hour}
        showNowButton={state.showNowButton}
        showConfirmButton={state.showConfirmButton}
        nowButtonText={state.nowButtonText}
        confirmButtonText={state.confirmButtonText}
        columnsFillHeight={state.columnsFillHeight}
      />
    </div>
  );
}

function renderTimeBarControls(
  state: TimeBarPlaygroundState,
  {
    updateState,
  }: {
    updateState: (patch: Partial<TimeBarPlaygroundState>) => void;
  }
) {
  return (
    <>
      <PlaygroundTextControl
        label="Now button text"
        value={state.nowButtonText}
        onChange={(value) => updateState({ nowButtonText: value })}
      />
      <PlaygroundTextControl
        label="Confirm button text"
        value={state.confirmButtonText}
        onChange={(value) => updateState({ confirmButtonText: value })}
      />
      <PlaygroundSwitchControl
        label="Show seconds"
        checked={state.showSeconds}
        onChange={(value) => updateState({ showSeconds: value })}
      />
      <PlaygroundSwitchControl
        label="Use 24 hour"
        checked={state.use24Hour}
        onChange={(value) => updateState({ use24Hour: value })}
      />
      <PlaygroundSwitchControl
        label="Show now button"
        checked={state.showNowButton}
        onChange={(value) => updateState({ showNowButton: value })}
      />
      <PlaygroundSwitchControl
        label="Show confirm button"
        checked={state.showConfirmButton}
        onChange={(value) => updateState({ showConfirmButton: value })}
      />
      <PlaygroundSwitchControl
        label="Columns fill height"
        checked={state.columnsFillHeight}
        onChange={(value) => updateState({ columnsFillHeight: value })}
      />
      <PlaygroundSwitchControl
        label="Disabled"
        checked={state.disabled}
        onChange={(value) => updateState({ disabled: value })}
      />
    </>
  );
}

export const timeBarDocsConfig: ComponentDocsConfig<TimeBarPlaygroundState> = {
  title: "TimeBar",
  description:
    "TimeBar предоставляет вертикальный выбор часов, минут и секунд с настраиваемым футером и режимом controlled/uncontrolled.",
  props: TIME_BAR_PROPS,
  initialState: TIME_BAR_DEFAULT_STATE,
  createUsageCode: createTimeBarUsageCode,
  renderPreview: TimeBarPreview,
  renderControls: renderTimeBarControls,
};
