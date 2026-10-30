import {
  PlaygroundSwitchControl,
  PlaygroundTextControl,
} from "@docs/components/ComponentPlaygroundControls";
import type { ActionPopoverPlaygroundState } from "./types";

type RenderControlsArgs = {
  updateState: (patch: Partial<ActionPopoverPlaygroundState>) => void;
};

export function renderActionPopoverControls(
  state: ActionPopoverPlaygroundState,
  { updateState }: RenderControlsArgs
) {
  return (
    <>
      <PlaygroundTextControl
        label="Selected label"
        value={state.selectedLabel}
        onChange={(value) => updateState({ selectedLabel: value })}
      />
      <PlaygroundSwitchControl
        label="Show children"
        checked={state.showChildren}
        onChange={(value) => updateState({ showChildren: value })}
      />
      <PlaygroundSwitchControl
        label="Show close"
        checked={state.showClose}
        onChange={(value) => updateState({ showClose: value })}
      />
      {state.showClose ? (
        <PlaygroundTextControl
          label="Close aria label"
          value={state.closeAriaLabel}
          onChange={(value) => updateState({ closeAriaLabel: value })}
        />
      ) : null}
    </>
  );
}
