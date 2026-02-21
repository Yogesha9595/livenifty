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

export default function CAGRCalculator() {
  const [initial, setInitial] = useState(100000);
  const [final, setFinal] = useState(200000);
  const [years, setYears] = useState(5);

  const cagr =
    (Math.pow(final / initial, 1 / years) - 1) * 100;

  const gain = final - initial;

  const animatedInitial = useAnimatedNumber(
    Math.floor(initial)
  );
  const animatedGain = useAnimatedNumber(
    Math.floor(gain)
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
          CAGR Calculator
        </h1>
        <p className="text-gray-500 mb-8">
          Calculate the annual growth rate of your investment.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Inputs */}
          <div>
            <SliderInput
              label="Initial Investment"
              min={10000}
              max={5000000}
              step={10000}
              value={initial}
              onChange={setInitial}
            />

            <SliderInput
              label="Final Value"
              min={10000}
              max={10000000}
              step={10000}
              value={final}
              onChange={setFinal}
            />

            <SliderInput
              label="Time Period (Years)"
              min={1}
              max={40}
              step={1}
              value={years}
              onChange={setYears}
            />
          </div>

          {/* Donut */}
          <div className="text-center">
            <DonutChart
              invested={initial}
              returns={gain}
            />

            <div className="mt-6 space-y-2">
              <p className="text-gray-500 text-sm">
                Initial Investment
              </p>
              <p className="text-xl font-semibold">
                ₹{animatedInitial.toLocaleString()}
              </p>

              <p className="text-gray-500 text-sm mt-4">
                Total Gain
              </p>
              <p className="text-2xl font-bold text-green-600">
                ₹{animatedGain.toLocaleString()}
              </p>

              <p className="text-gray-500 text-sm mt-4">
                CAGR
              </p>
              <p className="text-2xl font-bold text-blue-600">
                {cagr.toFixed(2)}%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
