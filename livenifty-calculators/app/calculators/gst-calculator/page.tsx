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

export default function GSTCalculator() {
  const [amount, setAmount] = useState(10000);
  const [rate, setRate] = useState(18);

  const gst = (amount * rate) / 100;
  const total = amount + gst;

  const animatedAmount = useAnimatedNumber(
    Math.floor(amount)
  );
  const animatedGST = useAnimatedNumber(
    Math.floor(gst)
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
          GST Calculator
        </h1>
        <p className="text-gray-500 mb-8">
          Calculate GST amount and total price instantly.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Inputs */}
          <div>
            <SliderInput
              label="Base Amount"
              min={100}
              max={1000000}
              step={100}
              value={amount}
              onChange={setAmount}
            />

            <SliderInput
              label="GST Rate (%)"
              min={1}
              max={28}
              step={1}
              value={rate}
              onChange={setRate}
            />
          </div>

          {/* Donut */}
          <div className="text-center">
            <DonutChart
              invested={amount}
              returns={gst}
            />

            <div className="mt-6 space-y-2">
              <p className="text-gray-500 text-sm">
                Base Amount
              </p>
              <p className="text-xl font-semibold">
                ₹{animatedAmount.toLocaleString()}
              </p>

              <p className="text-gray-500 text-sm mt-4">
                GST Amount
              </p>
              <p className="text-2xl font-bold text-green-600">
                ₹{animatedGST.toLocaleString()}
              </p>

              <p className="text-gray-500 text-sm mt-4">
                Total Amount
              </p>
              <p className="text-2xl font-bold text-blue-600">
                ₹{total.toFixed(0)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
