import { Link } from "react-router-dom";
import { Block } from "@/components";
import { DocsDemo, DocsPage, DocsSection } from "@docs/components/DocsPage";

interface MappingExample {
  title: string;
  source: string;
  alias: string;
  utility: string;
}

const mappingExamples: MappingExample[] = [
  {
    title: "Фон страницы",
    source: "--background-basic-background-page",
    alias: "--color-page",
    utility: "bg-page",
  },
  {
    title: "Основной брендовый фон",
    source: "--background-brand-heavy-default",
    alias: "--color-brand-heavy",
    utility: "bg-brand-heavy",
  },
  {
    title: "Основной текст",
    source: "--text-basic-primary",
    alias: "--color-primary",
    utility: "text-primary",
  },
  {
    title: "Базовая линия",
    source: "--line-basic-generic",
    alias: "--color-line",
    utility: "border-line",
  },
];

function MappingCard({ title, source, alias, utility }: MappingExample) {
  return (
    <Block className="flex flex-col gap-3 p-4">
      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium text-primary">{title}</span>
        <span className="text-xs text-secondary">Реальная цепочка из проекта</span>
      </div>
      <div className="flex flex-col gap-2 text-sm text-secondary">
        <code className="rounded-md bg-page px-3 py-2 text-xs text-primary">
          {source}
        </code>
        <span className="text-center text-xs text-secondary">↓ @theme inline ↓</span>
        <code className="rounded-md bg-page px-3 py-2 text-xs text-primary">
          {alias}
        </code>
        <span className="text-center text-xs text-secondary">
          ↓ Tailwind utility ↓
        </span>
        <code className="rounded-md bg-page px-3 py-2 text-xs text-primary">
          {utility}
        </code>
      </div>
    </Block>
  );
}

export default function TailwindPrinciplePage() {
  return (
    <DocsPage
      title="Tailwind: принцип"
      description="Как семантические токены из дизайн-системы превращаются в utility-классы Tailwind внутри UI Kit."
    >
      <DocsSection title="1. Откуда берутся токены">
        <Block className="p-6">
          <p className="text-sm leading-relaxed text-secondary">
            Исходные значения живут в <code>src/tokens/*.css</code> как
            CSS-переменные. Затем на <code>html</code> навешиваются классы
            токенов и активная тема, после чего <code>@theme inline</code> из
            <code>src/styles/global.css</code> пробрасывает эти значения в
            Tailwind-friendly alias.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-secondary">
            <li>
              <code>Value</code>, <code>spacings</code>, <code>typography</code>
              , <code>TypoComponent</code>, <code>br-md</code> и
              <code> br_size</code> подключают наборы токенов.
            </li>
            <li>
              <code>themes_light</code> и <code>themes_dark</code> переключают
              семантические цветовые значения.
            </li>
            <li>
              Дальше Tailwind использует alias-переменные, чтобы дать удобные
              классы вроде <code>bg-brand-heavy</code> и
              <code> text-primary</code>.
            </li>
          </ul>
        </Block>
      </DocsSection>

      <DocsSection title="2. Активация токенов и темы">
        <Block className="p-6">
          <p className="text-sm leading-relaxed text-secondary">
            Подключение стилей, <code>UIKitProvider</code> и настройка темы уже
            описаны на странице{" "}
            <Link to="/quick-start" className="text-primary underline">
              Быстрый старт
            </Link>
            . В этом разделе мы не дублируем setup и фокусируемся только на том,
            как после активации токенов появляются alias для Tailwind.
          </p>
        </Block>
      </DocsSection>

      <DocsSection title="3. Как токен становится utility-классом">
        <DocsDemo>
          <div className="grid gap-4 lg:grid-cols-2">
            {mappingExamples.map((example) => (
              <MappingCard key={example.utility} {...example} />
            ))}
          </div>
        </DocsDemo>
      </DocsSection>

      <DocsSection title="4. Какой способ считать основным">
        <div className="grid gap-4 lg:grid-cols-2">
          <Block className="p-6">
            <h3 className="mb-3 text-sm font-medium text-primary">
              Предпочтительный путь
            </h3>
            <ul className="list-disc space-y-2 pl-5 text-sm text-secondary">
              <li>
                Используйте utility-классы, когда для токена уже есть alias в
                Tailwind: <code>bg-page</code>, <code>text-primary</code>,
                <code> border-line</code>, <code>rounded-md</code>.
              </li>
              <li>
                Это делает разметку короче и совпадает с тем, как уже написаны
                компоненты библиотеки.
              </li>
            </ul>
          </Block>

          <Block className="p-6">
            <h3 className="mb-3 text-sm font-medium text-primary">
              Когда нужен raw token
            </h3>
            <ul className="list-disc space-y-2 pl-5 text-sm text-secondary">
              <li>
                Когда свойство не покрыто стандартной utility-сеткой Tailwind.
              </li>
              <li>
                Когда нужен точечный inline-style или произвольное CSS-свойство
                через <code>var(--token)</code>.
              </li>
              <li>
                Когда вы документируете саму семантическую переменную, как на
                странице <Link to="/tokens/colors" className="text-primary underline">Цвета</Link>.
              </li>
            </ul>
          </Block>
        </div>
      </DocsSection>

      <DocsSection title="5. Что считать правилом для docs">
        <Block className="p-6">
          <p className="text-sm leading-relaxed text-secondary">
            Если страница объясняет, как пользоваться библиотекой, лучше
            показывать готовые utility-классы. Если страница играет роль
            справочника по дизайн-токенам, полезно дополнительно оставлять raw
            CSS-переменную. Именно поэтому раздел токенов удобно делить на
            референсную страницу <code>Цвета</code> и прикладные страницы про
            Tailwind.
          </p>
        </Block>
      </DocsSection>
    </DocsPage>
  );
}
