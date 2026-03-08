import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms & Conditions | LiveNifty",
  description: "Terms and conditions governing the use of LiveNifty financial calculators and tools.",
}

export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10">

      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

      <p>
        By accessing this website you agree to comply with these
        terms and conditions.
      </p>

      <h2 className="text-xl font-semibold mt-6">Use of Calculators</h2>

      <p>
        The financial calculators provided on LiveNifty are for
        informational purposes only and should not be considered
        financial advice.
      </p>

      <h2 className="text-xl font-semibold mt-6">Limitation of Liability</h2>

      <p>
        LiveNifty will not be liable for any losses or damages
        arising from the use of our calculators or financial tools.
      </p>

      <h2 className="text-xl font-semibold mt-6">External Links</h2>

      <p>
        Our website may contain links to external websites.
        We are not responsible for the content of those websites.
      </p>

    </main>
  )
}