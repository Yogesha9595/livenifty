import Link from "next/link";

type Broker = {
  name: string;
  brokerage: string;
  features: string;
  rating: string;
  link: string;
};

const brokers: Broker[] = [
  {
    name: "Zerodha",
    brokerage: "₹20 per order",
    features: "Powerful Kite platform, advanced charts",
    rating: "4.8/5",
    link: "https://your-affiliate-link-zerodha",
  },
  {
    name: "Upstox",
    brokerage: "₹20 per order",
    features: "Strong options tools & fast execution",
    rating: "4.6/5",
    link: "https://your-affiliate-link-upstox",
  },
  {
    name: "Angel One",
    brokerage: "₹20 per order",
    features: "Smart API trading & advisory tools",
    rating: "4.5/5",
    link: "https://your-affiliate-link-angel",
  },
];

export default function BrokerComparison() {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Compare Top Stock Brokers in India
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border rounded-2xl overflow-hidden text-sm">
          <thead className="bg-gray-100 dark:bg-gray-900">
            <tr>
              <th className="px-4 py-3 text-left">Broker</th>
              <th className="px-4 py-3 text-left">Brokerage</th>
              <th className="px-4 py-3 text-left">Best For</th>
              <th className="px-4 py-3 text-left">Rating</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>

          <tbody>
            {brokers.map((broker) => (
              <tr
                key={broker.name}
                className="border-t dark:border-gray-800"
              >
                <td className="px-4 py-4 font-medium">
                  {broker.name}
                </td>
                <td className="px-4 py-4">
                  {broker.brokerage}
                </td>
                <td className="px-4 py-4">
                  {broker.features}
                </td>
                <td className="px-4 py-4">
                  ⭐ {broker.rating}
                </td>
                <td className="px-4 py-4 text-right">
                  <Link
                    href={broker.link}
                    target="_blank"
                    rel="nofollow sponsored"
                    className="px-4 py-2 bg-blue-600 text-white rounded-xl text-xs hover:bg-blue-700 transition"
                  >
                    Open Account
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-gray-500 mt-4 text-center">
        *Affiliate disclosure: We may earn a commission if you open an account through these links.
      </p>
    </div>
  );
}