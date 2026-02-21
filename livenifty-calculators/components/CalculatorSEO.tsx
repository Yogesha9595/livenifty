type Props = {
  title: string;
  description: string;
  faqs: { q: string; a: string }[];
};

export default function CalculatorSEO({
  title,
  description,
  faqs,
}: Props) {
  const faqSchema =
    faqs && faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.a,
            },
          })),
        }
      : null;

  return (
    <div className="mt-16 space-y-12">

      {/* About Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">
          About this {title}
        </h2>

        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </section>

      {/* FAQ Section */}
      {faqs.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white/70 backdrop-blur p-5 rounded-xl border"
              >
                <h3 className="font-semibold text-gray-800">
                  {faq.q}
                </h3>
                <p className="text-gray-600 mt-2">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* FAQ Schema */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}

    </div>
  );
}
