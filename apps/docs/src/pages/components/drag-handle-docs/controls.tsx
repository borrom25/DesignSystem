import { PlaygroundSelectControl } from "@docs/components/ComponentPlaygroundControls";
import { DRAG_HANDLE_SIZE_OPTIONS } from "./options";
import type { DragHandlePlaygroundState } from "./types";

type DragHandleControlsArgs = {
  updateState: (patch: Partial<DragHandlePlaygroundState>) => void;
};

export function renderDragHandleControls(
  state: DragHandlePlaygroundState,
  { updateState }: DragHandleControlsArgs
) {
  return (
    <PlaygroundSelectControl
      label="Size"
      options={DRAG_HANDLE_SIZE_OPTIONS}
      value={state.size}
      onChange={(value) =>
        updateState({ size: value as DragHandlePlaygroundState["size"] })
      }
    />
  );
}
