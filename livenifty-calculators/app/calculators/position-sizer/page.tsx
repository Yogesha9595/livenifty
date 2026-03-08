"use client";

import { useState, useMemo } from "react";
import BrokerCTA from "@/components/affiliate/BrokerCTA";
import BrokerComparison from "@/components/affiliate/BrokerComparison";

export default function PositionSizer() {
  const [account, setAccount] = useState<number>(100000);
  const [riskPercent, setRiskPercent] = useState<number>(1);
  const [entry, setEntry] = useState<number>(100);
  const [stopLoss, setStopLoss] = useState<number>(95);

  const calculations = useMemo(() => {
    if (account <= 0 || riskPercent <= 0 || entry <= 0) {
      return null;
    }

    const riskAmount = (account * riskPercent) / 100;
    const riskPerShare = Math.abs(entry - stopLoss);

    if (riskPerShare === 0) {
      return null;
    }

    const quantity = Math.floor(riskAmount / riskPerShare);
    const positionValue = quantity * entry;

    return {
      riskAmount,
      riskPerShare,
      quantity,
      positionValue,
    };
  }, [account, riskPercent, entry, stopLoss]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">
        Position Sizing Calculator
      </h1>

      <div className="grid gap-6">

        <Input label="Account Size (₹)" value={account} onChange={setAccount} />
        <Input label="Risk per Trade (%)" value={riskPercent} onChange={setRiskPercent} />
        <Input label="Entry Price" value={entry} onChange={setEntry} />
        <Input label="Stop Loss Price" value={stopLoss} onChange={setStopLoss} />

      </div>

      {calculations && (
        <div className="mt-10 p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl space-y-2">
          <p>
            Risk Amount: <strong>₹{calculations.riskAmount.toFixed(2)}</strong>
          </p>
          <p>
            Risk per Share: <strong>₹{calculations.riskPerShare.toFixed(2)}</strong>
          </p>
          <p>
            Position Value: <strong>₹{calculations.positionValue.toFixed(2)}</strong>
          </p>
          <p className="text-xl font-semibold mt-4">
            Recommended Quantity: {calculations.quantity} shares
          </p>
        </div>
      )}

      {/* Affiliate CTA */}
      <BrokerCTA
        brokerName="Zerodha"
        description="Low brokerage, powerful trading tools and advanced risk management platform for serious traders."
        link="https://your-affiliate-link"
      />

      <BrokerComparison />
    </div>
  );
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
        min="0"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full px-4 py-2 border rounded-xl bg-white dark:bg-black border-gray-300 dark:border-gray-700"
      />
    </div>
  );
}