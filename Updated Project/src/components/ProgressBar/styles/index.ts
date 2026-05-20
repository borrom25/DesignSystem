export * from "./base";
export * from "./variants";

import * as progressBarBase from "./base";
import * as progressBarVariants from "./variants";

export const progressBarStyles = {
  wrapper: progressBarBase.wrapperClasses,
  topRow: progressBarBase.topRowClasses,
  header: progressBarBase.headerClasses,
  statusSlotBesideTrack: progressBarBase.statusSlotBesideTrackClasses,
  statusSlotWithTitle: progressBarBase.statusSlotWithTitleClasses,
  title: progressBarBase.titleClasses,
  progressWrapper: progressBarBase.progressWrapperClasses,
  progressTrack: progressBarBase.progressTrackClasses,
  progressBar: progressBarBase.progressBarBaseClasses,
  status: progressBarVariants.statusClasses,
} as const;
