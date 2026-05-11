import type { Size } from "@/types";
import type { BaseFieldProps } from "@/types/field";
import type { TimeValue } from "@/components/TimeBar";
import { ReactNode } from "react";

export type { TimeValue };

export interface TimePickerProps extends BaseFieldProps {
  id?: string;
  size?: Size;
  disabled?: boolean;
  value?: string;
  time?: TimeValue;
  defaultValue?: string;
  defaultTime?: TimeValue;
  onChangeValue?: (value?: string) => void;
  onChangeTime?: (value?: TimeValue) => void;
  onClear?: () => void;
  placeholder?: string;
  className?: string;
  fieldClassName?: string;
  error?: boolean;
  format?: string;
  showSeconds?: boolean;
  use24Hour?: boolean;
  showNowButton?: boolean;
  showConfirmButton?: boolean;
  nowButtonText?: string;
  confirmButtonText?: string;
  rightSlot?: ReactNode;
}

export interface UseTimePickerValueProps {
  value?: string;
  time?: TimeValue;
  defaultValue?: string;
  defaultTime?: TimeValue;
  onChangeValue?: (value?: string) => void;
  onChangeTime?: (value?: TimeValue) => void;
  onClear?: () => void;
  format: string;
  disabled?: boolean;
}
