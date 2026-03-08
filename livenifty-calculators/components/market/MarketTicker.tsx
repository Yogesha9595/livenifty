import { marketData, marketStatus } from "@/lib/marketData";

export default function MarketTicker() {
  return (
    <section className="border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-3 text-sm flex gap-6 overflow-x-auto items-center">

        {/* Market Status */}
        <span
          className={`font-medium ${
            marketStatus.isOpen
              ? "text-green-500"
              : "text-red-500"
          }`}
        >
          ● {marketStatus.isOpen ? "Market Open" : "Market Closed"}
        </span>

        {/* Indices */}
        {marketData.map((index) => (
          <span key={index.name}>
            {index.name}: {index.value}{" "}
            <span
              className={
                index.isPositive
                  ? "text-green-500"
                  : "text-red-500"
              }
            >
              ({index.change})
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}