import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Button, ListItem, Popover, PopoverSurface } from "@/components";

const meta = {
  title: "Components/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Многофункциональный поповер на базе Radix UI. " +
          "Поддерживает modal/non-modal режимы, управляемое и неуправляемое состояние, " +
          "позиционирование с обходом коллизий, прокрутку с lazy-loading, анимации открытия/закрытия.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <Popover>
      <Popover.Trigger>
        <Button>Открыть поповер</Button>
      </Popover.Trigger>
      <Popover.Content>
        <PopoverSurface>
          <div className="p-4">
            <h3 className="font-semibold mb-2">Базовый поповер</h3>
            <p className="text-sm text-gray-600">
              Кликните на кнопку, чтобы открыть. Нажмите Esc или кликните вне —
              чтобы закрыть.
            </p>
          </div>
        </PopoverSurface>
      </Popover.Content>
    </Popover>
  ),
};

export const FocusReturn: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-4">
      <p className="text-xs text-gray-500 max-w-xs text-center">
        Откройте поповер, затем закройте его клавишей Esc или кликом снаружи —
        фокус автоматически вернётся на кнопку-триггер.
      </p>
      <Popover>
        <Popover.Trigger>
          <Button>Открыть (затем Esc)</Button>
        </Popover.Trigger>
        <Popover.Content>
          <PopoverSurface>
            <div className="p-4 w-56">
              <p className="text-sm">
                Нажмите Esc — фокус вернётся на триггер.
              </p>
            </div>
          </PopoverSurface>
        </Popover.Content>
      </Popover>
    </div>
  ),
};

export const MatchTrigger: Story = {
  render: () => (
    <Popover>
      <Popover.Trigger>
        <Button style={{ width: 300 }}>Широкая кнопка (300px)</Button>
      </Popover.Trigger>
      <Popover.Content matchTriggerWidth>
        <PopoverSurface>
          <div className="p-4">
            <p className="text-sm">
              Ширина контента совпадает с шириной триггера (через{" "}
              <code>--radix-popover-trigger-width</code>).
            </p>
          </div>
        </PopoverSurface>
      </Popover.Content>
    </Popover>
  ),
};

export const MaxHeight: Story = {
  render: () => {
    const TOTAL = 50;
    const BATCH = 10;
    const [count, setCount] = useState(BATCH);
    const [loading, setLoading] = useState(false);

    const handleEndReached = () => {
      if (loading || count >= TOTAL) return;
      setLoading(true);
      window.setTimeout(() => {
        setCount((prev) => Math.min(prev + BATCH, TOTAL));
        setLoading(false);
      }, 400);
    };

    return (
      <Popover>
        <Popover.Trigger>
          <Button style={{ width: 300 }}>Открыть с прокруткой</Button>
        </Popover.Trigger>
        <Popover.Content matchTriggerWidth>
          <PopoverSurface>
            <Popover.ScrollArea
              maxHeight={300}
              scrollEndOffset={0}
              onScrollEnd={handleEndReached}
              isLoading={loading}
              hasMore={count < TOTAL}
            >
              <div className="p-4 space-y-2">
                <h3 className="font-semibold mb-2">Длинный список</h3>
                <p className="text-xs text-gray-500">
                  Загружено: {count} из {TOTAL}
                </p>
                {Array.from({ length: count }, (_, i) => (
                  <ListItem
                    key={i}
                    title={`Элемент ${i + 1}`}
                    className="w-full"
                  ></ListItem>
                ))}
                {loading && (
                  <div className="p-2 text-xs text-gray-400">Загрузка...</div>
                )}
                {count >= TOTAL && (
                  <div className="p-2 text-xs text-gray-400 text-center">
                    Все элементы загружены
                  </div>
                )}
              </div>
            </Popover.ScrollArea>
          </PopoverSurface>
        </Popover.Content>
      </Popover>
    );
  },
};
