import { useMemo } from "react";
import type { ReactNode } from "react";
import type { FilterListOption, FilterListGroup } from "../FilterList.types.ts";

export interface UseFilterGroupsOptions<T, TItem> {
  items: TItem[];
  getGroupKey: (item: TItem) => string;
  getGroupLabel: (key: string, items: TItem[]) => ReactNode;
  getOptionValue: (item: TItem) => T;
  getOptionLabel: (item: TItem) => ReactNode;
  getOptionDisabled?: (item: TItem) => boolean;
  sortGroups?: (a: string, b: string) => number;
}

export function useFilterGroups<T = string, TItem = unknown>({
  items,
  getGroupKey,
  getGroupLabel,
  getOptionValue,
  getOptionLabel,
  getOptionDisabled,
  sortGroups,
}: UseFilterGroupsOptions<T, TItem>): FilterListGroup<T>[] {
  return useMemo(() => {
    const groupsMap = new Map<string, TItem[]>();

    items.forEach((item) => {
      const key = getGroupKey(item);
      const group = groupsMap.get(key) ?? [];
      group.push(item);
      groupsMap.set(key, group);
    });

    let keys = Array.from(groupsMap.keys());
    if (sortGroups) {
      keys = keys.sort(sortGroups);
    }

    return keys.map((key) => {
      const groupItems = groupsMap.get(key)!;
      return {
        label: getGroupLabel(key, groupItems),
        options: groupItems.map(
          (item): FilterListOption<T> => ({
            value: getOptionValue(item),
            label: getOptionLabel(item),
            disabled: getOptionDisabled?.(item),
          })
        ),
      };
    });
  }, [
    items,
    getGroupKey,
    getGroupLabel,
    getOptionValue,
    getOptionLabel,
    getOptionDisabled,
    sortGroups,
  ]);
}
