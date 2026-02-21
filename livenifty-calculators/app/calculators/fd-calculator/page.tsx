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

export default function FDCalculator() {
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(6.5);
  const [years, setYears] = useState(5);

  const maturity =
    principal * Math.pow(1 + rate / 100, years);

  const interest = maturity - principal;

  const animatedPrincipal = useAnimatedNumber(
    Math.floor(principal)
  );
  const animatedInterest = useAnimatedNumber(
    Math.floor(interest)
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
          FD Calculator
        </h1>
        <p className="text-gray-500 mb-8">
          Calculate your fixed deposit maturity amount.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Inputs */}
          <div>
            <SliderInput
              label="Deposit Amount"
              min={10000}
              max={5000000}
              step={10000}
              value={principal}
              onChange={setPrincipal}
            />

            <SliderInput
              label="Interest Rate (%)"
              min={3}
              max={10}
              step={0.1}
              value={rate}
              onChange={setRate}
            />

            <SliderInput
              label="Tenure (Years)"
              min={1}
              max={20}
              step={1}
              value={years}
              onChange={setYears}
            />
          </div>

          {/* Donut */}
          <div className="text-center">
            <DonutChart
              invested={principal}
              returns={interest}
            />

            <div className="mt-6 space-y-2">
              <p className="text-gray-500 text-sm">
                Principal
              </p>
              <p className="text-xl font-semibold">
                ₹{animatedPrincipal.toLocaleString()}
              </p>

              <p className="text-gray-500 text-sm mt-4">
                Interest Earned
              </p>
              <p className="text-2xl font-bold text-green-600">
                ₹{animatedInterest.toLocaleString()}
              </p>

              <p className="text-gray-500 text-sm mt-4">
                Maturity Amount
              </p>
              <p className="text-2xl font-bold text-blue-600">
                ₹{maturity.toFixed(0)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
