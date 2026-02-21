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

export default function LumpsumCalculator() {
  const [amount, setAmount] = useState(500000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);

  const maturity =
    amount * Math.pow(1 + rate / 100, years);

  const returns = maturity - amount;

  const animatedAmount = useAnimatedNumber(
    Math.floor(amount)
  );
  const animatedReturns = useAnimatedNumber(
    Math.floor(returns)
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
          Lumpsum Calculator
        </h1>
        <p className="text-gray-500 mb-8">
          Calculate the future value of your one-time investment.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Inputs */}
          <div>
            <SliderInput
              label="Investment Amount"
              min={10000}
              max={5000000}
              step={10000}
              value={amount}
              onChange={setAmount}
            />

            <SliderInput
              label="Expected Return (%)"
              min={1}
              max={20}
              step={0.5}
              value={rate}
              onChange={setRate}
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
              invested={amount}
              returns={returns}
            />

            <div className="mt-6 space-y-2">
              <p className="text-gray-500 text-sm">
                Invested Amount
              </p>
              <p className="text-xl font-semibold">
                ₹{animatedAmount.toLocaleString()}
              </p>

              <p className="text-gray-500 text-sm mt-4">
                Estimated Returns
              </p>
              <p className="text-2xl font-bold text-green-600">
                ₹{animatedReturns.toLocaleString()}
              </p>

              <p className="text-gray-500 text-sm mt-4">
                Maturity Value
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
