import type { ListItemPlaygroundState } from "./types";

export function createListItemUsageCode(
  packageName: string,
  state: ListItemPlaygroundState
) {
  if (state.iconOnly) {
    return `import { ListItem } from "${packageName}";
import "${packageName}/styles.css";
import { Settings } from "lucide-react";

export function Example() {
  return (
    <ListItem
      size="${state.size}"
      variant="${state.variant}"
      selected={${state.selected}}
      disabled={${state.disabled}}${state.scaling ? "" : "\n      scaling={false}"}${state.wrapText ? "" : "\n      wrapText={false}"}${state.hideSelectedOutline ? "\n      hideSelectedOutline" : ""}
      iconOnly
      iconLeft={Settings}
      aria-label="${state.title}"
    />
  );
}`;
  }

  const avatarBlock = state.withAvatar
    ? `
      avatar={{
        src: "https://api.dicebear.com/7.x/avataaars/svg?seed=list-item",
        alt: "${state.title}",
      }}`
    : "";

  return `import { ListItem } from "${packageName}";
import "${packageName}/styles.css";
import { ChevronRight, Settings } from "lucide-react";

export function Example() {
  return (
    <ListItem
      title="${state.title}"
      size="${state.size}"
      variant="${state.variant}"
      selected={${state.selected}}
      disabled={${state.disabled}}${state.scaling ? "" : "\n      scaling={false}"}${state.wrapText ? "" : "\n      wrapText={false}"}${state.checkbox ? "\n      checkbox" : ""}${state.hideSelectedOutline ? "\n      hideSelectedOutline" : ""}${avatarBlock}${state.withLeftIcon ? "\n      iconLeft={Settings}" : ""}${state.withRightIcon ? "\n      iconRight={ChevronRight}" : ""}
    />
  );
}`;
}
