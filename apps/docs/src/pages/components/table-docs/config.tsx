import type { ComponentDocsConfig } from "../createComponentDocsPage";
import { renderTableControls } from "./controls";
import { TABLE_PROPS } from "./props";
import { TablePreview } from "./preview";
import { TABLE_DEFAULT_STATE, type TablePlaygroundState } from "./types";
import { createTableUsageCode } from "./usage";

export const tableDocsConfig: ComponentDocsConfig<TablePlaygroundState> = {
  title: "Table",
  description:
    "Table используется для отображения табличных данных с сортировкой, поиском, фильтрами, выбором строк и расширяемыми сценариями вроде вложенных строк, inline-редактирования и дозагрузки по достижению конца скролла.",
  props: TABLE_PROPS,
  initialState: TABLE_DEFAULT_STATE,
  createUsageCode: createTableUsageCode,
  renderPreview: TablePreview,
  renderControls: renderTableControls,
};
