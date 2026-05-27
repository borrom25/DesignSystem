import { useCallback, useEffect, useState } from "react";
import type { FocusEventHandler, MouseEventHandler } from "react";
import { cn } from "@/utils";
import { Size } from "@/types";
import { FieldHint } from "@/components/Field";
import { wrapperClasses } from "@/components/Field/styles";
import { InputField } from "@/components/Input/ui/InputField";
import { InputVariant } from "@/components/Input";
import { useInputAnchoredPopover } from "@/shared/hooks";
import type { InputPhoneProps } from "./InputPhone.types";
import { useInputPhoneState } from "./hooks";
import { PhoneCountrySelector, PhonePrefix } from "./ui";
import { phoneDefaultInputMode, phonePattern } from "./InputPhone.utils";
import { inputPhoneStyles } from "./styles";

const countryTriggerSelector = "[data-input-phone-country-trigger]";

export function InputPhone({
  size = Size.Md,
  variant = InputVariant.Default,
  error = false,
  disabled = false,
  label,
  required,
  hint,
  hintError,
  iconLeft,
  iconRight,
  suffix,
  count,
  maxCount,
  className,
  inputClassName,
  id: idProp,
  clearable = true,
  value,
  defaultValue,
  onChange,
  onClear,
  onFocus,
  onMouseUp,
  country,
  defaultCountry,
  countries,
  valueFormat,
  onCountryChange,
  onValueChange,
  placeholder,
  maxLength,
  showFlagIsland = true,
  inputMode = phoneDefaultInputMode,
  ref,
  ...restProps
}: InputPhoneProps) {
  const {
    adornmentClassName,
    countDisplay,
    handleChange,
    handleClear,
    hasValue,
    hintId,
    iconSize,
    inputId,
    inputValue,
    isError,
    prefixSuffixClassName,
    countryOption,
    countryOptions,
    selectedCountry,
    setSelectedCountry,
    wrapperClassName,
  } = useInputPhoneState({
    size,
    variant,
    disabled,
    error,
    hint,
    hintError,
    id: idProp,
    count,
    maxCount,
    value,
    defaultValue,
    onChange,
    onClear,
    country,
    defaultCountry,
    countries,
    valueFormat,
    onCountryChange,
    onValueChange,
  });
  const {
    containerRef,
    open: countrySelectorOpen,
    setOpen: setCountrySelectorOpen,
    openPopover: openCountrySelector,
    handleRetainFieldInteraction,
    handleFocusOutside,
  } = useInputAnchoredPopover(disabled || !showFlagIsland);
  const [countrySelectorLayout, setCountrySelectorLayout] = useState<{
    width: number;
    alignOffset: number;
  }>();

  useEffect(() => {
    const container = containerRef.current;

    if (!container || !showFlagIsland) {
      return;
    }

    const updateLayout = () => {
      const containerRect = container.getBoundingClientRect();
      const trigger = container.querySelector<HTMLElement>(
        countryTriggerSelector
      );
      const triggerRect = trigger?.getBoundingClientRect();

      setCountrySelectorLayout({
        width: containerRect.width,
        alignOffset: triggerRect ? containerRect.left - triggerRect.left : 0,
      });
    };

    updateLayout();

    const resizeObserver = new ResizeObserver(updateLayout);
    resizeObserver.observe(container);
    const trigger = container.querySelector<HTMLElement>(
      countryTriggerSelector
    );

    if (trigger) {
      resizeObserver.observe(trigger);
    }

    return () => resizeObserver.disconnect();
  }, [containerRef, showFlagIsland]);

  const handleInputFocus: FocusEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      openCountrySelector();
      onFocus?.(event);
    },
    [onFocus, openCountrySelector]
  );

  const handleInputMouseUp: MouseEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      openCountrySelector();
      onMouseUp?.(event);
    },
    [onMouseUp, openCountrySelector]
  );

  return (
    <div ref={containerRef} className={cn(wrapperClasses, className)}>
      <InputField
        ref={ref}
        wrapperClassName={cn(
          wrapperClassName,
          inputPhoneStyles.wrapperSize[size]
        )}
        adornmentClassName={adornmentClassName}
        prefixSuffixClassName={prefixSuffixClassName}
        iconSize={iconSize}
        iconLeft={iconLeft}
        iconRight={iconRight}
        prefix={
          showFlagIsland ? (
            <PhoneCountrySelector
              size={size}
              country={selectedCountry}
              options={countryOptions}
              disabled={disabled}
              open={countrySelectorOpen}
              contentWidth={countrySelectorLayout?.width}
              contentAlignOffset={countrySelectorLayout?.alignOffset}
              onOpenChange={setCountrySelectorOpen}
              onContentInteractOutside={(event) =>
                handleRetainFieldInteraction(event, event.target)
              }
              onContentFocusOutside={handleFocusOutside}
              onCountryChange={setSelectedCountry}
            />
          ) : (
            <PhonePrefix dialCode={countryOption.dialCode} />
          )
        }
        suffix={suffix}
        countDisplay={countDisplay}
        clearable={clearable}
        hasValue={hasValue}
        onClear={handleClear}
        size={size}
        label={label}
        required={required}
        disabled={disabled}
        isError={isError}
        inputClassName={inputClassName}
        value={inputValue}
        onChange={handleChange}
        onFocus={handleInputFocus}
        onMouseUp={handleInputMouseUp}
        id={inputId}
        type="tel"
        inputMode={inputMode}
        placeholder={placeholder}
        maxLength={maxLength ?? maxCount}
        pattern={phonePattern}
        aria-required={required || undefined}
        aria-describedby={hintId}
        {...restProps}
      />

      {(hintError || hint) && (
        <FieldHint size={size} error={isError} id={hintId}>
          {hintError || hint}
        </FieldHint>
      )}
    </div>
  );
}
