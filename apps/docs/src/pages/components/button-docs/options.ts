import { Color, HtmlType, Size, Type } from "@/types";
import { CounterVariant } from "@/components";

export const BUTTON_TYPE_OPTIONS = [
  { value: Type.Fill, label: "Fill" },
  { value: Type.Outline, label: "Outline" },
  { value: Type.Ghost, label: "Ghost" },
  { value: Type.Flat, label: "Flat" },
];

export const BUTTON_STATE_OPTIONS = [
  { value: "default" as const, label: "Default" },
  { value: "disabled" as const, label: "Disabled" },
  { value: "loading" as const, label: "Loading" },
];

export const BUTTON_COLOR_OPTIONS = [
  { value: Color.Brand, label: "Brand" },
  { value: Color.Danger, label: "Danger" },
  { value: Color.Positive, label: "Positive" },
  { value: Color.Action, label: "Action" },
  { value: Color.Warning, label: "Warning" },
  { value: Color.Info, label: "Info" },
  { value: Color.Secondary, label: "Secondary" },
  { value: Color.ContrastDark, label: "ContrastDark" },
  { value: Color.ContrastLight, label: "ContrastLight" },
];

export const BUTTON_SIZE_OPTIONS = [
  { value: Size.Xs, label: "Xs" },
  { value: Size.Sm, label: "Sm" },
  { value: Size.Md, label: "Md" },
];

export const BUTTON_HTML_TYPE_OPTIONS = [
  { value: HtmlType.Button, label: "button" },
  { value: HtmlType.Submit, label: "submit" },
  { value: HtmlType.Reset, label: "reset" },
];

export const BUTTON_COUNT_OPTIONS = [
  { value: "1", label: "1" },
  { value: "3", label: "3" },
  { value: "12", label: "12" },
  { value: "99", label: "99" },
];

export const BUTTON_COUNTER_COLOR_OPTIONS = [
  { value: CounterVariant.Accent, label: "Accent" },
  { value: CounterVariant.Neutral, label: "Neutral" },
  { value: CounterVariant.White, label: "White" },
];
