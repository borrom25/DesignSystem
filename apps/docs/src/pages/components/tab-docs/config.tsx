import type { ComponentDocsConfig } from "../createComponentDocsPage";
import { renderTabControls } from "./controls";
import { TabPreview } from "./preview";
import { TAB_PROPS } from "./props";
import { TAB_DEFAULT_STATE, type TabPlaygroundState } from "./types";
import { createTabUsageCode } from "./usage";

export const tabDocsConfig: ComponentDocsConfig<TabPlaygroundState> = {
  title: "Tab",
  description:
    "Tab используется как отдельная вкладка для навигации между разделами или состояниями.",
  props: TAB_PROPS,
  initialState: TAB_DEFAULT_STATE,
  createUsageCode: createTabUsageCode,
  renderPreview: TabPreview,
  renderControls: renderTabControls,
};
