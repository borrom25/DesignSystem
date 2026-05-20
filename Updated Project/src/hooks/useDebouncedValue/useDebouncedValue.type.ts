export interface UseDebouncedValueOptions {
  delay?: number;
  leading?: boolean;
}

export interface UseDebouncedValueReturn<T> {
  value: T;
  debouncedValue: T;
  setValue: (value: T) => void;
  flush: () => void;
  isPending: boolean;
}
