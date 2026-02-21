"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const sections = [
  {
    title: "Investment",
    items: [
      { name: "SIP Calculator", href: "/calculators/sip-calculator" },
      { name: "Lumpsum Calculator", href: "/calculators/lumpsum-calculator" },
      { name: "CAGR Calculator", href: "/calculators/cagr-calculator" },
      { name: "SWP Calculator", href: "/calculators/swp-calculator" },
      { name: "PPF Calculator", href: "/calculators/ppf-calculator" },
      { name: "Step-Up SIP", href: "/calculators/stepup-sip-calculator" },
    ],
  },
  {
    title: "Loans & Deposits",
    items: [
      { name: "EMI Calculator", href: "/calculators/emi-calculator" },
      { name: "FD Calculator", href: "/calculators/fd-calculator" },
      { name: "RD Calculator", href: "/calculators/rd-calculator" },
    ],
  },
  {
    title: "Tax & Utility",
    items: [
      { name: "Income Tax Calculator", href: "/calculators/income-tax-calculator" },
      { name: "GST Calculator", href: "/calculators/gst-calculator" },
      { name: "Gratuity Calculator", href: "/calculators/gratuity-calculator" },
      { name: "HRA Calculator", href: "/calculators/hra-calculator" },
    ],
  },
  {
    title: "Trading",
    items: [
      { name: "Options Calculator", href: "/calculators/options-calculator" },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="w-64 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm h-fit">
      <h2 className="text-lg font-semibold mb-6">
        Financial Calculators
      </h2>

      <div className="space-y-6">
        {sections.map((section) => (
          <div key={section.title}>
            <h3 className="text-xs uppercase tracking-wide text-gray-500 mb-3">
              {section.title}
            </h3>

            <ul className="space-y-2">
              {section.items.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block px-3 py-2 rounded-lg text-sm transition ${
                        isActive
                          ? "bg-blue-600 text-white font-medium"
                          : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}
