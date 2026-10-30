import { ChevronRight, Settings } from "lucide-react";
import { ListItem } from "@/components";
import type { ListItemPlaygroundState } from "./types";

type ListItemPreviewArgs = {
  updateState: (patch: Partial<ListItemPlaygroundState>) => void;
};

export function ListItemPreview(
  state: ListItemPlaygroundState,
  { updateState }: ListItemPreviewArgs
) {
  const sharedProps = {
    size: state.size,
    variant: state.variant,
    selected: state.selected,
    disabled: state.disabled,
    scaling: state.scaling,
    wrapText: state.wrapText,
    hideSelectedOutline: state.hideSelectedOutline,
    onClick: () =>
      !state.disabled && updateState({ selected: !state.selected }),
  };

  if (state.iconOnly) {
    return (
      <ListItem
        {...sharedProps}
        title={state.title}
        iconOnly
        iconLeft={Settings}
        aria-label={state.title}
      />
    );
  }

  return (
    <div className="w-[280px]">
      <ListItem
        {...sharedProps}
        title={state.title}
        checkbox={state.checkbox}
        avatar={
          state.withAvatar
            ? {
                src: "https://api.dicebear.com/7.x/avataaars/svg?seed=list-item",
                alt: state.title,
              }
            : undefined
        }
        iconLeft={state.withLeftIcon ? Settings : undefined}
        iconRight={state.withRightIcon ? ChevronRight : undefined}
      />
    </div>
  );
}
