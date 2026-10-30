import {
  PlaygroundSelectControl,
  PlaygroundSwitchControl,
  PlaygroundTextControl,
} from "@docs/components/ComponentPlaygroundControls";
import { SELECT_SIZE_OPTIONS, SELECT_VALUE_OPTIONS } from "./options";
import type { SelectPlaygroundState } from "./types";

type SelectControlsArgs = {
  updateState: (patch: Partial<SelectPlaygroundState>) => void;
};

export function renderSelectControls(
  state: SelectPlaygroundState,
  { updateState }: SelectControlsArgs
) {
  return (
    <>
      <PlaygroundTextControl
        label="Label"
        value={state.label}
        onChange={(label) => updateState({ label })}
      />
      <PlaygroundTextControl
        label="Hint"
        value={state.hint}
        onChange={(hint) => updateState({ hint })}
      />
      <PlaygroundSelectControl
        label="Size"
        options={SELECT_SIZE_OPTIONS}
        value={state.size}
        onChange={(value) =>
          updateState({ size: value as SelectPlaygroundState["size"] })
        }
      />
      <PlaygroundSelectControl
        label="Value"
        options={SELECT_VALUE_OPTIONS}
        value={state.value ?? "empty"}
        onChange={(value) =>
          updateState({
            value: value === "empty" ? null : value,
          })
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
    </>
  );
}
