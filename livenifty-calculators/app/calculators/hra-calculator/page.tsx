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

export default function HRACalculator() {
  const [basic, setBasic] = useState(30000);
  const [hra, setHra] = useState(15000);
  const [rent, setRent] = useState(20000);
  const [metro, setMetro] = useState(1); // 1 = metro, 0 = non-metro

  const annualBasic = basic * 12;
  const annualHra = hra * 12;
  const annualRent = rent * 12;

  const rentMinus10 = annualRent - annualBasic * 0.1;
  const percentSalary =
    annualBasic * (metro ? 0.5 : 0.4);

  const exemption = Math.max(
    0,
    Math.min(annualHra, rentMinus10, percentSalary)
  );

  const animatedBasic = useAnimatedNumber(
    Math.floor(annualBasic)
  );
  const animatedExemption = useAnimatedNumber(
    Math.floor(exemption)
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
          HRA Calculator
        </h1>
        <p className="text-gray-500 mb-8">
          Calculate HRA tax exemption based on salary and rent.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Inputs */}
          <div>
            <SliderInput
              label="Basic Monthly Salary"
              min={10000}
              max={200000}
              step={5000}
              value={basic}
              onChange={setBasic}
            />

            <SliderInput
              label="Monthly HRA Received"
              min={5000}
              max={100000}
              step={5000}
              value={hra}
              onChange={setHra}
            />

            <SliderInput
              label="Monthly Rent Paid"
              min={5000}
              max={100000}
              step={5000}
              value={rent}
              onChange={setRent}
            />

            {/* Metro selector */}
            <div className="mt-4">
              <label className="text-gray-600 font-medium">
                City Type
              </label>
              <select
                value={metro}
                onChange={(e) =>
                  setMetro(Number(e.target.value))
                }
                className="w-full mt-2 p-3 rounded-xl border bg-white/80 backdrop-blur"
              >
                <option value={1}>Metro City</option>
                <option value={0}>Non-Metro City</option>
              </select>
            </div>
          </div>

          {/* Donut */}
          <div className="text-center">
            <DonutChart
              invested={annualBasic}
              returns={exemption}
            />

            <div className="mt-6 space-y-2">
              <p className="text-gray-500 text-sm">
                Annual Basic Salary
              </p>
              <p className="text-xl font-semibold">
                ₹{animatedBasic.toLocaleString()}
              </p>

              <p className="text-gray-500 text-sm mt-4">
                HRA Exemption
              </p>
              <p className="text-2xl font-bold text-green-600">
                ₹{animatedExemption.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
