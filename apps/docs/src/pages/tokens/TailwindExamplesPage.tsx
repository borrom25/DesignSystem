import { Block } from "@/components";
import { DocsCodeBlock } from "@docs/components/DocsCodeBlock";
import { DocsDemo, DocsPage, DocsSection } from "@docs/components/DocsPage";

export default function TailwindExamplesPage() {
  return (
    <DocsPage
      title="Tailwind: примеры"
      description="Готовые паттерны использования токенов через Tailwind utility-классы, как это уже принято в UI Kit."
    >
      <DocsSection title="1. Цветовые utility-классы">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_360px]">
          <Block className="p-6">
            <p className="mb-3 text-sm text-secondary">
              Базовый прикладной сценарий: фоны, текст и рамки берём из alias-
              классов, а не из сырых CSS-переменных.
            </p>
            <DocsCodeBlock
              code={`<section className="rounded-md border border-line bg-page p-4">
  <div className="rounded-md bg-brand-heavy px-4 py-3 text-on-brand">
    Primary action
  </div>

  <p className="mt-3 text-primary">Основной текст блока</p>
  <p className="mt-1 text-secondary">Вторичный поясняющий текст</p>
</section>`}
            />
          </Block>

          <DocsDemo>
            <div className="flex flex-col gap-4">
              <div className="rounded-md border border-line bg-page p-4">
                <div className="rounded-md bg-brand-heavy px-4 py-3 text-on-brand">
                  Primary action
                </div>
                <p className="mt-3 text-primary">Основной текст блока</p>
                <p className="mt-1 text-secondary">
                  Вторичный поясняющий текст
                </p>
              </div>
            </div>
          </DocsDemo>
        </div>
      </DocsSection>

      <DocsSection title="2. Spacing и radius">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_360px]">
          <Block className="p-6">
            <p className="mb-3 text-sm text-secondary">
              Generic spacing и component radius можно использовать как обычные
              Tailwind utility-классы.
            </p>
            <DocsCodeBlock
              code={`<div className="flex flex-col gap-3 rounded-md border border-line bg-generic p-4">
  <div className="rounded-sm bg-page p-3 text-primary">Header</div>
  <div className="rounded-sm bg-page p-3 text-secondary">Body</div>
</div>`}
            />
          </Block>

          <DocsDemo>
            <div className="flex flex-col gap-3 rounded-md border border-line bg-generic p-4">
              <div className="rounded-sm bg-page p-3 text-primary">Header</div>
              <div className="rounded-sm bg-page p-3 text-secondary">Body</div>
            </div>
          </DocsDemo>
        </div>
      </DocsSection>

      <DocsSection title="3. Typography utilities">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_360px]">
          <Block className="p-6">
            <p className="mb-3 text-sm text-secondary">
              Типографические токены тоже доступны как utility-классы и хорошо
              сочетаются с обычными <code>font-*</code> модификаторами.
            </p>
            <DocsCodeBlock
              code={`<div className="rounded-md border border-line bg-page p-4">
  <p className="text-body-b1 font-medium leading-body-b1 tracking-body-b1 text-primary">
    Основной текст карточки
  </p>

  <p className="mt-2 text-caption-c1 leading-caption-c1 tracking-caption-c1 text-secondary">
    Дополнительное описание и подпись
  </p>
</div>`}
            />
          </Block>

          <DocsDemo>
            <div className="rounded-md border border-line bg-page p-4">
              <p className="text-body-b1 font-medium leading-body-b1 tracking-body-b1 text-primary">
                Основной текст карточки
              </p>

              <p className="mt-2 text-caption-c1 leading-caption-c1 tracking-caption-c1 text-secondary">
                Дополнительное описание и подпись
              </p>
            </div>
          </DocsDemo>
        </div>
      </DocsSection>

      <DocsSection title="4. Component-sized tokens">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_360px]">
          <Block className="p-6">
            <p className="mb-3 text-sm text-secondary">
              Для компонентных размеров в проекте уже используется синтаксис
              Tailwind с CSS variable arbitrary values.
            </p>
            <DocsCodeBlock
              code={`<button
  className="inline-flex h-(--size-btn-md-h) items-center gap-(--size-btn-md-gap) rounded-md bg-brand-heavy px-(--size-btn-md-px) text-on-brand"
>
  Continue
</button>`}
            />
          </Block>

          <DocsDemo>
            <div className="flex items-center">
              <button className="inline-flex h-(--size-btn-md-h) items-center gap-(--size-btn-md-gap) rounded-md bg-brand-heavy px-(--size-btn-md-px) text-on-brand">
                Continue
              </button>
            </div>
          </DocsDemo>
        </div>
      </DocsSection>

      <DocsSection title="5. Правильно и неправильно">
        <div className="grid gap-4 lg:grid-cols-2">
          <Block className="p-6">
            <h3 className="mb-3 text-sm font-medium text-primary">Предпочтительно</h3>
            <DocsCodeBlock
              code={`<div className="bg-brand-heavy text-on-brand border border-line" />`}
            />
            <p className="mt-3 text-sm text-secondary">
              Коротко, читаемо и совпадает с тем, как стилизуются компоненты
              библиотеки.
            </p>
          </Block>

          <Block className="p-6">
            <h3 className="mb-3 text-sm font-medium text-primary">
              Оставляем для спецслучаев
            </h3>
            <DocsCodeBlock
              code={`<div style={{ background: "var(--background-brand-heavy-default)" }} />`}
            />
            <p className="mt-3 text-sm text-secondary">
              Такой подход уместен, когда нужен точечный raw token или свойство,
              которое неудобно выразить готовым utility-классом.
            </p>
          </Block>
        </div>
      </DocsSection>
    </DocsPage>
  );
}
