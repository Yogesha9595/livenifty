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

export default function StepUpSIPCalculator() {
  const [monthly, setMonthly] = useState(10000);
  const [increase, setIncrease] = useState(10);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(15);

  const months = years * 12;
  const r = rate / 12 / 100;

  let futureValue = 0;
  let totalInvested = 0;
  let currentMonthly = monthly;

  for (let y = 0; y < years; y++) {
    for (let m = 0; m < 12; m++) {
      futureValue =
        (futureValue + currentMonthly) * (1 + r);
      totalInvested += currentMonthly;
    }
    currentMonthly *= 1 + increase / 100;
  }

  const returns = futureValue - totalInvested;

  const animatedInvested = useAnimatedNumber(
    Math.floor(totalInvested)
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
          Step-Up SIP Calculator
        </h1>
        <p className="text-gray-500 mb-8">
          Calculate returns with yearly increase in SIP amount.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Inputs */}
          <div>
            <SliderInput
              label="Initial Monthly SIP"
              min={1000}
              max={100000}
              step={500}
              value={monthly}
              onChange={setMonthly}
            />

            <SliderInput
              label="Yearly SIP Increase (%)"
              min={1}
              max={20}
              step={1}
              value={increase}
              onChange={setIncrease}
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
              invested={totalInvested}
              returns={returns}
            />

            <div className="mt-6 space-y-2">
              <p className="text-gray-500 text-sm">
                Total Invested
              </p>
              <p className="text-xl font-semibold">
                ₹{animatedInvested.toLocaleString()}
              </p>

              <p className="text-gray-500 text-sm mt-4">
                Estimated Returns
              </p>
              <p className="text-2xl font-bold text-green-600">
                ₹{animatedReturns.toLocaleString()}
              </p>

              <p className="text-gray-500 text-sm mt-4">
                Final Value
              </p>
              <p className="text-2xl font-bold text-blue-600">
                ₹{futureValue.toFixed(0)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
