import type { ComponentDocsConfig } from "../createComponentDocsPage";
import { renderDragHandleControls } from "./controls";
import { DragHandlePreview } from "./preview";
import { DRAG_HANDLE_PROPS } from "./props";
import {
  DRAG_HANDLE_DEFAULT_STATE,
  type DragHandlePlaygroundState,
} from "./types";
import { createDragHandleUsageCode } from "./usage";

export const dragHandleDocsConfig: ComponentDocsConfig<DragHandlePlaygroundState> =
  {
    title: "DragHandle",
    description:
      "Визуальная ручка перетаскивания (GripVertical). Обычно передаётся в ListItem через leading. DnD-логика и stopPropagation настраиваются снаружи.",
    props: DRAG_HANDLE_PROPS,
    initialState: DRAG_HANDLE_DEFAULT_STATE,
    createUsageCode: createDragHandleUsageCode,
    renderPreview: DragHandlePreview,
    renderControls: renderDragHandleControls,
  };
