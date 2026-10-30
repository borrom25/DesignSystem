import {
  PlaygroundSelectControl,
  PlaygroundSwitchControl,
} from "@docs/components/ComponentPlaygroundControls";
import { TAB_SIZE_OPTIONS, TAB_TYPE_OPTIONS } from "./options";
import type { TabPlaygroundState } from "./types";

type TabControlsArgs = {
  updateState: (patch: Partial<TabPlaygroundState>) => void;
};

export function renderTabControls(
  state: TabPlaygroundState,
  { updateState }: TabControlsArgs
) {
  return (
    <>
      <PlaygroundSelectControl
        label="Type"
        options={TAB_TYPE_OPTIONS}
        value={state.type}
        onChange={(value) =>
          updateState({ type: value as TabPlaygroundState["type"] })
        }
      />
      <PlaygroundSelectControl
        label="Size"
        options={TAB_SIZE_OPTIONS}
        value={state.size}
        onChange={(value) =>
          updateState({ size: value as TabPlaygroundState["size"] })
        }
      />
      <PlaygroundSwitchControl
        label="Selected"
        checked={state.selected}
        onChange={(value) => updateState({ selected: value })}
      />
      <PlaygroundSwitchControl
        label="Disabled"
        checked={state.disabled}
        onChange={(value) => updateState({ disabled: value })}
      />
      <PlaygroundSwitchControl
        label="Scaling"
        checked={state.scaling}
        onChange={(value) => updateState({ scaling: value })}
      />
      <PlaygroundSwitchControl
        label="Icon left"
        checked={state.iconLeft}
        onChange={(value) => updateState({ iconLeft: value })}
      />
      <PlaygroundSwitchControl
        label="Counter"
        checked={state.count}
        onChange={(value) => updateState({ count: value })}
      />
    </>
  );
}
