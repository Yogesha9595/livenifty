import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About LiveNifty",
  description:
    "Learn about LiveNifty – financial calculators, market tools and investment guides.",
}

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-bold mb-6">
        About LiveNifty
      </h1>

      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        LiveNifty is a platform providing free financial calculators,
        trading tools and investment guides to help investors make
        better financial decisions.
      </p>

    </div>
  )
}