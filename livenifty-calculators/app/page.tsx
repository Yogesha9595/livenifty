import Link from "next/link";
import { Metadata } from "next";
import AdBanner from "@/components/ads/AdBanner";
import MarketCommentary from "@/components/market/MarketCommentary";
import ChartWrapper from "@/components/market/ChartWrapper";

export const metadata: Metadata = {
  title: "Live Market Commentary & Financial Calculators",
  description:
    "Track live NIFTY market updates, use professional trading tools and free financial calculators like SIP, EMI, FD and income tax.",
};

export default function Home() {
  return (
    <main className="w-full">

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 text-center">

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Live Market Commentary &  
            <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              {" "}Professional Financial Tools
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 mb-10">
            Real-time market updates, risk management tools and free investment calculators
            built for traders and long-term investors.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/calculators/position-sizer"
              className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              Start Trading Tools
            </Link>

            <Link
              href="/calculators/sip-calculator"
              className="px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-700 font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition"
            >
              Explore Calculators
            </Link>
          </div>
        </div>
      </section>

      {/* ================= TOP AD SLOT ================= */}
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <div className="h-[90px]">
          <AdBanner />
        </div>
      </div>

      {/* ================= CHART SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
          <ChartWrapper />
        </div>
      </section>

      {/* ================= AFFILIATE BROKER BLOCK ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="rounded-3xl border border-gray-200 dark:border-gray-800 p-10 bg-gray-50 dark:bg-gray-900">

          <h2 className="text-2xl font-semibold mb-8 text-center">
            Compare India’s Top Trading Platforms
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              {
                name: "Zerodha",
                desc: "Low brokerage & advanced trading tools.",
              },
              {
                name: "Upstox",
                desc: "Fast execution & smart analytics.",
              },
              {
                name: "Angel One",
                desc: "Full-service broker with research insights.",
              },
            ].map((broker) => (
              <div
                key={broker.name}
                className="p-6 bg-white dark:bg-black rounded-2xl border border-gray-200 dark:border-gray-800"
              >
                <h3 className="font-semibold text-lg mb-2">
                  {broker.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {broker.desc}
                </p>
                <a
                  href="#"
                  className="text-sm font-medium text-blue-600 hover:underline"
                >
                  Open Account →
                </a>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= MID AD SLOT ================= */}
      <div className="max-w-4xl mx-auto px-6 my-10">
        <AdBanner />
      </div>

      {/* ================= LIVE COMMENTARY ================= */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <MarketCommentary />
      </section>

      {/* ================= TRADER TOOLS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-semibold mb-12 text-center">
          Professional Trading Tools
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <Link
            href="/calculators/greeks-calculator"
            className="group p-8 rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-black hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition">
              Options Greeks Calculator
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Calculate Delta, Gamma, Theta and Vega using Black-Scholes model.
            </p>
          </Link>

          <Link
            href="/calculators/position-sizer"
            className="group p-8 rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-black hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition">
              Position Sizing Tool
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Determine optimal trade quantity based on risk management rules.
            </p>
          </Link>

        </div>
      </section>

      {/* ================= LOWER AD SLOT ================= */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <AdBanner />
      </div>

      {/* ================= FINANCIAL CALCULATORS ================= */}
      <section className="bg-gray-50 dark:bg-gray-950 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-12 text-center">
            Investment & Financial Calculators
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              { name: "SIP Calculator", link: "/calculators/sip-calculator" },
              { name: "EMI Calculator", link: "/calculators/emi-calculator" },
              { name: "FD Calculator", link: "/calculators/fd-calculator" },
              { name: "Income Tax Calculator", link: "/calculators/income-tax-calculator" },
              { name: "CAGR Calculator", link: "/calculators/cagr-calculator" },
              { name: "Lumpsum Calculator", link: "/calculators/lumpsum-calculator" },
            ].map((tool) => (
              <Link
                key={tool.link}
                href={tool.link}
                className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-black hover:shadow-md transition"
              >
                <h3 className="font-semibold text-lg mb-2">
                  {tool.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Plan and calculate with precision.
                </p>
              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* ================= TRUST & DISCLAIMER ================= */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h3 className="text-lg font-semibold mb-4">
          Transparent & Informational Platform
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
          LiveNifty provides educational financial tools and market commentary.
          We do not provide buy/sell recommendations or trading signals.
          Always conduct independent research before investing.
        </p>
      </section>

    </main>
  );
}