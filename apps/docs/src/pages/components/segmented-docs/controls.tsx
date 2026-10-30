import {
  PlaygroundSelectControl,
  PlaygroundSwitchControl,
} from "@docs/components/ComponentPlaygroundControls";
import {
  SEGMENTED_POSITION_OPTIONS,
  SEGMENTED_SHAPE_OPTIONS,
  SEGMENTED_SIZE_OPTIONS,
} from "./options";
import type { SegmentedPlaygroundState } from "./types";

type SegmentedControlsArgs = {
  updateState: (patch: Partial<SegmentedPlaygroundState>) => void;
};

export function renderSegmentedControls(
  state: SegmentedPlaygroundState,
  { updateState }: SegmentedControlsArgs
) {
  return (
    <>
      <PlaygroundSelectControl
        label="Position"
        options={SEGMENTED_POSITION_OPTIONS}
        value={state.position}
        onChange={(value) =>
          updateState({
            position: value as SegmentedPlaygroundState["position"],
          })
        }
      />
      <PlaygroundSelectControl
        label="Shape"
        options={SEGMENTED_SHAPE_OPTIONS}
        value={state.shape}
        onChange={(value) =>
          updateState({ shape: value as SegmentedPlaygroundState["shape"] })
        }
      />
      <PlaygroundSelectControl
        label="Size"
        options={SEGMENTED_SIZE_OPTIONS}
        value={state.size}
        onChange={(value) =>
          updateState({ size: value as SegmentedPlaygroundState["size"] })
        }
      />
      <PlaygroundSwitchControl
        label="Disabled middle option"
        checked={state.withDisabledOption}
        onChange={(value) => updateState({ withDisabledOption: value })}
      />
    </>
  );
}
