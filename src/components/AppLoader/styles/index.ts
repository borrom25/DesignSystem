import {
  appLoaderBottomLeftPathClasses,
  appLoaderBottomPathClasses,
  appLoaderBottomRightPathClasses,
  appLoaderContainerClasses,
  appLoaderLeftPathClasses,
  appLoaderRightPathClasses,
  appLoaderSvgClasses,
  appLoaderTopPathClasses,
} from "./base";

export {
  appLoaderBottomLeftPathClasses,
  appLoaderBottomPathClasses,
  appLoaderBottomRightPathClasses,
  appLoaderContainerClasses,
  appLoaderLeftPathClasses,
  appLoaderRightPathClasses,
  appLoaderSvgClasses,
  appLoaderTopPathClasses,
};

export const appLoaderStyles = {
  container: appLoaderContainerClasses,
  svg: appLoaderSvgClasses,
  topPath: appLoaderTopPathClasses,
  rightPath: appLoaderRightPathClasses,
  bottomRightPath: appLoaderBottomRightPathClasses,
  bottomPath: appLoaderBottomPathClasses,
  bottomLeftPath: appLoaderBottomLeftPathClasses,
  leftPath: appLoaderLeftPathClasses,
} as const;
