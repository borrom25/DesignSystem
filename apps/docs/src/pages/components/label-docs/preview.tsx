import { Bookmark, ChevronRight } from "lucide-react";
import { Label } from "@/components";
import type { LabelPlaygroundState } from "./types";

export function LabelPreview(state: LabelPlaygroundState) {
  const common = {
    type: state.type,
    color: state.color,
    size: state.size,
    rounded: state.rounded,
    disabled: state.disabled,
  };
  if (state.iconOnly) return <Label {...common} iconOnly={Bookmark} />;
  return (
    <Label
      {...common}
      iconLeft={Bookmark}
      iconRight={state.withIconRight ? ChevronRight : undefined}
    >
      {state.text}
    </Label>
  );
}
