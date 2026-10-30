import { useCallback, useState, type ReactNode } from "react";

export function getModalLayer(node: Element | null | undefined) {
  const layer = node?.closest("[data-ui-modal]");
  return layer instanceof HTMLElement ? layer : undefined;
}

export function getModalLayerFromOverlay(node: Element | null) {
  if (!node?.id) return;

  const trigger = document.querySelector(
    `[aria-controls="${CSS.escape(node.id)}"]`
  );

  return getModalLayer(trigger);
}

export function useOverlayPortalContainer() {
  const [container, setContainer] = useState<HTMLElement | undefined>();

  const setOverlayNode = useCallback((node: HTMLElement | null) => {
    setContainer(getModalLayerFromOverlay(node));
  }, []);

  return { container, setOverlayNode };
}

export function getModalLayoutState(
  title: ReactNode,
  subtitle: ReactNode,
  actionSlot: ReactNode,
  bottomSlot: ReactNode
) {
  return {
    hasHeader: Boolean(title || subtitle || actionSlot),
    hasFooter: Boolean(bottomSlot),
    hasTitle: Boolean(title),
    hasSubtitle: Boolean(subtitle),
    hasActionSlot: Boolean(actionSlot),
  };
}
