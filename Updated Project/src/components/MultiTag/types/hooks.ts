import type { MultiTagOption, MultiTagProps } from "./index";

export type UseMultiTagStateProps<T extends string | number = string> = {
  value?: T[];
  defaultValue?: T[];
  onChange?: MultiTagProps<T>["onChange"];
  onClear?: () => void;
  options?: MultiTagOption<T>[];
  returnAll?: MultiTagProps<T>["returnAll"];
};
