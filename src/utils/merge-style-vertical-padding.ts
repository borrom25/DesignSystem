import type { CSSProperties } from "react";

export type VerticalPaddingStyle = {
  top?: CSSProperties["paddingTop"];
  bottom?: CSSProperties["paddingBottom"];
};

export function mergeStyleWithVerticalPadding(
  style: CSSProperties | undefined,
  padding: VerticalPaddingStyle | undefined
): CSSProperties | undefined {
  const paddingFragment: Partial<
    Pick<CSSProperties, "paddingTop" | "paddingBottom">
  > = {};

  if (padding?.top !== undefined) {
    paddingFragment.paddingTop = padding.top;
  }
  if (padding?.bottom !== undefined) {
    paddingFragment.paddingBottom = padding.bottom;
  }

  const hasVerticalPadding =
    paddingFragment.paddingTop !== undefined ||
    paddingFragment.paddingBottom !== undefined;

  if (style === undefined && !hasVerticalPadding) {
    return undefined;
  }

  return { ...style, ...paddingFragment };
}
