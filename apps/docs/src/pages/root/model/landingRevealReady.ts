import { createContext, useContext } from "react";

export const LandingRevealReadyContext = createContext(false);

export const useLandingRevealReady = () =>
  useContext(LandingRevealReadyContext);
