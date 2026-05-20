import type { ComponentPropsWithRef, ReactNode } from "react";
import type { TimeValue } from "@/components/TimeBar";
import type { Size } from "@/types";
import type { BaseFieldProps } from "@/types/field";

export interface DateRangeValue {
  start?: Date;
  end?: Date;
}

export type DateRangeBound = "start" | "end";

export type DateRangeChangeHandler = (value: DateRangeValue) => void;

export interface DateRangeOwnProps extends BaseFieldProps {
  id?: string;
  size?: Size;
  disabled?: boolean;
  showTimeBar?: boolean;
  value?: DateRangeValue;
  defaultValue?: DateRangeValue;
  onChange?: DateRangeChangeHandler;
  onClear?: () => void;
  placeholderStart?: string;
  placeholderEnd?: string;
  className?: string;
  fieldClassName?: string;
  startError?: boolean;
  endError?: boolean;
  timeBarFooter?: ReactNode;
}

export type DateRangeProps = DateRangeOwnProps;

export interface DateRangeVisualState {
  disabled: boolean;
  isError: boolean;
}

export interface UseDateRangeClassNamesProps extends DateRangeVisualState {
  size: Size;
  open?: boolean;
}

export interface UseDateRangeValueProps {
  value?: DateRangeValue;
  defaultValue?: DateRangeValue;
  onChange?: DateRangeChangeHandler;
  onClear?: () => void;
  disabled: boolean;
  showTimeBar?: boolean;
}

export type DateRangeTimeChangeHandler = (
  bound: DateRangeBound,
  time: TimeValue
) => void;

export interface DateRangeFieldProps extends Omit<
  ComponentPropsWithRef<"div">,
  "children"
> {
  wrapperClassName: string;
  chipClassName: string;
  chipErrorClassName: string;
  formattedStart: string;
  formattedEnd: string;
  placeholderStart: string;
  placeholderEnd: string;
  activeBound?: DateRangeBound | null;
  size?: Size;
  disabled?: boolean;
  startError?: boolean;
  endError?: boolean;
  clearable?: boolean;
  hasValue?: boolean;
  onClear?: () => void;
  onStartClick?: () => void;
  onEndClick?: () => void;
}
