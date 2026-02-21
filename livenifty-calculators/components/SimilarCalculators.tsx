import Link from "next/link";

type CalculatorItem = {
  name: string;
  link: string;
};

type CategoryMap = {
  [key: string]: CalculatorItem[];
};

const calculatorMap: CategoryMap = {
  sip: [
    { name: "SIP Calculator", link: "/calculators/sip-calculator" },
    { name: "Step-Up SIP Calculator", link: "/calculators/stepup-sip-calculator" },
    { name: "Lumpsum Calculator", link: "/calculators/lumpsum-calculator" },
    { name: "SWP Calculator", link: "/calculators/swp-calculator" },
  ],
  loan: [
    { name: "EMI Calculator", link: "/calculators/emi-calculator" },
    { name: "FD Calculator", link: "/calculators/fd-calculator" },
    { name: "RD Calculator", link: "/calculators/rd-calculator" },
  ],
  tax: [
    { name: "Income Tax Calculator", link: "/calculators/income-tax-calculator" },
    { name: "GST Calculator", link: "/calculators/gst-calculator" },
    { name: "Gratuity Calculator", link: "/calculators/gratuity-calculator" },
  ],
  trading: [
    { name: "Options Calculator", link: "/calculators/options-calculator" },
  ],
};

type Props = {
  category: string;
  currentPath?: string;
};

export default function SimilarCalculators({
  category,
  currentPath,
}: Props) {
  let items = calculatorMap[category] || [];

  // Exclude current calculator if provided
  if (currentPath) {
    items = items.filter(
      (item) => item.link !== currentPath
    );
  }

  // Limit to 4
  items = items.slice(0, 4);

  if (items.length === 0) return null;

  return (
    <section className="mt-20 bg-gray-50 rounded-2xl p-8 border border-gray-200">
      <h3 className="text-xl font-semibold mb-6">
        Related Calculators
      </h3>

      <div className="grid sm:grid-cols-2 gap-4">
        {items.map((item) => (
          <Link
            key={item.link}
            href={item.link}
            className="flex justify-between items-center p-4 bg-white rounded-xl border border-gray-100 hover:border-blue-300 hover:shadow-sm transition"
          >
            <span className="text-gray-800 font-medium">
              {item.name}
            </span>
            <span className="text-blue-600 text-sm">
              →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
