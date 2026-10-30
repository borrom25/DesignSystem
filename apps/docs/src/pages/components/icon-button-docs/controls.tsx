import {
  PlaygroundSelectControl,
  PlaygroundSwitchControl,
} from "@docs/components/ComponentPlaygroundControls";
import {
  ICON_BUTTON_COLOR_OPTIONS,
  ICON_BUTTON_SIZE_OPTIONS,
  ICON_BUTTON_TYPE_OPTIONS,
} from "./options";
import type { IconButtonPlaygroundState, IconButtonType } from "./types";

type IconButtonControlsArgs = {
  updateState: (patch: Partial<IconButtonPlaygroundState>) => void;
};

export function renderIconButtonControls(
  state: IconButtonPlaygroundState,
  { updateState }: IconButtonControlsArgs
) {
  return (
    <>
      <PlaygroundSelectControl
        label="Type"
        options={ICON_BUTTON_TYPE_OPTIONS}
        value={state.type}
        onChange={(value) => updateState({ type: value as IconButtonType })}
      />
      <PlaygroundSelectControl
        label="Color"
        options={ICON_BUTTON_COLOR_OPTIONS}
        value={state.color}
        onChange={(value) =>
          updateState({
            color: value as IconButtonPlaygroundState["color"],
          })
        }
      />
      <PlaygroundSelectControl
        label="Size"
        options={ICON_BUTTON_SIZE_OPTIONS}
        value={state.size}
        onChange={(value) =>
          updateState({ size: value as IconButtonPlaygroundState["size"] })
        }
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
        label="Badge"
        checked={state.badge}
        onChange={(value) => updateState({ badge: value })}
      />
    </>
  );
}
