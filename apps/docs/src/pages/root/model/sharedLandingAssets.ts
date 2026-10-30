import figmaLogo from "@docs/assets/root/Figma.svg";
import gitlabLogo from "@docs/assets/root/Gitlab.svg";
import componentsImg from "@docs/assets/root/components/Components.svg";
import commentCursorGreen from "@docs/assets/root/main/CommentCursorGreen.svg";
import commentCursorPink from "@docs/assets/root/main/CommentCursorPink.svg";
import commentCursorYellow from "@docs/assets/root/main/CommentCursorYellow.svg";
import logoAlabuga from "@docs/assets/root/logo/LogoAlabuga.gif";
import themizerDark from "@docs/assets/root/themizer/ThemizerDark.svg";
import desktopLastLight from "@docs/assets/root/patterns/DesktopLastLight.svg";

/** Assets always needed on the landing (hero, components, themizer). */
export const SHARED_LANDING_ASSETS = [
  figmaLogo,
  gitlabLogo,
  componentsImg,
  commentCursorGreen,
  commentCursorPink,
  commentCursorYellow,
  logoAlabuga,
  themizerDark,
  desktopLastLight,
] as const;
