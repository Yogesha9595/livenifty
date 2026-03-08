import { Metadata } from "next";
import BlogLayout from "@/components/BlogLayout";
import BlogTable from "@/components/BlogTable";

const slug = "rd-calculator-guide";

const title =
  "RD Calculator – Calculate Recurring Deposit Returns with Formula & Examples";

const description =
  "Learn how an RD calculator works, how recurring deposit interest is calculated, and how investors estimate maturity value for recurring deposits.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `https://livenifty.com/blog/${slug}`,
  },
  openGraph: {
    title,
    description,
    url: `https://livenifty.com/blog/${slug}`,
    siteName: "LiveNifty",
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function Page() {
  const faqs = [
    {
      q: "What is an RD calculator?",
      a: "An RD calculator estimates the maturity value of a recurring deposit based on monthly investment, interest rate, and deposit tenure.",
    },
    {
      q: "What is a recurring deposit?",
      a: "A recurring deposit is a savings scheme offered by banks where investors deposit a fixed amount every month and earn interest.",
    },
    {
      q: "Is RD better than FD?",
      a: "Recurring deposits are suitable for monthly savings, while fixed deposits require a lump sum investment.",
    },
    {
      q: "How is RD interest calculated?",
      a: "RD interest is usually compounded quarterly based on the bank’s interest rate and deposit tenure.",
    },
    {
      q: "What is the minimum tenure for RD?",
      a: "Most banks allow RD tenures starting from 6 months up to 10 years.",
    },
  ];

  return (
    <BlogLayout
      title={title}
      description={description}
      slug={slug}
      category="investment"
      faqs={faqs}
    >

      {/* INTRO */}

      <p>
        Recurring Deposit (RD) is a popular savings option offered by banks
        that allows individuals to invest a fixed amount every month and earn
        interest on their deposits.
      </p>

      <p>
        An <strong>RD calculator</strong> helps investors estimate the maturity
        value of their recurring deposits by considering monthly contributions,
        interest rate, and investment tenure.
      </p>

      <p>
        Try our{" "}
        <a
          href="/calculators/rd-calculator"
          className="text-blue-600 font-semibold"
        >
          RD Calculator
        </a>{" "}
        to estimate your recurring deposit returns instantly.
      </p>

      {/* WHAT IS RD */}

      <h2>What is a Recurring Deposit?</h2>

      <p>
        A recurring deposit is a fixed-income investment scheme where an
        investor deposits a fixed amount every month into a bank account.
      </p>

      <p>
        The bank pays interest on these deposits, usually compounded quarterly,
        and the total amount is returned at maturity.
      </p>

      <ul>
        <li>Monthly investment plan</li>
        <li>Fixed interest rate</li>
        <li>Safe bank investment</li>
        <li>Guaranteed maturity value</li>
      </ul>

      {/* RD CALCULATOR */}

      <h2>What is an RD Calculator?</h2>

      <p>
        An RD calculator is a financial tool used to estimate the total value
        of a recurring deposit investment at maturity.
      </p>

      <p>The calculator requires the following inputs:</p>

      <ul>
        <li>Monthly deposit amount</li>
        <li>Interest rate</li>
        <li>Deposit tenure</li>
      </ul>

      <p>
        Based on these inputs, the calculator determines the maturity amount
        and total interest earned.
      </p>

      {/* RD FORMULA */}

      <h2>Recurring Deposit Formula</h2>

      <p>
        The maturity value of a recurring deposit is calculated using the
        compound interest formula applied to monthly deposits.
      </p>

      <div className="border-2 border-orange-500 p-4 my-6 inline-block font-semibold bg-orange-50 rounded-lg text-lg">
        M = R × [(1 + i)<sup>n</sup> − 1] / (1 − (1 + i)<sup>−1/3</sup>)
      </div>

      <p>Where:</p>

      <ul>
        <li><strong>M</strong> = Maturity amount</li>
        <li><strong>R</strong> = Monthly deposit</li>
        <li><strong>i</strong> = Interest rate</li>
        <li><strong>n</strong> = Number of quarters</li>
      </ul>

      <p>
        Because this formula is complex, investors usually prefer using an
        RD calculator instead of calculating manually.
      </p>

      {/* EXAMPLE */}

      <h2>Example RD Calculation</h2>

      <p>
        Suppose an investor deposits ₹5,000 every month for 5 years with an
        interest rate of 7%.
      </p>

      <BlogTable
        headers={[
          "Monthly Deposit",
          "Tenure",
          "Total Investment",
          "Estimated Maturity Value",
        ]}
        rows={[
          ["₹5,000", "5 Years", "₹3,00,000", "₹3,54,000 (approx)"],
        ]}
      />

      <p>
        The maturity value includes both the invested amount and the interest
        earned over the investment period.
      </p>

      {/* BENEFITS */}

      <h2>Benefits of Recurring Deposits</h2>

      <ul>
        <li>Encourages disciplined monthly savings</li>
        <li>Provides stable returns</li>
        <li>Low investment risk</li>
        <li>Flexible deposit amounts</li>
      </ul>

      {/* LIMITATIONS */}

      <h2>Limitations of RD Investments</h2>

      <ul>
        <li>Lower returns compared to market-linked investments</li>
        <li>Interest income may be taxable</li>
        <li>Penalty for premature withdrawal</li>
      </ul>

      {/* WHO SHOULD USE */}

      <h2>Who Should Use an RD Calculator?</h2>

      <ul>
        <li>Individuals planning monthly savings</li>
        <li>Investors seeking safe fixed-income returns</li>
        <li>People saving for short-term financial goals</li>
      </ul>

      {/* INTERNAL LINKS */}

      <h2>Related Financial Calculators</h2>

      <ul>
        <li>
          <a href="/calculators/fd-calculator">
            FD Calculator
          </a>
        </li>
        <li>
          <a href="/calculators/emi-calculator">
            EMI Calculator
          </a>
        </li>
        <li>
          <a href="/calculators/ppf-calculator">
            PPF Calculator
          </a>
        </li>
      </ul>

      {/* CONCLUSION */}

      <h2>Final Thoughts</h2>

      <p>
        Recurring deposits are a simple and reliable way to build savings
        through disciplined monthly investments.
      </p>

      <p>
        An RD calculator helps investors estimate their maturity value and
        plan their financial goals more effectively.
      </p>

    </BlogLayout>
  );
}