import { Size } from "@/types";
import { Counter } from "@/components/Counter";
import type { TabsOverflowItemContentProps } from "../TabsOverflow.types";
import { tabsOverflowStyles } from "../styles";

export function TabsOverflowItemContent<T extends string | number>({
  item,
}: TabsOverflowItemContentProps<T>) {
  const counter = item.counterProps ? (
    <Counter size={Size.Xs} {...item.counterProps} />
  ) : (
    item.counter
  );

  return (
    <span className={tabsOverflowStyles.inlineItem}>
      {item.leftSlot && (
        <span className={tabsOverflowStyles.itemSlot}>{item.leftSlot}</span>
      )}
      <span className="truncate">{item.label}</span>
      {counter}
      {item.rightSlot && (
        <span className={tabsOverflowStyles.itemSlot}>{item.rightSlot}</span>
      )}
    </span>
  );
}
