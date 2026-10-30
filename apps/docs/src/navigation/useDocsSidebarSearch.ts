import { useMemo } from "react";
import { useDebouncedValue } from "@/hooks";
import {
  getActiveTopNavId,
  sidebarConfig,
  type SidebarNavGroup,
} from "@docs/navigation/sidebarConfig";

interface UseDocsSidebarSearchReturn {
  searchValue: string;
  setSearchValue: (value: string) => void;
  groups: SidebarNavGroup[];
  isSearchActive: boolean;
}

export function useDocsSidebarSearch(
  pathname: string
): UseDocsSidebarSearchReturn {
  const activeTopNavId = getActiveTopNavId(pathname);
  const sourceGroups = sidebarConfig[activeTopNavId];
  const {
    value: searchValue,
    debouncedValue,
    setValue: setSearchValue,
  } = useDebouncedValue("", { delay: 200 });

  const normalizedQuery = debouncedValue.trim().toLowerCase();
  const isSearchActive = normalizedQuery.length > 0;

  const groups = useMemo(() => {
    if (!isSearchActive) {
      return sourceGroups;
    }

    return sourceGroups
      .map((group) => {
        const isGroupMatched = group.label
          .toLowerCase()
          .includes(normalizedQuery);
        const children = isGroupMatched
          ? group.children
          : group.children.filter((child) =>
              child.label.toLowerCase().includes(normalizedQuery)
            );

        return {
          ...group,
          children,
        };
      })
      .filter((group) => group.children.length > 0);
  }, [sourceGroups, normalizedQuery, isSearchActive]);

  return {
    searchValue,
    setSearchValue,
    groups,
    isSearchActive,
  };
}
