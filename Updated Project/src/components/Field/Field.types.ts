import type { ReactNode } from "react";
import type { Size } from "@/types";

export type FieldHintProps = {
  size: Size;
  error?: boolean;
  id?: string;
  children: ReactNode;
  className?: string;
};

export type FieldLabelProps = {
  size: Size;
  required?: boolean;
  disabled?: boolean;
  htmlFor?: string;
  children: ReactNode;
  className?: string;
};

export type FieldSubtitleProps = {
  size: Size;
  disabled?: boolean;
  children: ReactNode;
  className?: string;
};

export type FieldWrapperProps = {
  size: Size;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  hint?: string;
  hintError?: string;
  error?: boolean;
  inputId?: string;
  hintId?: string;
  className?: string;
  children: ReactNode;
};
