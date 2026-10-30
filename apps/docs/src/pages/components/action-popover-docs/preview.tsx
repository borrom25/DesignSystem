import { ActionPopover, Button } from "@/components";
import { Color, Size, Type } from "@/types";
import type { ActionPopoverPlaygroundState } from "./types";

type ActionPopoverPreviewArgs = {
  updateState: (patch: Partial<ActionPopoverPlaygroundState>) => void;
};

export function ActionPopoverPreview(
  state: ActionPopoverPlaygroundState,
  { updateState }: ActionPopoverPreviewArgs
) {
  return (
    <div className="relative h-full min-h-[320px] w-full">
      <ActionPopover
        selectedLabel={state.selectedLabel}
        closeAriaLabel={state.showClose ? state.closeAriaLabel : undefined}
        onClose={
          state.showClose ? () => updateState({ showClose: false }) : undefined
        }
      >
        {state.showChildren ? (
          <Button size={Size.Xs} type={Type.Flat} color={Color.Brand}>
            Применить
          </Button>
        ) : null}
      </ActionPopover>
    </div>
  );
}
