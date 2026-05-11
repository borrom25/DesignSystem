import { Dispatch, SetStateAction } from "react";

export interface UseDraftStateOptions<T> {
  value?: T;
  defaultValue: T;
  onChange?: (value: T) => void;
  isEqual?: (a: T, b: T) => boolean;
  isEmpty?: (value: T) => boolean;
}

export interface UseDraftStateReturn<T> {
  value: T;
  draft: T;
  setDraft: Dispatch<SetStateAction<T>>;
  apply: () => void;
  reset: () => void;
  clear: () => void;
  isDirty: boolean;
  isEmpty: boolean;
}
