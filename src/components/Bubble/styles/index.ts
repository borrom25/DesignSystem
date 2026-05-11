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
  imageStandaloneSizeClasses,
} from "./sizes";
export { metaBaseClasses, metaCircleClasses } from "./meta";
export {
  imageWrapperClasses,
  imageStandaloneWrapperClasses,
  imageBaseClasses,
  imageStandaloneClasses,
  imageInlineClasses,
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
  mediaBleedClasses,
  imageStandaloneSizeClasses,
} from "./sizes";
import { metaBaseClasses, metaCircleClasses } from "./meta";
import {
  imageWrapperClasses,
  imageStandaloneWrapperClasses,
  imageBaseClasses,
  imageStandaloneClasses,
  imageInlineClasses,
} from "./image";
import {
  fileRootClasses,
  fileIconWrapperClasses,
  fileIconClasses,
  fileBodyClasses,
  fileTitleClasses,
  fileSizeClasses,
  fileActionClasses,
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
    bleed: mediaBleedClasses,
    standaloneWrapper: imageStandaloneWrapperClasses,
    standaloneSize: imageStandaloneSizeClasses,
    image: imageBaseClasses,
    standaloneImage: imageStandaloneClasses,
    inlineImage: imageInlineClasses,
  },
  file: {
    root: fileRootClasses,
    iconWrapper: fileIconWrapperClasses,
    icon: fileIconClasses,
    body: fileBodyClasses,
    title: fileTitleClasses,
    size: fileSizeClasses,
    action: fileActionClasses,
  },
} as const;
