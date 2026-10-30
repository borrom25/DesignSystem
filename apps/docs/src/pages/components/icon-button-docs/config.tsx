import type { ComponentDocsConfig } from "../createComponentDocsPage";
import { renderIconButtonControls } from "./controls";
import { IconButtonPreview } from "./preview";
import { ICON_BUTTON_PROPS } from "./props";
import {
  ICON_BUTTON_DEFAULT_STATE,
  type IconButtonPlaygroundState,
} from "./types";
import { createIconButtonUsageCode } from "./usage";

export const iconButtonDocsConfig: ComponentDocsConfig<IconButtonPlaygroundState> =
  {
    title: "IconButton",
    description:
      "IconButton — кнопка компактного формата для действий, представленных иконкой.",
    props: ICON_BUTTON_PROPS,
    initialState: ICON_BUTTON_DEFAULT_STATE,
    createUsageCode: createIconButtonUsageCode,
    renderPreview: IconButtonPreview,
    renderControls: renderIconButtonControls,
  };
