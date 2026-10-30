import { type ReactNode, useState } from "react";
import { createPortal } from "react-dom";
import { useTheme } from "@/providers";
import { cn } from "@/utils";
import { LandingRevealReadyContext } from "../model/landingRevealReady.ts";
import { useLandingReady } from "../model/useLandingReady.ts";
import { LandingIntro } from "./intro/LandingIntro.tsx";

type LandingReadyGateProps = {
  children: ReactNode;
};

export function LandingReadyGate({ children }: LandingReadyGateProps) {
  const { theme } = useTheme();
  const [introComplete, setIntroComplete] = useState(false);
  const { isReady, isLoaderGone } = useLandingReady(theme, introComplete);

  return (
    <LandingRevealReadyContext.Provider value={isReady}>
      <div className="relative w-full" aria-busy={!isReady}>
        <div
          className={cn(
            "w-full",
            isReady ? "pointer-events-auto" : "pointer-events-none"
          )}
        >
          {children}
        </div>

        {!isLoaderGone &&
          createPortal(
            <div
              className={cn(
                "fixed inset-0 z-[200] grid h-dvh w-screen place-items-center bg-page transition-opacity duration-300 ease-out",
                isReady ? "pointer-events-none opacity-0" : "opacity-100"
              )}
              aria-hidden={isReady}
            >
              <LandingIntro onComplete={() => setIntroComplete(true)} />
            </div>,
            document.body
          )}
      </div>
    </LandingRevealReadyContext.Provider>
  );
}
