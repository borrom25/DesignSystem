import type { AvatarPlaygroundState } from "./types";

export function createAvatarUsageCode(
  packageName: string,
  state: AvatarPlaygroundState
) {
  return `import { Avatar } from "${packageName}";
import "${packageName}/styles.css";

export function Example() {
  return (
    <Avatar
      size={${Number(state.size)}}
      src="${state.showImage ? state.src : ""}"
      alt="${state.alt}"
      initials="${state.initials}"${state.withBorder ? "\n      withBorder" : ""}${state.showEditBadge ? "\n      showEditBadge" : ""}
    />
  );
}`;
}
