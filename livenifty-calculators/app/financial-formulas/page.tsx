import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Financial Formulas – SIP, EMI, CAGR, Compound Interest",
  description:
    "Learn important financial formulas including SIP formula, EMI formula, CAGR formula, compound interest formula and investment calculations used in finance.",
  alternates: {
    canonical: "https://livenifty.in/financial-formulas",
  },
};

export default function FinancialFormulasPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-bold mb-6">
        Financial Formulas Explained
      </h1>

      <p className="text-gray-600 dark:text-gray-400 mb-12">
        Understanding financial formulas helps investors calculate returns,
        plan investments and analyze financial decisions. Below are the most
        commonly used formulas in finance and investment planning.
      </p>

      {/* SIP Formula */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-3">
          SIP Formula
        </h2>

        <p className="mb-4">
          SIP (Systematic Investment Plan) is used to calculate the future
          value of regular monthly investments in mutual funds.
        </p>

        <div className="bg-gray-100 dark:bg-slate-800 p-4 rounded-lg mb-4">
          <code>FV = P × [((1 + r)^n − 1) / r] × (1 + r)</code>
        </div>

        <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300">
          <li>P = Monthly Investment</li>
          <li>r = Monthly Interest Rate</li>
          <li>n = Number of Months</li>
        </ul>

        <Link
          href="/calculators/sip-calculator"
          className="text-blue-600 mt-4 inline-block"
        >
          Use SIP Calculator →
        </Link>
      </section>

      {/* EMI Formula */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-3">
          EMI Formula
        </h2>

        <p className="mb-4">
          EMI (Equated Monthly Installment) is used to calculate monthly loan
          repayment for home loans, personal loans or car loans.
        </p>

        <div className="bg-gray-100 dark:bg-slate-800 p-4 rounded-lg mb-4">
          <code>EMI = P × r × (1 + r)^n / ((1 + r)^n − 1)</code>
        </div>

        <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300">
          <li>P = Loan Amount</li>
          <li>r = Monthly Interest Rate</li>
          <li>n = Loan Tenure (months)</li>
        </ul>

        <Link
          href="/calculators/emi-calculator"
          className="text-blue-600 mt-4 inline-block"
        >
          Use EMI Calculator →
        </Link>
      </section>

      {/* CAGR Formula */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-3">
          CAGR Formula
        </h2>

        <p className="mb-4">
          CAGR (Compound Annual Growth Rate) measures the average annual growth
          rate of an investment over time.
        </p>

        <div className="bg-gray-100 dark:bg-slate-800 p-4 rounded-lg mb-4">
          <code>CAGR = (Ending Value / Beginning Value)^(1/n) − 1</code>
        </div>

        <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300">
          <li>Ending Value = Final investment value</li>
          <li>Beginning Value = Initial investment</li>
          <li>n = Number of years</li>
        </ul>

        <Link
          href="/calculators/cagr-calculator"
          className="text-blue-600 mt-4 inline-block"
        >
          Use CAGR Calculator →
        </Link>
      </section>

      {/* Compound Interest */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-3">
          Compound Interest Formula
        </h2>

        <p className="mb-4">
          Compound interest calculates the total value of an investment where
          interest is earned on both the principal and previously earned
          interest.
        </p>

        <div className="bg-gray-100 dark:bg-slate-800 p-4 rounded-lg mb-4">
          <code>A = P (1 + r/n)^(nt)</code>
        </div>

        <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300">
          <li>P = Principal Amount</li>
          <li>r = Interest Rate</li>
          <li>n = Compounding Frequency</li>
          <li>t = Time (years)</li>
        </ul>
      </section>

      {/* CTA */}
      <div className="mt-16 border-t pt-10">
        <h3 className="text-xl font-semibold mb-4">
          Explore More Financial Calculators
        </h3>

        <Link
          href="/calculators"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          View All Calculators
        </Link>
      </div>
    </div>
  );
}