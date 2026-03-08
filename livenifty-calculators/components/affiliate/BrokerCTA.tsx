import Link from "next/link";

type Props = {
  brokerName: string;
  description: string;
  link: string;
};

export default function BrokerCTA({
  brokerName,
  description,
  link,
}: Props) {
  return (
    <div className="mt-10 p-6 border rounded-2xl bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
      <h3 className="text-lg font-semibold mb-2">
        Trade with {brokerName}
      </h3>

      <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
        {description}
      </p>

      <Link
        href={link}
        target="_blank"
        rel="nofollow sponsored"
        className="inline-block px-5 py-2 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-700 transition"
      >
        Open Free Demat Account →
      </Link>

      <p className="text-xs text-gray-500 mt-3">
        *Affiliate disclosure: We may earn a commission if you open an account through this link.
      </p>
    </div>
  );
}