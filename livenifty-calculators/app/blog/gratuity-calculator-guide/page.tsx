import { Metadata } from "next";
import BlogLayout from "@/components/BlogLayout";
import BlogTable from "@/components/BlogTable";

const slug = "gratuity-calculator-guide";

const title =
  "Gratuity Calculator – Calculate Employee Gratuity Amount with Formula & Examples";

const description =
  "Learn how a gratuity calculator works, gratuity eligibility rules in India, and how employees estimate gratuity amount using salary and years of service.";

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
      q: "What is a gratuity calculator?",
      a: "A gratuity calculator estimates the gratuity amount payable to an employee based on last drawn salary and years of service.",
    },
    {
      q: "What is gratuity?",
      a: "Gratuity is a retirement benefit paid by employers to employees as a reward for long-term service.",
    },
    {
      q: "Who is eligible for gratuity?",
      a: "Employees who complete at least 5 years of continuous service with an employer are generally eligible for gratuity.",
    },
    {
      q: "Is gratuity taxable?",
      a: "Gratuity received by employees is partially tax-exempt under income tax rules depending on eligibility conditions.",
    },
    {
      q: "How is gratuity calculated?",
      a: "Gratuity is calculated using a formula based on last drawn salary and number of completed years of service.",
    },
  ];

  return (
    <BlogLayout
      title={title}
      description={description}
      slug={slug}
      category="tax"
      faqs={faqs}
    >

      {/* INTRO */}

      <p>
        Gratuity is an important retirement benefit provided by employers to
        employees in recognition of their long-term service. It acts as a
        financial reward for loyalty and commitment toward an organization.
      </p>

      <p>
        Many employees are unsure how their gratuity amount is calculated.
        This is where a <strong>gratuity calculator</strong> becomes useful.
        It helps estimate the gratuity payable based on salary and years of
        service.
      </p>

      <p>
        Try our{" "}
        <a
          href="/calculators/gratuity-calculator"
          className="text-blue-600 font-semibold"
        >
          Gratuity Calculator
        </a>{" "}
        to estimate the gratuity amount you may receive.
      </p>

      {/* WHAT IS GRATUITY */}

      <h2>What is Gratuity?</h2>

      <p>
        Gratuity is a lump sum payment made by an employer to an employee
        after a certain period of service. It is governed by the
        <strong> Payment of Gratuity Act, 1972</strong> in India.
      </p>

      <p>
        The gratuity benefit is intended to provide financial security to
        employees after leaving an organization due to retirement,
        resignation, or other eligible circumstances.
      </p>

      <ul>
        <li>Reward for long-term employment</li>
        <li>Part of employee retirement benefits</li>
        <li>Governed by Indian labour laws</li>
        <li>Paid as a lump sum amount</li>
      </ul>

      {/* ELIGIBILITY */}

      <h2>Eligibility for Gratuity</h2>

      <p>
        To receive gratuity, employees must satisfy certain eligibility
        conditions defined under the Payment of Gratuity Act.
      </p>

      <ul>
        <li>Minimum of 5 years of continuous service</li>
        <li>Applicable to employees working in organizations with 10 or more employees</li>
        <li>Paid upon retirement, resignation, or termination</li>
        <li>Also payable to nominee in case of employee death</li>
      </ul>

      <p>
        In some cases such as employee death or disability, the 5-year
        service requirement may not apply.
      </p>

      {/* WHAT IS GRATUITY CALCULATOR */}

      <h2>What is a Gratuity Calculator?</h2>

      <p>
        A gratuity calculator is an online financial tool that helps estimate
        the gratuity amount an employee may receive from an employer.
      </p>

      <p>The calculator generally requires the following inputs:</p>

      <ul>
        <li>Last drawn salary (Basic + DA)</li>
        <li>Total years of service</li>
      </ul>

      <p>
        Based on these inputs, the calculator determines the gratuity amount
        payable according to the formula defined under labour law.
      </p>

      {/* GRATUITY FORMULA */}

      <h2>Gratuity Calculation Formula</h2>

      <p>
        For employees covered under the Payment of Gratuity Act, gratuity is
        calculated using the following formula:
      </p>

      <div className="border-2 border-orange-500 p-4 my-6 inline-block font-semibold bg-orange-50 rounded-lg text-lg">
        Gratuity = (Last Drawn Salary × 15 × Years of Service) / 26
      </div>

      <p>Where:</p>

      <ul>
        <li><strong>Last Drawn Salary</strong> = Basic Salary + Dearness Allowance</li>
        <li><strong>15</strong> = 15 days salary for each year of service</li>
        <li><strong>26</strong> = Number of working days in a month</li>
      </ul>

      <p>
        This formula helps determine the total gratuity amount payable to an
        eligible employee.
      </p>

      {/* EXAMPLE */}

      <h2>Example Gratuity Calculation</h2>

      <p>
        Suppose an employee has the following details:
      </p>

      <BlogTable
        headers={[
          "Parameter",
          "Value",
        ]}
        rows={[
          ["Last Drawn Salary", "₹50,000"],
          ["Years of Service", "10 Years"],
        ]}
      />

      <p>
        Applying the gratuity formula:
      </p>

      <BlogTable
        headers={[
          "Calculation",
          "Amount",
        ]}
        rows={[
          ["Gratuity Amount", "₹2,88,461 (approx)"],
        ]}
      />

      <p>
        This means the employee may receive approximately ₹2.88 lakh as
        gratuity after completing 10 years of service.
      </p>

      {/* FACTORS */}

      <h2>Factors Affecting Gratuity Amount</h2>

      <h3>1. Salary Level</h3>

      <p>
        The gratuity amount depends directly on the last drawn salary of the
        employee. Higher salaries result in larger gratuity payments.
      </p>

      <h3>2. Years of Service</h3>

      <p>
        Longer service duration significantly increases gratuity because the
        calculation is based on years of employment.
      </p>

      <h3>3. Employment Policies</h3>

      <p>
        Some companies may offer better gratuity benefits than the minimum
        required under labour law.
      </p>

      {/* BENEFITS */}

      <h2>Benefits of Gratuity</h2>

      <ul>
        <li>Provides financial support after retirement</li>
        <li>Rewards employees for long-term loyalty</li>
        <li>Helps build retirement savings</li>
        <li>Encourages employee retention</li>
      </ul>

      {/* WHO SHOULD USE */}

      <h2>Who Should Use a Gratuity Calculator?</h2>

      <ul>
        <li>Employees planning retirement benefits</li>
        <li>HR professionals estimating employee liabilities</li>
        <li>Individuals planning long-term financial goals</li>
      </ul>

      {/* INTERNAL LINKS */}

      <h2>Related Tax Calculators</h2>

      <ul>
        <li>
          <a href="/calculators/income-tax-calculator">
            Income Tax Calculator
          </a>
        </li>
        <li>
          <a href="/calculators/hra-calculator">
            HRA Calculator
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
        Gratuity is an essential retirement benefit that rewards employees
        for long-term service. Understanding how gratuity is calculated helps
        employees plan their financial future more effectively.
      </p>

      <p>
        A gratuity calculator simplifies the estimation process by instantly
        calculating the gratuity amount based on salary and years of service.
      </p>

    </BlogLayout>
  );
}