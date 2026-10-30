import type { ComponentDocsConfig } from "../createComponentDocsPage";
import { renderTagControls } from "./controls";
import { TagPreview } from "./preview";
import { TAG_PROPS } from "./props";
import { TAG_DEFAULT_STATE, type TagPlaygroundState } from "./types";
import { createTagUsageCode } from "./usage";

export const tagDocsConfig: ComponentDocsConfig<TagPlaygroundState> = {
  title: "Tag",
  description:
    "Tag используется для отображения выбранных значений, сущностей и фильтров в компактном виде.",
  props: TAG_PROPS,
  initialState: TAG_DEFAULT_STATE,
  createUsageCode: createTagUsageCode,
  renderPreview: TagPreview,
  renderControls: renderTagControls,
};
