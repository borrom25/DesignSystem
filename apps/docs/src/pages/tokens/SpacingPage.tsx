import { Link } from "react-router-dom";
import { Block } from "@/components";
import { DocsCodeBlock } from "@docs/components/DocsCodeBlock";
import { DocsDemo, DocsPage, DocsSection } from "@docs/components/DocsPage";
import { SpacingTokenCard } from "./components/TokenCards";
import { spacingTokens } from "./data/spacingTokens";

export default function SpacingPage() {
  return (
    <DocsPage
      title="Отступы"
      description="Spacing-токены дизайн-системы и Tailwind utility-классы для padding, margin и inset."
    >
      <DocsSection title="Как использовать">
        <Block className="p-6">
          <p className="text-sm leading-relaxed text-secondary">
            Базовая шкала живет в <code>src/tokens/Spacings.css</code> как
            <code> --generic-spacing-*</code>. В <code>@theme inline</code> она
            пробрасывается в <code>--spacing-*</code>, поэтому токены доступны как
            обычные Tailwind-классы: <code>p-4</code>, <code>mt-8</code>,
            <code> inset-3</code>. Подробнее про принцип маппинга есть на странице{" "}
            <Link to="/tokens/tailwind-principle" className="text-primary underline">
              Tailwind: принцип
            </Link>
            .
          </p>
        </Block>
      </DocsSection>

      <DocsSection title="Шкала spacing">
        <div className="grid gap-4 lg:grid-cols-2">
          {spacingTokens.map((token) => (
            <SpacingTokenCard key={token.variable} {...token} />
          ))}
        </div>
      </DocsSection>

      <DocsSection title="Пример padding и margin">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_360px]">
          <Block className="p-6">
            <p className="mb-3 text-sm text-secondary">
              Используем токены как стандартные utility-классы Tailwind. Для дробного
              шага <code>0.5</code> в проекте используется имя <code>0_5</code>.
            </p>
            <DocsCodeBlock
              code={`<section className="rounded-md border border-line bg-page p-6">
  <div className="rounded-sm bg-generic p-4">
    <p className="text-primary">Контент с системным padding</p>
    <p className="mt-2 text-secondary">Второй текстовый ряд</p>
  </div>
</section>`}
            />
          </Block>

          <DocsDemo>
            <section className="rounded-md border border-line bg-page p-6">
              <div className="rounded-sm bg-generic p-4">
                <p className="text-primary">Контент с системным padding</p>
                <p className="mt-2 text-secondary">Второй текстовый ряд</p>
              </div>
            </section>
          </DocsDemo>
        </div>
      </DocsSection>
    </DocsPage>
  );
}
