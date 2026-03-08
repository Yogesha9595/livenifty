import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "40+ Free Financial Calculators for Investment, Tax & Trading | LiveNifty",
  description:
    "Explore free financial calculators including SIP, EMI, FD, GST, CAGR, income tax, and trading calculators. Plan investments, loans, and taxes instantly.",
  alternates: {
    canonical: "/calculators/all",
  },
}

const calculators = {
  investment: [
    { name: "SIP Calculator", href: "/calculators/sip-calculator" },
    { name: "Lumpsum Calculator", href: "/calculators/lumpsum-calculator" },
    { name: "CAGR Calculator", href: "/calculators/cagr-calculator" },
    { name: "SWP Calculator", href: "/calculators/swp-calculator" },
    { name: "PPF Calculator", href: "/calculators/ppf-calculator" },
    { name: "Step-Up SIP Calculator", href: "/calculators/stepup-sip-calculator" },
  ],

  loans: [
    { name: "EMI Calculator", href: "/calculators/emi-calculator" },
    { name: "FD Calculator", href: "/calculators/fd-calculator" },
    { name: "RD Calculator", href: "/calculators/rd-calculator" },
  ],

  tax: [
    { name: "Income Tax Calculator", href: "/calculators/income-tax-calculator" },
    { name: "GST Calculator", href: "/calculators/gst-calculator" },
    { name: "HRA Calculator", href: "/calculators/hra-calculator" },
    { name: "Gratuity Calculator", href: "/calculators/gratuity-calculator" },
  ],

  trading: [
    { name: "Options Calculator", href: "/calculators/options-calculator" },
    { name: "Options Greeks Calculator", href: "/calculators/greeks-calculator" },
    { name: "Position Size Calculator", href: "/calculators/position-sizer" },
  ],
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Financial Calculators",
  itemListElement: Object.values(calculators)
    .flat()
    .map((calc, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://livenifty.com${calc.href}`,
      name: calc.name,
    })),
}

function CalculatorCard({ name, href }: { name: string; href: string }) {
  return (
    <Link
      href={href}
      className="block rounded-lg border border-gray-200 p-4 hover:border-blue-500 hover:shadow-sm transition"
    >
      <span className="font-medium text-gray-800">{name}</span>
    </Link>
  )
}

export default function AllCalculatorsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="max-w-6xl mx-auto px-6 py-10">

        {/* HERO */}
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Free Financial Calculators
          </h1>

          <p className="text-gray-600 max-w-3xl">
            Plan your finances smarter using our collection of powerful
            financial calculators. Estimate SIP returns, calculate EMI
            payments, evaluate investment growth with CAGR, compute GST
            instantly, and analyze trading positions.
          </p>
        </header>

        {/* INVESTMENT CALCULATORS */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Investment Calculators
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {calculators.investment.map((calc) => (
              <CalculatorCard key={calc.href} {...calc} />
            ))}
          </div>
        </section>

        {/* LOAN CALCULATORS */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Loan & Deposit Calculators
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {calculators.loans.map((calc) => (
              <CalculatorCard key={calc.href} {...calc} />
            ))}
          </div>
        </section>

        {/* TAX CALCULATORS */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Tax Calculators
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {calculators.tax.map((calc) => (
              <CalculatorCard key={calc.href} {...calc} />
            ))}
          </div>
        </section>

        {/* TRADING CALCULATORS */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Trading Calculators
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {calculators.trading.map((calc) => (
              <CalculatorCard key={calc.href} {...calc} />
            ))}
          </div>
        </section>

        {/* EDUCATIONAL LINKS */}
        <section className="mt-12 border-t pt-8">
          <h2 className="text-2xl font-semibold mb-4">
            Learn How These Calculators Work
          </h2>

          <p className="text-gray-600 mb-4">
            Explore our financial guides to understand formulas, strategies,
            and real-world examples behind each calculator.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/blog/sip-calculator-guide" className="text-blue-600 hover:underline">
              SIP Calculator Guide
            </Link>

            <Link href="/blog/cagr-calculator-guide" className="text-blue-600 hover:underline">
              CAGR Calculator Guide
            </Link>

            <Link href="/blog/income-tax-calculator-guide" className="text-blue-600 hover:underline">
              Income Tax Guide
            </Link>

            <Link href="/blog/gst-calculator-guide" className="text-blue-600 hover:underline">
              GST Calculator Guide
            </Link>
          </div>
        </section>

      </main>
    </>
  )
}