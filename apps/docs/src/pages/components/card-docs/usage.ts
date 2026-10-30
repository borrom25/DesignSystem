import { TextColor, TextShade } from "@/components";
import type {
  CardPlaygroundState,
  CardTextColorOption,
  CardTextShadeOption,
} from "./types";

const paddingCodeMap: Record<CardPlaygroundState["padding"], string> = {
  default: "",
  compact:
    '\n      padding={{ top: "var(--spacing-3)", bottom: "var(--spacing-3)" }}',
  relaxed:
    '\n      padding={{ top: "var(--spacing-6)", bottom: "var(--spacing-6)" }}',
};

const textColorConstMap: Record<
  Exclude<CardTextColorOption, "default">,
  string
> = {
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

const textShadeConstMap: Record<
  Exclude<CardTextShadeOption, "default">,
  string
> = {
  [TextShade.Heavy]: "TextShade.Heavy",
  [TextShade.Light]: "TextShade.Light",
  [TextShade.Medium]: "TextShade.Medium",
  [TextShade.Complementary]: "TextShade.Complementary",
  [TextShade.Hint]: "TextShade.Hint",
  [TextShade.Primary]: "TextShade.Primary",
  [TextShade.Secondary]: "TextShade.Secondary",
};

function createTextPropsCode(
  propName: "titleProps" | "subtitleProps",
  color: CardTextColorOption,
  shade: CardTextShadeOption
) {
  if (color === "default" && shade === "default") return "";

  const lines: string[] = [];
  if (color !== "default") {
    lines.push(`        color: ${textColorConstMap[color]},`);
  }
  if (shade !== "default") {
    lines.push(`        shade: ${textShadeConstMap[shade]},`);
  }

  return `\n      ${propName}={{
${lines.join("\n")}
      }}`;
}

export function createCardUsageCode(
  packageName: string,
  state: CardPlaygroundState
) {
  const needsButtonImport = state.withAction;
  const isInverse =
    state.titleColor === TextColor.Inverse ||
    state.subtitleColor === TextColor.Inverse;
  const titleProp = state.title ? `\n      title="${state.title}"` : "";
  const subtitleProp =
    state.withSubtitle && state.subtitle
      ? `\n      subtitle="${state.subtitle}"`
      : "";
  const titlePropsProp = createTextPropsCode(
    "titleProps",
    state.titleColor,
    state.titleShade
  );
  const subtitlePropsProp = state.withSubtitle
    ? createTextPropsCode(
        "subtitleProps",
        state.subtitleColor,
        state.subtitleShade
      )
    : "";
  const classNameProp = isInverse ? '\n      className="bg-contrast-dark"' : "";
  const actionProp = state.withAction
    ? '\n      actionSlot={<Button size="xs" type="ghost">Open</Button>}'
    : "";
  const hoverableProp = state.hoverable ? "\n      hoverable" : "";
  const contentColor = isInverse
    ? "color={TextColor.Inverse} shade={TextShade.Light}"
    : "color={TextColor.Basic} shade={TextShade.Secondary}";

  const textConsts = [
    "Text",
    "TextVariant",
    "TextWeight",
    "TextColor",
    "TextShade",
  ];
  const imports = [
    "Card",
    ...(needsButtonImport ? ["Button"] : []),
    ...textConsts,
  ].join(", ");

  return `import { ${imports} } from "${packageName}";
import "${packageName}/styles.css";

export function Example() {
  return (
    <Card
      size="${state.size}"
      variant="${state.variant}"${titleProp}${subtitleProp}${titlePropsProp}${subtitlePropsProp}${paddingCodeMap[state.padding]}${classNameProp}${actionProp}${hoverableProp}
    >
      <Text variant={TextVariant.B2} weight={TextWeight.Regular} ${contentColor}>
        ${state.content}
      </Text>
    </Card>
  );
}`;
}
