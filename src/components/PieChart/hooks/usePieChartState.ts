import { PieChartBaseProps } from "../PieChart.types.ts";
import { useEffect, useState } from "react";
import { getBarColor } from "@/shared/Chart";

export const usePieChartState = ({ data, type }: PieChartBaseProps) => {
  const [hiddenKeys, setHiddenKeys] = useState<string[]>([]);
  const [isAnimationDone, setIsAnimationDone] = useState(false);

  useEffect(() => {
    setIsAnimationDone(false);
  }, [data, hiddenKeys]);

  const visibleData = data.filter((item) => !hiddenKeys.includes(item.name));
  const isAnimationActive = !isAnimationDone;
  const innerRadius = type === "pie" ? 0 : 65;

  const onAnimationEnd = () => setIsAnimationDone(true);
  const getCellFill = (name: string) =>
    getBarColor(data.findIndex((el) => el.name === name));

  return {
    visibleData,
    isAnimationActive,
    hiddenKeys,
    innerRadius,
    onAnimationEnd,
    setHiddenKeys,
    getCellFill,
  };
};
