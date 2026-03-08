import { notFound } from "next/navigation";
import { getPostBySlug, blogPosts } from "@/lib/blogData";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const baseUrl = "https://livenifty.in";


// ===============================
// Static params for export / SEO
// ===============================
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}


// ===============================
// Premium Metadata
// ===============================
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | LiveNifty",
    };
  }

  const url = `${baseUrl}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: post.title,
      description: post.description,
      url,
      siteName: "LiveNifty",
      type: "article",
      publishedTime: post.publishedAt,
      images: [
        {
          url: `${baseUrl}${post.image}`,
          width: 1200,
          height: 630,
          alt: post.imageAlt,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`${baseUrl}${post.image}`],
    },
  };
}



// ===============================
// Helper functions
// ===============================
function calculateReadingTime(html: string) {
  const words = html.replace(/<[^>]*>/g, "").split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min read`;
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}



// ===============================
// Premium Blog Page
// ===============================
export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = getPostBySlug(slug);

  if (!post) return notFound();

  const readingTime = calculateReadingTime(post.content);

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 4);



  return (
    <main className="bg-white dark:bg-black">

      {/* ================= HERO ================= */}
      <section className="border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-12">

          <div className="max-w-4xl">

            <div className="text-sm text-blue-600 font-medium mb-3">
              {post.category.toUpperCase()}
            </div>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              {post.title}
            </h1>

            <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
              {post.description}
            </p>


            {/* Author + Trust */}
            <div className="flex items-center gap-4 text-sm text-gray-500">

              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">
                LN
              </div>

              <div>
                <div className="font-medium text-gray-900 dark:text-gray-100">
                  LiveNifty Research
                </div>

                <div>
                  Updated {formatDate(post.updatedAt || post.publishedAt)} · {readingTime}
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>



      {/* ================= CONTENT AREA ================= */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-3 gap-12">

        {/* MAIN CONTENT */}
        <article className="lg:col-span-2">

          {/* Featured Image */}
          <div className="relative w-full h-[280px] md:h-[420px] mb-10 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm">

            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              priority
              className="object-cover"
              sizes="(max-width:768px) 100vw, 800px"
            />

          </div>



          {/* AdSense Slot */}
          <div className="mb-10">

            <div className="bg-gray-100 dark:bg-gray-900 text-center py-10 rounded-xl text-sm text-gray-500 border border-gray-200 dark:border-gray-800">
              Advertisement
            </div>

          </div>



          {/* Blog Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none
                          prose-headings:font-semibold
                          prose-a:text-blue-600
                          hover:prose-a:text-blue-700
                          prose-img:rounded-xl">

            <div
              dangerouslySetInnerHTML={{
                __html: post.content,
              }}
            />

          </div>



          {/* Bottom AdSense */}
          <div className="mt-12">

            <div className="bg-gray-100 dark:bg-gray-900 text-center py-10 rounded-xl text-sm text-gray-500 border border-gray-200 dark:border-gray-800">
              Advertisement
            </div>

          </div>

        </article>



        {/* ================= SIDEBAR ================= */}
        <aside className="space-y-8">

          {/* Affiliate Block */}
          <div className="border rounded-2xl p-6 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-black border-gray-200 dark:border-gray-800">

            <h3 className="font-semibold mb-3">
              Recommended Broker
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Trade with India’s trusted broker with lowest fees.
            </p>

            <a
              href="#"
              className="block text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
            >
              Open Free Account
            </a>

          </div>



          {/* Sidebar AdSense */}
          <div className="bg-gray-100 dark:bg-gray-900 text-center py-12 rounded-xl text-sm text-gray-500 border border-gray-200 dark:border-gray-800">
            Advertisement
          </div>



          {/* Related Posts */}
          <div>

            <h3 className="font-semibold mb-4">
              Related Guides
            </h3>

            <div className="space-y-4">

              {relatedPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="block group"
                >

                  <div className="flex gap-3 items-center">

                    <div className="relative w-16 h-16 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800">

                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover"
                      />

                    </div>

                    <div className="text-sm font-medium group-hover:text-blue-600 transition">
                      {p.title}
                    </div>

                  </div>

                </Link>
              ))}

            </div>

          </div>


        </aside>

      </section>



      {/* ================= DISCLAIMER ================= */}
      <section className="max-w-4xl mx-auto px-6 pb-16 text-center">

        <p className="text-sm text-gray-500 dark:text-gray-400">
          This article is for informational purposes only and does not constitute financial advice.
        </p>

      </section>

    </main>
  );
}