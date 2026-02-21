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

export default function RDCalculator() {
  const [monthly, setMonthly] = useState(5000);
  const [rate, setRate] = useState(6.5);
  const [years, setYears] = useState(5);

  const months = years * 12;
  const r = rate / 12 / 100;

  // RD future value formula
  const maturity =
    monthly *
    ((Math.pow(1 + r, months) - 1) / r) *
    (1 + r);

  const invested = monthly * months;
  const interest = maturity - invested;

  const animatedInvested = useAnimatedNumber(
    Math.floor(invested)
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
          RD Calculator
        </h1>
        <p className="text-gray-500 mb-8">
          Estimate maturity value of your recurring deposit.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Inputs */}
          <div>
            <SliderInput
              label="Monthly Deposit"
              min={500}
              max={100000}
              step={500}
              value={monthly}
              onChange={setMonthly}
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
              label="Time Period (Years)"
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
              invested={invested}
              returns={interest}
            />

            <div className="mt-6 space-y-2">
              <p className="text-gray-500 text-sm">
                Total Invested
              </p>
              <p className="text-xl font-semibold">
                ₹{animatedInvested.toLocaleString()}
              </p>

              <p className="text-gray-500 text-sm mt-4">
                Interest Earned
              </p>
              <p className="text-2xl font-bold text-green-600">
                ₹{animatedInterest.toLocaleString()}
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
