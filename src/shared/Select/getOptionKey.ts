import type { SelectOptionValue } from "./types";

const NULL_OPTION_KEY = "\0";

export function getOptionKey(value: SelectOptionValue): string | number {
  return value === null ? NULL_OPTION_KEY : value;
}
