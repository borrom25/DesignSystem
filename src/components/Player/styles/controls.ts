export const controlsContainerClasses =
  " absolute inset-0 flex items-center justify-center gap-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100";

export const controlsButtonClasses =
  "cursor-pointer p-[15px] rounded-full bg-black/40 backdrop-blur-md transition hover:bg-black/60 flex items-center justify-center";

export const controlsIconClasses = "w-[40px] h-[40px]";

export const controlsSkipIconClasses = "w-[24px] h-[24px]";

export const controlsPlayClasses =
  "group-data-[playing]:hidden group-data-[ended]:hidden";

export const controlsPauseClasses = "hidden group-data-[playing]:block";

export const controlsRotateClasses = "hidden group-data-[ended]:block";
