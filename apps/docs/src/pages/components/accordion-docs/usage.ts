import { TextColor, TextShade } from "@/components";
import type {
  AccordionPlaygroundState,
  AccordionTextColorOption,
  AccordionTextShadeOption,
} from "./types";

const textColorConstMap: Record<
  Exclude<AccordionTextColorOption, "default">,
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
  Exclude<AccordionTextShadeOption, "default">,
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

function createTitlePropsCode(
  color: AccordionTextColorOption,
  shade: AccordionTextShadeOption
) {
  if (color === "default" && shade === "default") return "";

  const lines: string[] = [];
  if (color !== "default") {
    lines.push(`        color: ${textColorConstMap[color]},`);
  }
  if (shade !== "default") {
    lines.push(`        shade: ${textShadeConstMap[shade]},`);
  }

  return `\n      titleProps={{
${lines.join("\n")}
      }}`;
}

export function createAccordionUsageCode(
  packageName: string,
  state: AccordionPlaygroundState
) {
  const extraImports = [
    state.titleColor !== "default" ? "TextColor" : null,
    state.titleShade !== "default" ? "TextShade" : null,
  ].filter(Boolean);
  const textImports =
    extraImports.length > 0 ? `, ${extraImports.join(", ")}` : "";
  const titlePropsCode = createTitlePropsCode(
    state.titleColor,
    state.titleShade
  );

  return `import { Accordion, Button${textImports} } from "${packageName}";
import "${packageName}/styles.css";
import { FileText, Settings } from "lucide-react";

export function Example() {
  return (
    <Accordion
      title="${state.title}"${state.subtitle ? '\n      subtitle="Basic project information"' : ""}${titlePropsCode}
      position="${state.position}"
      chevronPosition="${state.chevronPosition}"${state.iconLeft ? "\n      iconLeft={FileText}" : ""}${state.headSlot ? '\n      headSlot={<Button size="xs" type="ghost" iconLeft={Settings}>Settings</Button>}' : ""}${state.disabled ? "\n      disabled" : ""}
    >
      Контент раскрытой панели: описание, настройки или вложенные элементы.
    </Accordion>
  );
}`;
}
