import { MediaPlayerProps } from "@vidstack/react";
import type { TextVariant } from "@/components/Text";

export type PlayerLabelPosition = "top" | "end";

export interface PlayerProps extends Omit<
  MediaPlayerProps,
  "src" | "onMouseMove" | "onMouseLeave" | "children"
> {
  src: string;
  videoType?: string;
  className?: string;
  titleVariant?: TextVariant;
  labelVariant?: TextVariant;
  labelPosition?: PlayerLabelPosition;
}
