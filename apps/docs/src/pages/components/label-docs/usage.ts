import type { LabelPlaygroundState } from "./types";

export function createLabelUsageCode(
  packageName: string,
  state: LabelPlaygroundState
) {
  const iconProps = state.iconOnly
    ? " iconOnly={Bookmark}"
    : ` iconLeft={Bookmark}${state.withIconRight ? " iconRight={ChevronRight}" : ""}`;

  const children = state.iconOnly ? "" : `\n      ${state.text}\n    `;

  return `import { Label } from "${packageName}";
import "${packageName}/styles.css";
import { Bookmark, ChevronRight } from "lucide-react";

export function Example() {
  return (
    <Label type="${state.type}" color="${state.color}" size="${state.size}"${state.rounded ? " rounded" : ""}${state.disabled ? " disabled" : ""}${iconProps}>${children}</Label>
  );
}`;
}
