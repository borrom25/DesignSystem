import type { TagPlaygroundState } from "./types";

export function createTagUsageCode(
  packageName: string,
  state: TagPlaygroundState
) {
  const left = state.withAvatar
    ? ' avatar={{ initials: "AB" }}'
    : state.withLeftIcon
      ? " leftContent={<User size={16} />}"
      : "";

  const close = state.closable ? " onClose={() => void 0}" : "";
  const error = state.error ? " error" : "";
  const disabled = state.disabled ? " disabled" : "";

  return `import { Tag } from "${packageName}";
import "${packageName}/styles.css";
import { User } from "lucide-react";

export function Example() {
  return (
    <Tag size="${state.size}"${left}${close}${error}${disabled}>
      ${state.text}
    </Tag>
  );
}`;
}
