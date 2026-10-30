import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type RefObject,
} from "react";

const rowActionPopoverSettleMs = 120;

type DataTableRowActionPopoverContextValue = {
  openRowId: string | null;
  visible: boolean;
  setOpenRow: (rowId: string, open: boolean) => void;
  shouldPreventCloseAutoFocus: () => boolean;
};

export const DataTableRowActionPopoverContext =
  createContext<DataTableRowActionPopoverContextValue | null>(null);

export function useDataTableRowActionPopoverContext() {
  return useContext(DataTableRowActionPopoverContext);
}

function findRowActionTrigger(container: HTMLElement, rowId: string) {
  const selector = `[data-row-action-trigger="${CSS.escape(rowId)}"]`;
  const nodes = container.querySelectorAll<HTMLElement>(selector);

  for (const node of nodes) {
    if (node.closest("[data-table-scroll-container]") === container) {
      return node;
    }
  }

  return null;
}

function getScrollTopBoundary(container: HTMLElement) {
  let top = container.getBoundingClientRect().top;
  const headerCells = container.querySelectorAll<HTMLElement>(
    ":scope > table > thead th"
  );

  headerCells.forEach((cell) => {
    const bottom = cell.getBoundingClientRect().bottom;

    if (bottom > top) top = bottom;
  });

  return top;
}

function readScrollTop(target: Document | HTMLElement) {
  if (target instanceof HTMLElement) return target.scrollTop;

  return document.scrollingElement?.scrollTop ?? 0;
}

function scrollsTable(
  target: EventTarget | null,
  container: HTMLElement
): target is Document | HTMLElement {
  if (target === document) return true;
  if (!(target instanceof HTMLElement)) return false;

  return target === container || target.contains(container);
}

function isRowActionTriggerVisible(
  container: HTMLElement,
  trigger: HTMLElement
) {
  const containerRect = container.getBoundingClientRect();
  const triggerRect = trigger.getBoundingClientRect();

  return (
    triggerRect.top >= getScrollTopBoundary(container) &&
    triggerRect.bottom <= containerRect.bottom
  );
}

export function useDataTableRowActionPopover(
  containerRef: RefObject<HTMLElement | null>
) {
  const [openRowId, setOpenRowId] = useState<string | null>(null);
  const [visible, setVisible] = useState(true);
  const openRowIdRef = useRef(openRowId);
  const visibleRef = useRef(visible);
  const lastScrollTopRef = useRef(new Map<EventTarget, number>());
  const settleTimerRef = useRef<number | null>(null);
  const settleIdRef = useRef(0);
  const suspendFocusRef = useRef(false);

  openRowIdRef.current = openRowId;
  visibleRef.current = visible;

  const updateVisibility = useCallback(() => {
    const container = containerRef.current!;
    const trigger = findRowActionTrigger(container, openRowIdRef.current!);

    if (!trigger || !isRowActionTriggerVisible(container, trigger)) {
      setVisible(false);
      return;
    }

    suspendFocusRef.current = false;
    setVisible(true);
  }, [containerRef]);

  const scheduleVisibilityUpdate = useCallback(() => {
    const settleId = ++settleIdRef.current;

    if (settleTimerRef.current !== null) {
      window.clearTimeout(settleTimerRef.current);
    }

    settleTimerRef.current = window.setTimeout(() => {
      settleTimerRef.current = null;
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          if (settleIdRef.current !== settleId) return;
          updateVisibility();
        });
      });
    }, rowActionPopoverSettleMs);
  }, [updateVisibility]);

  const setOpenRow = useCallback((rowId: string, open: boolean) => {
    settleIdRef.current += 1;

    if (settleTimerRef.current !== null) {
      window.clearTimeout(settleTimerRef.current);
      settleTimerRef.current = null;
    }

    suspendFocusRef.current = false;

    if (!open) {
      setOpenRowId((current) => (current === rowId ? null : current));
      return;
    }

    setOpenRowId(rowId);
    setVisible(true);
  }, []);

  const shouldPreventCloseAutoFocus = useCallback(
    () => suspendFocusRef.current,
    []
  );

  useEffect(() => {
    const scrollTops = lastScrollTopRef.current;
    const container = containerRef.current!;

    scrollTops.set(container, container.scrollTop);

    const scrollingElement = document.scrollingElement;

    if (scrollingElement) {
      scrollTops.set(document, scrollingElement.scrollTop);
    }

    const handleScroll = (event: Event) => {
      const currentContainer = containerRef.current!;

      if (!scrollsTable(event.target, currentContainer)) return;

      const scrollTop = readScrollTop(event.target);
      const previous = scrollTops.get(event.target);

      if (previous === scrollTop) return;

      scrollTops.set(event.target, scrollTop);

      if (!openRowIdRef.current) return;

      suspendFocusRef.current = true;

      if (visibleRef.current) {
        setVisible(false);
      }

      scheduleVisibilityUpdate();
    };

    window.addEventListener("scroll", handleScroll, true);

    return () => {
      window.removeEventListener("scroll", handleScroll, true);
      settleIdRef.current += 1;

      if (settleTimerRef.current !== null) {
        window.clearTimeout(settleTimerRef.current);
      }
    };
  }, [containerRef, scheduleVisibilityUpdate]);

  const contextValue = useMemo(
    () => ({
      openRowId,
      visible,
      setOpenRow,
      shouldPreventCloseAutoFocus,
    }),
    [openRowId, visible, setOpenRow, shouldPreventCloseAutoFocus]
  );

  return {
    contextValue,
  };
}
