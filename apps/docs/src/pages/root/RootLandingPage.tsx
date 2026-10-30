import { lazy, Suspense } from "react";
import { RootMain } from "./ui/main/RootMain";
import { RootComponents } from "./ui/components/RootComponents.tsx";
import { LandingReadyGate } from "./ui/LandingReadyGate.tsx";
import { useLandingRevealReady } from "./model/landingRevealReady.ts";
import { SectionCascadeProvider } from "./model/sectionCascade.tsx";
import { useHeroReveal } from "./ui/main/model/useHeroReveal.ts";

const RootPatterns = lazy(() =>
  import("./ui/patterns/RootPatterns.tsx").then((m) => ({
    default: m.RootPatterns,
  }))
);
const RootThemizer = lazy(() =>
  import("./ui/themizer/RootThemizer.tsx").then((m) => ({
    default: m.RootThemizer,
  }))
);
const RootIcons = lazy(() =>
  import("./ui/icons/RootIcons.tsx").then((m) => ({
    default: m.RootIcons,
  }))
);
const RootConnection = lazy(() =>
  import("./ui/connection/RootConnection.tsx").then((m) => ({
    default: m.RootConnection,
  }))
);
const RootFooter = lazy(() =>
  import("./ui/footer/RootFooter.tsx").then((m) => ({
    default: m.RootFooter,
  }))
);

const BelowFoldFallback = () => (
  <div className="h-[400px] w-full" aria-hidden />
);

export function RootLandingPage() {
  return (
    <LandingReadyGate>
      <LandingPageContent />
    </LandingReadyGate>
  );
}

function LandingPageContent() {
  const isReady = useLandingRevealReady();
  const { isVisible, isComplete } = useHeroReveal(isReady);

  return (
    <SectionCascadeProvider heroComplete={isComplete}>
      <main className="flex w-full flex-col items-center gap-[70px]">
        <RootMain isVisible={isVisible} />
        <RootComponents />
        <Suspense fallback={<BelowFoldFallback />}>
          <div className="flex w-full flex-col items-center gap-[70px]">
            <section className="flex w-full flex-col items-center">
              <RootPatterns />
            </section>
            <section className="flex w-full flex-col items-center">
              <RootThemizer />
            </section>
            <section className="flex w-full flex-col items-center">
              <RootIcons />
            </section>
            <section className="flex w-full flex-col items-center [content-visibility:auto] [contain-intrinsic-size:auto_400px]">
              <RootConnection />
            </section>
            <RootFooter />
          </div>
        </Suspense>
      </main>
    </SectionCascadeProvider>
  );
}
