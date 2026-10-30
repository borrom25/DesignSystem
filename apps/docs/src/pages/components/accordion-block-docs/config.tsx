import type { ComponentDocsConfig } from "../createComponentDocsPage";
import { renderAccordionBlockControls } from "./controls";
import { AccordionBlockPreview } from "./preview";
import { ACCORDION_BLOCK_PROPS } from "./props";
import {
  ACCORDION_BLOCK_DEFAULT_STATE,
  type AccordionBlockPlaygroundState,
} from "./types";
import { createAccordionBlockUsageCode } from "./usage";

export const accordionBlockDocsConfig: ComponentDocsConfig<AccordionBlockPlaygroundState> =
  {
    title: "AccordionBlock",
    developers: [],
    description:
      "AccordionBlock — Block с раскрытием как у Accordion: размеры xs/sm/md (padding), gap 8px, без собственной рамки. Шапка, описание и прогресс всегда на виду; вложенный контент плавно выезжает. Рамку можно добавить через className.",
    props: ACCORDION_BLOCK_PROPS,
    initialState: ACCORDION_BLOCK_DEFAULT_STATE,
    createUsageCode: createAccordionBlockUsageCode,
    renderPreview: AccordionBlockPreview,
    renderControls: renderAccordionBlockControls,
  };
