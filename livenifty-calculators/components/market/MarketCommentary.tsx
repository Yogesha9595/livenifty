import { commentaryData } from "@/lib/commentaryData";

function CategoryBadge({ category }: { category: string }) {
  const colors: Record<string, string> = {
    NIFTY: "bg-blue-100 text-blue-600",
    BANKNIFTY: "bg-purple-100 text-purple-600",
    GLOBAL: "bg-green-100 text-green-600",
    FII: "bg-yellow-100 text-yellow-700",
    SECTOR: "bg-pink-100 text-pink-600",
  };

  return (
    <span
      className={`text-xs px-2 py-1 rounded-full font-medium ${colors[category]}`}
    >
      {category}
    </span>
  );
}

export default function MarketCommentary() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">
        Live Market Commentary
      </h2>

      <div className="space-y-4">
        {commentaryData.map((item, index) => (
          <div
            key={index}
            className="p-4 border rounded-xl bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="font-medium text-sm">
                {item.time}
              </span>
              <CategoryBadge category={item.category} />
            </div>

            <p className="text-sm text-gray-700 dark:text-gray-300">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}