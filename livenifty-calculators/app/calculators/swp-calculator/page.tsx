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

export default function SWPCalculator() {
  const [corpus, setCorpus] = useState(1000000);
  const [withdrawal, setWithdrawal] = useState(10000);
  const [rate, setRate] = useState(8);
  const [years, setYears] = useState(15);

  const months = years * 12;
  const r = rate / 12 / 100;

  let balance = corpus;

  for (let i = 0; i < months; i++) {
    balance = balance * (1 + r) - withdrawal;
    if (balance < 0) {
      balance = 0;
      break;
    }
  }

  const totalWithdrawn = withdrawal * months;
  const remaining = balance;

  const animatedCorpus = useAnimatedNumber(
    Math.floor(corpus)
  );
  const animatedWithdrawn = useAnimatedNumber(
    Math.floor(totalWithdrawn)
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
          SWP Calculator
        </h1>
        <p className="text-gray-500 mb-8">
          Estimate monthly withdrawals from your investment corpus.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Inputs */}
          <div>
            <SliderInput
              label="Initial Corpus"
              min={100000}
              max={20000000}
              step={50000}
              value={corpus}
              onChange={setCorpus}
            />

            <SliderInput
              label="Monthly Withdrawal"
              min={1000}
              max={100000}
              step={1000}
              value={withdrawal}
              onChange={setWithdrawal}
            />

            <SliderInput
              label="Expected Return (%)"
              min={3}
              max={15}
              step={0.5}
              value={rate}
              onChange={setRate}
            />

            <SliderInput
              label="Withdrawal Period (Years)"
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
              invested={remaining}
              returns={totalWithdrawn}
            />

            <div className="mt-6 space-y-2">
              <p className="text-gray-500 text-sm">
                Initial Corpus
              </p>
              <p className="text-xl font-semibold">
                ₹{animatedCorpus.toLocaleString()}
              </p>

              <p className="text-gray-500 text-sm mt-4">
                Total Withdrawn
              </p>
              <p className="text-2xl font-bold text-green-600">
                ₹{animatedWithdrawn.toLocaleString()}
              </p>

              <p className="text-gray-500 text-sm mt-4">
                Remaining Corpus
              </p>
              <p className="text-2xl font-bold text-blue-600">
                ₹{remaining.toFixed(0)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
