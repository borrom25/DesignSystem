import {
  PlaygroundSelectControl,
  PlaygroundSwitchControl,
  PlaygroundTextControl,
} from "@docs/components/ComponentPlaygroundControls";
import {
  CHIPS_COUNT_OPTIONS,
  CHIPS_SIZE_OPTIONS,
  CHIPS_TYPE_OPTIONS,
} from "./options";
import type { ChipsPlaygroundState } from "./types";

type ChipsControlsArgs = {
  updateState: (patch: Partial<ChipsPlaygroundState>) => void;
};

export function renderChipsControls(
  state: ChipsPlaygroundState,
  { updateState }: ChipsControlsArgs
) {
  return (
    <>
      <PlaygroundTextControl
        label="Text"
        value={state.text}
        onChange={(value) => updateState({ text: value })}
      />
      <PlaygroundSelectControl
        label="Size"
        options={CHIPS_SIZE_OPTIONS}
        value={state.size}
        onChange={(value) =>
          updateState({ size: value as ChipsPlaygroundState["size"] })
        }
      />
      <PlaygroundSelectControl
        label="Type"
        options={CHIPS_TYPE_OPTIONS}
        value={state.type}
        onChange={(value) =>
          updateState({ type: value as ChipsPlaygroundState["type"] })
        }
      />
      <PlaygroundSelectControl
        label="Count"
        options={CHIPS_COUNT_OPTIONS}
        value={state.count}
        onChange={(value) =>
          updateState({ count: value as ChipsPlaygroundState["count"] })
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
        label="Icon only"
        checked={state.iconOnly}
        onChange={(value) =>
          updateState({
            iconOnly: value,
            withLeftIcon: value ? false : state.withLeftIcon,
            withRightIcon: value ? false : state.withRightIcon,
            withCounter: value ? false : state.withCounter,
          })
        }
      />
      <PlaygroundSwitchControl
        label="Left icon"
        checked={state.withLeftIcon}
        onChange={(value) =>
          updateState({
            withLeftIcon: value,
            iconOnly: value ? false : state.iconOnly,
          })
        }
      />
      <PlaygroundSwitchControl
        label="Right icon"
        checked={state.withRightIcon}
        onChange={(value) =>
          updateState({
            withRightIcon: value,
            iconOnly: value ? false : state.iconOnly,
          })
        }
      />
      <PlaygroundSwitchControl
        label="Counter"
        checked={state.withCounter}
        onChange={(value) =>
          updateState({
            withCounter: value,
            iconOnly: value ? false : state.iconOnly,
          })
        }
      />
    </>
  );
}
