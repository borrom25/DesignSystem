import { checkBoxStyles } from "../styles";
import { cn, getIconSize } from "@/utils";
import { scalingClasses } from "@/styles/shared.ts";
import { Check } from "lucide-react";
import { useEffect, useRef } from "react";
import { CheckBoxInputProps } from "../CheckBox.types.ts";

export const CheckBoxInput = ({
  size,
  className,
  checked,
  defaultChecked,
  indeterminate,
  inputRef,
  scaling,
  title,
  ...restProps
}: CheckBoxInputProps) => {
  const iconSize = getIconSize(size, checkBoxStyles.iconSizeMap);
  const internalInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (internalInputRef.current) {
      internalInputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <div className={checkBoxStyles.container}>
      <label className={checkBoxStyles.label}>
        <input
          ref={(node) => {
            internalInputRef.current = node;

            if (typeof inputRef === "function") {
              inputRef(node);
            } else if (inputRef) {
              (inputRef as { current: HTMLInputElement | null }).current = node;
            }
          }}
          type="checkbox"
          className={cn(
            "peer",
            checkBoxStyles.base,
            checkBoxStyles.size[size],
            checkBoxStyles.input.state,
            checkBoxStyles.input.hover,
            checkBoxStyles.input.disabled,
            scaling && scalingClasses,
            className
          )}
          checked={checked}
          defaultChecked={defaultChecked}
          {...restProps}
        />
        <Check size={iconSize} className={checkBoxStyles.icon} />
      </label>
      {title && (
        <span
          className={cn(checkBoxStyles.title, checkBoxStyles.titleSize[size])}
        >
          {title}
        </span>
      )}
    </div>
  );
};
