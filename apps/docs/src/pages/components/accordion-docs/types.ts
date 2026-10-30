import { TextColor, TextShade } from "@/components";

export type AccordionPosition = "start" | "mid" | "end";

export type AccordionChevronPosition = "left" | "right";

export type AccordionTextColorOption = "default" | TextColor;
export type AccordionTextShadeOption = "default" | TextShade;

export type AccordionPlaygroundState = {
  title: string;
  titleColor: AccordionTextColorOption;
  titleShade: AccordionTextShadeOption;
  position: AccordionPosition;
  chevronPosition: AccordionChevronPosition;
  disabled: boolean;
  subtitle: boolean;
  iconLeft: boolean;
  headSlot: boolean;
};

export const ACCORDION_DEFAULT_STATE: AccordionPlaygroundState = {
  title: "Project details",
  titleColor: "default",
  titleShade: "default",
  position: "start",
  chevronPosition: "right",
  disabled: false,
  subtitle: true,
  iconLeft: true,
  headSlot: true,
};
