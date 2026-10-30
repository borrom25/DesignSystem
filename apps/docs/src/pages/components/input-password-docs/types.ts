import { Size } from "@/types";

export type InputPasswordPlaygroundState = {
  value: string;
  label: string;
  placeholder: string;
  hint: string;
  size: Size;
  disabled: boolean;
  error: boolean;
  showPasswordByDefault: boolean;
};

export const INPUT_PASSWORD_DEFAULT_STATE: InputPasswordPlaygroundState = {
  value: "P@ssword123",
  label: "Password",
  placeholder: "Create a password",
  hint: "Use at least 8 characters with letters and numbers.",
  size: Size.Md,
  disabled: false,
  error: false,
  showPasswordByDefault: false,
};
