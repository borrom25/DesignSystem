export const bottomRootClasses =
  "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100";

export const bottomContainerClasses = "flex items-center justify-between";

export const bottomButtonClasses = "cursor-pointer transition hover:opacity-70";

export const bottomIconClasses = "w-6 h-6 mx-3";

export const bottomBlockClasses = "flex items-center gap-6";

export const bottomPlayClasses = "group-data-[playing]:hidden";

export const bottomPauseClasses = "hidden group-data-[playing]:block";

export const bottomVolumeXClasses = "hidden group-data-[muted]:block";

export const bottomVolumeClasses = "group-data-[muted]:hidden";

export const bottomMaximizeClasses = "group-data-[fullscreen]:hidden";

export const bottomMinimizeClasses = "hidden group-data-[fullscreen]:block";

export const bottomVolumeRootClasses =
  "group/volume relative flex h-8 w-40 cursor-pointer items-center";

export const bottomVolumeTrackClasses =
  "relative h-1.5 w-full rounded-full bg-contrast-light-heavy/20";

export const bottomVolumeTrackFillClasses =
  "absolute inset-y-0 left-0 rounded-full bg-contrast-light-heavy";

export const bottomVolumeThumbClasses =
  "absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-6 w-6 rounded-full bg-contrast-light-heavy opacity-0 group-data-[active]:opacity-100 group-hover/volume:opacity-100 transition-opacity";
