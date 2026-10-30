import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  type ReactNode,
} from "react";
import {
  isSectionAboveView,
  isSectionInFirstView,
  REVEAL_TIMING,
  type LandingSectionId,
} from "./revealTiming.ts";

type SectionRegisterResult = {
  delayMs: number | null;
  unregister: () => void;
};

type SectionCascadeContextValue = {
  heroComplete: boolean;
  registerSection: (
    id: LandingSectionId,
    el: HTMLElement
  ) => SectionRegisterResult;
};

const SectionCascadeContext = createContext<SectionCascadeContextValue | null>(
  null
);

export const useSectionCascade = () => {
  const context = useContext(SectionCascadeContext);
  if (!context) {
    throw new Error(
      "useSectionCascade must be used within SectionCascadeProvider"
    );
  }
  return context;
};

type SectionCascadeProviderProps = {
  heroComplete: boolean;
  children: ReactNode;
};

export function SectionCascadeProvider({
  heroComplete,
  children,
}: SectionCascadeProviderProps) {
  const heroCompleteRef = useRef(heroComplete);
  heroCompleteRef.current = heroComplete;
  const delayByIdRef = useRef(new Map<LandingSectionId, number | null>());
  const nextSlotRef = useRef(0);

  const registerSection = useCallback(
    (id: LandingSectionId, el: HTMLElement): SectionRegisterResult => {
      const cached = delayByIdRef.current.get(id);
      if (cached !== undefined) {
        return { delayMs: cached, unregister: () => undefined };
      }

      if (!heroCompleteRef.current) {
        return { delayMs: null, unregister: () => undefined };
      }

      let delayMs: number | null = null;

      if (isSectionAboveView(el)) {
        delayMs = 0;
      } else if (isSectionInFirstView(el)) {
        delayMs = nextSlotRef.current * REVEAL_TIMING.sectionCascadeMs;
        nextSlotRef.current += 1;
      }

      delayByIdRef.current.set(id, delayMs);

      return { delayMs, unregister: () => undefined };
    },
    []
  );

  const value = useMemo(
    () => ({ heroComplete, registerSection }),
    [heroComplete, registerSection]
  );

  return (
    <SectionCascadeContext.Provider value={value}>
      {children}
    </SectionCascadeContext.Provider>
  );
}
