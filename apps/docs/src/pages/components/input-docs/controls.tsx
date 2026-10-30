import {
  PlaygroundSelectControl,
  PlaygroundSwitchControl,
  PlaygroundTextControl,
} from "@docs/components/ComponentPlaygroundControls";
import { INPUT_SIZE_OPTIONS, INPUT_VARIANT_OPTIONS } from "./options";
import type { InputPlaygroundState } from "./types";

type InputControlsArgs = {
  updateState: (patch: Partial<InputPlaygroundState>) => void;
};

export function renderInputControls(
  state: InputPlaygroundState,
  { updateState }: InputControlsArgs
) {
  return (
    <>
      <PlaygroundTextControl
        label="Label"
        value={state.label}
        onChange={(label) => updateState({ label })}
      />
      <PlaygroundTextControl
        label="Value"
        value={state.value}
        onChange={(value) => updateState({ value })}
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
        options={INPUT_SIZE_OPTIONS}
        value={state.size}
        onChange={(value) =>
          updateState({ size: value as InputPlaygroundState["size"] })
        }
      />
      <PlaygroundSelectControl
        label="Variant"
        options={INPUT_VARIANT_OPTIONS}
        value={state.variant}
        onChange={(value) =>
          updateState({ variant: value as InputPlaygroundState["variant"] })
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
        label="Icon left"
        checked={state.iconLeft}
        onChange={(value) => updateState({ iconLeft: value })}
      />
      <PlaygroundSwitchControl
        label="Icon right"
        checked={state.iconRight}
        onChange={(value) => updateState({ iconRight: value })}
      />
      <PlaygroundSwitchControl
        label="Counter"
        checked={state.count}
        onChange={(value) => updateState({ count: value })}
      />
    </>
  );
}
