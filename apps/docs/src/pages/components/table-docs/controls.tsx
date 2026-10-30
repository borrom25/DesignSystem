import {
  PlaygroundSelectControl,
  PlaygroundSwitchControl,
} from "@docs/components/ComponentPlaygroundControls";
import type { TablePlaygroundState } from "./types";

type TableControlsArgs = {
  updateState: (patch: Partial<TablePlaygroundState>) => void;
};

const TABLE_MODE_OPTIONS = [
  { value: "default", label: "Default" },
  { value: "empty", label: "Empty" },
  { value: "loading", label: "Loading" },
] as const;

export function renderTableControls(
  state: TablePlaygroundState,
  { updateState }: TableControlsArgs
) {
  return (
    <>
      <PlaygroundSelectControl
        label="Mode"
        options={TABLE_MODE_OPTIONS}
        value={state.mode}
        onChange={(value) =>
          updateState({ mode: value as TablePlaygroundState["mode"] })
        }
      />
      <PlaygroundSwitchControl
        label="Show toolbar"
        checked={state.showToolbar}
        onChange={(value) => updateState({ showToolbar: value })}
      />
      <PlaygroundSwitchControl
        label="Sticky header"
        checked={state.stickyHeader}
        onChange={(value) => updateState({ stickyHeader: value })}
      />
      <PlaygroundSwitchControl
        label="Row selection"
        checked={state.rowSelection}
        onChange={(value) => updateState({ rowSelection: value })}
      />
      <PlaygroundSwitchControl
        label="Striped"
        checked={state.striped}
        onChange={(value) => updateState({ striped: value })}
      />
      <PlaygroundSwitchControl
        label="Bordered"
        checked={state.bordered}
        onChange={(value) => updateState({ bordered: value })}
      />
      <PlaygroundSwitchControl
        label="Compact"
        checked={state.compact}
        onChange={(value) => updateState({ compact: value })}
      />
    </>
  );
}
