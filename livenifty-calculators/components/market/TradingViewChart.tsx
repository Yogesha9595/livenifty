"use client";

import { useEffect, useRef } from "react";

export default function TradingViewChart() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;

    script.onload = () => {
      // @ts-ignore
      new window.TradingView.widget({
        autosize: true,
        symbol: "NSE:NIFTY",
        interval: "15",
        timezone: "Asia/Kolkata",
        theme: "dark",
        style: "1",
        locale: "en",
        toolbar_bg: "#f1f3f6",
        enable_publishing: false,
        allow_symbol_change: true,
        container_id: "tradingview_chart",
      });
    };

    container.current.appendChild(script);
  }, []);

  return (
    <div className="w-full h-[600px]">
      <div
        id="tradingview_chart"
        ref={container}
        className="w-full h-full rounded-xl overflow-hidden"
      />
    </div>
  );
}