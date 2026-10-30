import {
  BlockVariant,
  type AccordionBlockLabelPosition,
  type BlockVariantType,
} from "@/components";
import { Size } from "@/types";

export type AccordionBlockPlaygroundState = {
  title: string;
  size: Size;
  variant: BlockVariantType;
  defaultOpen: boolean;
  disabled: boolean;
  progress: string;
  labelPosition: AccordionBlockLabelPosition;
};

export const ACCORDION_BLOCK_DEFAULT_STATE: AccordionBlockPlaygroundState = {
  title: "Python",
  size: Size.Md,
  variant: BlockVariant.Basic,
  defaultOpen: false,
  disabled: false,
  progress: "15",
  labelPosition: "end",
};
