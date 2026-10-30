import type { DragHandlePlaygroundState } from "./types";

export function createDragHandleUsageCode(
  packageName: string,
  state: DragHandlePlaygroundState
) {
  return `import { DragHandle, ListItem } from "${packageName}";
import "${packageName}/styles.css";

export function Example() {
  return (
    <ListItem
      size="${state.size}"
      checkbox
      hideSelectedOutline
      title="List item"
      leading={<DragHandle size="${state.size}" />}
    />
  );
}`;
}
