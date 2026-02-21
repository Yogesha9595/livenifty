import BreadcrumbSchema from "./BreadcrumbSchema";
import { blogPosts } from "@/lib/blogData";

type FAQ = {
  q: string;
  a: string;
};

type Props = {
  title: string;
  description: string;
  slug: string;
  faqs: FAQ[];
};

export default function BlogSchema({
  title,
  description,
  slug,
  faqs,
}: Props) {
  const baseUrl = "https://livenifty.com";
  const url = `${baseUrl}/blog/${slug}`;

  const post = blogPosts.find(
    (p) => p.slug === slug
  );

  // Safe date handling
  const publishedDate = post?.publishedAt
    ? new Date(post.publishedAt).toISOString()
    : new Date().toISOString();

  const modifiedDate = post?.updatedAt
    ? new Date(post.updatedAt).toISOString()
    : publishedDate;

  // BlogPosting Schema
  const articleSchema: any = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    headline: title,
    description: description,
    inLanguage: "en",
    author: {
      "@type": "Organization",
      name: "LiveNifty",
      url: baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "LiveNifty",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo.png`,
      },
    },
    datePublished: publishedDate,
    dateModified: modifiedDate,
  };

  // Add image only if available
  if (post?.image) {
    articleSchema.image = `${baseUrl}${post.image}`;
  }

  // FAQ Schema (only if FAQs exist)
  const faqSchema =
    faqs && faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": `${url}#faq`,
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
    <>
      {/* BlogPosting Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      {/* FAQ Schema */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}

      {/* Breadcrumb Schema */}
      <BreadcrumbSchema
        items={[
          { name: "Home", url: baseUrl },
          { name: "Blog", url: `${baseUrl}/blog` },
          { name: title, url },
        ]}
      />
    </>
  );
}
