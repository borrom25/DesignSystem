export type BaseFieldProps<T extends string | number = string> = {
  label?: T;
  subtitle?: T;
  required?: boolean;
  hint?: string;
  hintError?: string;
  error?: boolean;
};
