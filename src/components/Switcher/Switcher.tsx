import { cn, getIconSize } from "@/utils";
import type { SwitcherProps, SwitcherValue } from "./Switcher.types";
import { switherStyles } from "./styles";
import { useState, type ChangeEvent } from "react";
import { Minus } from "lucide-react";

export function Switcher<T extends SwitcherValue = SwitcherValue>({
  size = "sm",
  type = "default",
  disabled,
  checked,
  defaultChecked = false,
  onClick,
  onChange,
  title,
  ...props
}: SwitcherProps<T>) {
  const isControlled = checked !== undefined;
  const [internalChecked, setInternalChecked] = useState<boolean>(
    type === "minus" ? (checked ?? true) : defaultChecked
  );
  const isChecked = isControlled ? checked : internalChecked;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) {
      setInternalChecked(event.target.checked);
    }

    onChange?.(event);
    onClick?.(event);
  };

  return (
    <div className={switherStyles.container}>
      <label
        className={cn(
          switherStyles.base,
          switherStyles.sizes[size],
          switherStyles.hover,
          switherStyles.disabled,
          switherStyles.checked,
          switherStyles.minus.base
        )}
        aria-disabled={disabled}
        aria-checked={isChecked}
        data-type={type}
      >
        <input
          {...props}
          disabled={disabled}
          type="checkbox"
          className={switherStyles.input}
          checked={isChecked}
          onChange={handleChange}
        />
        {type === "default" ? (
          <span
            className={cn(switherStyles.handle, switherStyles.circleSize[size])}
          />
        ) : (
          <>
            {(() => {
              const iconSize = getIconSize(size, switherStyles.minus.size);
              return (
                <Minus size={iconSize} className={switherStyles.minus.icon} />
              );
            })()}
          </>
        )}
      </label>
      {title && (
        <span
          className={cn(switherStyles.title, switherStyles.titleSize[size])}
        >
          {title}
        </span>
      )}
    </div>
  );
}
