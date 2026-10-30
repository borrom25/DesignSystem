import type { TextOverflow } from "../constants";

export const overflowClasses: Record<TextOverflow, string> = {
  truncate: "block min-w-0 truncate",
  char: "break-all",
  word: "break-words",
  syllable: "hyphens-auto",
  nowrap: "whitespace-nowrap",
};
