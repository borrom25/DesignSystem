export {
  paginationBaseStyles,
  ellipsisSizeClasses,
  pageButtonClasses,
  iconButtonClasses,
} from "./base";

import {
  paginationBaseStyles,
  ellipsisSizeClasses,
  pageButtonClasses,
  iconButtonClasses,
} from "./base";

export const paginationStyles = {
  ...paginationBaseStyles,
  ellipsisSize: ellipsisSizeClasses,
  pageButton: pageButtonClasses,
  iconButton: iconButtonClasses,
} as const;
