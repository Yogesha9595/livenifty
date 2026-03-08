import type { Metadata } from "next"
import BrokerComparisonTable from "@/components/brokers/BrokerComparisonTable"
import { getAllBrokers } from "@/lib/brokerUtils"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Compare Stock Brokers in India (2026)",
  description:
    "Compare top stock brokers in India including Zerodha, Upstox and Angel One based on brokerage, margin, charges and ratings.",
  alternates: {
    canonical: "https://livenifty.in/compare-brokers",
  },
}

export default function CompareBrokersPage() {

  const brokers = getAllBrokers()

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

      {/* Page Title */}

      <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
        Compare Stock Brokers in India
      </h1>

      {/* Intro */}

      <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-2xl">
        Compare India's top stock brokers based on brokerage charges,
        intraday margin, delivery fees and ratings to find the best broker
        for your trading and investing needs.
      </p>

      {/* Comparison Table */}

      <BrokerComparisonTable brokers={brokers} />

      {/* Popular Comparisons */}

      <div className="mt-16">

        <h2 className="text-2xl font-semibold mb-6">
          Popular Broker Comparisons
        </h2>

        <div className="grid md:grid-cols-3 gap-4">

          {brokers.slice(0, 4).map((broker) => (

            <Link
              key={broker.id}
              href={`/compare-brokers/${broker.slug}-vs-zerodha`}
              className="border rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-900 transition"
            >
              {broker.name} vs Zerodha
            </Link>

          ))}

        </div>

      </div>

    </div>
  )
}