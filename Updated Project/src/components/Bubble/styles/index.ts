export {
  containerBaseClasses,
  alignmentClasses,
  shellBaseClasses,
  shellRadiusClasses,
  shellSideClasses,
  textClasses,
} from "./base";
export {
  shellSizeClasses,
  fileShellSizeClasses,
  textSizeClasses,
  metaSizeClasses,
  mediaBleedClasses,
} from "./sizes";
export {
  metaBaseClasses,
  metaCircleClasses,
  metaOutsideShellClasses,
} from "./meta";
export {
  imageWrapperClasses,
  imageBaseClasses,
  imageGridClasses,
  imageClasses,
  imageContainerClasses,
  imageButtonAllClasses,
} from "./image";
export {
  fileRootClasses,
  fileIconWrapperClasses,
  fileIconClasses,
  fileBodyClasses,
  fileTitleClasses,
  fileSizeClasses,
  fileActionClasses,
} from "./file";

import {
  containerBaseClasses,
  alignmentClasses,
  shellBaseClasses,
  shellRadiusClasses,
  shellSideClasses,
  textClasses,
} from "./base";
import {
  shellSizeClasses,
  fileShellSizeClasses,
  textSizeClasses,
  metaSizeClasses,
  imageSizeClasses,
} from "./sizes";
import {
  metaBaseClasses,
  metaCircleClasses,
  metaOutsideShellClasses,
} from "./meta";
import {
  imageWrapperClasses,
  imageBaseClasses,
  imageClasses,
  imageGridClasses,
  imageContainerClasses,
  imageButtonAllClasses,
} from "./image";
import {
  fileRootClasses,
  fileIconWrapperClasses,
  fileIconClasses,
  fileBodyClasses,
  fileTitleClasses,
  fileSizeClasses,
  fileActionClasses,
  fileClasses,
} from "./file";

export const bubbleStyles = {
  container: containerBaseClasses,
  alignment: alignmentClasses,
  shell: {
    base: shellBaseClasses,
    radius: shellRadiusClasses,
    side: shellSideClasses,
    size: shellSizeClasses,
    fileSize: fileShellSizeClasses,
    metaOutside: metaOutsideShellClasses,
  },
  text: {
    base: textClasses,
    size: textSizeClasses,
  },
  meta: {
    base: metaBaseClasses,
    size: metaSizeClasses,
    circle: metaCircleClasses,
  },
  image: {
    wrapper: imageWrapperClasses,
    size: imageSizeClasses,
    base: imageBaseClasses,
    image: imageClasses,
    grid: imageGridClasses,
    container: imageContainerClasses,
    buttonAll: imageButtonAllClasses,
  },
  file: {
    root: fileRootClasses,
    file: fileClasses,
    iconWrapper: fileIconWrapperClasses,
    icon: fileIconClasses,
    body: fileBodyClasses,
    title: fileTitleClasses,
    size: fileSizeClasses,
    action: fileActionClasses,
  },
} as const;
