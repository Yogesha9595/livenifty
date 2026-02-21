import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Free Financial Calculators – SIP, EMI, FD, Tax & More",
  description:
    "Use free financial calculators including SIP, EMI, FD, CAGR and Income Tax calculators. Plan investments and loans smarter with LiveNifty.",
};

export default function Home() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
          Free Financial Calculators & Investment Guides
        </h1>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
          Plan your investments, loans and taxes smarter using accurate
          financial calculators. Learn wealth-building strategies through
          detailed guides and practical examples.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/calculators/sip-calculator"
            className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition"
          >
            Try SIP Calculator
          </Link>

          <Link
            href="/blog"
            className="px-6 py-3 border border-gray-300 rounded-xl font-medium hover:bg-gray-50 transition"
          >
            Read Investment Guides
          </Link>
        </div>
      </section>

      {/* TOP CALCULATORS */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-10 text-center">
            Popular Financial Calculators
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              { name: "SIP Calculator", link: "/calculators/sip-calculator" },
              { name: "EMI Calculator", link: "/calculators/emi-calculator" },
              { name: "FD Calculator", link: "/calculators/fd-calculator" },
              { name: "Income Tax Calculator", link: "/calculators/income-tax-calculator" },
              { name: "CAGR Calculator", link: "/calculators/cagr-calculator" },
              { name: "Lumpsum Calculator", link: "/calculators/lumpsum-calculator" },
            ].map((tool) => (
              <Link
                key={tool.link}
                href={tool.link}
                className="block bg-white border rounded-2xl p-6 hover:shadow-md transition"
              >
                <h3 className="font-semibold text-lg mb-2">
                  {tool.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  Calculate and plan your finances easily.
                </p>
              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Why Use LiveNifty?
        </h2>

        <p className="text-gray-600 leading-relaxed text-center">
          LiveNifty provides simple, accurate and free financial calculators
          to help individuals make better financial decisions. Whether you
          are planning SIP investments, calculating loan EMIs, estimating
          fixed deposit returns or comparing tax regimes, our tools help you
          plan with clarity.
        </p>
      </section>

    </main>
  );
}
