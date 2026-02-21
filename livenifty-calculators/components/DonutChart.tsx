"use client";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useEffect, useState } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

type Props = {
  invested: number;
  returns: number;
};

export default function DonutChart({
  invested,
  returns,
}: Props) {
  const total = invested + returns;

  const returnPercent =
    total > 0
      ? ((returns / total) * 100).toFixed(1)
      : "0";

  const [animatedTotal, setAnimatedTotal] =
    useState(total);

  // Smooth premium animation
  useEffect(() => {
    let start = animatedTotal;
    const diff = total - start;
    const duration = 600;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      const easeOut = 1 - Math.pow(1 - progress, 3);
      const value = Math.floor(start + diff * easeOut);

      setAnimatedTotal(value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [total]);

  const data = {
    labels: ["Invested", "Returns"],
    datasets: [
      {
        data: [invested, returns],
        backgroundColor: [
          "rgba(59,130,246,0.9)",  // refined blue
          "rgba(34,197,94,0.9)",   // refined green
        ],
        borderColor: "#ffffff",
        borderWidth: 5,
        hoverOffset: 12,
      },
    ],
  };

  const options: any = {
    cutout: "78%",
    animation: {
      duration: 1000,
      easing: "easeOutCubic",
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#111827",
        padding: 12,
        cornerRadius: 8,
        titleColor: "#fff",
        bodyColor: "#e5e7eb",
        callbacks: {
          label: function (context: any) {
            const value = context.raw;
            return ` ₹${value.toLocaleString()}`;
          },
        },
      },
    },
  };

  return (
    <div className="relative w-[220px] h-[220px] mx-auto group">

      {/* Premium soft glow (subtle) */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-300 to-green-300 opacity-15 blur-2xl" />

      {/* Depth shadow */}
      <div className="absolute inset-0 rounded-full shadow-[0_15px_35px_rgba(0,0,0,0.18)]" />

      <Doughnut
        data={data}
        options={options}
        className="transition-all duration-500 group-hover:-translate-y-1"
      />

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">

        <p className="text-[11px] uppercase tracking-wider text-gray-400">
          Total Value
        </p>

        <p className="text-xl font-semibold text-gray-900 mt-1">
          ₹{animatedTotal.toLocaleString()}
        </p>

        <p className="text-xs font-medium text-green-600 mt-1">
          {returnPercent}% Returns
        </p>

      </div>
    </div>
  );
}
