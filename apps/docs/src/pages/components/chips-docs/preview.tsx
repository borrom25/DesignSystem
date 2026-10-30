import { ChevronRight, Plus } from "lucide-react";
import { Chips } from "@/components";
import type { ChipsPlaygroundState } from "./types";

type ChipsPreviewArgs = {
  updateState: (patch: Partial<ChipsPlaygroundState>) => void;
};

export function ChipsPreview(
  state: ChipsPlaygroundState,
  { updateState }: ChipsPreviewArgs
) {
  const sharedProps = {
    size: state.size,
    type: state.type,
    selected: state.selected,
    disabled: state.disabled,
    scaling: state.scaling,
    onClick: () =>
      !state.disabled && updateState({ selected: !state.selected }),
  };

  if (state.iconOnly) {
    return <Chips {...sharedProps} iconOnly={Plus} />;
  }

  return (
    <Chips
      {...sharedProps}
      iconLeft={state.withLeftIcon ? Plus : undefined}
      iconRight={state.withRightIcon ? ChevronRight : undefined}
      count={state.withCounter ? Number(state.count) : undefined}
    >
      {state.text}
    </Chips>
  );
}
