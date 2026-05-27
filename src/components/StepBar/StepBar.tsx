import { cn } from "@/utils";
import { StepBarItemType, StepBarProps } from "./StepBar.types";
import {
  activeStepClasses,
  buttonClasses,
  successButtonClasses,
  stepBarClasses,
  stepsClasses,
  stepClasses,
} from "./styles";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useStepBar } from "./hooks";

const itemClassesByType: Record<StepBarItemType, string> = {
  error: "text-danger-heavy",
  successful: "text-positive-heavy",
};

export function StepBar<T extends string | number = string>({
  items,
  active,
  onChangeStep,
  onClickSuccessButton,
  successButtonText = "Готово",
  className,
}: StepBarProps<T>) {
  const {
    stepsRef,
    indicatorStyle,
    isFirstStep,
    isLastStep,
    setStepRef,
    onStepClick,
    goPrev,
    goNext,
  } = useStepBar<T>({ items, active: active ?? items[0].id, onChangeStep });

  return (
    <div className={cn(stepBarClasses, className)}>
      <button className={buttonClasses} disabled={isFirstStep} onClick={goPrev}>
        <ArrowLeft size={20} />
      </button>
      <div className={stepsClasses} ref={stepsRef}>
        {items?.map((item, index) => {
          const isActive = item.id === active;
          const isDisabled = !!item.disabled;

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
        <button
          className={cn(successButtonClasses, "ml-auto")}
          onClick={onClickSuccessButton}
        >
          {successButtonText}
        </button>
      ) : (
        <button
          className={cn(buttonClasses, "ml-auto")}
          disabled={isLastStep}
          onClick={goNext}
        >
          <ArrowRight size={20} />
        </button>
      )}
    </div>
  );
}
