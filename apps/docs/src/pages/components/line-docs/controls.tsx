import {
  PlaygroundSelectControl,
  PlaygroundSwitchControl,
  PlaygroundTextControl,
} from "@docs/components/ComponentPlaygroundControls";
import { LINE_POSITION_OPTIONS, LINE_TYPE_OPTIONS } from "./options";
import type { LinePlaygroundState } from "./types";

type LineControlsArgs = {
  updateState: (patch: Partial<LinePlaygroundState>) => void;
};

export function renderLineControls(
  state: LinePlaygroundState,
  { updateState }: LineControlsArgs
) {
  return (
    <>
      <PlaygroundTextControl
        label="Title"
        value={state.title}
        onChange={(value) => updateState({ title: value })}
      />
      <PlaygroundTextControl
        label="Subtitle"
        value={state.subtitle}
        onChange={(value) => updateState({ subtitle: value })}
      />
      <PlaygroundSelectControl
        label="Position"
        options={LINE_POSITION_OPTIONS}
        value={state.position}
        onChange={(value) =>
          updateState({ position: value as LinePlaygroundState["position"] })
        }
      />
      <PlaygroundSelectControl
        label="Type"
        options={LINE_TYPE_OPTIONS}
        value={state.type}
        onChange={(value) =>
          updateState({ type: value as LinePlaygroundState["type"] })
        }
      />
      <PlaygroundSwitchControl
        label="Disabled"
        checked={state.disabled}
        onChange={(value) => updateState({ disabled: value })}
      />
      <PlaygroundSwitchControl
        label="Labels"
        checked={state.withLabels}
        onChange={(value) => updateState({ withLabels: value })}
      />
      <PlaygroundSwitchControl
        label="Left slot"
        checked={state.withLeftSlot}
        onChange={(value) => updateState({ withLeftSlot: value })}
      />
      <PlaygroundSwitchControl
        label="Right slot"
        checked={state.withRightSlot}
        onChange={(value) => updateState({ withRightSlot: value })}
      />
    </>
  );
}
