import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/blogData";

export const metadata: Metadata = {
  title:
    "Finance Blog – Investment Guides & Calculators | LiveNifty",
  description:
    "Explore SIP guides, mutual fund strategies, tax planning tips and financial calculator explanations to build long-term wealth.",
  alternates: {
    canonical: "https://livenifty.in/blog",
  },
};

const POSTS_PER_PAGE = 6;

// ✅ Next.js 16 requires async searchParams
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

  // Filter posts
  let filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(query) ||
      post.description.toLowerCase().includes(query);

    const matchesTag =
      tagFilter === "" ||
      post.tags?.includes(tagFilter);

    return matchesSearch && matchesTag;
  });

  const featuredPosts = filteredPosts.filter(
    (post) => post.featured
  );

  const categories = [
    ...new Set(blogPosts.map((post) => post.category)),
  ];

  const tags = [
    ...new Set(
      blogPosts.flatMap((post) => post.tags || [])
    ),
  ];

  const totalPages = Math.ceil(
    filteredPosts.length / POSTS_PER_PAGE
  );

  const paginatedPosts = filteredPosts.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE
  );

  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* HEADER */}
        <header className="max-w-3xl mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Financial Guides & Investment Insights
          </h1>

          <p className="text-gray-600 text-lg">
            Learn how financial calculators work, understand investment formulas,
            and build smarter long-term wealth strategies.
          </p>
        </header>

        {/* SEARCH */}
        <form className="mb-10">
          <input
            type="text"
            name="q"
            placeholder="Search guides..."
            defaultValue={query}
            className="w-full md:w-1/2 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </form>

        {/* CATEGORY FILTER */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => (
            <Link
              key={category}
              href={`/blog/${category}`}
              className="px-4 py-2 bg-gray-100 rounded-full text-sm hover:bg-blue-600 hover:text-white transition"
            >
              {category.charAt(0).toUpperCase() +
                category.slice(1)}
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
        {featuredPosts.length > 0 && page === 1 && (
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">
              Featured Guide
            </h2>

            {featuredPosts.map((post) => (
              <article key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block border rounded-2xl overflow-hidden hover:shadow-xl transition bg-blue-50"
                >
                  {post.image && (
                    <div className="relative w-full h-64">
                      <Image
                        src={post.image}
                        alt={post.imageAlt || post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  <div className="p-8">
                    <div className="text-sm text-blue-600 font-medium mb-2">
                      {post.category}
                    </div>

                    <h3 className="text-2xl font-bold mb-3">
                      {post.title}
                    </h3>

                    <p className="text-gray-700">
                      {post.description}
                    </p>

                    <div className="mt-4 text-blue-600 font-medium">
                      Read Full Guide →
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </section>
        )}

        {/* POSTS GRID */}
        <section>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedPosts.map((post) => (
              <article key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block border rounded-2xl overflow-hidden hover:shadow-xl transition bg-white"
                >
                  {post.image && (
                    <div className="relative w-full h-48">
                      <Image
                        src={post.image}
                        alt={post.imageAlt || post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition duration-300"
                      />
                    </div>
                  )}

                  <div className="p-6">
                    <div className="mb-2 text-sm text-blue-600 font-medium">
                      {post.category}
                    </div>

                    <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 text-sm">
                      {post.description}
                    </p>

                    <div className="mt-4 text-blue-600 font-medium text-sm">
                      Read More →
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-16 gap-3">
            {Array.from({ length: totalPages }).map(
              (_, index) => (
                <Link
                  key={index}
                  href={`/blog?page=${index + 1}`}
                  className={`px-4 py-2 rounded-lg border ${
                    page === index + 1
                      ? "bg-blue-600 text-white"
                      : "bg-white hover:bg-blue-50"
                  }`}
                >
                  {index + 1}
                </Link>
              )
            )}
          </div>
        )}

      </div>
    </div>
  );
}