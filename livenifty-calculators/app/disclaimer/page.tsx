import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Disclaimer | LiveNifty",
}

export default function DisclaimerPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10">

      <h1 className="text-3xl font-bold mb-6">Disclaimer</h1>

      <p>
        All financial calculators, tools, and information on LiveNifty
        are provided for educational purposes only.
      </p>

      <p className="mt-4">
        Investment decisions involve risks. Users should consult
        financial professionals before making financial decisions.
      </p>

      <p className="mt-4">
        LiveNifty does not guarantee the accuracy or completeness
        of financial calculations.
      </p>

    </main>
  )
}