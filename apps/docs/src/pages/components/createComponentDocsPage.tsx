import {
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";
import type { LucideIcon } from "lucide-react";
import { ComponentDescription } from "@docs/components/ComponentDescription";
import { ComponentDocsPage } from "@docs/components/ComponentDocsPage";
import { ComponentPlayground } from "@docs/components/ComponentPlayground";
import {
  ComponentPropsTable,
  type PropDefinition,
} from "@docs/components/ComponentPropsTable";
import { ComponentUsage } from "@docs/components/ComponentUsage";
import packageJson from "../../../../../package.json";

type ControlsRenderer<TState> = (
  state: TState,
  controls: {
    setState: Dispatch<SetStateAction<TState>>;
    updateState: (patch: Partial<TState>) => void;
  }
) => ReactNode;

type PreviewRenderer<TState> = ControlsRenderer<TState>;

export interface ComponentDocsConfig<TState extends Record<string, unknown>> {
  title: string;
  icon?: LucideIcon;
  developers?: { name: string }[];
  previewLayout?: "centered" | "stretch";
  description: string;
  props: readonly PropDefinition[];
  initialState: TState;
  createUsageCode: (packageName: string, state: TState) => string;
  renderPreview: PreviewRenderer<TState>;
  renderControls?: ControlsRenderer<TState>;
  renderExtra?: (
    packageName: string,
    state: TState,
    controls: {
      setState: Dispatch<SetStateAction<TState>>;
      updateState: (patch: Partial<TState>) => void;
    }
  ) => ReactNode;
}

export function createComponentDocsPage<TState extends Record<string, unknown>>(
  config: ComponentDocsConfig<TState>
) {
  return function ComponentDocsGeneratedPage() {
    const [state, setState] = useState<TState>(config.initialState);
    const usageCode = config.createUsageCode(packageJson.name, state);

    const updateState = (patch: Partial<TState>) => {
      setState((prevState) => ({ ...prevState, ...patch }));
    };

    return (
      <ComponentDocsPage>
        <ComponentPlayground
          title={config.title}
          icon={config.icon}
          developers={config.developers}
          previewLayout={config.previewLayout}
          preview={config.renderPreview(state, { setState, updateState })}
          controls={config.renderControls?.(state, { setState, updateState })}
        />

        <ComponentUsage code={usageCode} />

        <ComponentDescription text={config.description} />

        <ComponentPropsTable items={config.props} />

        {config.renderExtra?.(packageJson.name, state, {
          setState,
          updateState,
        })}
      </ComponentDocsPage>
    );
  };
}
