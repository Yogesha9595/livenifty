"use client";

import { useState, useEffect } from "react";

type Props = {
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (v: number) => void;
};

export default function SliderInput({
  label,
  min,
  max,
  step,
  value,
  onChange,
}: Props) {
  const [val, setVal] = useState(value);

  useEffect(() => {
    setVal(value);
  }, [value]);

  const clamp = (num: number) =>
    Math.min(Math.max(num, min), max);

  const handleChange = (v: number) => {
    if (isNaN(v)) return;
    const clamped = clamp(v);
    setVal(clamped);
    onChange(clamped);
  };

  const percent =
    ((val - min) / (max - min)) * 100;

  return (
    <div className="mb-8">

      {/* Label + Input */}
      <div className="flex justify-between items-center mb-3">
        <label className="text-gray-700 font-medium">
          {label}
        </label>

        <input
          type="number"
          min={min}
          max={max}
          step={step}
          value={val}
          onChange={(e) =>
            handleChange(Number(e.target.value))
          }
          className="w-28 px-3 py-2 text-right rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* Range Slider */}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={val}
        onChange={(e) =>
          handleChange(Number(e.target.value))
        }
        aria-label={label}
        className="w-full h-2 rounded-lg appearance-none cursor-pointer"
        style={{
          background: `linear-gradient(to right, #3b82f6 ${percent}%, #e5e7eb ${percent}%)`,
        }}
      />

    </div>
  );
}
