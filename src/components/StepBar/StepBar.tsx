import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils";
import { StepBarItem, StepBarItemType, StepBarProps } from "./StepBar.types";
import {
  activeStepClasses,
  buttonClasses,
  successButtonClasses,
  stepBarClasses,
  stepsClasses,
  stepClasses,
  loaderClasses,
} from "./styles";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { useStepBar } from "./hooks";

const itemClassesByType: Record<StepBarItemType, string> = {
  error: "text-danger-heavy",
  successful: "text-positive-heavy",
};

type StepBarItems = readonly StepBarItem<string | number>[];

type StepBarControlButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  children: ReactNode;
};

function StepBarControlButton({
  className,
  loading = false,
  disabled,
  children,
  ...rest
}: StepBarControlButtonProps) {
  return (
    <button
      {...rest}
      className={cn(className, "relative")}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
    >
      {loading && <Loader2 size={20} className={loaderClasses} />}
      <span className={cn("inline-flex items-center", loading && "invisible")}>
        {children}
      </span>
    </button>
  );
}

export function StepBar<TItems extends StepBarItems>({
  items,
  active,
  defaultActive,
  onChangeStep,
  onStepTransition,
  onClickSuccessButton,
  successButtonText = "Готово",
  loadingPrev = false,
  loadingNext = false,
  loadingSuccess = false,
  className,
}: StepBarProps<TItems>) {
  const {
    active: currentActive,
    stepsRef,
    indicatorStyle,
    isFirstStep,
    isLastStep,
    setStepRef,
    onStepClick,
    goPrev,
    goNext,
  } = useStepBar<TItems>({
    items,
    active,
    defaultActive,
    onChangeStep,
    onStepTransition,
  });

  const isBusy = loadingPrev || loadingNext || loadingSuccess;

  return (
    <div className={cn(stepBarClasses, className)}>
      <StepBarControlButton
        className={buttonClasses}
        disabled={isFirstStep || isBusy}
        loading={loadingPrev}
        onClick={goPrev}
      >
        <ArrowLeft size={20} />
      </StepBarControlButton>
      <div className={stepsClasses} ref={stepsRef}>
        {items?.map((item, index) => {
          const isActive = item.id === currentActive;
          const isDisabled = !!item.disabled || isBusy;

          return (
            <button
              key={item.id}
              ref={(el) => setStepRef(index, el)}
              onClick={() => onStepClick(item.id)}
              disabled={isDisabled}
              aria-disabled={isDisabled}
              className={cn(
                stepClasses,
                item.type && itemClassesByType[item.type],
                isActive ? "opacity-100" : "opacity-60",
                isActive && !item.type && "text-primary"
              )}
            >
              {item.leftIcon && <item.leftIcon size={16} />}
              {item.label}
              {item.rightIcon && <item.rightIcon size={16} />}
            </button>
          );
        })}
        <span className={activeStepClasses} style={indicatorStyle} />
      </div>
      {onClickSuccessButton && isLastStep ? (
        <StepBarControlButton
          className={cn(successButtonClasses, "ml-auto")}
          disabled={isBusy}
          loading={loadingSuccess}
          onClick={onClickSuccessButton}
        >
          {successButtonText}
        </StepBarControlButton>
      ) : (
        <StepBarControlButton
          className={cn(buttonClasses, "ml-auto")}
          disabled={isLastStep || isBusy}
          loading={loadingNext}
          onClick={goNext}
        >
          <ArrowRight size={20} />
        </StepBarControlButton>
      )}
    </div>
  );
}
