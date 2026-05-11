import { cn } from "@/utils";
import type {
  InputAdornmentClassNameParams,
  InputWrapperClassNameParams,
} from "./Input.types";

export const formatCountDisplay = (
  count?: number,
  maxCount?: number
): string | null => {
  const hasCount = count !== undefined || maxCount !== undefined;

  if (!hasCount) return null;

  if (maxCount !== undefined) {
    return `${count ?? 0}/${maxCount}`;
  }

  return String(count);
};

export const getInputCount = (
  value: string | number | readonly string[] | undefined
): number => {
  if (value == null) return 0;
  return String(value).length;
};

export const getInputAdornmentClassName = ({
  disabled,
  baseClasses,
  disabledClasses,
}: InputAdornmentClassNameParams): string =>
  cn(disabled ? disabledClasses : baseClasses);

export const getInputWrapperClassName = ({
  disabled,
  isError,
  baseClasses,
  sizeClasses,
  clearSizeClasses,
  stateClasses,
  disabledClasses,
  errorClasses,
  clearStateClasses,
  clearDisabledClasses,
  clearErrorClasses,
  isClear,
}: InputWrapperClassNameParams): string => {
  const sizeCls = isClear ? clearSizeClasses : sizeClasses;
  const stateCls = isClear ? clearStateClasses : stateClasses;
  const disabledCls = isClear ? clearDisabledClasses : disabledClasses;
  const errorCls = isClear ? clearErrorClasses : errorClasses;

  const modifierCls = disabled ? disabledCls : isError ? errorCls : stateCls;

  return cn(baseClasses, sizeCls, modifierCls);
};
