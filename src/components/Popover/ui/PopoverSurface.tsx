import { cn } from "@/utils";
import type { PopoverSurfaceProps } from "../Popover.types";
import {
  emptyClasses,
  surfaceClasses,
  surfaceWithSearchClasses,
} from "../styles";
import { useScreenSize } from "@/providers";
import { PopoverSearch } from "./PopoverSearch";
import {
  DEFAULT_SEARCH_EMPTY_MESSAGE,
  hasRenderableChildren,
} from "../Popover.utils";

export function PopoverSurface({
  className,
  children,
  search,
}: PopoverSurfaceProps) {
  const { isMobile } = useScreenSize();
  const searchEnabled = Boolean(search);
  const searchConfig = !search ? undefined : search === true ? {} : search;
  const { emptyMessage: searchEmptyMessage, ...searchInputProps } =
    searchConfig ?? {};
  const emptyMessage = searchEmptyMessage ?? DEFAULT_SEARCH_EMPTY_MESSAGE;
  const showEmpty = searchEnabled && !hasRenderableChildren(children);

  return (
    <div
      className={cn(
        !isMobile && surfaceClasses,
        searchEnabled && surfaceWithSearchClasses,
        className
      )}
    >
      {searchConfig ? <PopoverSearch {...searchInputProps} /> : null}
      {searchEnabled ? (
        showEmpty ? (
          emptyMessage ? (
            <div className={emptyClasses}>{emptyMessage}</div>
          ) : null
        ) : (
          <div className="min-h-0 flex flex-col gap-1 p-1">{children}</div>
        )
      ) : (
        children
      )}
    </div>
  );
}
