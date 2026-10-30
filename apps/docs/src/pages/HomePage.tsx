import { DocsPage, DocsSection } from "@docs/components/DocsPage";
import { QuickStartStepCard } from "./quick-start/QuickStartStepCard";
import { QUICK_START_STEPS } from "./quick-start/steps";

export default function HomePage() {
  return (
    <DocsPage
      title="Быстрый старт"
      description="Быстрый старт по подключению UI-библиотеки в проект с Tailwind CSS."
    >
      {QUICK_START_STEPS.map((step) => (
        <DocsSection key={step.title} title={step.title}>
          <QuickStartStepCard description={step.description} code={step.code}>
            {step.content}
          </QuickStartStepCard>
        </DocsSection>
      ))}
    </DocsPage>
  );
}
