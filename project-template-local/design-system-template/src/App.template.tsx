import { Button } from "borrom-ds-test";
import { Settings } from "lucide-react";

export default function App() {
  return (
    <main className="min-h-screen bg-page p-7 text-primary">
      <div className="mx-auto flex max-w-[960px] flex-col gap-7">
        <header className="flex items-center justify-between gap-5">
          <div className="flex flex-col gap-1">
            <h1 className="font-roboto-flex text-heading-h3 font-heading-h3-medium leading-heading-h3 tracking-heading-h3">
              Figma implementation
            </h1>
            <p className="font-roboto-flex text-sm text-secondary">
              Replace this starter screen with the selected Figma node.
            </p>
          </div>

          <Button size="sm" type="flat" color="inverse" iconLeft={Settings}>
            Settings
          </Button>
        </header>
      </div>
    </main>
  );
}
