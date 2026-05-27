import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { InputPhone, InputPhoneValueFormat, InputVariant } from "@/components";
import { Size } from "@/types";
import type { Country } from "react-phone-number-input";

const SIZES = [Size.Xs, Size.Sm, Size.Md] as const;
const VARIANTS = [InputVariant.Default, InputVariant.Clear] as const;
const LIMITED_COUNTRIES: Country[] = ["RU", "KZ", "TR", "CN", "IN", "US"];

const meta = {
  title: "Components/InputPhone",
  component: InputPhone,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Поле ввода телефона с выбором страны, поиском по странам и форматированием локальной части номера.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InputPhone>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => {
    const [size, setSize] = useState<(typeof SIZES)[number]>(Size.Md);
    const [variant, setVariant] = useState<(typeof VARIANTS)[number]>(
      InputVariant.Default
    );
    const [error, setError] = useState(false);
    const [required, setRequired] = useState(true);
    const [hasHintError, setHasHintError] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [value, setValue] = useState("");
    const [country, setCountry] = useState<Country>("RU");

    return (
      <div className="flex flex-col gap-6" style={{ width: 360 }}>
        <div className="flex flex-wrap gap-3 text-xs text-secondary">
          <label className="flex items-center gap-1.5 cursor-pointer">
            Size:
            <select
              value={size}
              onChange={(event) =>
                setSize(event.target.value as (typeof SIZES)[number])
              }
              className="bg-transparent border border-white/10 rounded px-1 py-0.5"
            >
              {SIZES.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label className="flex items-center gap-1.5 cursor-pointer">
            Variant:
            <select
              value={variant}
              onChange={(event) =>
                setVariant(event.target.value as (typeof VARIANTS)[number])
              }
              className="bg-transparent border border-white/10 rounded px-1 py-0.5"
            >
              {VARIANTS.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="checkbox"
              checked={error}
              onChange={(event) => setError(event.target.checked)}
            />
            error
          </label>

          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="checkbox"
              checked={required}
              onChange={(event) => setRequired(event.target.checked)}
            />
            required
          </label>

          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="checkbox"
              checked={hasHintError}
              onChange={(event) => setHasHintError(event.target.checked)}
            />
            hint error
          </label>

          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="checkbox"
              checked={disabled}
              onChange={(event) => setDisabled(event.target.checked)}
            />
            disabled
          </label>
        </div>

        <InputPhone
          size={size}
          variant={variant}
          value={value}
          country={country}
          onCountryChange={setCountry}
          onChange={(event) => {
            console.log("InputPhone Playground:", event.target.value);
            setValue(event.target.value);
          }}
          onValueChange={(nextValue, meta) => {
            console.log("InputPhone value meta:", nextValue, meta);
          }}
          onClear={() => setValue("")}
          error={error}
          disabled={disabled}
          label="Телефон"
          required={required}
          placeholder="900 000-00-00"
          hint="Введите номер в формате 900 000-00-00"
          hintError={hasHintError ? "Поле обязательно" : undefined}
        />
      </div>
    );
  },
};

export const WithValue: Story = {
  render: () => {
    const [value, setValue] = useState("+79991234567");

    return (
      <div style={{ width: 360 }}>
        <InputPhone
          value={value}
          onChange={(event) => {
            console.log("InputPhone WithValue:", event.target.value);
            setValue(event.target.value);
          }}
          onClear={() => setValue("")}
          label="Телефон"
          placeholder="900 000-00-00"
          hint="Формат применяется и при вставке"
        />
      </div>
    );
  },
};

export const LimitedCountries: Story = {
  render: () => {
    const [value, setValue] = useState("");
    const [country, setCountry] = useState<Country>("KZ");

    return (
      <div style={{ width: 360 }}>
        <InputPhone
          value={value}
          country={country}
          countries={LIMITED_COUNTRIES}
          valueFormat={InputPhoneValueFormat.National}
          onCountryChange={setCountry}
          onValueChange={setValue}
          label="Телефон"
          placeholder="Введите номер"
          hint="В этом примере наружу возвращаются только национальные цифры"
        />
      </div>
    );
  },
};

export const FloatingLabelStates: Story = {
  render: () => (
    <div className="flex flex-col gap-4" style={{ width: 360 }}>
      <InputPhone label="Телефон" placeholder="900 000-00-00" />
      <InputPhone
        label="Телефон"
        placeholder="900 000-00-00"
        defaultValue="9991234567"
      />
      <InputPhone
        label="Телефон"
        placeholder="900 000-00-00"
        hintError="Поле обязательно"
        required
      />
      <InputPhone label="Телефон" placeholder="900 000-00-00" disabled />
    </div>
  ),
};
