import {
  PlaygroundSelectControl,
  PlaygroundSwitchControl,
  PlaygroundTextControl,
} from "@docs/components/ComponentPlaygroundControls";
import { INPUT_PASSWORD_SIZE_OPTIONS } from "./options";
import type { InputPasswordPlaygroundState } from "./types";

type RenderControlsArgs = {
  updateState: (patch: Partial<InputPasswordPlaygroundState>) => void;
};

export function renderInputPasswordControls(
  state: InputPasswordPlaygroundState,
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
        options={INPUT_PASSWORD_SIZE_OPTIONS}
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
        label="Visible by default"
        checked={state.showPasswordByDefault}
        onChange={(showPasswordByDefault) =>
          updateState({ showPasswordByDefault })
        }
      />
    </>
  );
}
