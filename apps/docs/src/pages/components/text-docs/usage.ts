import {
  TextAlign,
  TextColor,
  TextDecoration,
  TextOverflow,
  TextShade,
  TextVariant,
  TextWeight,
} from "@/components";
import type { TextPlaygroundState } from "./types";

const variantConstMap: Record<TextPlaygroundState["variant"], string> = {
  [TextVariant.B1]: "TextVariant.B1",
  [TextVariant.B2]: "TextVariant.B2",
  [TextVariant.B3]: "TextVariant.B3",
  [TextVariant.C1]: "TextVariant.C1",
  [TextVariant.C2]: "TextVariant.C2",
  [TextVariant.D1]: "TextVariant.D1",
  [TextVariant.D2]: "TextVariant.D2",
  [TextVariant.D3]: "TextVariant.D3",
  [TextVariant.H1]: "TextVariant.H1",
  [TextVariant.H2]: "TextVariant.H2",
  [TextVariant.H3]: "TextVariant.H3",
  [TextVariant.H4]: "TextVariant.H4",
  [TextVariant.H5]: "TextVariant.H5",
};

const weightConstMap: Record<TextPlaygroundState["weight"], string> = {
  [TextWeight.Regular]: "TextWeight.Regular",
  [TextWeight.Medium]: "TextWeight.Medium",
  [TextWeight.Semibold]: "TextWeight.Semibold",
  [TextWeight.Bold]: "TextWeight.Bold",
};

const colorConstMap: Record<TextPlaygroundState["color"], string> = {
  [TextColor.Action]: "TextColor.Action",
  [TextColor.Basic]: "TextColor.Basic",
  [TextColor.Brand]: "TextColor.Brand",
  [TextColor.ContrastDark]: "TextColor.ContrastDark",
  [TextColor.ContrastLight]: "TextColor.ContrastLight",
  [TextColor.Danger]: "TextColor.Danger",
  [TextColor.Info]: "TextColor.Info",
  [TextColor.Inverse]: "TextColor.Inverse",
  [TextColor.InverseAdditional]: "TextColor.InverseAdditional",
  [TextColor.Positive]: "TextColor.Positive",
  [TextColor.Utility]: "TextColor.Utility",
  [TextColor.Warning]: "TextColor.Warning",
};

const shadeConstMap: Record<TextPlaygroundState["shade"], string> = {
  [TextShade.Heavy]: "TextShade.Heavy",
  [TextShade.Light]: "TextShade.Light",
  [TextShade.Medium]: "TextShade.Medium",
  [TextShade.Complementary]: "TextShade.Complementary",
  [TextShade.Hint]: "TextShade.Hint",
  [TextShade.Primary]: "TextShade.Primary",
  [TextShade.Secondary]: "TextShade.Secondary",
};

const alignConstMap: Record<
  Exclude<TextPlaygroundState["align"], "default">,
  string
> = {
  [TextAlign.Start]: "TextAlign.Start",
  [TextAlign.Center]: "TextAlign.Center",
  [TextAlign.End]: "TextAlign.End",
};

const overflowConstMap: Record<
  Exclude<TextPlaygroundState["overflow"], "default">,
  string
> = {
  [TextOverflow.Truncate]: "TextOverflow.Truncate",
  [TextOverflow.Char]: "TextOverflow.Char",
  [TextOverflow.Word]: "TextOverflow.Word",
  [TextOverflow.Syllable]: "TextOverflow.Syllable",
  [TextOverflow.Nowrap]: "TextOverflow.Nowrap",
};

const decorationConstMap: Record<
  Exclude<TextPlaygroundState["decoration"], "default">,
  string
> = {
  [TextDecoration.Underline]: "TextDecoration.Underline",
  [TextDecoration.Overline]: "TextDecoration.Overline",
  [TextDecoration.LineThrough]: "TextDecoration.LineThrough",
  [TextDecoration.None]: "TextDecoration.None",
};

export function createTextUsageCode(
  packageName: string,
  state: TextPlaygroundState
) {
  const elementProp = state.as === "span" ? "" : ` as="${state.as}"`;
  const alignProp =
    state.align === "default" ? "" : ` align={${alignConstMap[state.align]}}`;
  const overflowProp =
    state.overflow === "default"
      ? ""
      : ` overflow={${overflowConstMap[state.overflow]}}`;
  const decorationProp =
    state.decoration === "default"
      ? ""
      : ` decoration={${decorationConstMap[state.decoration]}}`;

  const imports = [
    "Text",
    "TextVariant",
    "TextWeight",
    "TextColor",
    "TextShade",
    state.align !== "default" ? "TextAlign" : null,
    state.overflow !== "default" ? "TextOverflow" : null,
    state.decoration !== "default" ? "TextDecoration" : null,
  ]
    .filter(Boolean)
    .join(", ");

  return `import { ${imports} } from "${packageName}";
import "${packageName}/styles.css";

export function Example() {
  return (
    <Text${elementProp} variant={${variantConstMap[state.variant]}} weight={${weightConstMap[state.weight]}} color={${colorConstMap[state.color]}} shade={${shadeConstMap[state.shade]}}${alignProp}${overflowProp}${decorationProp}>
      ${state.content}
    </Text>
  );
}`;
}
