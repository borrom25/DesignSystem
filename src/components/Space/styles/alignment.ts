import { Size } from "@/types";
import {
  SpaceAlign,
  SpaceDirection,
  SpaceFlexWrap,
  SpaceJustify,
} from "../Space.types";

export const gapMap: Record<Size, string> = {
  xs: "gap-(--size-component-xs-gap)",
  sm: "gap-(--size-component-sm-gap)",
  md: "gap-(--size-component-md-gap)",
};

export const paddingMap: Record<Size, string> = {
  xs: "px-(--size-component-xs-padding-x) py-(--size-component-xs-padding-y)",
  sm: "px-(--size-component-sm-padding-x) py-(--size-component-sm-padding-y)",
  md: "px-(--size-component-md-padding-x) py-(--size-component-md-padding-y)",
};

export const directionMap: Record<SpaceDirection, string> = {
  row: "flex-row",
  col: "flex-col",
  "row-reverse": "flex-row-reverse",
  "col-reverse": "flex-col-reverse",
};

export const justifyMap: Record<SpaceJustify, string> = {
  start: "justify-start",
  end: "justify-end",
  center: "justify-center",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
};

export const alignMap: Record<SpaceAlign, string> = {
  start: "items-start",
  end: "items-end",
  center: "items-center",
  stretch: "items-stretch",
  baseline: "items-baseline",
};

export const flexWrapMap: Record<SpaceFlexWrap, string> = {
  nowrap: "flex-nowrap",
  wrap: "flex-wrap",
  "wrap-reverse": "flex-wrap-reverse",
};
