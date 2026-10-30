import {
  PlaygroundSelectControl,
  PlaygroundSwitchControl,
} from "@docs/components/ComponentPlaygroundControls";
import {
  TABS_OVERFLOW_SIZE_OPTIONS,
  TABS_OVERFLOW_VALUE_OPTIONS,
} from "./options";
import type { TabsOverflowPlaygroundState } from "./types";

type TabsOverflowControlsArgs = {
  updateState: (patch: Partial<TabsOverflowPlaygroundState>) => void;
};

export function renderTabsOverflowControls(
  state: TabsOverflowPlaygroundState,
  { updateState }: TabsOverflowControlsArgs
) {
  return (
    <>
      <PlaygroundSelectControl
        label="Size"
        options={TABS_OVERFLOW_SIZE_OPTIONS}
        value={state.size}
        onChange={(value) =>
          updateState({
            size: value as TabsOverflowPlaygroundState["size"],
          })
        }
      />
      <PlaygroundSelectControl
        label="Value"
        options={TABS_OVERFLOW_VALUE_OPTIONS}
        value={state.value}
        onChange={(value) =>
          updateState({
            value: value as TabsOverflowPlaygroundState["value"],
          })
        }
      />
      <PlaygroundSwitchControl
        label="Disabled"
        checked={state.disabled}
        onChange={(value) => updateState({ disabled: value })}
      />
      <PlaygroundSwitchControl
        label="Side menu"
        checked={state.sideMenu}
        onChange={(value) => updateState({ sideMenu: value })}
      />
    </>
  );
}
