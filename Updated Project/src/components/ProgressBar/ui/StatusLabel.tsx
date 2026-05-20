import { Label, type ProgressBarStatus } from "@/components";
import { getStatusLabelConfig } from "../ProgressBar.utils.ts";

interface StatusLabelProps {
  status: ProgressBarStatus;
  fullClampedProgress: number;
}

export function StatusLabel({ status, fullClampedProgress }: StatusLabelProps) {
  const statusLabelConfig = getStatusLabelConfig(status, fullClampedProgress);
  const { color, type, size, rounded, iconOnly, text } = statusLabelConfig;

  if (statusLabelConfig.iconOnly) {
    return (
      <Label
        color={color}
        type={type}
        size={size}
        rounded={rounded}
        iconOnly={iconOnly}
      />
    );
  }

  return (
    <Label color={color} type={type} size={size} rounded={rounded}>
      {text}
    </Label>
  );
}
