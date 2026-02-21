import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blogData";
import { calculatorSEO } from "@/lib/calculatorSEOData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://livenifty.com";
  const now = new Date();

  /* ---------------------------
     Blog Post URLs
  ---------------------------- */
  const blogUrls: MetadataRoute.Sitemap = blogPosts.map(
    (post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(
        post.updatedAt || post.publishedAt
      ),
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  /* ---------------------------
     Blog Category URLs
  ---------------------------- */
  const categories = [
    ...new Set(blogPosts.map((post) => post.category)),
  ];

  const categoryUrls: MetadataRoute.Sitemap =
    categories.map((category) => ({
      url: `${baseUrl}/blog/${category}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
    }));

  /* ---------------------------
     Calculator URLs (FIXED)
  ---------------------------- */
  const calculatorUrls: MetadataRoute.Sitemap =
    Object.keys(calculatorSEO).map((slug) => ({
      url: `${baseUrl}/calculators/${slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    }));

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...blogUrls,
    ...categoryUrls,
    ...calculatorUrls,
  ];
}
