import { InputVariant } from "@/components";
import { Size } from "@/types";

export type InputPlaygroundState = {
  size: (typeof Size)[keyof typeof Size];
  variant: InputVariant;
  value: string;
  label: string;
  placeholder: string;
  hint: string;
  disabled: boolean;
  error: boolean;
  required: boolean;
  clearable: boolean;
  iconLeft: boolean;
  iconRight: boolean;
  count: boolean;
};

export const INPUT_DEFAULT_STATE: InputPlaygroundState = {
  size: Size.Md,
  variant: InputVariant.Default,
  value: "mail@alabuga.ru",
  label: "Email",
  placeholder: "Введите email",
  hint: "Рабочая почта пользователя",
  disabled: false,
  error: false,
  required: false,
  clearable: true,
  iconLeft: true,
  iconRight: false,
  count: false,
};
