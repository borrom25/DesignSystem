import { Color, HtmlType, Size, Type } from "@/types";
import { CounterVariant } from "@/components";

export type ButtonState = "default" | "disabled" | "loading";

export type ButtonPlaygroundState = {
  type: Type;
  state: ButtonState;
  color: Color;
  size: Size;
  text: string;
  loader: boolean;
  scaling: boolean;
  htmlType: HtmlType;
  iconOnly: boolean;
  withLeftIcon: boolean;
  withRightIcon: boolean;
  withCounter: boolean;
  count: "1" | "3" | "12" | "99";
  counterColor: CounterVariant;
};

export const BUTTON_DEFAULT_STATE: ButtonPlaygroundState = {
  type: Type.Fill,
  state: "default",
  color: Color.Brand,
  size: Size.Xs,
  text: "Button",
  loader: false,
  scaling: true,
  htmlType: HtmlType.Button,
  iconOnly: false,
  withLeftIcon: false,
  withRightIcon: false,
  withCounter: false,
  count: "3",
  counterColor: CounterVariant.Accent,
};
