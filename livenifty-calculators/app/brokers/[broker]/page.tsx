import { getBrokerBySlug } from "@/lib/brokerUtils"
import { notFound } from "next/navigation"

export default function BrokerPage({
  params,
}: {
  params: { broker: string }
}) {

  const broker = getBrokerBySlug(params.broker)

  if (!broker) return notFound()

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-bold mb-6">
        {broker.name} Review
      </h1>

      <p className="text-gray-600 mb-8">
        Brokerage charges, margin, account opening and
        features of {broker.name}.
      </p>

      <div className="border rounded-xl p-6 space-y-4">

        <p><strong>Account Opening:</strong> {broker.accountOpening}</p>
        <p><strong>Brokerage:</strong> {broker.brokerage}</p>
        <p><strong>Delivery:</strong> {broker.delivery}</p>
        <p><strong>Intraday:</strong> {broker.intraday}</p>
        <p><strong>Margin:</strong> {broker.margin}</p>
        <p><strong>Rating:</strong> ⭐ {broker.rating}</p>

      </div>

      <a
        href={broker.website}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg"
      >
        Open {broker.name} Account
      </a>

    </div>
  )
}