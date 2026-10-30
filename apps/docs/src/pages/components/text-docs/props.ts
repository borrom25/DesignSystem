import type { PropDefinition } from "@docs/components/ComponentPropsTable";

export const TEXT_PROPS: PropDefinition[] = [
  {
    name: "children",
    type: "ReactNode",
    description: "Текстовое содержимое компонента.",
  },
  {
    name: "as",
    type: "ElementType",
    description: "Позволяет выбрать HTML-элемент для рендера текста.",
    defaultValue: '"span"',
  },
  {
    name: "variant",
    type: "TextVariant",
    description:
      "Типографический пресет (`TextVariant.B1`, `TextVariant.H2` и т.д.). Категория определяется автоматически: `b*` — body, `c*` — caption, `d*` — display, `h*` — heading.",
  },
  {
    name: "weight",
    type: "TextWeight",
    description:
      "Толщина шрифта (`TextWeight.Regular`, `TextWeight.Bold` и т.д.).",
    defaultValue: "TextWeight.Regular",
  },
  {
    name: "color",
    type: "TextColor",
    description:
      "Цветовая категория текста (`TextColor.Basic`, `TextColor.Brand` и т.д.).",
  },
  {
    name: "shade",
    type: "TextShade",
    description:
      "Оттенок цвета (`TextShade.Primary`, `TextShade.Heavy` и т.д.). Для `TextColor.Basic` по умолчанию `secondary`, для остальных — `heavy`.",
  },
  {
    name: "align",
    type: "TextAlign",
    description:
      "Горизонтальное выравнивание текста внутри родителя (`TextAlign.Start`, `TextAlign.Center`, `TextAlign.End`). Применяется только если проп передан.",
  },
  {
    name: "overflow",
    type: "TextOverflow",
    description:
      "Перенос и обрезка текста: `word`, `char`, `syllable` (зависит от `lang`/браузера), `truncate` (нужна ширина контейнера), `nowrap`.",
  },
  {
    name: "decoration",
    type: "TextDecoration",
    description:
      "Линия текста: `underline`, `overline`, `line-through`, `none`.",
  },
  {
    name: "className / style",
    type: "string / CSSProperties",
    description: "Позволяют донастроить внешний вид поверх встроенных стилей.",
  },
];
