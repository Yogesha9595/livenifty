import { Metadata } from "next";
import BlogLayout from "@/components/BlogLayout";
import BlogTable from "@/components/BlogTable";

const slug = "hra-calculator-guide";

const title =
  "HRA Calculator – Calculate House Rent Allowance Tax Exemption";

const description =
  "Learn how an HRA calculator works, how HRA exemption is calculated under Section 10(13A), and how salaried employees estimate tax deductions.";

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
      q: "What is an HRA calculator?",
      a: "An HRA calculator estimates the tax exemption available on House Rent Allowance based on salary, rent paid, and city of residence.",
    },
    {
      q: "What is HRA?",
      a: "House Rent Allowance (HRA) is a component of salary provided by employers to help employees pay for rented accommodation.",
    },
    {
      q: "Who can claim HRA exemption?",
      a: "Salaried employees receiving HRA and living in rented accommodation can claim HRA exemption under Section 10(13A).",
    },
    {
      q: "Can HRA be claimed without paying rent?",
      a: "No. To claim HRA exemption, the employee must actually pay rent for accommodation.",
    },
    {
      q: "Does city type affect HRA exemption?",
      a: "Yes. HRA exemption rules differ for metro and non-metro cities.",
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
        House Rent Allowance (HRA) is an important component of salary that
        helps employees cover the cost of rented accommodation.
      </p>

      <p>
        An <strong>HRA calculator</strong> helps salaried individuals estimate
        how much tax exemption they can claim on their HRA based on salary,
        rent paid, and city of residence.
      </p>

      <p>
        Try our{" "}
        <a
          href="/calculators/hra-calculator"
          className="text-blue-600 font-semibold"
        >
          HRA Calculator
        </a>{" "}
        to estimate your HRA tax exemption instantly.
      </p>

      {/* WHAT IS HRA */}

      <h2>What is House Rent Allowance (HRA)?</h2>

      <p>
        House Rent Allowance is a salary component provided by employers to
        employees who live in rented accommodation.
      </p>

      <p>
        Under Section 10(13A) of the Income Tax Act, employees can claim
        partial or full tax exemption on the HRA they receive.
      </p>

      <ul>
        <li>Part of employee salary structure</li>
        <li>Helps cover rent expenses</li>
        <li>Eligible for tax exemption under certain conditions</li>
      </ul>

      {/* HRA CALCULATOR */}

      <h2>What is an HRA Calculator?</h2>

      <p>
        An HRA calculator is a financial tool used to estimate the tax
        exemption available on House Rent Allowance.
      </p>

      <p>The calculator requires the following inputs:</p>

      <ul>
        <li>Basic salary</li>
        <li>HRA received</li>
        <li>Rent paid</li>
        <li>City of residence (metro or non-metro)</li>
      </ul>

      <p>
        Based on these inputs, the calculator determines the amount of HRA
        exempt from tax.
      </p>

      {/* HRA EXEMPTION RULE */}

      <h2>HRA Exemption Calculation Rules</h2>

      <p>
        The HRA exemption allowed under the Income Tax Act is the minimum of
        the following three values:
      </p>

      <ul>
        <li>Actual HRA received</li>
        <li>50% of salary for metro cities (40% for non-metro cities)</li>
        <li>Rent paid minus 10% of salary</li>
      </ul>

      {/* EXAMPLE */}

      <h2>Example HRA Calculation</h2>

      <BlogTable
        headers={[
          "Parameter",
          "Value",
        ]}
        rows={[
          ["Basic Salary", "₹40,000/month"],
          ["HRA Received", "₹20,000/month"],
          ["Rent Paid", "₹18,000/month"],
          ["City", "Metro"],
        ]}
      />

      <p>
        Based on these values, the HRA exemption can be calculated using the
        rules defined under the Income Tax Act.
      </p>

      {/* BENEFITS */}

      <h2>Benefits of Using an HRA Calculator</h2>

      <ul>
        <li>Helps estimate tax savings</li>
        <li>Reduces manual tax calculation errors</li>
        <li>Supports tax planning for salaried individuals</li>
        <li>Quickly determines eligible exemption amount</li>
      </ul>

      {/* WHO SHOULD USE */}

      <h2>Who Should Use an HRA Calculator?</h2>

      <ul>
        <li>Salaried employees receiving HRA</li>
        <li>Individuals living in rented accommodation</li>
        <li>Employees planning tax deductions</li>
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
          <a href="/calculators/gst-calculator">
            GST Calculator
          </a>
        </li>
        <li>
          <a href="/calculators/gratuity-calculator">
            Gratuity Calculator
          </a>
        </li>
      </ul>

      {/* CONCLUSION */}

      <h2>Final Thoughts</h2>

      <p>
        HRA exemption can significantly reduce the taxable income of salaried
        individuals who live in rented accommodation.
      </p>

      <p>
        Using an HRA calculator helps determine the exact exemption available
        and makes tax planning easier.
      </p>

    </BlogLayout>
  );
}