import { getAllBrokers } from "@/lib/brokerUtils"
import BrokerCard from "@/components/brokers/BrokerCard"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Lowest Brokerage Brokers in India (2026)",
  description:
    "Find the lowest brokerage stock brokers in India. Compare Zerodha, Groww, Upstox, Dhan, Fyers and more based on brokerage charges and features.",
}

export default function LowestBrokeragePage() {

  const brokers = getAllBrokers()

  /* Sort brokers by lowest brokerage logic */

  const sorted = [...brokers].sort((a, b) => {

    if (a.delivery === "Free" && b.delivery !== "Free") return -1
    if (b.delivery === "Free" && a.delivery !== "Free") return 1

    return b.rating - a.rating
  })

  return (

    <div className="max-w-7xl mx-auto px-6 py-16">

      {/* Title */}

      <h1 className="text-4xl font-bold mb-6">
        Lowest Brokerage Brokers in India
      </h1>

      <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-3xl">
        Brokerage charges directly impact trading profitability. 
        Here we compare stock brokers offering the lowest brokerage in India 
        including Zerodha, Upstox, Groww, Dhan and more.
      </p>

      {/* Broker Grid */}

      <div className="grid md:grid-cols-3 gap-6">

        {sorted.map((broker) => (
          <BrokerCard key={broker.id} broker={broker} />
        ))}

      </div>

      {/* Informational Content */}

      <div className="mt-16 max-w-3xl">

        <h2 className="text-2xl font-semibold mb-4">
          What is Brokerage in Stock Trading?
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Brokerage is the fee charged by a stock broker for executing buy and sell 
          orders on your behalf. Discount brokers in India typically charge a flat 
          fee per order while many brokers offer free delivery trading.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">
          How to Choose a Low Brokerage Broker
        </h2>

        <p className="text-gray-600 dark:text-gray-400">
          While low brokerage is important, investors should also consider factors 
          like platform reliability, margin availability, research tools and customer 
          support before selecting a broker.
        </p>

      </div>

    </div>
  )
}