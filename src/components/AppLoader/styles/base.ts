export const appLoaderContainerClasses =
  "grid min-h-screen w-full place-items-center bg-page text-primary";

export const appLoaderSvgClasses =
  "inline-block align-middle [--app-loader-top:var(--color-brand-text-heavy)] [--app-loader-right:var(--color-brand-text-medium)] [--app-loader-bottom-right:var(--color-info-text-heavy)] [--app-loader-bottom:var(--color-info-text-medium)] [--app-loader-bottom-left:var(--color-info-text-heavy)] [--app-loader-left:var(--color-brand-text-medium)]";

export const appLoaderAnimatedPathClasses =
  "origin-center [transform-box:fill-box]";

export const appLoaderTopPathClasses = `${appLoaderAnimatedPathClasses} animate-[app-loader-top_2s_ease-in-out_infinite]`;

export const appLoaderRightPathClasses = `${appLoaderAnimatedPathClasses} animate-[app-loader-right_2s_ease-in-out_infinite]`;

export const appLoaderBottomRightPathClasses = `${appLoaderAnimatedPathClasses} animate-[app-loader-left_2s_ease-in-out_infinite]`;

export const appLoaderBottomPathClasses = `${appLoaderAnimatedPathClasses} animate-[app-loader-bottom_2s_ease-in-out_infinite]`;

export const appLoaderBottomLeftPathClasses = `${appLoaderAnimatedPathClasses} animate-[app-loader-right_2s_ease-in-out_infinite]`;

export const appLoaderLeftPathClasses = `${appLoaderAnimatedPathClasses} animate-[app-loader-left_2s_ease-in-out_infinite]`;
