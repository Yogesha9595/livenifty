import { getAllBrokers } from "@/lib/brokerUtils"
import BrokerCard from "@/components/brokers/BrokerCard"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Best Stock Brokers in India (2026) – Compare Top Demat Accounts",
  description:
    "Compare the best stock brokers in India including Zerodha, Upstox, Groww, Angel One and more. Find the best demat account based on brokerage, margin and features.",
}

export default function BestStockBrokersPage() {

  const brokers = getAllBrokers()

  const sortedBrokers = [...brokers].sort(
    (a, b) => b.rating - a.rating
  )

  return (

    <div className="max-w-7xl mx-auto px-6 py-16">

      {/* Title */}

      <h1 className="text-4xl font-bold mb-6">
        Best Stock Brokers in India
      </h1>

      <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-3xl">
        Choosing the right stock broker is important for investors and traders.
        Here we compare the best demat accounts in India based on brokerage,
        delivery charges, margin and ratings.
      </p>

      {/* Broker Grid */}

      <div className="grid md:grid-cols-3 gap-6">

        {sortedBrokers.map((broker) => (
          <BrokerCard key={broker.id} broker={broker} />
        ))}

      </div>

      {/* Content Section */}

      <div className="mt-16 max-w-3xl">

        <h2 className="text-2xl font-semibold mb-4">
          How to Choose the Best Stock Broker in India
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mb-4">
          The best stock broker depends on your trading style and investment goals.
          Some brokers offer zero delivery brokerage while others provide better
          research tools and margin benefits.
        </p>

        <p className="text-gray-600 dark:text-gray-400">
          Discount brokers like Zerodha, Groww and Upstox provide low brokerage,
          while full-service brokers like ICICI Direct and HDFC Securities offer
          research support and advisory services.
        </p>

      </div>

    </div>
  )
}