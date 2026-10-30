export { baseClasses } from "./base";
export { alignClasses } from "./align";
export { overflowClasses } from "./overflow";
export { decorationClasses } from "./decoration";

import { baseClasses } from "./base";
import { alignClasses } from "./align";
import { overflowClasses } from "./overflow";
import { decorationClasses } from "./decoration";

export const textStyles = {
  base: baseClasses,
  align: alignClasses,
  overflow: overflowClasses,
  decoration: decorationClasses,
} as const;
