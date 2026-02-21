import Link from "next/link";
import { blogPosts } from "@/lib/blogData";

type Props = {
  currentSlug: string;
  category: string;
};

export default function RelatedPosts({
  currentSlug,
  category,
}: Props) {

  // First: Same category
  let related = blogPosts.filter(
    (post) =>
      post.category === category &&
      post.slug !== currentSlug
  );

  // Fallback: Latest posts if none found
  if (related.length === 0) {
    related = blogPosts.filter(
      (post) => post.slug !== currentSlug
    );
  }

  // Limit to 3 posts max
  related = related.slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="mt-20">
      <h2 className="text-2xl font-semibold mb-8">
        Related Articles
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {related.map((post) => (
          <article key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="block border rounded-2xl p-6 hover:shadow-md transition bg-white"
            >
              <div className="text-xs uppercase tracking-wide text-blue-600 font-medium mb-2">
                {post.category}
              </div>

              <h3 className="text-lg font-semibold mb-2">
                {post.title}
              </h3>

              <p className="text-gray-600 text-sm line-clamp-3">
                {post.description}
              </p>

              <div className="mt-4 text-blue-600 text-sm font-medium">
                Read More →
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
