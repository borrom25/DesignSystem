import { Download } from "@/components";
import { BubbleFileProps } from "../Bubble.types.ts";
import { useBubbleContext } from "../Bubble.context.ts";

export function BubbleFile({
  fileName,
  fileSize,
  icon: Icon,
  action,
  onActionClick,
  className,
  ...restProps
}: BubbleFileProps) {
  const { fileOnly } = useBubbleContext();

  return (
    <Download
      withBackground={!fileOnly}
      fileName={fileName}
      className={className}
      onActionClick={onActionClick}
      action={action}
      icon={Icon}
      fileSize={fileSize}
      {...restProps}
    />
  );
}
