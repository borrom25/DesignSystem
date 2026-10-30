export const photoSlideMs = 400;

export const photoRotateMs = 200;

export const filmExitNextClasses = "photo-film-exit-next";

export const filmEnterNextClasses = "photo-film-enter-next";

export const filmExitPrevClasses = "photo-film-exit-prev";

export const filmEnterPrevClasses = "photo-film-enter-prev";

export function getFilmClasses(
  motion: "idle" | "enter" | "exit",
  direction: 1 | -1
) {
  if (motion === "idle") return undefined;
  if (motion === "exit") {
    return direction === 1 ? filmExitNextClasses : filmExitPrevClasses;
  }

  return direction === 1 ? filmEnterNextClasses : filmEnterPrevClasses;
}
