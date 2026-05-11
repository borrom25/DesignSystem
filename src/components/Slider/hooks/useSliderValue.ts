import { useCallback, useMemo } from "react";
import { calculatePercentage } from "../utils";

interface UseSliderValueProps {
  value: number;
  min: number;
  max: number;
  disabled: boolean;
  onValueChange: (value: number) => void;
}

export function useSliderValue({
  value,
  min,
  max,
  disabled,
  onValueChange,
}: UseSliderValueProps) {
  const percentage = useMemo(
    () => calculatePercentage(value, min, max),
    [value, min, max]
  );

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;
      const newValue = Number(event.target.value);
      onValueChange(newValue);
    },
    [disabled, onValueChange]
  );

  return {
    percentage,
    handleChange,
  };
}
