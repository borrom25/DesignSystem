import { useEffect, useState } from "react";
import type { Theme } from "@/providers";
import { getLandingPreloadUrls } from "./preloadAssets.ts";

const SAFETY_TIMEOUT_MS = 15_000;
const FADE_OUT_MS = 300;

const preloadImage = (src: string): Promise<void> =>
  new Promise((resolve) => {
    let settled = false;
    const settle = () => {
      if (settled) return;
      settled = true;
      resolve();
    };

    const img = new Image();

    img.onload = () => {
      if (typeof img.decode === "function") {
        img.decode().then(settle).catch(settle);
      } else {
        settle();
      }
    };
    img.onerror = settle;
    img.src = src;

    if (img.complete) {
      if (typeof img.decode === "function") {
        img.decode().then(settle).catch(settle);
      } else {
        settle();
      }
    }
  });

export type LandingReadyState = {
  isAssetsReady: boolean;
  /** Assets ready and intro finished — start fade-out */
  isReady: boolean;
  /** Fade-out finished — remove overlay from DOM */
  isLoaderGone: boolean;
};

export const useLandingReady = (
  theme: Theme,
  introComplete: boolean
): LandingReadyState => {
  const [isAssetsReady, setIsAssetsReady] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isLoaderGone, setIsLoaderGone] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const safetyTimer = window.setTimeout(() => {
      if (!cancelled) setIsAssetsReady(true);
    }, SAFETY_TIMEOUT_MS);

    const fontsReady =
      typeof document !== "undefined" && document.fonts?.ready
        ? document.fonts.ready.then(() => undefined).catch(() => undefined)
        : Promise.resolve();

    getLandingPreloadUrls(theme)
      .then((urls) =>
        Promise.all([fontsReady, ...urls.map((url) => preloadImage(url))])
      )
      .then(() => {
        if (!cancelled) {
          window.clearTimeout(safetyTimer);
          setIsAssetsReady(true);
        }
      })
      .catch(() => {
        if (!cancelled) {
          window.clearTimeout(safetyTimer);
          setIsAssetsReady(true);
        }
      });

    return () => {
      cancelled = true;
      window.clearTimeout(safetyTimer);
    };
  }, [theme]);

  useEffect(() => {
    if (isReady) return;
    if (isAssetsReady && introComplete) {
      setIsReady(true);
    }
  }, [isReady, isAssetsReady, introComplete]);

  useEffect(() => {
    if (!isReady) return;

    const timer = window.setTimeout(() => {
      setIsLoaderGone(true);
    }, FADE_OUT_MS);

    return () => window.clearTimeout(timer);
  }, [isReady]);

  useEffect(() => {
    if (isReady) return;

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = overflow;
    };
  }, [isReady]);

  return { isAssetsReady, isReady, isLoaderGone };
};
