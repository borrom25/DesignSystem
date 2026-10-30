import { Bell } from "lucide-react";
import { Alert, Button } from "@/components";
import { UIKitProvider } from "@/providers/KitProvider";
import { Color } from "@/types";
import { useUiController } from "@/hooks";
import {
  PlaygroundSelectControl,
  PlaygroundSwitchControl,
  PlaygroundTextControl,
} from "@docs/components/ComponentPlaygroundControls";
import type { PropDefinition } from "@docs/components/ComponentPropsTable";
import type { ComponentDocsConfig } from "../createComponentDocsPage";

type AlertPlaygroundState = {
  title: string;
  description: string;
  type: Extract<Color, "positive" | "danger" | "warning" | "info">;
  closable: boolean;
  withActions: boolean;
};

const ALERT_TYPE_OPTIONS = [
  { value: Color.Positive, label: "Positive" },
  { value: Color.Danger, label: "Danger" },
  { value: Color.Warning, label: "Warning" },
  { value: Color.Info, label: "Info" },
] as const;

const ALERT_DEFAULT_STATE: AlertPlaygroundState = {
  title: "Изменения сохранены",
  description: "Данные обновлены и доступны всем участникам проекта.",
  type: Color.Positive,
  closable: true,
  withActions: true,
};

const ALERT_PROPS: PropDefinition[] = [
  {
    name: "type",
    type: `"positive" | "danger" | "warning" | "info"`,
    description: "Определяет цветовую схему и иконку alert.",
    defaultValue: '"positive"',
  },
  {
    name: "title",
    type: "ReactNode",
    description: "Основной текст уведомления.",
  },
  {
    name: "description",
    type: "ReactNode",
    description:
      "Дополнительное описание. Если оно отсутствует, Alert переходит в компактный layout.",
  },
  {
    name: "actions",
    type: "ReactNode",
    description: "Кнопки или ссылки для действия внутри alert.",
  },
  {
    name: "closable",
    type: "boolean",
    description: "Показывает кнопку закрытия.",
    defaultValue: "true",
  },
  {
    name: "onClose",
    type: "() => void",
    description:
      "Callback локального Alert. В programmatic API вызывается при closeAlert или автозакрытии.",
  },
  {
    name: "Alerts / UIKitProvider",
    type: "container",
    description:
      "Programmatic alerts хранятся в zustand store и выводятся контейнером Alerts. UIKitProvider подключает этот контейнер автоматически.",
  },
  {
    name: "useUiController().showAlert",
    type: "(message | options, type?) => alertId",
    description:
      "Открывает alert из обработчика. options поддерживает message, type, duration, description, actions, closable и onClose.",
  },
  {
    name: "useUiController().closeAlert",
    type: "(id?: string) => void",
    description:
      "Закрывает alert по id. Если id не передан, закрывается последний alert в стеке.",
  },
];

function ProgrammaticAlertDemo() {
  const { showAlert, closeAlert } = useUiController();

  return (
    <Button
      type="ghost"
      onClick={() =>
        showAlert({
          message: "Programmatic Alert",
          description:
            "Alert добавлен в store и будет автоматически закрыт через duration.",
          type: "success",
          duration: 5000,
          actions: (
            <>
              <Button size="xs" type="ghost" onClick={() => closeAlert()}>
                Закрыть
              </Button>
              <Button
                size="xs"
                type="flat"
                onClick={() => showAlert("Действие выполнено", "info")}
              >
                Действие
              </Button>
            </>
          ),
        })
      }
    >
      Показать через controller
    </Button>
  );
}

function AlertPreview(state: AlertPlaygroundState) {
  return (
    <UIKitProvider>
      <div className="flex w-[560px] flex-col gap-(--spacing-4) rounded-scale-3xl bg-page p-(--spacing-6)">
        <Alert
          type={state.type}
          title={state.title}
          description={state.description}
          closable={state.closable}
          actions={
            state.withActions ? (
              <>
                <Button size="xs" type="ghost">
                  Позже
                </Button>
                <Button size="xs" type="flat">
                  Перейти
                </Button>
              </>
            ) : undefined
          }
        />
        <div className="flex flex-wrap items-center gap-3">
          <ProgrammaticAlertDemo />
        </div>
      </div>
    </UIKitProvider>
  );
}

function createAlertUsageCode(
  packageName: string,
  state: AlertPlaygroundState
) {
  return `import { Alert, Button, UIKitProvider, useUiController } from "${packageName}";
import "${packageName}/styles.css";

function LocalAlertExample() {
  return (
    <Alert
      type="${state.type}"
      title="${state.title}"
      description="${state.description}"
      closable={${state.closable}}
      actions={${
        state.withActions
          ? `<>
        <Button size="xs" type="ghost">Позже</Button>
        <Button size="xs" type="flat">Перейти</Button>
      </>`
          : "undefined"
      }}
    />
  );
}

function ProgrammaticAlertButton() {
  const { showAlert, closeAlert } = useUiController();

  return (
    <Button
      onClick={() =>
        showAlert({
          message: "Programmatic Alert",
          description: "UIKitProvider содержит Alerts, который читает alert store.",
          type: "success",
          duration: 5000,
          actions: (
            <Button size="xs" type="ghost" onClick={() => closeAlert()}>
              Закрыть последний
            </Button>
          ),
        })
      }
    >
      Показать alert
    </Button>
  );
}

export function App() {
  return (
    <UIKitProvider>
      <LocalAlertExample />
      <ProgrammaticAlertButton />
    </UIKitProvider>
  );
}`;
}

function renderAlertControls(
  state: AlertPlaygroundState,
  {
    updateState,
  }: {
    updateState: (patch: Partial<AlertPlaygroundState>) => void;
  }
) {
  return (
    <>
      <PlaygroundTextControl
        label="Title"
        value={state.title}
        onChange={(title) => updateState({ title })}
      />
      <PlaygroundTextControl
        label="Description"
        value={state.description}
        onChange={(description) => updateState({ description })}
      />
      <PlaygroundSelectControl
        label="Type"
        options={ALERT_TYPE_OPTIONS}
        value={state.type}
        onChange={(type) => updateState({ type })}
      />
      <PlaygroundSwitchControl
        label="Closable"
        checked={state.closable}
        onChange={(closable) => updateState({ closable })}
      />
      <PlaygroundSwitchControl
        label="Actions"
        checked={state.withActions}
        onChange={(withActions) => updateState({ withActions })}
      />
    </>
  );
}

export const alertDocsConfig: ComponentDocsConfig<AlertPlaygroundState> = {
  title: "Alert",
  icon: Bell,
  description:
    "Alert показывает важное уведомление в интерфейсе. Для локального места используйте компонент Alert напрямую, а для toast-like уведомлений вызывайте useUiController().showAlert или uiController.showAlert: UIKitProvider добавляет Alerts, который подписан на zustand store, запускает duration-таймер и удаляет закрытые уведомления после анимации.",
  props: ALERT_PROPS,
  initialState: ALERT_DEFAULT_STATE,
  createUsageCode: createAlertUsageCode,
  renderPreview: AlertPreview,
  renderControls: renderAlertControls,
};
