import { useState } from "react";
import { PanelsTopLeft } from "lucide-react";
import { Button, ListItem, Popover } from "@/components";
import {
  PlaygroundSelectControl,
  PlaygroundSwitchControl,
} from "@docs/components/ComponentPlaygroundControls";
import type { PropDefinition } from "@docs/components/ComponentPropsTable";
import type { ComponentDocsConfig } from "../createComponentDocsPage";

type PopoverSide = "top" | "right" | "bottom" | "left";
type PopoverAlign = "start" | "center" | "end";

type PopoverPlaygroundState = {
  side: PopoverSide;
  align: PopoverAlign;
  matchTriggerWidth: boolean;
  withScrollArea: boolean;
  withSearch: boolean;
  controlled: boolean;
};

const POPOVER_SIDE_OPTIONS = [
  { value: "top", label: "Top" },
  { value: "right", label: "Right" },
  { value: "bottom", label: "Bottom" },
  { value: "left", label: "Left" },
] as const;

const POPOVER_ALIGN_OPTIONS = [
  { value: "start", label: "Start" },
  { value: "center", label: "Center" },
  { value: "end", label: "End" },
] as const;

const POPOVER_DEFAULT_STATE: PopoverPlaygroundState = {
  side: "bottom",
  align: "start",
  matchTriggerWidth: false,
  withScrollArea: false,
  withSearch: false,
  controlled: false,
};

const POPOVER_PROPS: PropDefinition[] = [
  {
    name: "Popover",
    type: "open?, onOpenChange?, children",
    description:
      "Root-компонент. Может быть uncontrolled или controlled через open/onOpenChange.",
  },
  {
    name: "Popover.Trigger",
    type: "Radix PopoverTriggerProps",
    description:
      "Триггер рендерится через asChild, поэтому внутрь передается ваш Button, input или другой интерактивный элемент.",
  },
  {
    name: "Popover.Content",
    type: "side, align, sideOffset, collisionPadding, matchTriggerWidth, maxHeight, closeOnOverlayClick",
    description:
      "Портальный слой с позиционированием Radix. На мобильном Content открывается через Modal, сохраняя тот же open state.",
  },
  {
    name: "Popover.Surface",
    type: "className?, children, search?",
    description:
      "Визуальная оболочка для контента popover: фон, border, radius и shadow. Через search можно включить поисковый инпут как в фильтре таблицы.",
  },
  {
    name: "search",
    type: "boolean | PopoverSearchConfig",
    description:
      "Включает SearchAutocomplete в шапке Surface. `true` — дефолтный инпут, объект — placeholder, value, onValueChange, onClear, emptyMessage, slot и остальные пропсы SearchAutocomplete. Если поиск ничего не нашёл (нет children), показывается «Ничего не найдено».",
  },
  {
    name: "Popover.ScrollArea",
    type: "maxHeight, onScrollEnd, isLoading, hasMore",
    description:
      "Скроллируемый контейнер внутри Content. Подходит для длинных списков и lazy loading.",
  },
  {
    name: "matchTriggerWidth",
    type: "boolean",
    description: "Делает ширину Content равной ширине trigger.",
  },
  {
    name: "sideMenu",
    type: "boolean",
    description:
      "Используется мобильным fallback: Content будет открыт как боковая Modal-панель.",
  },
  {
    name: "closeOnOverlayClick",
    type: "boolean",
    defaultValue: "true",
    description:
      "Определяет, закрывать ли мобильное Modal-представление при клике по overlay.",
  },
];

function PopoverPreview(state: PopoverPlaygroundState) {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const rootProps = state.controlled ? { open, onOpenChange: setOpen } : {};
  const items = ["Профиль", "Настройки", "Уведомления", "История", "Выйти"];
  const surfaceClassName = [
    state.matchTriggerWidth ? undefined : "w-[240px]",
    state.withSearch ? undefined : "p-2",
  ]
    .filter(Boolean)
    .join(" ");
  const normalizedSearch = searchValue.trim().toLowerCase();
  const visibleItems = state.withSearch
    ? items.filter((item) => item.toLowerCase().includes(normalizedSearch))
    : items;
  const renderItem = (item: string, key = item) => (
    <ListItem key={key} title={item} size="sm" scaling={false} />
  );

  return (
    <div className="flex h-[320px] w-[560px] items-center justify-center rounded-3xl bg-page p-(--spacing-6)">
      <Popover {...rootProps}>
        <div className="flex flex-col gap-2">
          {state.controlled && (
            <>
              <div className="flex items-center gap-2">
                <Button size="sm" type="ghost" onClick={() => setOpen(true)}>
                  Open
                </Button>
                <Button size="sm" type="ghost" onClick={() => setOpen(false)}>
                  Close
                </Button>
                <Button
                  size="sm"
                  type="ghost"
                  onClick={() => setOpen((prev) => !prev)}
                >
                  Toggle
                </Button>
              </div>
              <span className="text-xs text-secondary">
                open: {String(open)}
              </span>
            </>
          )}
          <Popover.Trigger>
            <Button className="w-[220px]" scaling={false}>
              Открыть Popover
            </Button>
          </Popover.Trigger>
        </div>
        <Popover.Content
          side={state.side}
          align={state.align}
          matchTriggerWidth={state.matchTriggerWidth}
          maxHeight={state.withScrollArea ? 156 : undefined}
        >
          <Popover.Surface
            className={surfaceClassName}
            search={
              state.withSearch
                ? {
                    value: searchValue,
                    onValueChange: setSearchValue,
                    placeholder: "Поиск",
                  }
                : undefined
            }
          >
            {state.withScrollArea &&
            (!state.withSearch || visibleItems.length > 0) ? (
              <Popover.ScrollArea maxHeight={156}>
                <div className="flex flex-col gap-1">
                  {[...visibleItems, ...visibleItems].map((item, index) =>
                    renderItem(item, `${item}-${index}`)
                  )}
                </div>
              </Popover.ScrollArea>
            ) : state.withSearch ? (
              visibleItems.map((item) => renderItem(item))
            ) : (
              <div className="flex flex-col gap-1">
                {items.map((item) => renderItem(item))}
              </div>
            )}
          </Popover.Surface>
        </Popover.Content>
      </Popover>
    </div>
  );
}

function createPopoverUsageCode(
  packageName: string,
  state: PopoverPlaygroundState
) {
  const rootProps = state.controlled
    ? " open={open} onOpenChange={setOpen}"
    : "";
  const needsUseState = state.controlled || state.withSearch;
  const controlledImport = needsUseState
    ? 'import { useState } from "react";\n'
    : "";
  const controlledState = [
    state.controlled ? "  const [open, setOpen] = useState(false);" : "",
    state.withSearch
      ? '  const [searchValue, setSearchValue] = useState("");'
      : "",
  ]
    .filter(Boolean)
    .join("\n");
  const exampleState = controlledState ? `\n${controlledState}\n` : "";
  const surfaceClassName = [
    state.matchTriggerWidth ? undefined : "w-[240px]",
    state.withSearch ? undefined : "p-2",
  ]
    .filter(Boolean)
    .join(" ");
  const searchProp = state.withSearch
    ? `
            search={{
              value: searchValue,
              onValueChange: setSearchValue,
              placeholder: "Поиск",
            }}`
    : "";
  const surfaceClassAttr = surfaceClassName
    ? ` className="${surfaceClassName}"`
    : "";
  const controlledTools = state.controlled
    ? `
      <div style={{ display: "flex", gap: 8 }}>
        <Button size="sm" type="ghost" onClick={() => setOpen(true)}>Open</Button>
        <Button size="sm" type="ghost" onClick={() => setOpen(false)}>Close</Button>
        <Button size="sm" type="ghost" onClick={() => setOpen((prev) => !prev)}>Toggle</Button>
      </div>
      <span>open: {String(open)}</span>
`
    : "";

  return `${controlledImport}import { Button, ListItem, Popover } from "${packageName}";
import "${packageName}/styles.css";

export function Example() {${exampleState}
  return (
    <Popover${rootProps}>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
${controlledTools}        <Popover.Trigger>
          <Button className="w-[220px]" scaling={false}>Открыть Popover</Button>
        </Popover.Trigger>
      </div>
      <Popover.Content
        side="${state.side}"
        align="${state.align}"
        matchTriggerWidth={${state.matchTriggerWidth}}
        maxHeight={${state.withScrollArea ? 156 : "undefined"}}
      >
        <Popover.Surface${surfaceClassAttr}${searchProp}>
          ${
            state.withScrollArea
              ? `<Popover.ScrollArea maxHeight={156}>
            <ListItem title="Профиль" size="sm" scaling={false} />
            <ListItem title="Настройки" size="sm" scaling={false} />
            <ListItem title="Выйти" size="sm" scaling={false} />
          </Popover.ScrollArea>`
              : `<ListItem title="Профиль" size="sm" scaling={false} />
          <ListItem title="Настройки" size="sm" scaling={false} />
          <ListItem title="Выйти" size="sm" scaling={false} />`
          }
        </Popover.Surface>
      </Popover.Content>
    </Popover>
  );
}`;
}

function renderPopoverControls(
  state: PopoverPlaygroundState,
  {
    updateState,
  }: {
    updateState: (patch: Partial<PopoverPlaygroundState>) => void;
  }
) {
  return (
    <>
      <PlaygroundSelectControl
        label="Side"
        options={POPOVER_SIDE_OPTIONS}
        value={state.side}
        onChange={(side) => updateState({ side })}
      />
      <PlaygroundSelectControl
        label="Align"
        options={POPOVER_ALIGN_OPTIONS}
        value={state.align}
        onChange={(align) => updateState({ align })}
      />
      <PlaygroundSwitchControl
        label="Match trigger width"
        checked={state.matchTriggerWidth}
        onChange={(matchTriggerWidth) => updateState({ matchTriggerWidth })}
      />
      <PlaygroundSwitchControl
        label="Scroll area"
        checked={state.withScrollArea}
        onChange={(withScrollArea) => updateState({ withScrollArea })}
      />
      <PlaygroundSwitchControl
        label="Search"
        checked={state.withSearch}
        onChange={(withSearch) => updateState({ withSearch })}
      />
      <PlaygroundSwitchControl
        label="Controlled"
        checked={state.controlled}
        onChange={(controlled) => updateState({ controlled })}
      />
    </>
  );
}

export const popoverDocsConfig: ComponentDocsConfig<PopoverPlaygroundState> = {
  title: "Popover",
  icon: PanelsTopLeft,
  description:
    "Popover показывает контекстный слой рядом с trigger. Компонент собирается через Popover.Trigger, Popover.Content и Popover.Surface, может быть controlled через open/onOpenChange, а на мобильных автоматически использует Modal-представление.",
  props: POPOVER_PROPS,
  initialState: POPOVER_DEFAULT_STATE,
  createUsageCode: createPopoverUsageCode,
  renderPreview: PopoverPreview,
  renderControls: renderPopoverControls,
};
