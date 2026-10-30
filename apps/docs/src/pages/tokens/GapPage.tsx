import { Link } from "react-router-dom";
import { Block } from "@/components";
import { DocsCodeBlock } from "@docs/components/DocsCodeBlock";
import { DocsDemo, DocsPage, DocsSection } from "@docs/components/DocsPage";
import { GapTokenCard } from "./components/TokenCards";
import { componentGapTokens, gapTokens } from "./data/gapTokens";

export default function GapPage() {
  return (
    <DocsPage
      title="Gap"
      description="Gap-токены из spacing-шкалы и примеры применения через Tailwind."
    >
      <DocsSection title="Как выбирать gap">
        <Block className="p-6">
          <p className="text-sm leading-relaxed text-secondary">
            Для обычной раскладки используйте базовую spacing-шкалу:
            <code> gap-1</code>, <code>gap-2</code>, <code>gap-3</code>,
            <code> gap-5</code> и дальше по токенам. Это те же значения, что
            описаны на странице{" "}
            <Link to="/tokens/spacing" className="text-primary underline">
              Отступы
            </Link>
            .
          </p>
        </Block>
      </DocsSection>

      <DocsSection title="Шкала gap">
        <div className="grid gap-4 lg:grid-cols-3">
          {gapTokens.map((token) => (
            <GapTokenCard key={token.utility} {...token} />
          ))}
        </div>
      </DocsSection>

      <DocsSection title="Component gap как спецслучай">
        <Block className="mb-4 p-6">
          <p className="text-sm leading-relaxed text-secondary">
            Если нужно повторить внутренний gap конкретного компонента, можно взять
            component alias через CSS variable arbitrary value. Для обычных layout-
            отступов это не основной путь.
          </p>
        </Block>
        <div className="grid gap-4 lg:grid-cols-3">
          {componentGapTokens.map((token) => (
            <GapTokenCard key={token.utility} {...token} />
          ))}
        </div>
      </DocsSection>

      <DocsSection title="Пример Tailwind">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_360px]">
          <Block className="p-6">
            <p className="mb-3 text-sm text-secondary">
              В прикладном коде чаще всего пишем короткий spacing-класс:
              <code> gap-2</code>, <code>gap-3</code>, <code>gap-5</code>.
            </p>
            <DocsCodeBlock
              code={`<button className="inline-flex h-(--size-btn-md-h) items-center gap-4 rounded-md bg-brand-heavy px-(--size-btn-md-px) text-on-brand">
  <span>Icon</span>
  <span>Button text</span>
</button>

<div className="flex flex-col gap-3">
  <p className="text-primary">Заголовок</p>
  <p className="text-secondary">Описание</p>
</div>`}
            />
          </Block>

          <DocsDemo>
            <div className="flex flex-col gap-6">
              <button className="inline-flex h-(--size-btn-md-h) items-center gap-4 rounded-md bg-brand-heavy px-(--size-btn-md-px) text-on-brand">
                <span>Icon</span>
                <span>Button text</span>
              </button>

              <div className="flex flex-col gap-3 rounded-md border border-line bg-page p-4">
                <p className="text-primary">Заголовок</p>
                <p className="text-secondary">Описание</p>
              </div>
            </div>
          </DocsDemo>
        </div>
      </DocsSection>
    </DocsPage>
  );
}
