import { ChartYAxis } from "./ChartYAxis";
import { ChartLegend } from "./ChartLegend";
import { ChartProps } from "../types.ts";
import { useLayoutEffect, useRef, useState } from "react";
import { chartStyles } from "../styles";

interface ChartLayoutProps extends ChartProps {
  children: React.ReactNode;
}

export const ChartLayout = ({
  title,
  data,
  series,
  children,
}: ChartLayoutProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);

  useLayoutEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      setContentWidth(entry.contentRect.width);
    });
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={chartStyles.layout}>
      <div className={chartStyles.layoutContainer}>
        <ChartYAxis data={data} series={series} title={title} />

        <div className={chartStyles.layoutChildren} ref={containerRef}>
          {children}
        </div>
      </div>

      <ChartLegend data={data} series={series} width={contentWidth} />
    </div>
  );
};
