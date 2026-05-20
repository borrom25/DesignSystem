import { memo, useCallback } from "react";
import { TabTriggerProps } from "../TabsOverflow.types.ts";
import { TabsOverflowItemContent } from "./TabsOverflowItemContent";

function TabTriggerInner<T extends string | number>({
  item,
  className,
  isSelected,
  isDisabled,
  registerTabButton,
  onSelect,
}: TabTriggerProps<T>) {
  const setButtonRef = useCallback(
    (element: HTMLButtonElement | null) => {
      registerTabButton(item.value, element);
    },
    [item.value, registerTabButton]
  );

  const handleClick = useCallback(() => {
    onSelect(item.value);
  }, [item.value, onSelect]);

  return (
    <button
      ref={setButtonRef}
      type="button"
      className={className}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-selected={isSelected}
      onClick={handleClick}
    >
      <TabsOverflowItemContent item={item} />
    </button>
  );
}

export const TabTrigger = memo(TabTriggerInner) as typeof TabTriggerInner;
