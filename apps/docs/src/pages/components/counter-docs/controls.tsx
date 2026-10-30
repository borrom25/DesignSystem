import {
  PlaygroundSelectControl,
  PlaygroundSwitchControl,
} from "@docs/components/ComponentPlaygroundControls";
import {
  COUNTER_MAX_OPTIONS,
  COUNTER_SIZE_OPTIONS,
  COUNTER_VALUE_OPTIONS,
  COUNTER_VARIANT_OPTIONS,
} from "./options";
import type { CounterPlaygroundState } from "./types";

type RenderControlsArgs = {
  updateState: (patch: Partial<CounterPlaygroundState>) => void;
};

export function renderCounterControls(
  state: CounterPlaygroundState,
  { updateState }: RenderControlsArgs
) {
  return (
    <>
      <PlaygroundSelectControl
        label="Size"
        options={COUNTER_SIZE_OPTIONS}
        value={state.size}
        onChange={(value) =>
          updateState({ size: value as CounterPlaygroundState["size"] })
        }
      />
      <PlaygroundSelectControl
        label="Variant"
        options={COUNTER_VARIANT_OPTIONS}
        value={state.variant}
        onChange={(value) =>
          updateState({ variant: value as CounterPlaygroundState["variant"] })
        }
      />
      <PlaygroundSelectControl
        label="Count"
        options={COUNTER_VALUE_OPTIONS}
        value={state.count}
        onChange={(value) =>
          updateState({ count: value as CounterPlaygroundState["count"] })
        }
      />
      <PlaygroundSelectControl
        label="Max count"
        options={COUNTER_MAX_OPTIONS}
        value={state.maxCount}
        onChange={(value) =>
          updateState({ maxCount: value as CounterPlaygroundState["maxCount"] })
        }
      />
      <PlaygroundSwitchControl
        label="Empty"
        checked={state.empty}
        onChange={(value) => updateState({ empty: value })}
      />
      <PlaygroundSwitchControl
        label="Disabled"
        checked={state.disabled}
        onChange={(value) => updateState({ disabled: value })}
      />
    </>
  );
}
