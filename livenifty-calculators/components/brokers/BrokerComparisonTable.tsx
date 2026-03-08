import { Broker } from "@/types/broker"

type BrokerComparisonTableProps = {
  brokers: Broker[]
}

export default function BrokerComparisonTable({
  brokers,
}: BrokerComparisonTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800">

      <table className="w-full text-sm">

        {/* Table Header */}
        <thead className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300">

          <tr>
            <th className="p-4 text-left font-semibold">Broker</th>
            <th className="p-4 text-center font-semibold">Account Opening</th>
            <th className="p-4 text-center font-semibold">Delivery</th>
            <th className="p-4 text-center font-semibold">Intraday</th>
            <th className="p-4 text-center font-semibold">Margin</th>
            <th className="p-4 text-center font-semibold">Rating</th>
            <th className="p-4 text-center font-semibold">Action</th>
          </tr>

        </thead>

        {/* Table Body */}
        <tbody className="divide-y divide-gray-200 dark:divide-gray-800">

          {brokers.map((broker) => (

            <tr
              key={broker.id}
              className="hover:bg-gray-50 dark:hover:bg-gray-900 transition"
            >

              {/* Broker Name */}
              <td className="p-4 font-semibold text-gray-900 dark:text-white">
                {broker.name}
              </td>

              {/* Account Opening */}
              <td className="p-4 text-center">
                {broker.accountOpening}
              </td>

              {/* Delivery Brokerage */}
              <td className="p-4 text-center">
                {broker.delivery}
              </td>

              {/* Intraday Brokerage */}
              <td className="p-4 text-center">
                {broker.intraday}
              </td>

              {/* Margin */}
              <td className="p-4 text-center">
                {broker.margin}
              </td>

              {/* Rating */}
              <td className="p-4 text-center font-medium">
                ⭐ {broker.rating}
              </td>

              {/* CTA */}
              <td className="p-4 text-center">

                <a
                  href={broker.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg transition"
                >
                  Open Account
                </a>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  )
}