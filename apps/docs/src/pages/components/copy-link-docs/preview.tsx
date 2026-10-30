import { Paperclip } from "lucide-react";
import { CopyLink } from "@/components";
import type { CopyLinkPlaygroundState } from "./types";

export function CopyLinkPreview(state: CopyLinkPlaygroundState) {
  return (
    <CopyLink
      value={state.value}
      size={state.size}
      defaultText={state.defaultText}
      successText={state.successText}
      disabled={state.disabled}
      scaling={state.scaling}
      icon={state.customIcon ? Paperclip : undefined}
      aria-label={state.defaultText}
    />
  );
}
