import { MetadataRoute } from "next"
import { blogPosts } from "@/lib/blogData"
import { calculatorSEO } from "@/lib/calculatorSEOData"
import brokers from "@/data/brokers.json"

/* Required for static export */
export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {

  const baseUrl = "https://livenifty.in"
  const now = new Date()

  /* ---------------------------
     Helper: Slugify
  ---------------------------- */

  const slugify = (text: string) =>
    text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")

  /* ---------------------------
     Blog Posts
  ---------------------------- */

  const blogUrls: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  /* ---------------------------
     Blog Categories
  ---------------------------- */

  const categories = [...new Set(blogPosts.map((post) => post.category))]

  const categoryUrls: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${baseUrl}/blog/${slugify(category)}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.6,
  }))

  /* ---------------------------
     Calculator Pages
  ---------------------------- */

  const calculatorUrls: MetadataRoute.Sitemap = Object.keys(calculatorSEO).map((slug) => ({
    url: `${baseUrl}/calculators/${slug}-calculator`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }))

  /* ---------------------------
     Broker Pages
  ---------------------------- */

  const brokerUrls: MetadataRoute.Sitemap = brokers.map((broker) => ({
    url: `${baseUrl}/brokers/${broker.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  /* ---------------------------
     Broker Comparison Pages
  ---------------------------- */

  const comparisonUrls: MetadataRoute.Sitemap = []

  for (let i = 0; i < brokers.length; i++) {
    for (let j = i + 1; j < brokers.length; j++) {

      comparisonUrls.push({
        url: `${baseUrl}/compare-brokers/${brokers[i].slug}-vs-${brokers[j].slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
      })

    }
  }

  /* ---------------------------
     Static Pages
  ---------------------------- */

  const staticPages: MetadataRoute.Sitemap = [

    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: `${baseUrl}/calculators`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/calculators/all`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/compare-brokers`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/investment-guides`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/investment-strategies`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/best-stock-brokers-india`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/lowest-brokerage-brokers-india`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/financial-formulas`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },

    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },

    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },

    {
      url: `${baseUrl}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },

    {
      url: `${baseUrl}/disclaimer`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },

  ]

  /* ---------------------------
     Remove duplicate URLs
  ---------------------------- */

  const allUrls = [
    ...staticPages,
    ...blogUrls,
    ...categoryUrls,
    ...calculatorUrls,
    ...brokerUrls,
    ...comparisonUrls,
  ]

  const uniqueUrls = Array.from(
    new Map(allUrls.map((item) => [item.url, item])).values()
  )

  return uniqueUrls
}