import { Info, MessageSquareText } from "lucide-react";
import { Button, Tooltip } from "@/components";
import {
  PlaygroundSelectControl,
  PlaygroundSwitchControl,
  PlaygroundTextControl,
} from "@docs/components/ComponentPlaygroundControls";
import type { PropDefinition } from "@docs/components/ComponentPropsTable";
import type { ComponentDocsConfig } from "../createComponentDocsPage";

type TooltipSide = "top" | "right" | "bottom" | "left";
type TooltipAlign = "start" | "center" | "end";

type TooltipPlaygroundState = {
  title: string;
  subTitle: string;
  side: TooltipSide;
  align: TooltipAlign;
  showArrow: boolean;
  withIcon: boolean;
  withAction: boolean;
  defaultOpen: boolean;
};

const TOOLTIP_SIDE_OPTIONS = [
  { value: "top", label: "Top" },
  { value: "right", label: "Right" },
  { value: "bottom", label: "Bottom" },
  { value: "left", label: "Left" },
] as const;

const TOOLTIP_ALIGN_OPTIONS = [
  { value: "start", label: "Start" },
  { value: "center", label: "Center" },
  { value: "end", label: "End" },
] as const;

const TOOLTIP_DEFAULT_STATE: TooltipPlaygroundState = {
  title: "Подсказка",
  subTitle: "Дополнительный текст помогает уточнить действие.",
  side: "top",
  align: "center",
  showArrow: true,
  withIcon: true,
  withAction: true,
  defaultOpen: false,
};

const TOOLTIP_PROPS: PropDefinition[] = [
  {
    name: "Tooltip",
    type: "open?, defaultOpen?, onOpenChange?, children",
    description:
      "Root-компонент. Поддерживает controlled и uncontrolled режимы открытия.",
  },
  {
    name: "Tooltip.Trigger",
    type: "Radix PopoverTriggerProps",
    description:
      "Триггер рендерится через asChild, поэтому внутрь передается ваш интерактивный элемент.",
  },
  {
    name: "Tooltip.Content",
    type: "title, subTitle, icon, actionSlot, side, align",
    description:
      "Портальный слой подсказки с заголовком, опциональным описанием, иконкой и action slot.",
  },
  {
    name: "side / align",
    type: `"top" | "right" | "bottom" | "left" / "start" | "center" | "end"`,
    description: "Позиция подсказки относительно trigger.",
    defaultValue: '"top" / "center"',
  },
  {
    name: "showArrow",
    type: "boolean",
    description: "Показывает стрелку, направленную на trigger.",
    defaultValue: "true",
  },
  {
    name: "maxWidth",
    type: "number",
    description:
      "Максимальная ширина Tooltip.Content. Фактическая ширина ограничивается viewport.",
    defaultValue: "338",
  },
  {
    name: "collisionPadding",
    type: "number | sides object",
    description:
      "Отступ от краев экрана при автоматическом избежании столкновений.",
    defaultValue: "8",
  },
];

function TooltipPreview(state: TooltipPlaygroundState) {
  return (
    <div className="flex h-[320px] w-[560px] items-center justify-center rounded-scale-3xl bg-page p-(--spacing-6)">
      <Tooltip defaultOpen={state.defaultOpen}>
        <Tooltip.Trigger>
          <Button iconLeft={Info} scaling={false}>
            Навести на кнопку
          </Button>
        </Tooltip.Trigger>
        <Tooltip.Content
          title={state.title}
          subTitle={state.subTitle}
          side={state.side}
          align={state.align}
          showArrow={state.showArrow}
          icon={state.withIcon ? MessageSquareText : undefined}
          actionSlot={
            state.withAction ? (
              <Button size="xs" type="flat">
                Подробнее
              </Button>
            ) : undefined
          }
        />
      </Tooltip>
    </div>
  );
}

function createTooltipUsageCode(
  packageName: string,
  state: TooltipPlaygroundState
) {
  return `import { Info, MessageSquareText } from "lucide-react";
import { Button, Tooltip } from "${packageName}";
import "${packageName}/styles.css";

export function Example() {
  return (
    <Tooltip defaultOpen={${state.defaultOpen}}>
      <Tooltip.Trigger>
        <Button iconLeft={Info} scaling={false}>Навести на кнопку</Button>
      </Tooltip.Trigger>
      <Tooltip.Content
        title="${state.title}"
        subTitle="${state.subTitle}"
        side="${state.side}"
        align="${state.align}"
        showArrow={${state.showArrow}}
        icon={${state.withIcon ? "MessageSquareText" : "undefined"}}
        actionSlot={${
          state.withAction
            ? `<Button size="xs" type="flat">Подробнее</Button>`
            : "undefined"
        }}
      />
    </Tooltip>
  );
}`;
}

function renderTooltipControls(
  state: TooltipPlaygroundState,
  {
    updateState,
  }: {
    updateState: (patch: Partial<TooltipPlaygroundState>) => void;
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
        label="Subtitle"
        value={state.subTitle}
        onChange={(subTitle) => updateState({ subTitle })}
      />
      <PlaygroundSelectControl
        label="Side"
        options={TOOLTIP_SIDE_OPTIONS}
        value={state.side}
        onChange={(side) => updateState({ side })}
      />
      <PlaygroundSelectControl
        label="Align"
        options={TOOLTIP_ALIGN_OPTIONS}
        value={state.align}
        onChange={(align) => updateState({ align })}
      />
      <PlaygroundSwitchControl
        label="Arrow"
        checked={state.showArrow}
        onChange={(showArrow) => updateState({ showArrow })}
      />
      <PlaygroundSwitchControl
        label="Icon"
        checked={state.withIcon}
        onChange={(withIcon) => updateState({ withIcon })}
      />
      <PlaygroundSwitchControl
        label="Action slot"
        checked={state.withAction}
        onChange={(withAction) => updateState({ withAction })}
      />
      <PlaygroundSwitchControl
        label="Default open"
        checked={state.defaultOpen}
        onChange={(defaultOpen) => updateState({ defaultOpen })}
      />
    </>
  );
}

export const tooltipDocsConfig: ComponentDocsConfig<TooltipPlaygroundState> = {
  title: "Tooltip",
  icon: MessageSquareText,
  description:
    "Tooltip показывает короткую контекстную подсказку рядом с trigger. Он построен на композиции Tooltip.Trigger и Tooltip.Content, поддерживает controlled/uncontrolled открытие, позиционирование, стрелку, иконку и action slot.",
  props: TOOLTIP_PROPS,
  initialState: TOOLTIP_DEFAULT_STATE,
  createUsageCode: createTooltipUsageCode,
  renderPreview: TooltipPreview,
  renderControls: renderTooltipControls,
};
