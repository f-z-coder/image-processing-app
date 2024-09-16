import React from "react";
import { Slider } from "@/components/ui/slider";

interface BaseControlProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  disabled?: boolean;
}

export const BaseControl: React.FC<BaseControlProps> = ({
  label,
  value,
  onChange,
  min,
  max,
  disabled,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={label}>{label}</label>
      <Slider
        id={label}
        value={[value]}
        onValueChange={(newValue) => onChange(newValue[0])}
        min={min}
        max={max}
        step={1}
        disabled={disabled}
      />
    </div>
  );
};
