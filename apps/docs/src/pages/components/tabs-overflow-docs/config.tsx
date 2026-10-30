import type { ComponentDocsConfig } from "../createComponentDocsPage";
import { renderTabsOverflowControls } from "./controls";
import { TabsOverflowPreview } from "./preview";
import { TABS_OVERFLOW_PROPS } from "./props";
import {
  TABS_OVERFLOW_DEFAULT_STATE,
  type TabsOverflowPlaygroundState,
} from "./types";
import { createTabsOverflowUsageCode } from "./usage";

export const tabsOverflowDocsConfig: ComponentDocsConfig<TabsOverflowPlaygroundState> =
  {
    title: "TabsOverflow",
    description:
      "TabsOverflow показывает вкладки в одну строку и переносит лишние элементы в меню «Еще».",
    props: TABS_OVERFLOW_PROPS,
    initialState: TABS_OVERFLOW_DEFAULT_STATE,
    createUsageCode: createTabsOverflowUsageCode,
    renderPreview: TabsOverflowPreview,
    renderControls: renderTabsOverflowControls,
  };
