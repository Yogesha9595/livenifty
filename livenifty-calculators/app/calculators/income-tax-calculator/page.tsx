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

// simplified tax logic
function calculateNewRegime(income: number) {
  let tax = 0;

  if (income > 1500000) {
    tax += (income - 1500000) * 0.3;
    income = 1500000;
  }
  if (income > 1200000) {
    tax += (income - 1200000) * 0.2;
    income = 1200000;
  }
  if (income > 900000) {
    tax += (income - 900000) * 0.15;
    income = 900000;
  }
  if (income > 600000) {
    tax += (income - 600000) * 0.1;
    income = 600000;
  }
  if (income > 300000) {
    tax += (income - 300000) * 0.05;
  }

  return tax;
}

function calculateOldRegime(income: number, deduction: number) {
  const taxable = Math.max(0, income - deduction);
  let tax = 0;

  if (taxable > 1000000) {
    tax += (taxable - 1000000) * 0.3;
    tax += 100000 * 0.2;
    tax += 250000 * 0.05;
  } else if (taxable > 500000) {
    tax += (taxable - 500000) * 0.2;
    tax += 250000 * 0.05;
  } else if (taxable > 250000) {
    tax += (taxable - 250000) * 0.05;
  }

  return tax;
}

export default function IncomeTaxCalculator() {
  const [income, setIncome] = useState(1000000);
  const [deduction, setDeduction] = useState(150000);

  const newTax = calculateNewRegime(income);
  const oldTax = calculateOldRegime(income, deduction);

  const animatedIncome = useAnimatedNumber(income);
  const animatedNewTax = useAnimatedNumber(
    Math.floor(newTax)
  );
  const animatedOldTax = useAnimatedNumber(
    Math.floor(oldTax)
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
          Income Tax Calculator
        </h1>
        <p className="text-gray-500 mb-8">
          Compare tax under old vs new regime.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Inputs */}
          <div>
            <SliderInput
              label="Annual Income"
              min={300000}
              max={5000000}
              step={50000}
              value={income}
              onChange={setIncome}
            />

            <SliderInput
              label="Deductions (Old Regime)"
              min={0}
              max={300000}
              step={10000}
              value={deduction}
              onChange={setDeduction}
            />
          </div>

          {/* Donut */}
          <div className="text-center">
            <DonutChart
              invested={oldTax}
              returns={newTax}
            />

            <div className="mt-6 space-y-3">
              <p className="text-gray-500 text-sm">
                Annual Income
              </p>
              <p className="text-xl font-semibold">
                ₹{animatedIncome.toLocaleString()}
              </p>

              <p className="text-gray-500 text-sm mt-4">
                Old Regime Tax
              </p>
              <p className="text-2xl font-bold text-blue-600">
                ₹{animatedOldTax.toLocaleString()}
              </p>

              <p className="text-gray-500 text-sm mt-4">
                New Regime Tax
              </p>
              <p className="text-2xl font-bold text-green-600">
                ₹{animatedNewTax.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
