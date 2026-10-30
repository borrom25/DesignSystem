import { SegmentedItemProps } from "../Segmented.types";
import { Tab } from "@/components/Tab";
import { Size, Type } from "@/types";

export function SegmentedItem<T extends string | number = string>({
  value,
  label,
  disabled = false,
  active = false,
  size = Size.Sm,
  handleChange,
  setRef,
  className,
}: SegmentedItemProps<T>) {
  return (
    <Tab
      asChild
      type={Type.Ghost}
      size={size}
      selected={active}
      className={className}
    >
      <button
        ref={setRef}
        type="button"
        role="tab"
        onClick={() => handleChange?.(value)}
        disabled={disabled}
      >
        <span className="relative z-1">{label}</span>
      </button>
    </Tab>
  );
}
