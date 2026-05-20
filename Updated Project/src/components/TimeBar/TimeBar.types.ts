import type { ReactNode } from "react";
import type { Size } from "@/types";

export interface TimeValue {
  hours: number;
  minutes: number;
  seconds: number;
}

export interface TimeBarProps {
  value?: TimeValue;
  defaultValue?: TimeValue;
  onChange?: (value: TimeValue) => void;
  onConfirm?: (value: TimeValue) => void;
  size?: Size;
  disabled?: boolean;
  showSeconds?: boolean;
  use24Hour?: boolean;
  showNowButton?: boolean;
  showConfirmButton?: boolean;
  nowButtonText?: string;
  confirmButtonText?: string;
  className?: string;
  columnsFillHeight?: boolean;
  footerSlot?: ReactNode;
}

export interface TimeColumnProps {
  values: number[];
  selectedValue: number;
  onSelect: (value: number) => void;
  disabled?: boolean;
  className?: string;
  fillHeight?: boolean;
}

export interface ControlButtonsProps {
  onNow?: () => void;
  onConfirm?: () => void;
  disabled?: boolean;
  nowButtonText?: string;
  confirmButtonText?: string;
  showNowButton?: boolean;
  showConfirmButton?: boolean;
}
