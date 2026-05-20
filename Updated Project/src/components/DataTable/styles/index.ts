export { tableBaseStyles, tableSizeStyles } from "./base";

import { tableBaseStyles, tableSizeStyles } from "./base";

export const tableStyles = {
  ...tableBaseStyles,
  sizes: tableSizeStyles,
} as const;
