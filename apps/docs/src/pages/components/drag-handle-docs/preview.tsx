import { DragHandle, ListItem } from "@/components";
import type { DragHandlePlaygroundState } from "./types";

export function DragHandlePreview(state: DragHandlePlaygroundState) {
  return (
    <div className="w-[280px]">
      <ListItem
        size={state.size}
        checkbox
        hideSelectedOutline
        title="List item"
        leading={<DragHandle size={state.size} />}
      />
    </div>
  );
}
