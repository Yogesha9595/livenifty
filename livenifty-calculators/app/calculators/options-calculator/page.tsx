"use client";

import { useState, useEffect } from "react";
import SliderInput from "@/components/SliderInput";
import DonutChart from "@/components/DonutChart";

// ✅ CommonJS safe import
const bs = require("black-scholes");

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
      setDisplay(start);

      if (count >= steps) {
        setDisplay(value);
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return display;
}

export default function OptionsCalculator() {
  const [spot, setSpot] = useState(20000);
  const [strike, setStrike] = useState(20000);
  const [rate, setRate] = useState(6);
  const [volatility, setVolatility] = useState(20);
  const [time, setTime] = useState(30);
  const [type, setType] = useState<"call" | "put">("call");

  const t = time / 365;
  const r = rate / 100;
  const v = volatility / 100;

  let price = 0;

  try {
    price = bs.blackScholes(
      spot,
      strike,
      t,
      r,
      v,
      type
    );
  } catch {
    price = 0;
  }

  const animatedPrice = useAnimatedNumber(price);

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
          Options Pricing Calculator
        </h1>
        <p className="text-gray-500 mb-8">
          Black-Scholes option price calculator.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Inputs */}
          <div>
            <SliderInput
              label="Spot Price"
              min={100}
              max={50000}
              step={100}
              value={spot}
              onChange={setSpot}
            />

            <SliderInput
              label="Strike Price"
              min={100}
              max={50000}
              step={100}
              value={strike}
              onChange={setStrike}
            />

            <SliderInput
              label="Risk-Free Rate (%)"
              min={1}
              max={10}
              step={0.1}
              value={rate}
              onChange={setRate}
            />

            <SliderInput
              label="Volatility (%)"
              min={5}
              max={100}
              step={1}
              value={volatility}
              onChange={setVolatility}
            />

            <SliderInput
              label="Days to Expiry"
              min={1}
              max={365}
              step={1}
              value={time}
              onChange={setTime}
            />

            {/* Option Type */}
            <div className="mt-4">
              <label className="text-gray-600 font-medium">
                Option Type
              </label>
              <select
                value={type}
                onChange={(e) =>
                  setType(e.target.value as "call" | "put")
                }
                className="w-full mt-2 p-3 rounded-xl border bg-white/80 backdrop-blur"
              >
                <option value="call">Call</option>
                <option value="put">Put</option>
              </select>
            </div>
          </div>

          {/* Result */}
          <div className="text-center">
            <DonutChart
              invested={strike}
              returns={animatedPrice}
            />

            <div className="mt-6 space-y-2">
              <p className="text-gray-500 text-sm">
                Option Premium
              </p>
              <p className="text-3xl font-bold text-blue-600">
                ₹{animatedPrice.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
