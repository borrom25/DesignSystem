import {
  TextColor,
  TextShade,
  TextVariant,
  TextWeight,
  type TextAlign as TextAlignType,
  type TextColor as TextColorType,
  type TextDecoration as TextDecorationType,
  type TextOverflow as TextOverflowType,
  type TextShade as TextShadeType,
  type TextVariant as TextVariantType,
  type TextWeight as TextWeightType,
} from "@/components";

export type TextElement = "span" | "p" | "label" | "h2";

export type TextPlaygroundState = {
  content: string;
  as: TextElement;
  variant: TextVariantType;
  weight: TextWeightType;
  color: TextColorType;
  shade: TextShadeType;
  align: "default" | TextAlignType;
  overflow: "default" | TextOverflowType;
  decoration: "default" | TextDecorationType;
};

export const TEXT_DEFAULT_STATE: TextPlaygroundState = {
  content: "Section Header",
  as: "span",
  variant: TextVariant.B1,
  weight: TextWeight.Semibold,
  color: TextColor.Basic,
  shade: TextShade.Primary,
  align: "default",
  overflow: "default",
  decoration: "default",
};
