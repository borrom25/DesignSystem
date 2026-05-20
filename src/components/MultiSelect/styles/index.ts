export {
  wrapperClasses,
  labelBaseClasses,
  requiredMarkClasses,
  hintBaseClasses,
  hintDefaultClasses,
  hintErrorClasses,
  triggerBaseClasses,
  iconClasses,
  placeholderClasses,
  valueClasses,
  triggerChevronOpenClasses,
  counterClasses,
  searchClasses,
} from "./base";
export {
  triggerSizeClasses,
  iconSizeMap,
  labelSizeClasses,
  hintSizeClasses,
} from "./sizes";
export {
  triggerOpenClasses,
  triggerErrorClasses,
  triggerErrorFilledClasses,
  triggerErrorOpenClasses,
} from "./variants";
export {
  selectAllClasses,
  selectAllTextClasses,
  selectAllDividerClasses,
} from "./selectAll";

import {
  selectAllClasses,
  selectAllTextClasses,
  selectAllDividerClasses,
} from "./selectAll";
import { searchClasses } from "./base";

export const multiSelectStyles = {
  search: searchClasses,
  selectAll: {
    root: selectAllClasses,
    text: selectAllTextClasses,
    divider: selectAllDividerClasses,
  },
} as const;
