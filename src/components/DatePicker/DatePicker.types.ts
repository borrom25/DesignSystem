import { Size } from "@/types";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";
import type { CalendarBaseProps } from "../Calendar/Calendar.types";
import { InputVariant } from "../Input";

export interface DatePickerProps {
  size?: Size;
  label?: string;
  value?: string;
  defaultValue?: string;
  onChangeInput?: (value?: string) => void;
  onChangeDate?: (date?: Date) => void;
  placeholder?: string;
  icon?: LucideIcon;
  rightSlot?: ReactNode;
  disabled?: boolean;
  error?: boolean;
  hintError?: string;
  className?: string;
  required?: boolean;
  onClear?: () => void;
  variant?: InputVariant;
  format?: string;
  hint?: string;
  minDate?: Date | string;
  maxDate?: Date | string;
  calendarProps?: Omit<CalendarBaseProps, "className">;
}

export interface UseDatePickerValueProps {
  value?: string;
  onChangeInput?: (value?: string) => void;
  onChangeDate?: (date?: Date) => void;
  onClear?: () => void;
  format: string;
  minDate?: Date | string;
  maxDate?: Date | string;
}
