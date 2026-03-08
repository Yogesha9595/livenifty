import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Investment Guides – Learn SIP, Mutual Funds & Stock Investing",
  description:
    "Beginner friendly investment guides covering SIP investing, mutual funds, stock investing and financial planning.",
  alternates: {
    canonical: "https://livenifty.in/investment-guides",
  },
};

const guides = [
  {
    title: "Beginner's Guide to SIP Investing",
    description:
      "Understand SIP investing, how it works and how to build wealth using mutual funds.",
    link: "/blog/sip-calculator-guide",
  },
  {
    title: "Lump Sum vs SIP Investing",
    description:
      "Compare lump sum investing with SIP and learn which strategy works best.",
    link: "/blog/lumpsum-calculator-guide",
  },
  {
    title: "Understanding CAGR",
    description:
      "Learn how CAGR helps measure long term investment growth.",
    link: "/blog/cagr-calculator-guide",
  },
  {
    title: "Retirement Planning Basics",
    description:
      "How to build retirement corpus using disciplined investing.",
    link: "/blog/retirement-calculator-guide",
  },
];

export default function InvestmentGuidesPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-bold mb-6">
        Investment Guides
      </h1>

      <p className="text-gray-600 dark:text-gray-400 mb-12">
        Learn investing concepts, financial planning strategies, and tools
        to grow wealth.
      </p>

      <div className="grid md:grid-cols-2 gap-8">

        {guides.map((guide) => (
          <Link
            key={guide.title}
            href={guide.link}
            className="border rounded-xl p-6 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">
              {guide.title}
            </h2>

            <p className="text-gray-600 dark:text-gray-400">
              {guide.description}
            </p>

            <span className="text-blue-600 mt-3 inline-block">
              Read Guide →
            </span>

          </Link>
        ))}

      </div>

      <div className="mt-16 border-t pt-10">

        <h3 className="text-xl font-semibold mb-4">
          Explore Financial Calculators
        </h3>

        <Link
          href="/calculators"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          View All Calculators
        </Link>

      </div>

    </div>
  );
}