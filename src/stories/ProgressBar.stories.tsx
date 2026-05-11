import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProgressBar } from "@/components";
import type { ProgressBarStatus } from "@/components/ProgressBar";
import { ProgressSegmentItem } from "@/components/ProgressBar/ProgressBar.types";

const meta = {
  title: "Components/ProgressBar",
  component: ProgressBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "320px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProgressAnimation: Story = {
  render: function ProgressAnimationStory() {
    const [progress, setProgress] = React.useState(0);
    const [status, setStatus] = React.useState<ProgressBarStatus>("loading");

    React.useEffect(() => {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setStatus("success");
            clearInterval(interval);
            return 100;
          }
          return prev + 5;
        });
      }, 200);

      return () => clearInterval(interval);
    }, []);

    return (
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <span className="text-sm font-(--font-weight-medium)">
            Индикатор Полоска
          </span>
          <ProgressBar
            title="Загрузка файла"
            progress={progress}
            status={status}
          />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm font-(--font-weight-medium)">
            Полоска индикатор
          </span>
          <ProgressBar progress={progress} status={status} />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm font-(--font-weight-medium)">Полоска</span>
          <ProgressBar
            progress={progress}
            status={status}
            showStatusLabel={false}
          />
        </div>
      </div>
    );
  },
};

const segmentedItems: ProgressSegmentItem[] = [
  { status: "success" },
  { progress: 35, status: "loading" },
  { status: "error" },
  { progress: 0, status: "loading" },
];

export const SegmentedStates: Story = {
  render: function SegmentedStatesStory() {
    return (
      <div className="flex flex-col gap-8">
        <span className="text-sm font-(--font-weight-medium)">
          Segmented ProgressBar
        </span>
        <div className="flex flex-col gap-2">
          <ProgressBar
            title="Прохождение этапов"
            segmentedItems={segmentedItems}
            status="loading"
          />
        </div>

        <div className="flex flex-col gap-2">
          <ProgressBar
            title="Без статус лейбла"
            segmentedItems={segmentedItems}
            status="success"
            showStatusLabel={false}
          />
        </div>

        <div className="flex flex-col gap-2">
          <ProgressBar
            segmentedItems={segmentedItems}
            status="error"
            showStatusLabel={false}
          />
        </div>
      </div>
    );
  },
};
