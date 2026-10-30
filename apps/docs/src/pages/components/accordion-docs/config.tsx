import type { ComponentDocsConfig } from "../createComponentDocsPage";
import { renderAccordionControls } from "./controls";
import { AccordionPreview } from "./preview";
import { ACCORDION_PROPS } from "./props";
import {
  ACCORDION_DEFAULT_STATE,
  type AccordionPlaygroundState,
} from "./types";
import { createAccordionUsageCode } from "./usage";

export const accordionDocsConfig: ComponentDocsConfig<AccordionPlaygroundState> =
  {
    title: "Accordion",
    developers: [],
    description:
      "Accordion раскрывает и скрывает связанный контент внутри компактной панели.",
    props: ACCORDION_PROPS,
    initialState: ACCORDION_DEFAULT_STATE,
    createUsageCode: createAccordionUsageCode,
    renderPreview: AccordionPreview,
    renderControls: renderAccordionControls,
  };
