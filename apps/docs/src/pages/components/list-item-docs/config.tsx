import type { ComponentDocsConfig } from "../createComponentDocsPage";
import { renderListItemControls } from "./controls";
import { ListItemPreview } from "./preview";
import { LIST_ITEM_PROPS } from "./props";
import { LIST_ITEM_DEFAULT_STATE, type ListItemPlaygroundState } from "./types";
import { createListItemUsageCode } from "./usage";

export const listItemDocsConfig: ComponentDocsConfig<ListItemPlaygroundState> =
  {
    title: "ListItem",
    description:
      "ListItem — интерактивный пункт списка для меню, сайдбаров и селектов. Поддерживает иконки, аватар, чекбокс и суффикс; iconRight использует цвет text/basic/hint и при ховере переходит в text/basic/complementary.",
    props: LIST_ITEM_PROPS,
    initialState: LIST_ITEM_DEFAULT_STATE,
    createUsageCode: createListItemUsageCode,
    renderPreview: ListItemPreview,
    renderControls: renderListItemControls,
  };
