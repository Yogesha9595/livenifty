import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/blogData";
import AdBanner from "@/components/ads/AdBanner";

const baseUrl = "https://livenifty.in";
const POSTS_PER_PAGE = 6;

// ✅ SEO Metadata
export const metadata: Metadata = {
  title: "Finance Blog – Investment Guides & Calculators | LiveNifty",
  description:
    "Explore SIP guides, mutual fund strategies, tax planning tips and financial calculator explanations to build long-term wealth.",

  alternates: {
    canonical: `${baseUrl}/blog`,
  },

  openGraph: {
    title: "Finance Blog – Investment Guides & Calculators",
    description:
      "Expert financial guides and investment strategies.",
    url: `${baseUrl}/blog`,
    siteName: "LiveNifty",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "LiveNifty Finance Blog",
    description:
      "Investment guides, SIP strategies and calculator tutorials.",
  },
};

// ✅ Next.js 16 async params
export default async function BlogIndexPage({
  searchParams,
}: {
  searchParams: Promise<{
    page?: string;
    q?: string;
    tag?: string;
  }>;
}) {
  const params = await searchParams;

  const page = Number(params?.page) || 1;
  const query = params?.q?.toLowerCase() || "";
  const tagFilter = params?.tag || "";

  // ✅ Filter posts
  let filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(query) ||
      post.description.toLowerCase().includes(query);

    const matchesTag =
      tagFilter === "" ||
      post.tags?.includes(tagFilter);

    return matchesSearch && matchesTag;
  });

  // ✅ Featured post (only first)
  const featuredPost =
    page === 1
      ? filteredPosts.find((post) => post.featured)
      : null;

  // ✅ Remove featured from list
  if (featuredPost) {
    filteredPosts = filteredPosts.filter(
      (post) => post.slug !== featuredPost.slug
    );
  }

  const totalPages = Math.ceil(
    filteredPosts.length / POSTS_PER_PAGE
  );

  const paginatedPosts = filteredPosts.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE
  );

  const categories = [
    ...new Set(blogPosts.map((post) => post.category)),
  ];

  const tags = [
    ...new Set(
      blogPosts.flatMap((post) => post.tags || [])
    ),
  ];

  return (
    <main className="bg-white dark:bg-black transition-colors">

      {/* TOP ADSENSE SLOT */}
      <AdBanner />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">

        {/* HEADER */}
        <header className="max-w-3xl mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Financial Guides & Investment Insights
          </h1>

          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Learn investing, mutual funds, tax saving, and financial planning.
          </p>
        </header>

        {/* SEARCH */}
        <form className="mb-10">
          <input
            type="text"
            name="q"
            placeholder="Search financial guides..."
            defaultValue={query}
            className="w-full md:w-1/2 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 dark:bg-black dark:border-gray-800"
          />
        </form>

        {/* CATEGORY FILTER */}
        <div className="flex flex-wrap gap-3 mb-6">
          {categories.map((category) => (
            <Link
              key={category}
              href={`/blog?category=${category}`}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-900 rounded-full text-sm hover:bg-blue-600 hover:text-white transition"
            >
              {category}
            </Link>
          ))}
        </div>

        {/* TAG FILTER */}
        <div className="flex flex-wrap gap-2 mb-12">
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/blog?tag=${tag}`}
              className="text-xs px-3 py-1 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition"
            >
              #{tag}
            </Link>
          ))}
        </div>

        {/* FEATURED */}
        {featuredPost && (
          <section className="mb-16">

            <h2 className="text-2xl font-semibold mb-6">
              Featured Guide
            </h2>

            <Link
              href={`/blog/${featuredPost.slug}`}
              className="block rounded-2xl overflow-hidden hover:shadow-xl transition border dark:border-gray-800"
            >
              <div className="relative h-64">

                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  priority
                  className="object-cover"
                />

              </div>

              <div className="p-8 bg-blue-50 dark:bg-gray-900">

                <div className="text-blue-600 text-sm mb-2">
                  {featuredPost.category}
                </div>

                <h3 className="text-2xl font-bold mb-3">
                  {featuredPost.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400">
                  {featuredPost.description}
                </p>

              </div>
            </Link>

          </section>
        )}

        {/* ADSENSE SLOT */}
        <AdBanner />

        {/* POSTS GRID */}
        <section>

          {paginatedPosts.length === 0 && (
            <p className="text-gray-500 text-center">
              No articles found.
            </p>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {paginatedPosts.map((post) => (

              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group border rounded-2xl overflow-hidden hover:shadow-xl transition dark:border-gray-800"
              >

                <div className="relative h-48">

                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition"
                  />

                </div>

                <div className="p-6">

                  <div className="text-blue-600 text-sm mb-2">
                    {post.category}
                  </div>

                  <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {post.description}
                  </p>

                </div>

              </Link>

            ))}

          </div>

        </section>

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-16 gap-3">

            {Array.from({ length: totalPages }).map((_, i) => {

              const pageNum = i + 1;

              return (
                <Link
                  key={pageNum}
                  href={`/blog?page=${pageNum}`}
                  className={`px-4 py-2 rounded-lg border ${
                    page === pageNum
                      ? "bg-blue-600 text-white"
                      : "hover:bg-gray-100 dark:hover:bg-gray-900"
                  }`}
                >
                  {pageNum}
                </Link>
              );

            })}

          </div>
        )}

      </div>

      {/* BOTTOM ADSENSE SLOT */}
      <AdBanner />

    </main>
  );
}