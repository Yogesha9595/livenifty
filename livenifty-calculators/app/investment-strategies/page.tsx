import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Investment Strategies – Long Term Wealth Building",
  description:
    "Learn proven investment strategies including SIP investing, diversification, asset allocation and long-term wealth building methods.",
  alternates: {
    canonical: "https://livenifty.in/investment-strategies",
  },
};

const strategies = [
  {
    title: "SIP Investment Strategy",
    description:
      "Invest consistently through SIP to benefit from rupee cost averaging and long-term compounding.",
    calculator: "/calculators/sip-calculator",
  },
  {
    title: "Diversification Strategy",
    description:
      "Spread investments across asset classes like stocks, bonds and mutual funds to reduce risk.",
    calculator: "/calculators/portfolio-allocation",
  },
  {
    title: "Long-Term Compounding Strategy",
    description:
      "Allow investments to grow over time through compound interest.",
    calculator: "/calculators/compound-interest-calculator",
  },
  {
    title: "Retirement Planning Strategy",
    description:
      "Invest early to build a retirement corpus and achieve financial independence.",
    calculator: "/calculators/retirement-calculator",
  },
];

export default function InvestmentStrategiesPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-bold mb-6">
        Investment Strategies
      </h1>

      <p className="text-gray-600 dark:text-gray-400 mb-12">
        Successful investing is not about timing the market but following
        disciplined strategies that help grow wealth over time.
      </p>

      <div className="grid md:grid-cols-2 gap-8">

        {strategies.map((strategy) => (
          <div
            key={strategy.title}
            className="border rounded-xl p-6 hover:shadow-lg transition"
          >

            <h2 className="text-xl font-semibold mb-3">
              {strategy.title}
            </h2>

            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {strategy.description}
            </p>

            <Link
              href={strategy.calculator}
              className="text-blue-600 font-medium"
            >
              Try Calculator →
            </Link>

          </div>
        ))}

      </div>

      <div className="mt-16 border-t pt-10">

        <h3 className="text-xl font-semibold mb-4">
          Learn Investment Concepts
        </h3>

        <Link
          href="/investment-guides"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Explore Investment Guides
        </Link>

      </div>

    </div>
  );
}