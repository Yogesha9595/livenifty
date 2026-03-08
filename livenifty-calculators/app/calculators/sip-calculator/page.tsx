"use client"

import { useState, useEffect } from "react"
import SliderInput from "@/components/SliderInput"
import DonutChart from "@/components/DonutChart"
import Script from "next/script"
import Link from "next/link"
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema"

function useAnimatedNumber(value: number, duration = 500) {

  const [display, setDisplay] = useState(value)

  useEffect(() => {

    let start = display
    const diff = value - start
    const steps = 25
    const increment = diff / steps
    let count = 0

    const timer = setInterval(() => {

      count++
      start += increment
      setDisplay(Math.floor(start))

      if (count >= steps) {
        setDisplay(value)
        clearInterval(timer)
      }

    }, duration / steps)

    return () => clearInterval(timer)

  }, [value, duration])

  return display
}

export default function SipCalculator() {

  const [monthly, setMonthly] = useState(10000)
  const [rate, setRate] = useState(12)
  const [years, setYears] = useState(15)

  const months = years * 12
  const r = rate / 12 / 100

  const futureValue =
    monthly *
    ((Math.pow(1 + r, months) - 1) / r) *
    (1 + r)

  const invested = monthly * months
  const returns = futureValue - invested

  const animatedInvested = useAnimatedNumber(invested)
  const animatedReturns = useAnimatedNumber(returns)

  const faqs = [

    {
      q: "What is a SIP?",
      a: "A SIP (Systematic Investment Plan) allows investors to invest a fixed amount regularly in mutual funds instead of making a lump sum investment."
    },

    {
      q: "Is SIP better than lumpsum investment?",
      a: "SIP helps average out market volatility by investing regularly. It is generally better suited for long-term investors."
    },

    {
      q: "What return should I assume for SIP?",
      a: "Equity mutual funds historically deliver around 10–14% annual returns over long periods, though actual returns may vary."
    }

  ]

  return (

    <>
      {/* Breadcrumb Schema */}

      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://livenifty.in" },
          { name: "Calculators", url: "https://livenifty.in/calculators" },
          { name: "SIP Calculator", url: "https://livenifty.in/calculators/sip-calculator" }
        ]}
      />

      <div className="flex justify-center px-4 py-10">

        <div className="w-full max-w-6xl space-y-16">

          {/* Visible Breadcrumb */}

          <nav className="text-sm text-gray-500">

            <Link href="/">Home</Link> ›{" "}
            <Link href="/calculators">Calculators</Link> › SIP Calculator

          </nav>

          {/* Calculator Card */}

          <div className="p-12 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_25px_80px_rgba(0,0,0,0.15)]">

            <h1 className="text-4xl font-bold mb-3">
              SIP Calculator
            </h1>

            <p className="text-gray-600 mb-10 text-lg">
              Calculate your monthly SIP investment returns instantly and plan your long-term wealth creation.
            </p>

            <div className="grid md:grid-cols-2 gap-16 items-center">

              {/* Inputs */}

              <div className="space-y-8">

                <SliderInput
                  label="Monthly Investment"
                  min={1000}
                  max={100000}
                  step={500}
                  value={monthly}
                  onChange={setMonthly}
                />

                <SliderInput
                  label="Expected Return (%)"
                  min={1}
                  max={20}
                  step={0.5}
                  value={rate}
                  onChange={setRate}
                />

                <SliderInput
                  label="Time Period (Years)"
                  min={1}
                  max={40}
                  step={1}
                  value={years}
                  onChange={setYears}
                />

              </div>

              {/* Chart */}

              <div className="text-center">

                <DonutChart invested={invested} returns={returns} />

                <div className="mt-8 space-y-4">

                  <div>
                    <p className="text-gray-500 text-sm">
                      Invested Amount
                    </p>

                    <p className="text-xl font-semibold">
                      ₹{animatedInvested.toLocaleString()}
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">
                      Estimated Returns
                    </p>

                    <p className="text-3xl font-bold text-green-600">
                      ₹{animatedReturns.toLocaleString()}
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* SEO Content */}

          <div className="space-y-10 text-gray-700 leading-relaxed">

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                SIP Calculator for ₹10,000 Monthly Investment
              </h2>

              <p>
                If you invest ₹10,000 per month for 15 years at 12% annual return,
                your investment can grow significantly through the power of compounding.
                SIP investing helps build disciplined long-term wealth.
              </p>
            </section>

            <section>

              <h2 className="text-2xl font-semibold mb-3">
                How SIP Returns Are Calculated
              </h2>

              <p>The SIP formula is:</p>

              <p className="font-mono bg-gray-100 p-4 rounded-xl mt-3">
                Future Value = P × [(1 + r)^n − 1] / r × (1 + r)
              </p>

              <p className="mt-3">
                Where P is monthly investment, r is monthly interest rate,
                and n is total number of months invested.
              </p>

            </section>

            <section>

              <h2 className="text-2xl font-semibold mb-3">
                Explore More Investment Tools
              </h2>

              <ul className="list-disc pl-6 space-y-2">

                <li>
                  <Link href="/calculators/lumpsum-calculator" className="text-blue-600 hover:underline">
                    Lumpsum Calculator
                  </Link>
                </li>

                <li>
                  <Link href="/calculators/ppf-calculator" className="text-blue-600 hover:underline">
                    PPF Calculator
                  </Link>
                </li>

                <li>
                  <Link href="/calculators/cagr-calculator" className="text-blue-600 hover:underline">
                    CAGR Calculator
                  </Link>
                </li>

              </ul>

            </section>

          </div>

          {/* FAQ */}

          <div>

            <h2 className="text-3xl font-bold mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">

              {faqs.map((faq, index) => (

                <div
                  key={index}
                  className="bg-white border rounded-xl shadow p-6"
                >

                  <h3 className="font-semibold text-lg mb-2">
                    {faq.q}
                  </h3>

                  <p className="text-gray-600">
                    {faq.a}
                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* FAQ Schema */}

          <Script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.q,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.a,
                  },
                })),
              }),
            }}
          />

          {/* Calculator Schema */}

          <Script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebApplication",
                name: "SIP Calculator",
                url: "https://livenifty.in/calculators/sip-calculator",
                applicationCategory: "FinanceApplication",
                operatingSystem: "All",
                description:
                  "Free SIP calculator to estimate mutual fund investment returns for monthly investments.",
                offers: {
                  "@type": "Offer",
                  price: "0",
                  priceCurrency: "INR",
                },
                creator: {
                  "@type": "Organization",
                  name: "LiveNifty",
                  url: "https://livenifty.in",
                },
              }),
            }}
          />

          <p className="text-sm text-gray-400">
            Last Updated: February 2026
          </p>

        </div>

      </div>
    </>
  )
}