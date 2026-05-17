import type { HTMLAttributes, LabelHTMLAttributes, ReactNode } from "react";
import { Size } from "@/types";
import { cn } from "@/utils";
import { sharedInputStyles } from "../styles";

type FloatingLabelBaseProps = {
  label: ReactNode;
  size?: Size;
  active?: boolean;
  disabled?: boolean;
  className?: string;
};

type NativeLabelProps = FloatingLabelBaseProps &
  Omit<LabelHTMLAttributes<HTMLLabelElement>, "children" | "className"> & {
    as?: "label";
  };

type SpanLabelProps = FloatingLabelBaseProps &
  Omit<HTMLAttributes<HTMLSpanElement>, "children" | "className"> & {
    as: "span";
  };

export type FloatingLabelProps = NativeLabelProps | SpanLabelProps;

export function FloatingLabel({
  as,
  label,
  size = Size.Md,
  active = false,
  disabled = false,
  className,
  ...props
}: FloatingLabelProps) {
  const labelClassName = cn(
    sharedInputStyles.floatingLabel,
    sharedInputStyles.floatingLabelSize[size],
    active && sharedInputStyles.floatingLabelActive,
    active && sharedInputStyles.floatingLabelActiveSize[size],
    disabled && sharedInputStyles.floatingLabelDisabled,
    className
  );

  if (as === "span") {
    return (
      <span
        className={labelClassName}
        {...(props as HTMLAttributes<HTMLSpanElement>)}
      >
        {label}
      </span>
    );
  }

  return (
    <label
      className={labelClassName}
      {...(props as LabelHTMLAttributes<HTMLLabelElement>)}
    >
      {label}
    </label>
  );
}

export function FloatingLabelRequiredMark() {
  return (
    <span aria-hidden className={sharedInputStyles.floatingLabelRequiredMark}>
      *
    </span>
  );
}
