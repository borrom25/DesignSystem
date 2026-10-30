import { Label, type ProgressBarStatus } from "@/components";
import type { Size } from "@/types";
import type { LabelColor } from "@/components/Label/Label.types";
import { getStatusLabelConfig } from "../ProgressBar.utils.ts";

interface StatusLabelProps {
  status: ProgressBarStatus;
  fullClampedProgress: number;
  size?: Size;
  color?: LabelColor;
}

export function StatusLabel({
  status,
  fullClampedProgress,
  size: sizeProp,
  color: colorProp,
}: StatusLabelProps) {
  const statusLabelConfig = getStatusLabelConfig(status, fullClampedProgress);
  const { color, type, size, rounded, iconOnly, text } = statusLabelConfig;
  const resolvedSize = sizeProp ?? size;
  const resolvedColor = colorProp ?? color;

  if (statusLabelConfig.iconOnly) {
    return (
      <Label
        color={resolvedColor}
        type={type}
        size={resolvedSize}
        rounded={rounded}
        iconOnly={iconOnly}
      />
    );
  }

  return (
    <Label
      color={resolvedColor}
      type={type}
      size={resolvedSize}
      rounded={rounded}
    >
      {text}
    </Label>
  );
}
