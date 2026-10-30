import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { Maximize2, Moon, SunMedium } from "lucide-react";
import { Block, Segmented } from "@/components";
import { useTheme } from "@/providers";

const componentIconUrl = new URL("../assets/ComponentIcon.svg", import.meta.url)
  .href;

interface Developer {
  name: string;
}

interface ComponentPlaygroundProps {
  title: string;
  icon?: LucideIcon;
  developers?: Developer[];
  preview: ReactNode;
  controls?: ReactNode;
  previewLayout?: "centered" | "stretch";
}

function DeveloperChip({ name }: Developer) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex items-center gap-2">
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-heavy-default text-xs font-medium text-white">
        {initials}
      </div>
      <span className="text-sm text-primary">{name}</span>
    </div>
  );
}

export function ComponentPlayground({
  title,
  developers,
  preview,
  controls,
  previewLayout = "centered",
}: ComponentPlaygroundProps) {
  const { theme, setTheme } = useTheme();

  return (
    <Block className="overflow-hidden p-0">
      <div className="flex items-start justify-between gap-6 px-9 py-7">
        <div className="flex items-center gap-3">
          <img
            src={componentIconUrl}
            alt=""
            className="block size-13 shrink-0"
          />
          <h1 className="font-roboto-flex text-[40px] font-bold leading-[44px] tracking-[0.2px] text-primary">
            {title}
          </h1>
        </div>

        {developers && developers.length > 0 && (
          <div className="flex flex-col items-end gap-1.5">
            <span className="text-xs text-secondary">Developers:</span>
            <div className="flex items-center gap-4">
              {developers.map((dev) => (
                <DeveloperChip key={dev.name} {...dev} />
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="px-9 pb-9">
        <div className="relative flex min-h-[420px] overflow-hidden rounded-scale-3xl border border-line">
          <div
            className={
              previewLayout === "stretch"
                ? "flex min-w-0 flex-1 overflow-hidden bg-page"
                : "flex min-w-0 flex-1 items-center justify-center overflow-hidden bg-page p-10"
            }
          >
            {preview}
          </div>

          {controls && (
            <>
              <div className="w-[312px] shrink-0" aria-hidden />
              <Block className="absolute inset-y-0 right-0 flex w-[312px] flex-col overflow-hidden rounded-none border-l border-line p-0">
                <div className="flex shrink-0 items-center justify-between gap-3 border-b border-line px-5 py-4">
                  <div className="flex items-center gap-2">
                    <Segmented
                      shape="round"
                      size="xs"
                      options={[
                        { label: <SunMedium size={16} />, value: "light" },
                        { label: <Moon size={16} />, value: "dark" },
                      ]}
                      value={theme}
                      onChange={setTheme}
                    />
                  </div>
                  <button
                    type="button"
                    className="flex h-7 w-7 items-center justify-center rounded-md text-secondary transition-colors hover:bg-page hover:text-primary"
                  >
                    <Maximize2 />
                  </button>
                </div>
                <div className="min-h-0 flex-1 overflow-y-auto px-5 pt-5">
                  <div className="flex flex-col gap-3">{controls}</div>
                </div>
                <div className="h-5 shrink-0" aria-hidden />
              </Block>
            </>
          )}
        </div>
      </div>
    </Block>
  );
}
