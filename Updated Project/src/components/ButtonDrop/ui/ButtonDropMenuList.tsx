import { cn } from "@/utils";
import { ListItem } from "@/components/ListItem";
import type { Size } from "@/types";
import type { ButtonDropItem } from "../ButtonDrop.types";
import { buttonDropStyles } from "../styles";

interface ButtonDropMenuListProps<T extends string | number> {
  items: ButtonDropItem<T>[];
  value?: T;
  size: Size;
  onItemClick: (item: ButtonDropItem<T>) => void;
}

export function ButtonDropMenuList<T extends string | number>({
  items,
  value,
  size,
  onItemClick,
}: ButtonDropMenuListProps<T>) {
  return (
    <div
      className={cn(buttonDropStyles.list, buttonDropStyles.listIconSize[size])}
    >
      {items.map((item) => (
        <ListItem
          key={item.value}
          size={buttonDropStyles.listItemSizeMap[size]}
          selected={item.value === value}
          disabled={item.disabled}
          iconLeft={item.icon}
          onClick={() => onItemClick(item)}
        >
          {item.label}
        </ListItem>
      ))}
    </div>
  );
}
