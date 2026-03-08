import { sipLandingPages, emiLandingPages } from "@/lib/calculatorLandingPages"
import { notFound } from "next/navigation"

const pages = [...sipLandingPages, ...emiLandingPages]

export function generateStaticParams() {

  return pages.map((page) => ({
    landing: page.slug
  }))

}

export default function CalculatorLandingPage({
  params
}: {
  params: { landing: string }
}) {

  const page = pages.find(p => p.slug === params.landing)

  if (!page) return notFound()

  return (

    <div className="max-w-5xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-bold mb-6">
        {page.title}
      </h1>

      <p className="text-gray-600 mb-8">
        Use our free calculator to estimate returns and plan your financial goals.
      </p>

      {/* Calculator embed */}

      <iframe
        src="/calculators/sip-calculator"
        className="w-full h-[500px] border rounded-xl"
      />

    </div>

  )
}