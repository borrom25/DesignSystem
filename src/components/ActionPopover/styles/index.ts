export {
  wrapperClassname,
  contentClassname,
  selectedLabelClassname,
  slotClassname,
  closeClassname,
} from "./base";

import {
  wrapperClassname,
  contentClassname,
  selectedLabelClassname,
  slotClassname,
  closeClassname,
} from "./base";

export const actionPopoverStyles = {
  wrapper: wrapperClassname,
  content: contentClassname,
  selectedLabel: selectedLabelClassname,
  slot: slotClassname,
  close: closeClassname,
} as const;
