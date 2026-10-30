import {
  CardVariant,
  TextColor,
  TextShade,
  type CardVariantType,
} from "@/components";
import { Size } from "@/types";

export type CardPaddingPreset = "default" | "compact" | "relaxed";

export type CardTextColorOption = "default" | TextColor;
export type CardTextShadeOption = "default" | TextShade;

export type CardPlaygroundState = {
  size: Size;
  variant: CardVariantType;
  title: string;
  subtitle: string;
  content: string;
  padding: CardPaddingPreset;
  titleColor: CardTextColorOption;
  titleShade: CardTextShadeOption;
  subtitleColor: CardTextColorOption;
  subtitleShade: CardTextShadeOption;
  withSubtitle: boolean;
  withAction: boolean;
  hoverable: boolean;
};

export const CARD_DEFAULT_STATE: CardPlaygroundState = {
  size: Size.Md,
  variant: CardVariant.Basic,
  title: "Project overview",
  subtitle: "Updated 10 minutes ago",
  content:
    "Use Card to group related content, metadata and actions inside a single surface.",
  padding: "default",
  titleColor: "default",
  titleShade: "default",
  subtitleColor: "default",
  subtitleShade: "default",
  withSubtitle: true,
  withAction: true,
  hoverable: false,
};
