type Props = {
  invested: number;
  total: number;
  affiliateUrl?: string;
};

export default function EmotionalCTA({
  invested,
  total,
  affiliateUrl = "#",
}: Props) {
  const growth = total - invested;

  return (
    <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">

      <h3 className="text-xl sm:text-2xl font-semibold">
        Projected Wealth: ₹{Math.floor(total).toLocaleString()}
      </h3>

      <p className="mt-3 text-sm sm:text-base opacity-95 leading-relaxed">
        With disciplined investing, your potential growth could be 
        ₹{Math.floor(growth).toLocaleString()} over time. 
        Consistency and patience are key to long-term wealth creation.
      </p>

      <a
        href={affiliateUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-6 px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
      >
        Start Investing →
      </a>

      <p className="text-xs mt-4 opacity-80">
        Long-term investing involves market risk. Please review product details before investing.
      </p>

    </div>
  );
}
