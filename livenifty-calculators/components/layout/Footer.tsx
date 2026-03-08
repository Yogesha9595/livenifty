import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black">

      {/* TOP AD SLOT (AdSense Safe Leaderboard) */}
      <div className="max-w-7xl mx-auto px-6 pt-12">
        <div className="w-full h-[90px] bg-gray-100 dark:bg-gray-900 border border-dashed border-gray-300 dark:border-gray-700 rounded-xl flex items-center justify-center text-xs text-gray-500">
          Advertisement Space (Leaderboard 728x90)
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-5 gap-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold mb-4 tracking-tight">
              LiveNifty
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6 max-w-sm">
              Live market commentary, trading tools and professional-grade financial calculators built for Indian investors and traders.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>✔ Transparent</span>
              <span>✔ No Buy/Sell Tips</span>
              <span>✔ Educational Only</span>
            </div>
          </div>

          {/* Tools */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-6">
              Tools
            </h4>
            <div className="space-y-3 text-sm">
              <Link href="/calculators/sip-calculator" className="block hover:text-blue-600 transition">
                SIP Calculator
              </Link>
              <Link href="/calculators/emi-calculator" className="block hover:text-blue-600 transition">
                EMI Calculator
              </Link>
              <Link href="/calculators/position-sizer" className="block hover:text-blue-600 transition">
                Position Sizer
              </Link>
              <Link href="/calculators/options-calculator" className="block hover:text-blue-600 transition">
                Greeks Calculator
              </Link>
            </div>
          </div>

          {/* Learn */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-6">
              Learn
            </h4>
            <div className="space-y-3 text-sm">
              <Link href="/blog" className="block hover:text-blue-600 transition">
                Investment Guides
              </Link>
              <Link href="/blog/sip-calculator-guide" className="block hover:text-blue-600 transition">
                SIP Strategy
              </Link>
              <Link href="/blog/cagr-calculator-guide" className="block hover:text-blue-600 transition">
                CAGR Explained
              </Link>
              <Link href="/blog/lumpsum-calculator-guide" className="block hover:text-blue-600 transition">
                Lumpsum Investing
              </Link>
            </div>
          </div>

          {/* Company & Legal */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-6">
              Company
            </h4>

            <div className="space-y-3 text-sm mb-8">
              <Link href="/contact" className="block hover:text-blue-600 transition">
                Contact
              </Link>
              <Link href="/about" className="block hover:text-blue-600 transition">
                About
              </Link>
              <Link href="/privacy-policy" className="block hover:text-blue-600 transition">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block hover:text-blue-600 transition">
                Terms of Service
              </Link>
            </div>

            {/* Donation CTA */}
            <a
              href="#"
              className="inline-block px-4 py-2 text-xs rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              ☕ Support Us
            </a>
          </div>
        </div>

        {/* Affiliate / Broker Section */}
        <div className="mt-20 border-t border-gray-200 dark:border-gray-800 pt-12">

          <h4 className="text-sm font-semibold mb-6">
            Compare India’s Top Brokers
          </h4>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
              <h5 className="font-semibold mb-2">
                Zerodha
              </h5>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">
                India’s largest discount broker with low brokerage.
              </p>
              <a
                href="#"
                className="text-sm text-blue-600 font-medium hover:underline"
              >
                Open Account →
              </a>
            </div>

            <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
              <h5 className="font-semibold mb-2">
                Upstox
              </h5>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">
                Fast trading platform with advanced tools.
              </p>
              <a
                href="#"
                className="text-sm text-blue-600 font-medium hover:underline"
              >
                Open Account →
              </a>
            </div>

            <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
              <h5 className="font-semibold mb-2">
                Angel One
              </h5>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">
                Full-service broker with research insights.
              </p>
              <a
                href="#"
                className="text-sm text-blue-600 font-medium hover:underline"
              >
                Open Account →
              </a>
            </div>

          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 text-xs text-gray-500 leading-relaxed max-w-4xl">
          LiveNifty provides educational financial tools and market commentary.
          We do not provide investment advice, buy/sell recommendations or trading signals.
          Always consult a certified financial advisor before making investment decisions.
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 text-sm text-center text-gray-500">
          © {new Date().getFullYear()} LiveNifty. All rights reserved.
        </div>
      </div>
    </footer>
  );
}