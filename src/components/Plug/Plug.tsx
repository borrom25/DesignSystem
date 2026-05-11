import { cn } from "@/utils";
import type { PlugProps } from "./Plug.types";
import { plugStyles } from "./styles";

export function Plug({
  imageItem,
  title,
  subtitle,
  actionSlot,
  className,
  ...props
}: PlugProps) {
  return (
    <div className={cn(plugStyles.base, className)} {...props}>
      {imageItem}

      <div className={plugStyles.flexColumnCenter}>
        {typeof title === "string" ? (
          <p className={plugStyles.title}>{title}</p>
        ) : (
          title
        )}

        {typeof subtitle === "string" ? (
          <p className={plugStyles.subtitle}>{subtitle}</p>
        ) : (
          subtitle
        )}
      </div>

      <div className={plugStyles.actionSlot}>{actionSlot}</div>
    </div>
  );
}
