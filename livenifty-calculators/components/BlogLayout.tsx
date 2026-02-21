"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SimilarCalculators from "./SimilarCalculators";
import BlogSchema from "./BlogSchema";
import BlogShare from "./BlogShare";
import RelatedPosts from "./RelatedPosts";

type Props = {
  title: string;
  description: string;
  slug: string;
  category: string;
  children: React.ReactNode;
  faqs: { q: string; a: string }[];
};

export default function BlogLayout({
  title,
  description,
  slug,
  category,
  children,
  faqs,
}: Props) {
  const [headings, setHeadings] = useState<
    { id: string; text: string }[]
  >([]);
  const [readingTime, setReadingTime] = useState(1);

  useEffect(() => {
    const elements = document.querySelectorAll("article h2");

    const mapped = Array.from(elements).map((el, index) => {
      const id = `section-${slug}-${index}`;
      el.setAttribute("id", id);
      return {
        id,
        text: el.textContent || "",
      };
    });

    setHeadings(mapped);

    const text =
      document.querySelector("article")?.textContent || "";

    const words = text.trim().split(/\s+/).length;
    const minutes = Math.max(1, Math.ceil(words / 200));
    setReadingTime(minutes);
  }, [slug]);

  return (
    <div className="bg-white">

      {/* Schema */}
      <BlogSchema
        title={title}
        description={description}
        slug={slug}
        faqs={faqs}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/">Home</Link> /{" "}
          <Link href="/blog">Blog</Link> /{" "}
          <span className="text-gray-700">
            {title}
          </span>
        </nav>

        <main className="grid lg:grid-cols-[1fr_300px] gap-12">

          {/* MAIN CONTENT */}
          <div>

            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              {title}
            </h1>

            <p className="text-gray-600 text-lg mb-4">
              {description}
            </p>

            <p className="text-sm text-gray-500 mb-6">
              ⏱ {readingTime} min read
            </p>

            <BlogShare title={title} slug={slug} />

            <article
              className="
                prose prose-base sm:prose-lg
                max-w-none
                prose-headings:font-semibold
                prose-h2:mt-12
                prose-h3:mt-8
              "
            >
              {children}
            </article>

            {/* FAQ */}
            {faqs.length > 0 && (
              <section className="mt-16">
                <h2 className="text-2xl font-semibold mb-6">
                  Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <details
                      key={index}
                      className="border rounded-xl p-4 bg-gray-50"
                    >
                      <summary className="font-medium cursor-pointer">
                        {faq.q}
                      </summary>
                      <p className="mt-3 text-gray-700">
                        {faq.a}
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            )}

            <RelatedPosts
              currentSlug={slug}
              category={category}
            />

            <div className="mt-20">
              <SimilarCalculators category={category} />
            </div>

          </div>

          {/* SIDEBAR */}
          <aside className="hidden lg:block sticky top-24 h-fit space-y-8">

            {/* TOC */}
            {headings.length > 0 && (
              <div className="p-5 bg-gray-50 rounded-2xl border">
                <h4 className="font-semibold mb-4">
                  Table of Contents
                </h4>
                <ul className="space-y-2 text-sm">
                  {headings.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="text-gray-600 hover:text-blue-600"
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* AD SLOT */}
            <div className="border rounded-2xl p-4 bg-gray-50 text-center">
              <p className="text-xs text-gray-400 mb-2">
                Advertisement
              </p>
              <div className="h-[250px] bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-sm">
                300x250 Ad Space
              </div>
            </div>

            {/* Sticky CTA */}
            <div className="p-6 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl shadow-xl">
              <h4 className="font-semibold mb-3">
                Start Planning Today
              </h4>
              <p className="text-sm mb-4 opacity-90">
                Calculate your potential wealth instantly.
              </p>
              <Link
                href="/calculators/sip-calculator"
                className="block text-center bg-white text-blue-700 font-semibold py-2 rounded-lg"
              >
                Try SIP Calculator
              </Link>
            </div>

          </aside>

        </main>
      </div>
    </div>
  );
}
