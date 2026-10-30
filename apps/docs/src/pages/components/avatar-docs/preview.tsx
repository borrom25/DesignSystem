import { Avatar } from "@/components";
import type { AvatarPlaygroundState } from "./types";

export function AvatarPreview(state: AvatarPlaygroundState) {
  return (
    <Avatar
      size={Number(state.size)}
      src={state.showImage ? state.src : ""}
      alt={state.alt}
      initials={state.initials}
      withBorder={state.withBorder}
      showEditBadge={state.showEditBadge}
    />
  );
}
