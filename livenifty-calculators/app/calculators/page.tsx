import Link from "next/link";

export const metadata = {
  title: "All Financial Calculators",
  description:
    "Browse all financial calculators including SIP, EMI, FD, CAGR and more.",
};

const calculators = [
  { name: "SIP Calculator", slug: "sip-calculator" },
  { name: "EMI Calculator", slug: "emi-calculator" },
  { name: "FD Calculator", slug: "fd-calculator" },
  { name: "Lumpsum Calculator", slug: "lumpsum-calculator" },
  { name: "CAGR Calculator", slug: "cagr-calculator" },
  { name: "Income Tax Calculator", slug: "income-tax-calculator" },
  { name: "Position Sizer", slug: "position-sizer" },
  { name: "Options Calculator", slug: "options-calculator" },
];

export default function CalculatorsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-10">
        Financial Calculators
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {calculators.map((tool) => (
          <Link
            key={tool.slug}
            href={`/calculators/${tool.slug}`}
            className="p-6 border rounded-2xl hover:shadow-lg transition"
          >
            {tool.name}
          </Link>
        ))}
      </div>
    </div>
  );
}