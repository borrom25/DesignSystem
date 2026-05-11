import { ReactNode } from "react";

export type SegmentedPositions = "vertical" | "horizontal";
export type SegmentedShapeVariants = "default" | "round";

export interface SegmentedOption<T extends string | number = string> {
  value: T;
  label: string | ReactNode;
  disabled?: boolean;
}

export interface SegmentedProps<T extends string | number = string> {
  value?: T;
  defaultValue?: T;
  onChange?: (value: T) => void;
  options: SegmentedOption<T>[];
  position?: SegmentedPositions;
  shape?: SegmentedShapeVariants;
  className?: string;
}

export interface SegmentedItemProps<
  T extends string | number = string,
> extends SegmentedOption<T> {
  active?: boolean;
  handleChange?: (value: T) => void;
  setRef?: (el: HTMLButtonElement | null) => void;
  className?: string;
}

export type UseSegmentedProps<T extends string | number = string> = Omit<
  SegmentedProps<T>,
  "shape" | "className"
>;

export type SegmentedIndicatorParams = {
  containerElement: HTMLDivElement;
  activeButton: HTMLButtonElement;
  position: SegmentedPositions;
};

export type SegmentedIndicatorStyles = {
  transform: string;
  width: number;
  height: number;
};
