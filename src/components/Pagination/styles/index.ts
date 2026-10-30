export {
  paginationBaseStyles,
  ellipsisSizeClasses,
  pageButtonClasses,
  iconButtonClasses,
  indicatorSizeClasses,
} from "./base";

import {
  paginationBaseStyles,
  ellipsisSizeClasses,
  pageButtonClasses,
  iconButtonClasses,
  indicatorSizeClasses,
} from "./base";

export const paginationStyles = {
  ...paginationBaseStyles,
  ellipsisSize: ellipsisSizeClasses,
  pageButton: pageButtonClasses,
  iconButton: iconButtonClasses,
  indicatorSize: indicatorSizeClasses,
} as const;
