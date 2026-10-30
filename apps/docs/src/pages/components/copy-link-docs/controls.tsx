import {
  PlaygroundSelectControl,
  PlaygroundSwitchControl,
  PlaygroundTextControl,
} from "@docs/components/ComponentPlaygroundControls";
import { Size } from "@/types";
import type { CopyLinkPlaygroundState } from "./types";

const COPY_LINK_SIZE_OPTIONS = [
  { value: Size.Xs, label: "Xs" },
  { value: Size.Sm, label: "Sm" },
  { value: Size.Md, label: "Md" },
] as const;

type CopyLinkControlsArgs = {
  updateState: (patch: Partial<CopyLinkPlaygroundState>) => void;
};

export function renderCopyLinkControls(
  state: CopyLinkPlaygroundState,
  { updateState }: CopyLinkControlsArgs
) {
  return (
    <>
      <PlaygroundSelectControl
        label="Size"
        options={COPY_LINK_SIZE_OPTIONS}
        value={state.size}
        onChange={(value) =>
          updateState({ size: value as CopyLinkPlaygroundState["size"] })
        }
      />
      <PlaygroundTextControl
        label="Value"
        value={state.value}
        onChange={(value) => updateState({ value })}
      />
      <PlaygroundTextControl
        label="Default text"
        value={state.defaultText}
        onChange={(value) => updateState({ defaultText: value })}
      />
      <PlaygroundTextControl
        label="Success text"
        value={state.successText}
        onChange={(value) => updateState({ successText: value })}
      />
      <PlaygroundSwitchControl
        label="Custom icon"
        checked={state.customIcon}
        onChange={(value) => updateState({ customIcon: value })}
      />
      <PlaygroundSwitchControl
        label="Scaling"
        checked={state.scaling}
        onChange={(value) => updateState({ scaling: value })}
      />
      <PlaygroundSwitchControl
        label="Disabled"
        checked={state.disabled}
        onChange={(value) => updateState({ disabled: value })}
      />
    </>
  );
}
