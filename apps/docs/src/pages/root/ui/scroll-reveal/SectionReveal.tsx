import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useSectionCascade } from "../../model/sectionCascade.tsx";
import { useSectionReveal } from "../../model/useSectionReveal.ts";
import {
  prefersReducedMotion,
  REVEAL_TIMING,
  type LandingSectionId,
} from "../../model/revealTiming.ts";

type SectionRevealState = {
  isVisible: boolean;
  childDelay: (index: number) => number;
};

const SectionRevealStateContext = createContext<SectionRevealState>({
  isVisible: true,
  childDelay: () => 0,
});

export const useSectionRevealState = () =>
  useContext(SectionRevealStateContext);

export const useRevealChildEnabled = (index: number) => {
  const { isVisible, childDelay } = useSectionRevealState();
  const [enabled, setEnabled] = useState(
    () => isVisible && prefersReducedMotion()
  );

  useEffect(() => {
    if (!isVisible) {
      setEnabled(false);
      return;
    }

    if (prefersReducedMotion()) {
      setEnabled(true);
      return;
    }

    const timer = window.setTimeout(() => setEnabled(true), childDelay(index));
    return () => window.clearTimeout(timer);
  }, [childDelay, index, isVisible]);

  return enabled;
};

type SectionRevealProps = {
  id: LandingSectionId;
  children: ReactNode;
  className?: string;
};

type RevealGate = {
  enabled: boolean;
  delayMs: number;
  observe: boolean;
};

export function SectionReveal({ id, children, className }: SectionRevealProps) {
  const { heroComplete, registerSection } = useSectionCascade();
  const ref = useRef<HTMLDivElement>(null);
  const [gate, setGate] = useState<RevealGate>({
    enabled: false,
    delayMs: 0,
    observe: true,
  });

  useEffect(() => {
    if (!heroComplete) {
      setGate({ enabled: false, delayMs: 0, observe: true });
      return;
    }

    const el = ref.current;
    if (!el) return;

    const { delayMs } = registerSection(id, el);
    setGate({
      enabled: true,
      delayMs: delayMs ?? 0,
      observe: delayMs == null,
    });
  }, [heroComplete, id, registerSection]);

  const { isVisible } = useSectionReveal(ref, gate);

  const childDelay = useMemo(
    () => (index: number) =>
      prefersReducedMotion() ? 0 : index * REVEAL_TIMING.childStaggerMs,
    []
  );

  return (
    <SectionRevealStateContext.Provider value={{ isVisible, childDelay }}>
      <div ref={ref} className={className} data-landing-section={id}>
        {children}
      </div>
    </SectionRevealStateContext.Provider>
  );
}
