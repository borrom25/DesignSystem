import { User } from "lucide-react";
import { Tag } from "@/components";
import type { TagPlaygroundState } from "./types";

type TagPreviewArgs = {
  updateState: (patch: Partial<TagPlaygroundState>) => void;
};

export function TagPreview(
  state: TagPlaygroundState,
  { updateState }: TagPreviewArgs
) {
  return (
    <Tag
      size={state.size}
      leftContent={
        state.withAvatar || !state.withLeftIcon ? undefined : <User size={16} />
      }
      avatar={state.withAvatar ? { initials: "AB" } : undefined}
      onClose={
        state.closable ? () => updateState({ closable: false }) : undefined
      }
      error={state.error}
      disabled={state.disabled}
    >
      {state.text}
    </Tag>
  );
}
