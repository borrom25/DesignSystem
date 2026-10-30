import {
  PlaygroundSelectControl,
  PlaygroundSwitchControl,
  PlaygroundTextControl,
} from "@docs/components/ComponentPlaygroundControls";
import { LIST_ITEM_SIZE_OPTIONS, LIST_ITEM_VARIANT_OPTIONS } from "./options";
import type { ListItemPlaygroundState } from "./types";

type ListItemControlsArgs = {
  updateState: (patch: Partial<ListItemPlaygroundState>) => void;
};

export function renderListItemControls(
  state: ListItemPlaygroundState,
  { updateState }: ListItemControlsArgs
) {
  return (
    <>
      <PlaygroundTextControl
        label="Title"
        value={state.title}
        onChange={(value) => updateState({ title: value })}
      />
      <PlaygroundSelectControl
        label="Size"
        options={LIST_ITEM_SIZE_OPTIONS}
        value={state.size}
        onChange={(value) =>
          updateState({ size: value as ListItemPlaygroundState["size"] })
        }
      />
      <PlaygroundSelectControl
        label="Variant"
        options={LIST_ITEM_VARIANT_OPTIONS}
        value={state.variant}
        onChange={(value) =>
          updateState({
            variant: value as ListItemPlaygroundState["variant"],
          })
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
        label="Wrap text"
        checked={state.wrapText}
        onChange={(value) => updateState({ wrapText: value })}
      />
      <PlaygroundSwitchControl
        label="Checkbox"
        checked={state.checkbox}
        onChange={(value) =>
          updateState({
            checkbox: value,
            iconOnly: value ? false : state.iconOnly,
          })
        }
      />
      <PlaygroundSwitchControl
        label="Avatar"
        checked={state.withAvatar}
        onChange={(value) =>
          updateState({
            withAvatar: value,
            iconOnly: value ? false : state.iconOnly,
          })
        }
      />
      <PlaygroundSwitchControl
        label="Icon only"
        checked={state.iconOnly}
        onChange={(value) =>
          updateState({
            iconOnly: value,
            checkbox: value ? false : state.checkbox,
            withAvatar: value ? false : state.withAvatar,
            withLeftIcon: value ? false : state.withLeftIcon,
            withRightIcon: value ? false : state.withRightIcon,
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
        label="Hide selected outline"
        checked={state.hideSelectedOutline}
        onChange={(value) => updateState({ hideSelectedOutline: value })}
      />
    </>
  );
}
