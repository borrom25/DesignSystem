export {
  wrapperClasses,
  labelBaseClasses,
  labelDisabledClasses,
  labelContentClasses,
  requiredMarkClasses,
  subtitleBaseClasses,
  subtitleDisabledClasses,
  hintBaseClasses,
  hintDefaultClasses,
  hintErrorClasses,
} from "./base";
export {
  labelSizeClasses,
  subtitleSizeClasses,
  hintSizeClasses,
} from "./sizes";

import {
  labelBaseClasses,
  labelDisabledClasses,
  labelContentClasses,
  requiredMarkClasses,
  subtitleBaseClasses,
  subtitleDisabledClasses,
  hintBaseClasses,
  hintDefaultClasses,
  hintErrorClasses,
} from "./base";
import {
  labelSizeClasses,
  subtitleSizeClasses,
  hintSizeClasses,
} from "./sizes";

export const fieldHintStyles = {
  base: hintBaseClasses,
  size: hintSizeClasses,
  default: hintDefaultClasses,
  error: hintErrorClasses,
} as const;

export const fieldLabelStyles = {
  base: labelBaseClasses,
  size: labelSizeClasses,
  disabled: labelDisabledClasses,
  content: labelContentClasses,
  requiredMark: requiredMarkClasses,
} as const;

export const fieldSubtitleStyles = {
  base: subtitleBaseClasses,
  size: subtitleSizeClasses,
  disabled: subtitleDisabledClasses,
} as const;
