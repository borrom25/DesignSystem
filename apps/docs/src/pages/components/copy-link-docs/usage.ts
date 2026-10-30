import type { CopyLinkPlaygroundState } from "./types";

export function createCopyLinkUsageCode(
  packageName: string,
  state: CopyLinkPlaygroundState
) {
  const iconImport = state.customIcon
    ? '\nimport { Paperclip } from "lucide-react";'
    : "";
  const iconProp = state.customIcon ? "\n      icon={Paperclip}" : "";

  return `import { CopyLink } from "${packageName}";
import "${packageName}/styles.css";${iconImport}

export function Example() {
  return (
    <CopyLink
      value="${state.value}"
      size="${state.size}"
      defaultText="${state.defaultText}"
      successText="${state.successText}"${iconProp}${state.scaling ? "\n      scaling" : "\n      scaling={false}"}${state.disabled ? "\n      disabled" : ""}
    />
  );
}`;
}
