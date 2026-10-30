import { MousePointerClick } from "lucide-react";
import type { ComponentDocsConfig } from "../createComponentDocsPage";
import { renderButtonControls } from "./controls";
import { ButtonPreview } from "./preview";
import { BUTTON_PROPS } from "./props";
import { BUTTON_DEFAULT_STATE, type ButtonPlaygroundState } from "./types";
import { createButtonUsageCode } from "./usage";

export const buttonDocsConfig: ComponentDocsConfig<ButtonPlaygroundState> = {
  title: "Button",
  icon: MousePointerClick,
  developers: [],
  description:
    "Button используется как триггер для выполнения определённого действия. Основное назначение кнопки — запуск действия.",
  props: BUTTON_PROPS,
  initialState: BUTTON_DEFAULT_STATE,
  createUsageCode: createButtonUsageCode,
  renderPreview: ButtonPreview,
  renderControls: renderButtonControls,
};
