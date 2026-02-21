"use client";

import { useState } from "react";

type FAQ = {
  q: string;
  a: string;
};

export default function FAQSection({
  faqs,
}: {
  faqs: FAQ[];
}) {
  const [openIndex, setOpenIndex] =
    useState<number | null>(null);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-semibold mb-6">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          const panelId = `faq-panel-${index}`;

          return (
            <div
              key={index}
              className="border rounded-xl bg-white shadow-sm"
            >
              <button
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="w-full text-left p-4 font-medium flex justify-between items-center"
              >
                {faq.q}
                <span className="text-lg">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              <div
                id={panelId}
                className={`px-4 pb-4 text-gray-600 transition-all duration-300 ${
                  isOpen
                    ? "opacity-100"
                    : "hidden"
                }`}
              >
                {faq.a}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
