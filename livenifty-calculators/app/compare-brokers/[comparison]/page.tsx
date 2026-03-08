import { getBrokerComparison, getAllBrokers } from "@/lib/brokerUtils"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

/* ----------------------------------
Generate Static Pages (SEO)
----------------------------------- */

export async function generateStaticParams() {
  const brokers = getAllBrokers()

  const comparisons: { comparison: string }[] = []

  for (let i = 0; i < brokers.length; i++) {
    for (let j = i + 1; j < brokers.length; j++) {
      comparisons.push({
        comparison: `${brokers[i].slug}-vs-${brokers[j].slug}`,
      })
    }
  }

  return comparisons
}

/* ----------------------------------
Dynamic SEO Metadata
----------------------------------- */

export function generateMetadata({
  params,
}: {
  params?: { comparison?: string }
}): Metadata {

  const slug = params?.comparison

  if (!slug) return {}

  const { first, second } = getBrokerComparison(slug)

  if (!first || !second) return {}

  return {
    title: `${first.name} vs ${second.name} – Broker Comparison`,
    description: `Compare ${first.name} vs ${second.name} brokerage charges, margin, intraday fees and ratings to find the best stock broker in India.`,
  }
}

/* ----------------------------------
Page Component
----------------------------------- */

export default function BrokerComparisonPage({
  params,
}: {
  params?: { comparison?: string }
}) {

  const slug = params?.comparison

  if (!slug) return notFound()

  const { first, second } = getBrokerComparison(slug)

  if (!first || !second) return notFound()

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      {/* Heading */}

      <h1 className="text-4xl font-bold mb-10 text-gray-900 dark:text-white">
        {first.name} vs {second.name}
      </h1>

      {/* Comparison Table */}

      <div className="overflow-x-auto border rounded-xl">

        <table className="w-full text-sm">

          <thead className="bg-gray-100 dark:bg-gray-900">

            <tr>
              <th className="p-4 text-left">Feature</th>
              <th className="p-4 text-center">{first.name}</th>
              <th className="p-4 text-center">{second.name}</th>
            </tr>

          </thead>

          <tbody className="divide-y">

            <tr>
              <td className="p-4 font-semibold">Brokerage</td>
              <td className="p-4 text-center">{first.brokerage}</td>
              <td className="p-4 text-center">{second.brokerage}</td>
            </tr>

            <tr>
              <td className="p-4 font-semibold">Delivery</td>
              <td className="p-4 text-center">{first.delivery}</td>
              <td className="p-4 text-center">{second.delivery}</td>
            </tr>

            <tr>
              <td className="p-4 font-semibold">Intraday</td>
              <td className="p-4 text-center">{first.intraday}</td>
              <td className="p-4 text-center">{second.intraday}</td>
            </tr>

            <tr>
              <td className="p-4 font-semibold">Margin</td>
              <td className="p-4 text-center">{first.margin}</td>
              <td className="p-4 text-center">{second.margin}</td>
            </tr>

            <tr>
              <td className="p-4 font-semibold">Rating</td>
              <td className="p-4 text-center">⭐ {first.rating}</td>
              <td className="p-4 text-center">⭐ {second.rating}</td>
            </tr>

          </tbody>

        </table>

      </div>

      {/* CTA Buttons */}

      <div className="flex flex-wrap gap-6 mt-10">

        <a
          href={first.website}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
        >
          Open {first.name}
        </a>

        <a
          href={second.website}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
        >
          Open {second.name}
        </a>

      </div>

    </div>
  )
}