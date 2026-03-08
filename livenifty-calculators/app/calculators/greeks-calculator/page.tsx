"use client";

import { useState, useMemo } from "react";
import BrokerCTA from "@/components/affiliate/BrokerCTA";
import BrokerComparison from "@/components/affiliate/BrokerComparison";

export default function GreeksCalculator() {
  const [S, setS] = useState<number>(100);
  const [K, setK] = useState<number>(100);
  const [T, setT] = useState<number>(0.5);
  const [r, setR] = useState<number>(0.05);
  const [sigma, setSigma] = useState<number>(0.2);

  const greeks = useMemo(() => {
    if (S <= 0 || K <= 0 || T <= 0 || sigma <= 0) return null;

    const d1 =
      (Math.log(S / K) + (r + (sigma * sigma) / 2) * T) /
      (sigma * Math.sqrt(T));

    const d2 = d1 - sigma * Math.sqrt(T);

    const delta = normalCDF(d1);
    const gamma = normalPDF(d1) / (S * sigma * Math.sqrt(T));
    const theta =
      (-S * normalPDF(d1) * sigma) / (2 * Math.sqrt(T)) -
      r * K * Math.exp(-r * T) * normalCDF(d2);
    const vega = S * normalPDF(d1) * Math.sqrt(T);

    return { delta, gamma, theta, vega };
  }, [S, K, T, r, sigma]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">
        Options Greeks Calculator
      </h1>

      <div className="grid gap-6">
        <Input label="Spot Price" value={S} onChange={setS} />
        <Input label="Strike Price" value={K} onChange={setK} />
        <Input label="Time to Expiry (Years)" value={T} onChange={setT} />
        <Input label="Interest Rate (e.g. 0.05)" value={r} onChange={setR} />
        <Input label="Volatility (e.g. 0.2)" value={sigma} onChange={setSigma} />
      </div>

      {greeks && (
        <div className="mt-10 p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl space-y-2">
          <p>Delta: <strong>{greeks.delta.toFixed(4)}</strong></p>
          <p>Gamma: <strong>{greeks.gamma.toFixed(4)}</strong></p>
          <p>Theta: <strong>{greeks.theta.toFixed(4)}</strong></p>
          <p>Vega: <strong>{greeks.vega.toFixed(4)}</strong></p>
        </div>
      )}

      <BrokerCTA
        brokerName="Upstox"
        description="Advanced options trading platform with real-time Greeks and low-cost brokerage."
        link="https://your-affiliate-link"
      />

      <BrokerComparison />
    </div>
  );
}

function normalPDF(x: number) {
  return Math.exp(-0.5 * x * x) / Math.sqrt(2 * Math.PI);
}

function normalCDF(x: number) {
  return (1 + erf(x / Math.sqrt(2))) / 2;
}

function erf(x: number) {
  const sign = x >= 0 ? 1 : -1;
  x = Math.abs(x);

  const a1 = 0.254829592;
  const a2 = -0.284496736;
  const a3 = 1.421413741;
  const a4 = -1.453152027;
  const a5 = 1.061405429;
  const p = 0.3275911;

  const t = 1 / (1 + p * x);
  const y =
    1 -
    (((((a5 * t + a4) * t + a3) * t + a2) * t + a1) *
      t *
      Math.exp(-x * x));

  return sign * y;
}

function Input({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <label className="block text-sm mb-1">{label}</label>
      <input
        type="number"
        step="any"
        min="0"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full px-4 py-2 border rounded-xl bg-white dark:bg-black border-gray-300 dark:border-gray-700"
      />
    </div>
  );
}