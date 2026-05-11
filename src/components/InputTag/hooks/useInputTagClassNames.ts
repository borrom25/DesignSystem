import { useMemo } from "react";
import { cn } from "@/utils";
import { inputTagStyles } from "../styles";
import type { UseInputTagClassNamesProps } from "../InputTag.types";

export const useInputTagClassNames = ({
  size,
  disabled,
}: UseInputTagClassNamesProps) => {
  const wrapperClassName = useMemo(() => {
    return cn(
      inputTagStyles.base,
      inputTagStyles.size[size],
      disabled ? inputTagStyles.disabled : inputTagStyles.state
    );
  }, [size, disabled]);

  return { wrapperClassName };
};
