import { Broker } from "@/types/broker"

type BrokerCardProps = {
  broker: Broker
}

export default function BrokerCard({ broker }: BrokerCardProps) {
  return (
    <div className="border rounded-xl p-6 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition">

      <h3 className="font-semibold text-lg mb-2">
        {broker.name}
      </h3>

      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        Brokerage: {broker.brokerage}
      </p>

      <a
        href={broker.website}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
      >
        Open Account →
      </a>

    </div>
  )
}