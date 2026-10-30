import { Link } from "react-router-dom";
import { Block } from "@/components";
import { DocsPage, DocsSection } from "@docs/components/DocsPage";
import { ColorTokenCard } from "./components/TokenCards";
import { backgroundTokens, textTokens } from "./data/colorTokens";

export default function ColorsPage() {
  return (
    <DocsPage
      title="Цвета"
      description="Справочник по raw semantic color tokens. Значения CSS-переменных зависят от активной темы, а для прикладного использования чаще подходят Tailwind alias-классы."
    >
      <DocsSection title="Как читать эту страницу">
        <Block className="p-6">
          <p className="text-sm leading-relaxed text-secondary">
            Здесь собраны исходные семантические цветовые токены библиотеки. Эта
            страница удобна как референс по CSS-переменным, а прикладное
            использование через utility-классы разобрано на страницах{" "}
            <Link to="/tokens/tailwind-principle" className="text-primary underline">
              Tailwind: принцип
            </Link>{" "}
            и{" "}
            <Link to="/tokens/tailwind-examples" className="text-primary underline">
              Tailwind: примеры
            </Link>
            .
          </p>
        </Block>
      </DocsSection>

      <DocsSection title="Фон">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {backgroundTokens.map((token) => (
            <ColorTokenCard key={token.variable} kind="background" {...token} />
          ))}
        </div>
      </DocsSection>

      <DocsSection title="Текст">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {textTokens.map((token) => (
            <ColorTokenCard key={token.variable} kind="text" {...token} />
          ))}
        </div>
      </DocsSection>
    </DocsPage>
  );
}
