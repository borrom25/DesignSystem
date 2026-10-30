import {
  PlaygroundSelectControl,
  PlaygroundSwitchControl,
  PlaygroundTextControl,
} from "@docs/components/ComponentPlaygroundControls";
import { MULTI_SELECT_SIZE_OPTIONS } from "./options";
import type { MultiSelectPlaygroundState } from "./types";

type MultiSelectControlsArgs = {
  updateState: (patch: Partial<MultiSelectPlaygroundState>) => void;
};

export function renderMultiSelectControls(
  state: MultiSelectPlaygroundState,
  { updateState }: MultiSelectControlsArgs
) {
  return (
    <>
      <PlaygroundTextControl
        label="Label"
        value={state.label}
        onChange={(label) => updateState({ label })}
      />
      <PlaygroundTextControl
        label="Placeholder"
        value={state.placeholder}
        onChange={(placeholder) => updateState({ placeholder })}
      />
      <PlaygroundTextControl
        label="Hint"
        value={state.hint}
        onChange={(hint) => updateState({ hint })}
      />
      <PlaygroundSelectControl
        label="Size"
        options={MULTI_SELECT_SIZE_OPTIONS}
        value={state.size}
        onChange={(value) =>
          updateState({ size: value as MultiSelectPlaygroundState["size"] })
        }
      />
      <PlaygroundSwitchControl
        label="Required"
        checked={state.required}
        onChange={(value) => updateState({ required: value })}
      />
      <PlaygroundSwitchControl
        label="Disabled"
        checked={state.disabled}
        onChange={(value) => updateState({ disabled: value })}
      />
      <PlaygroundSwitchControl
        label="Error"
        checked={state.error}
        onChange={(value) => updateState({ error: value })}
      />
      <PlaygroundSwitchControl
        label="Clearable"
        checked={state.clearable}
        onChange={(value) => updateState({ clearable: value })}
      />
      <PlaygroundSwitchControl
        label="Search"
        checked={state.search}
        onChange={(value) => updateState({ search: value })}
      />
      <PlaygroundSwitchControl
        label="Select all"
        checked={state.selectAll}
        onChange={(value) => updateState({ selectAll: value })}
      />
      <PlaygroundSwitchControl
        label="Return all"
        checked={state.returnAll}
        onChange={(value) => updateState({ returnAll: value })}
      />
    </>
  );
}
