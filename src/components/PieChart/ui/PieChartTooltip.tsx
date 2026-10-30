import type { CSSProperties } from "react";
import {
  useActiveTooltipCoordinate,
  useChartHeight,
  useChartWidth,
} from "recharts";
import { ChartTooltip } from "@/shared/Chart";

const TOOLTIP_GAP = 12;

const getOutwardContentStyle = (
  coordinate: { x: number; y: number } | undefined,
  width: number | undefined,
  height: number | undefined
): CSSProperties | undefined => {
  if (!coordinate || width == null || height == null) return undefined;

  const dx = coordinate.x - width / 2;
  const dy = coordinate.y - height / 2;
  const length = Math.hypot(dx, dy) || 1;
  const ux = dx / length;
  const uy = dy / length;
  const translateX =
    ux >= 0 ? `${TOOLTIP_GAP}px` : `calc(-100% - ${TOOLTIP_GAP}px)`;
  const translateY =
    uy >= 0 ? `${TOOLTIP_GAP}px` : `calc(-100% - ${TOOLTIP_GAP}px)`;

  return { transform: `translate(${translateX}, ${translateY})` };
};

export const PieChartTooltip = () => {
  const coordinate = useActiveTooltipCoordinate();
  const width = useChartWidth();
  const height = useChartHeight();

  return (
    <ChartTooltip
      position={coordinate}
      offset={0}
      allowEscapeViewBox={{ x: true, y: true }}
      wrapperStyle={{ zIndex: 10 }}
      contentStyle={getOutwardContentStyle(coordinate, width, height)}
    />
  );
};
