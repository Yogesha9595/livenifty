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

export default function EmiCalculator() {
  const [loan, setLoan] = useState(500000);
  const [rate, setRate] = useState(8.5);
  const [years, setYears] = useState(5);

  const months = years * 12;
  const r = rate / 12 / 100;

  const emi =
    (loan * r * Math.pow(1 + r, months)) /
    (Math.pow(1 + r, months) - 1);

  const totalPayment = emi * months;
  const interest = totalPayment - loan;

  const animatedLoan = useAnimatedNumber(Math.floor(loan));
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
          EMI Calculator
        </h1>
        <p className="text-gray-500 mb-8">
          Calculate your monthly loan EMI instantly.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Inputs */}
          <div>
            <SliderInput
              label="Loan Amount"
              min={50000}
              max={5000000}
              step={10000}
              value={loan}
              onChange={setLoan}
            />

            <SliderInput
              label="Interest Rate (%)"
              min={1}
              max={15}
              step={0.1}
              value={rate}
              onChange={setRate}
            />

            <SliderInput
              label="Tenure (Years)"
              min={1}
              max={30}
              step={1}
              value={years}
              onChange={setYears}
            />
          </div>

          {/* Donut */}
          <div className="text-center">
            <DonutChart
              invested={loan}
              returns={interest}
            />

            <div className="mt-6 space-y-2">
              <p className="text-gray-500 text-sm">
                Principal
              </p>
              <p className="text-xl font-semibold">
                ₹{animatedLoan.toLocaleString()}
              </p>

              <p className="text-gray-500 text-sm mt-4">
                Interest Payable
              </p>
              <p className="text-2xl font-bold text-green-600">
                ₹{animatedInterest.toLocaleString()}
              </p>

              <p className="text-gray-500 text-sm mt-4">
                Monthly EMI
              </p>
              <p className="text-2xl font-bold text-blue-600">
                ₹{emi.toFixed(0)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
