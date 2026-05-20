import { cn, getIconSize } from "@/utils";
import type { SwitcherProps, SwitcherValue } from "./Switcher.types";
import { switherStyles } from "./styles";
import { useState } from "react";
import { Minus } from "lucide-react";

export function Switcher<T extends SwitcherValue = SwitcherValue>({
  size = "sm",
  type = "default",
  disabled,
  checked,
  defaultChecked = false,
  onClick,
  ...props
}: SwitcherProps<T>) {
  const [isChecked, setIsChecked] = useState<boolean>(
    type === "minus" ? true : checked || defaultChecked
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (type === "minus") {
      onClick?.(e);
      return;
    }
    setIsChecked(e.target.checked);
  };

  return (
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
        disabled={disabled}
        type="checkbox"
        className={switherStyles.input}
        checked={isChecked}
        defaultChecked={defaultChecked}
        onChange={handleChange}
        {...props}
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
  );
}
