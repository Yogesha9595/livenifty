"use client";
import { useState, useEffect } from "react";
import SliderInput from "@/components/SliderInput";
import DonutChart from "@/components/DonutChart";

function useAnimatedNumber(value: number, duration = 500) {
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    let start = display;
    const diff = value - start;
    const steps = 20;
    const increment = diff / steps;

    let count = 0;
    const timer = setInterval(() => {
      count++;
      start += increment;
      setDisplay(Math.floor(start));

      if (count >= steps) {
        setDisplay(value);
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return display;
}

export default function GratuityCalculator() {
  const [salary, setSalary] = useState(50000);
  const [years, setYears] = useState(10);

  // Gratuity formula: (15 × last drawn salary × years of service) / 26
  const gratuity = (15 * salary * years) / 26;

  const animatedSalary = useAnimatedNumber(
    Math.floor(salary)
  );
  const animatedGratuity = useAnimatedNumber(
    Math.floor(gratuity)
  );

  return (
    <div className="flex justify-center">
      <div
        className="
        w-full max-w-5xl p-10 rounded-3xl
        bg-white/70 backdrop-blur-xl
        border border-white/40
        shadow-[0_20px_60px_rgba(0,0,0,0.15)]
      "
      >
        <h1 className="text-3xl font-bold mb-2">
          Gratuity Calculator
        </h1>
        <p className="text-gray-500 mb-8">
          Estimate the gratuity amount based on salary and years of service.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Inputs */}
          <div>
            <SliderInput
              label="Last Drawn Monthly Salary"
              min={10000}
              max={500000}
              step={5000}
              value={salary}
              onChange={setSalary}
            />

            <SliderInput
              label="Years of Service"
              min={5}
              max={40}
              step={1}
              value={years}
              onChange={setYears}
            />
          </div>

          {/* Donut */}
          <div className="text-center">
            <DonutChart
              invested={salary * years}
              returns={gratuity}
            />

            <div className="mt-6 space-y-2">
              <p className="text-gray-500 text-sm">
                Monthly Salary
              </p>
              <p className="text-xl font-semibold">
                ₹{animatedSalary.toLocaleString()}
              </p>

              <p className="text-gray-500 text-sm mt-4">
                Gratuity Amount
              </p>
              <p className="text-2xl font-bold text-green-600">
                ₹{animatedGratuity.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
