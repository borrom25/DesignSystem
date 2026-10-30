import {
  PlaygroundSelectControl,
  PlaygroundSwitchControl,
  PlaygroundTextControl,
} from "@docs/components/ComponentPlaygroundControls";
import { INPUT_NUMBER_SIZE_OPTIONS } from "./options";
import type { InputNumberPlaygroundState } from "./types";

type RenderControlsArgs = {
  updateState: (patch: Partial<InputNumberPlaygroundState>) => void;
};

export function renderInputNumberControls(
  state: InputNumberPlaygroundState,
  { updateState }: RenderControlsArgs
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
        label="Hint"
        value={state.hint}
        onChange={(hint) => updateState({ hint })}
      />
      <PlaygroundTextControl
        label="Min"
        value={state.min}
        onChange={(min) => updateState({ min })}
      />
      <PlaygroundTextControl
        label="Max"
        value={state.max}
        onChange={(max) => updateState({ max })}
      />
      <PlaygroundTextControl
        label="Step"
        value={state.step}
        onChange={(step) => updateState({ step })}
      />
      <PlaygroundSelectControl
        label="Size"
        options={INPUT_NUMBER_SIZE_OPTIONS}
        value={state.size}
        onChange={(value) => updateState({ size: value })}
      />
      <PlaygroundSwitchControl
        label="Disabled"
        checked={state.disabled}
        onChange={(disabled) => updateState({ disabled })}
      />
      <PlaygroundSwitchControl
        label="Error"
        checked={state.error}
        onChange={(error) => updateState({ error })}
      />
      <PlaygroundSwitchControl
        label="Clearable"
        checked={state.clearable}
        onChange={(clearable) => updateState({ clearable })}
      />
    </>
  );
}
