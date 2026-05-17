# Правила работы с Git-ссылкой из Figma

Используй этот сценарий, когда Figma-компонент содержит ссылку на Git, docs или Code Connect.

## Главное

Git-ссылка означает, что компонент уже имеет кодовую реализацию или документацию. В этом случае нельзя верстать компонент заново по слоям, пока не проверены существующие исходники.

## Порядок работы

1. Открой ссылку из Figma и определи путь к компоненту.
2. Проверь runtime-файл, types, styles, local export и story.
3. Проверь публичный import из `borrom-ds-test`.
4. Сопоставь Figma properties/variants со props из types.
5. Используй готовый компонент в page-level композиции.
6. Если нужного prop или state нет, зафиксируй `Temporary mapping` или `Assumption`.

## Import

```tsx
import { Button } from "borrom-ds-test";
import "borrom-ds-test/styles.css";
```

Не импортируй из внутренних путей `src/components/...` в проекте реализации макета.

## Если пакет недоступен

Если `npm view borrom-ds-test version` или `npm install` падает, это не проблема Git-ссылки. Это проблема доставки npm-пакета.

В отчете фиксируй:

```text
Install/access blocker: borrom-ds-test is not available from current npm registry.
```

Не переключайся на git/file/link workaround без решения пользователя.

## Когда можно идти по слоям Figma

Только если:

- компонента нет в `borrom-ds-test`;
- Git/docs/Code Connect не дают рабочей реализации;
- пользователь согласовал fallback.

Даже тогда PNG используется только для визуальной проверки, не как источник размеров.
