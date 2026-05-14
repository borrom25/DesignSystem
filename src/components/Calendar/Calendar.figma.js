// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=643-5569
// source=src/components/Calendar/Calendar.tsx
// component=Calendar
const figma = require("figma");
const instance = figma.selectedInstance;

const state = instance.getEnum("State", {
  Standard: "standard",
  Range: "range",
  Month: "month",
  Year: "year",
});

const standardExample = figma.tsx`
  <Calendar
    mode="single"
    defaultValue={new Date(2026, 1, 20)}
    displayMonth={new Date(2026, 1, 1)}
  />
`;

const rangeExample = figma.tsx`
  <Calendar
    mode="range"
    defaultValue={{
      from: new Date(2026, 1, 18),
      to: new Date(2026, 1, 24),
    }}
    displayMonth={new Date(2026, 1, 1)}
  />
`;

const monthExample = figma.tsx`
  <Calendar
    mode="single"
    pickerType="month"
    defaultValue={new Date(2026, 1, 1)}
    displayMonth={new Date(2026, 1, 1)}
  />
`;

const yearExample = figma.tsx`
  <Calendar
    mode="single"
    pickerType="year"
    defaultValue={new Date(2026, 1, 20)}
    displayMonth={new Date(2026, 1, 1)}
  />
`;

const exampleByState = {
  standard: standardExample,
  range: rangeExample,
  month: monthExample,
  year: yearExample,
};

export default {
  example: exampleByState[state] || standardExample,
  imports: ['import { Calendar } from "borrom-ds-test"'],
  id: "calendar",
  metadata: {
    nestable: true,
    props: {
      state,
    },
  },
};
