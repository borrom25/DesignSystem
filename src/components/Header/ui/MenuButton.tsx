import { Button, ListItem, Popover } from "@/components";
import { Color, Size, Type } from "@/types";
import { LayoutGrid } from "lucide-react";
import { MenuItem } from "../Header.types";
import { headerStyles } from "../styles";
export interface MenuButtonProps {
  onClick?: () => void;
  testId?: string;
  menuItems?: MenuItem[];
}

export function MenuButton({ onClick, testId, menuItems }: MenuButtonProps) {
  return (
    <Popover>
      <Popover.Trigger>
        <Button
          onClick={onClick}
          data-testid={testId}
          aria-label="Открыть меню"
          iconOnly={LayoutGrid}
          color={Color.Brand}
          type={Type.Flat}
          size={Size.Xs}
        />
      </Popover.Trigger>

      <Popover.Content>
        <Popover.Surface>
          <>
            {menuItems?.length && (
              <ul className={headerStyles.menuList}>
                {menuItems?.map(({ key, ...item }) => (
                  <ListItem
                    size={Size.Xs}
                    key={key}
                    title={item.label}
                    onClick={item.onClick}
                  />
                ))}
              </ul>
            )}
          </>
        </Popover.Surface>
      </Popover.Content>
    </Popover>
  );
}
