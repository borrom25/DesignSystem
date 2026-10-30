import {
  PlaygroundSelectControl,
  PlaygroundSwitchControl,
  PlaygroundTextControl,
} from "@docs/components/ComponentPlaygroundControls";
import {
  LABEL_COLOR_OPTIONS,
  LABEL_SIZE_OPTIONS,
  LABEL_TYPE_OPTIONS,
} from "./options";
import type { LabelPlaygroundState, LabelType } from "./types";

type LabelControlsArgs = {
  updateState: (patch: Partial<LabelPlaygroundState>) => void;
};

export function renderLabelControls(
  state: LabelPlaygroundState,
  { updateState }: LabelControlsArgs
) {
  return (
    <>
      <PlaygroundSelectControl
        label="Type"
        options={LABEL_TYPE_OPTIONS}
        value={state.type}
        onChange={(value) => updateState({ type: value as LabelType })}
      />
      <PlaygroundSelectControl
        label="Color"
        options={LABEL_COLOR_OPTIONS}
        value={state.color}
        onChange={(value) =>
          updateState({
            color: value as LabelPlaygroundState["color"],
          })
        }
      />
      <PlaygroundSelectControl
        label="Size"
        options={LABEL_SIZE_OPTIONS}
        value={state.size}
        onChange={(value) =>
          updateState({ size: value as LabelPlaygroundState["size"] })
        }
      />
      <PlaygroundTextControl
        label="Text"
        value={state.text}
        onChange={(value) => updateState({ text: value })}
      />
      <PlaygroundSwitchControl
        label="Rounded"
        checked={state.rounded}
        onChange={(value) => updateState({ rounded: value })}
      />
      <PlaygroundSwitchControl
        label="Disabled"
        checked={state.disabled}
        onChange={(value) => updateState({ disabled: value })}
      />
      <PlaygroundSwitchControl
        label="Icon only"
        checked={state.iconOnly}
        onChange={(value) =>
          updateState({
            iconOnly: value,
            withIconRight: value ? false : state.withIconRight,
          })
        }
      />
      <PlaygroundSwitchControl
        label="Right icon"
        checked={state.withIconRight}
        onChange={(value) =>
          updateState({
            withIconRight: value,
            iconOnly: value ? false : state.iconOnly,
          })
        }
      />
    </>
  );
}
