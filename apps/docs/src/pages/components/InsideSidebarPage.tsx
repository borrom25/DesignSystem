import { Plus } from "lucide-react";
import { Button, InsideSidebar } from "@/components";
import { Color, Size, Type } from "@/types";
import {
  PlaygroundSwitchControl,
  PlaygroundTextControl,
} from "@docs/components/ComponentPlaygroundControls";
import type { PropDefinition } from "@docs/components/ComponentPropsTable";
import type { ComponentDocsConfig } from "./createComponentDocsPage";
import { createComponentDocsPage } from "./createComponentDocsPage";

type InsideSidebarPlaygroundState = {
  title: string;
  withActionSlot: boolean;
  withHeadSlot: boolean;
  withBottomSlotAction: boolean;
};

const INSIDE_SIDEBAR_DEFAULT_STATE: InsideSidebarPlaygroundState = {
  title: "Settings",
  withActionSlot: true,
  withHeadSlot: true,
  withBottomSlotAction: true,
};

const INSIDE_SIDEBAR_PROPS: readonly PropDefinition[] = [
  {
    name: "title",
    type: "ReactNode",
    description: "Заголовок верхней части сайдбара.",
  },
  {
    name: "actionSlot",
    type: "ReactNode",
    description: "Контейнер действий в правой части заголовка.",
  },
  {
    name: "headSlot",
    type: "ReactNode",
    description: "Верхний дополнительный блок под заголовком.",
  },
  {
    name: "slotContent",
    type: "ReactNode",
    description: "Основная scrollable-зона контента.",
  },
  {
    name: "bottomSlotAction",
    type: "ReactNode",
    description: "Нижняя панель действий (обычно кнопки).",
  },
  {
    name: "className",
    type: "string",
    description: "Дополнительные классы корневого контейнера.",
  },
];

function InsideSidebarPreview(state: InsideSidebarPlaygroundState) {
  return (
    <div className="h-[420px] w-full overflow-hidden bg-page">
      <div className="flex h-full">
        <InsideSidebar
          title={state.title || undefined}
          actionSlot={
            state.withActionSlot ? (
              <div className="flex items-center gap-(--spacing-2)">
                <Button
                  iconOnly={Plus}
                  type={Type.Flat}
                  color={Color.Brand}
                  size={Size.Xs}
                />
                <Button
                  iconOnly={Plus}
                  type={Type.Flat}
                  color={Color.Brand}
                  size={Size.Xs}
                />
              </div>
            ) : undefined
          }
          headSlot={
            state.withHeadSlot ? (
              <div className="flex h-[36px] items-center justify-center rounded-[8px] border border-line bg-generic-medium text-xs text-primary">
                headSlot
              </div>
            ) : undefined
          }
          slotContent={
            <div className="flex h-full w-full items-center justify-center rounded-[8px] border border-line bg-generic-medium text-xs text-primary">
              slotContent
            </div>
          }
          bottomSlotAction={
            state.withBottomSlotAction ? (
              <>
                <Button type={Type.Flat} color={Color.Secondary} size={Size.Sm}>
                  Cancel
                </Button>
                <Button type={Type.Fill} color={Color.Brand} size={Size.Sm}>
                  Save
                </Button>
              </>
            ) : undefined
          }
        />
        <div className="flex flex-1 items-center justify-center">
          <p className="text-secondary text-xs">
            InsideSidebar используется как вложенная навигационная панель внутри
            layout.
          </p>
        </div>
      </div>
    </div>
  );
}

function renderInsideSidebarControls(
  state: InsideSidebarPlaygroundState,
  {
    updateState,
  }: { updateState: (patch: Partial<InsideSidebarPlaygroundState>) => void }
) {
  return (
    <>
      <PlaygroundTextControl
        label="Title"
        value={state.title}
        onChange={(title) => updateState({ title })}
      />
      <PlaygroundSwitchControl
        label="Show actionSlot"
        checked={state.withActionSlot}
        onChange={(withActionSlot) => updateState({ withActionSlot })}
      />
      <PlaygroundSwitchControl
        label="Show headSlot"
        checked={state.withHeadSlot}
        onChange={(withHeadSlot) => updateState({ withHeadSlot })}
      />
      <PlaygroundSwitchControl
        label="Show bottomSlotAction"
        checked={state.withBottomSlotAction}
        onChange={(withBottomSlotAction) =>
          updateState({ withBottomSlotAction })
        }
      />
    </>
  );
}

function createInsideSidebarUsageCode(
  packageName: string,
  state: InsideSidebarPlaygroundState
) {
  return `import { InsideSidebar } from "${packageName}";
import "${packageName}/styles.css";

export function Example() {
  return (
    <InsideSidebar${state.title ? `\n      title="${state.title}"` : ""}${state.withHeadSlot ? "\n      headSlot={<div>Filters</div>}" : ""}${state.withActionSlot ? '\n      actionSlot={<button type="button">+</button>}' : ""}
      slotContent={<div>Content</div>}${state.withBottomSlotAction ? '\n      bottomSlotAction={<button type="button">Save</button>}' : ""}
    />
  );
}`;
}

const insideSidebarDocsConfig: ComponentDocsConfig<InsideSidebarPlaygroundState> =
  {
    title: "InsideSidebar",
    previewLayout: "stretch",
    description:
      "InsideSidebar формирует внутреннюю боковую панель раздела: отдельный заголовок, верхний slot с фильтрами, основной контент и нижние действия.",
    props: INSIDE_SIDEBAR_PROPS,
    initialState: INSIDE_SIDEBAR_DEFAULT_STATE,
    createUsageCode: createInsideSidebarUsageCode,
    renderPreview: InsideSidebarPreview,
    renderControls: renderInsideSidebarControls,
  };

const InsideSidebarPage = createComponentDocsPage(insideSidebarDocsConfig);

export default InsideSidebarPage;
