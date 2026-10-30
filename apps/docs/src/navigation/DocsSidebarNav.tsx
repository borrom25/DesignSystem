import { memo, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Accordion, Label, ListItem } from "@/components";
import { Color, Size, Type } from "@/types";
import {
  type SidebarNavGroup,
  type SidebarNavItem,
} from "@docs/navigation/sidebarConfig";

function isPathActive(pathname: string, path: string) {
  if (path === "/") {
    return pathname === "/";
  }

  return pathname === path || pathname.startsWith(`${path}/`);
}

interface NavItemProps {
  item: SidebarNavItem;
  pathname: string;
  onNavigate: (path: string) => void;
}

const NavItem = memo(function NavItem({
  item,
  pathname,
  onNavigate,
}: NavItemProps) {
  const handleClick = useCallback(() => {
    onNavigate(item.path);
  }, [item.path, onNavigate]);

  return (
    <ListItem
      title={item.label}
      iconLeft={item.icon}
      selected={isPathActive(pathname, item.path)}
      onClick={handleClick}
    />
  );
});

function VersionLabel({ version }: { version: string }) {
  return (
    <Label size={Size.Xs} type={Type.Flat} color={Color.Secondary}>
      {version}
    </Label>
  );
}

function getAccordionPosition(index: number, length: number) {
  if (index === 0) return "start";
  if (index === length - 1) return "end";
  return "mid";
}

const NavGroup = memo(function NavGroup({
  group,
  index,
  total,
  defaultOpen,
  pathname,
  onNavigate,
}: {
  group: SidebarNavGroup;
  index: number;
  total: number;
  defaultOpen: boolean;
  pathname: string;
  onNavigate: (path: string) => void;
}) {
  return (
    <Accordion
      title={group.label}
      position={getAccordionPosition(index, total)}
      defaultOpen={defaultOpen}
      headSlot={
        group.versionLabel ? (
          <VersionLabel version={group.versionLabel} />
        ) : (
          <></>
        )
      }
    >
      <div className="flex w-full flex-col gap-1 py-2">
        {group.children.map((child) => (
          <NavItem
            key={child.id}
            item={child}
            pathname={pathname}
            onNavigate={onNavigate}
          />
        ))}
      </div>
    </Accordion>
  );
});

interface DocsSidebarNavProps {
  groups: SidebarNavGroup[];
  isSearchActive?: boolean;
}

export function DocsSidebarNav({
  groups,
  isSearchActive = false,
}: DocsSidebarNavProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const handleNavigate = useCallback(
    (path: string) => {
      navigate(path);
    },
    [navigate]
  );

  if (isSearchActive && groups.length === 0) {
    return (
      <nav className="flex w-full flex-col gap-1" aria-label="Документация">
        <p className="text-secondary px-2 py-1 text-xs">Ничего не найдено</p>
      </nav>
    );
  }

  return (
    <nav className="flex w-full flex-col gap-1" aria-label="Документация">
      {groups.map((group, index) => {
        const defaultOpen =
          isSearchActive ||
          group.children.some((child) =>
            isPathActive(location.pathname, child.path)
          );

        return (
          <NavGroup
            key={`${group.id}-${defaultOpen ? "open" : "closed"}`}
            group={group}
            index={index}
            total={groups.length}
            defaultOpen={defaultOpen}
            pathname={location.pathname}
            onNavigate={handleNavigate}
          />
        );
      })}
    </nav>
  );
}
