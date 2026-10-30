import { memo } from "react";
import { ProgressBarItem, StatusLabel } from "../../ProgressBar/ui";
import type { AccordionBlockLabelPosition } from "../AccordionBlock.types";
import { accordionBlockStyles } from "../styles";

interface AccordionBlockProgressProps {
  label: number;
  bar: number;
  labelPosition: AccordionBlockLabelPosition;
}

export const AccordionBlockProgress = memo(function AccordionBlockProgress({
  label,
  bar,
  labelPosition,
}: AccordionBlockProgressProps) {
  const layout = accordionBlockStyles.progressLayout[labelPosition];

  return (
    <div className={layout.root}>
      <div className={layout.bar}>
        <ProgressBarItem status="loading" progress={bar} />
      </div>
      <div className={layout.value}>
        <StatusLabel status="loading" fullClampedProgress={label} />
      </div>
    </div>
  );
});
