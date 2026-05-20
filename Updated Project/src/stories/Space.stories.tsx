import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Button, Space } from "@/components";
import { Color, Size, Type } from "@/types";

const meta = {
  title: "Components/Space",
  component: Space,
  tags: ["autodocs"],
} satisfies Meta<typeof Space>;

export default meta;
type Story = StoryObj<typeof meta>;

const justifies = [
  "start",
  "center",
  "end",
  "between",
  "around",
  "evenly",
] as const;
const aligns = ["start", "center", "end", "stretch", "baseline"] as const;
const directions = ["row", "col", "row-reverse", "col-reverse"] as const;
const wraps = ["nowrap", "wrap", "wrap-reverse"] as const;

export const Full: Story = {
  render: () => {
    const [gapMode, setGapMode] = useState<"xs" | "sm" | "md" | "custom">("sm");
    const [paddingMode, setPaddingMode] = useState<
      "none" | "xs" | "sm" | "md" | "custom"
    >("sm");
    const [justify, setJustify] = useState<(typeof justifies)[number]>("start");
    const [align, setAlign] = useState<(typeof aligns)[number]>("start");
    const [direction, setDirection] =
      useState<(typeof directions)[number]>("row");
    const [wrap, setWrap] = useState<(typeof wraps)[number]>("wrap");
    const [fullWidth, setFullWidth] = useState(true);
    const [fullHeight, setFullHeight] = useState(true);
    const [flex1, setFlex1] = useState(false);

    return (
      <Space direction="col">
        <Space
          direction="col"
          gapSize={Size.Xs}
          className="rounded-md border border-line p-3"
        >
          <p className="text-xs text-secondary">Gap</p>
          <Space flexWrap="wrap" gapSize={Size.Xs}>
            {(["xs", "sm", "md", "custom"] as const).map((item) => (
              <Button
                key={item}
                size={Size.Xs}
                color={gapMode === item ? Color.Brand : Color.Inverse}
                type={gapMode === item ? Type.Fill : Type.Outline}
                onClick={() => setGapMode(item)}
              >
                {item}
              </Button>
            ))}
          </Space>
          <p className="text-xs text-secondary">Padding</p>
          <Space flexWrap="wrap" gapSize={Size.Xs}>
            {(["none", "xs", "sm", "md", "custom"] as const).map((item) => (
              <Button
                key={item}
                size={Size.Xs}
                color={paddingMode === item ? Color.Brand : Color.Inverse}
                type={paddingMode === item ? Type.Fill : Type.Outline}
                onClick={() => setPaddingMode(item)}
              >
                {item}
              </Button>
            ))}
          </Space>
          <p className="text-xs text-secondary">Justify</p>
          <Space flexWrap="wrap" gapSize={Size.Xs}>
            {justifies.map((item) => (
              <Button
                key={item}
                size={Size.Xs}
                color={justify === item ? Color.Brand : Color.Inverse}
                type={justify === item ? Type.Fill : Type.Outline}
                onClick={() => setJustify(item)}
              >
                {item}
              </Button>
            ))}
          </Space>
          <p className="text-xs text-secondary">Align</p>
          <Space flexWrap="wrap" gapSize={Size.Xs}>
            {aligns.map((item) => (
              <Button
                key={item}
                size={Size.Xs}
                color={align === item ? Color.Brand : Color.Inverse}
                type={align === item ? Type.Fill : Type.Outline}
                onClick={() => setAlign(item)}
              >
                {item}
              </Button>
            ))}
          </Space>
          <p className="text-xs text-secondary">Direction</p>
          <Space flexWrap="wrap" gapSize={Size.Xs}>
            {directions.map((item) => (
              <Button
                key={item}
                size={Size.Xs}
                color={direction === item ? Color.Brand : Color.Inverse}
                type={direction === item ? Type.Fill : Type.Outline}
                onClick={() => setDirection(item)}
              >
                {item}
              </Button>
            ))}
          </Space>
          <p className="text-xs text-secondary">Wrap</p>
          <Space flexWrap="wrap" gapSize={Size.Xs}>
            {wraps.map((item) => (
              <Button
                key={item}
                size={Size.Xs}
                color={wrap === item ? Color.Brand : Color.Inverse}
                type={wrap === item ? Type.Fill : Type.Outline}
                onClick={() => setWrap(item)}
              >
                {item}
              </Button>
            ))}
          </Space>
          <p className="text-xs text-secondary">Flags</p>
          <Space flexWrap="wrap" gapSize={Size.Xs}>
            <Button
              size={Size.Xs}
              color={fullWidth ? Color.Brand : Color.Inverse}
              type={fullWidth ? Type.Fill : Type.Outline}
              onClick={() => setFullWidth((prev) => !prev)}
            >
              fullWidth
            </Button>
            <Button
              size={Size.Xs}
              color={fullHeight ? Color.Brand : Color.Inverse}
              type={fullHeight ? Type.Fill : Type.Outline}
              onClick={() => setFullHeight((prev) => !prev)}
            >
              fullHeight
            </Button>
            <Button
              size={Size.Xs}
              color={flex1 ? Color.Brand : Color.Inverse}
              type={flex1 ? Type.Fill : Type.Outline}
              onClick={() => setFlex1((prev) => !prev)}
            >
              flex1
            </Button>
          </Space>
        </Space>

        <div className="h-[280px] rounded-md border border-line p-4">
          <Space
            justify={justify}
            align={align}
            direction={direction}
            flexWrap={wrap}
            gapSize={gapMode === "custom" ? undefined : (gapMode as Size)}
            customGap={gapMode === "custom" ? "24px" : undefined}
            paddingSize={
              paddingMode === "custom" ? undefined : (paddingMode as Size)
            }
            customPadding={paddingMode === "custom" ? "24px" : undefined}
            fullWidth={fullWidth}
            fullHeight={fullHeight}
            flex1={flex1}
            className="rounded-md border border-dashed border-line"
          >
            {Array.from({ length: 9 }).map((_, index) => (
              <div
                key={index}
                className="rounded-md border border-line px-3 py-2 text-sm"
              >
                Item {index + 1}
              </div>
            ))}
          </Space>
        </div>
      </Space>
    );
  },
};
