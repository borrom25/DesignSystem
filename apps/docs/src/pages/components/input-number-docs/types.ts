import { Size } from "@/types";

export type InputNumberPlaygroundState = {
  value: string;
  label: string;
  hint: string;
  size: Size;
  disabled: boolean;
  error: boolean;
  clearable: boolean;
  min: string;
  max: string;
  step: string;
};

export const INPUT_NUMBER_DEFAULT_STATE: InputNumberPlaygroundState = {
  value: "24",
  label: "Seats",
  hint: "Choose the number of seats available in the plan.",
  size: Size.Md,
  disabled: false,
  error: false,
  clearable: true,
  min: "0",
  max: "100",
  step: "1",
};
