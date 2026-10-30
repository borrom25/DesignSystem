import {
  PlaygroundSelectControl,
  PlaygroundSwitchControl,
  PlaygroundTextControl,
} from "@docs/components/ComponentPlaygroundControls";
import {
  ACCORDION_BLOCK_LABEL_POSITION_OPTIONS,
  ACCORDION_BLOCK_PROGRESS_OPTIONS,
  ACCORDION_BLOCK_SIZE_OPTIONS,
  ACCORDION_BLOCK_VARIANT_OPTIONS,
} from "./options";
import type { AccordionBlockPlaygroundState } from "./types";

type RenderControlsArgs = {
  updateState: (patch: Partial<AccordionBlockPlaygroundState>) => void;
};

export function renderAccordionBlockControls(
  state: AccordionBlockPlaygroundState,
  { updateState }: RenderControlsArgs
) {
  return (
    <>
      <PlaygroundTextControl
        label="Title"
        value={state.title}
        onChange={(title) => updateState({ title })}
      />
      <PlaygroundSelectControl
        label="Size"
        options={ACCORDION_BLOCK_SIZE_OPTIONS}
        value={state.size}
        onChange={(value) =>
          updateState({
            size: value as AccordionBlockPlaygroundState["size"],
          })
        }
      />
      <PlaygroundSelectControl
        label="Variant"
        options={ACCORDION_BLOCK_VARIANT_OPTIONS}
        value={state.variant}
        onChange={(value) =>
          updateState({
            variant: value as AccordionBlockPlaygroundState["variant"],
          })
        }
      />
      <PlaygroundSelectControl
        label="Progress"
        options={ACCORDION_BLOCK_PROGRESS_OPTIONS}
        value={state.progress}
        onChange={(progress) => updateState({ progress })}
      />
      <PlaygroundSelectControl
        label="Label position"
        options={ACCORDION_BLOCK_LABEL_POSITION_OPTIONS}
        value={state.labelPosition}
        onChange={(value) =>
          updateState({
            labelPosition:
              value as AccordionBlockPlaygroundState["labelPosition"],
          })
        }
      />
      <PlaygroundSwitchControl
        label="Default open"
        checked={state.defaultOpen}
        onChange={(value) => updateState({ defaultOpen: value })}
      />
      <PlaygroundSwitchControl
        label="Disabled"
        checked={state.disabled}
        onChange={(value) => updateState({ disabled: value })}
      />
    </>
  );
}
