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

export default function PPFCalculator() {
  const [yearly, setYearly] = useState(150000);
  const [rate, setRate] = useState(7.1);
  const [years, setYears] = useState(15);

  const r = rate / 100;
  let balance = 0;

  for (let i = 0; i < years; i++) {
    balance = (balance + yearly) * (1 + r);
  }

  const invested = yearly * years;
  const interest = balance - invested;

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
          PPF Calculator
        </h1>
        <p className="text-gray-500 mb-8">
          Estimate maturity value of your Public Provident Fund investment.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Inputs */}
          <div>
            <SliderInput
              label="Yearly Investment"
              min={10000}
              max={150000}
              step={5000}
              value={yearly}
              onChange={setYearly}
            />

            <SliderInput
              label="Interest Rate (%)"
              min={5}
              max={9}
              step={0.1}
              value={rate}
              onChange={setRate}
            />

            <SliderInput
              label="Time Period (Years)"
              min={15}
              max={25}
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
                ₹{balance.toFixed(0)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
