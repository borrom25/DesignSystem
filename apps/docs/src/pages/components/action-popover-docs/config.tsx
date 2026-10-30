import { MousePointerClick } from "lucide-react";
import type { ComponentDocsConfig } from "../createComponentDocsPage";
import { renderActionPopoverControls } from "./controls";
import { ActionPopoverPreview } from "./preview";
import { ACTION_POPOVER_PROPS } from "./props";
import {
  ACTION_POPOVER_DEFAULT_STATE,
  type ActionPopoverPlaygroundState,
} from "./types";
import { createActionPopoverUsageCode } from "./usage";

export const actionPopoverDocsConfig: ComponentDocsConfig<ActionPopoverPlaygroundState> =
  {
    title: "ActionPopover",
    icon: MousePointerClick,
    description:
      "ActionPopover — панель массовых действий над выбранными элементами. Показывает счётчик выбора и слот действий. Кнопка закрытия опциональна: она появляется только если передан onClose. Часто используется вместе с Table / DataTable.",
    props: ACTION_POPOVER_PROPS,
    initialState: ACTION_POPOVER_DEFAULT_STATE,
    createUsageCode: createActionPopoverUsageCode,
    renderPreview: ActionPopoverPreview,
    renderControls: renderActionPopoverControls,
  };
