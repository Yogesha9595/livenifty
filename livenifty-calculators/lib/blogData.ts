// ============================================
// LiveNifty Blog Data Layer (Production)
// ============================================

export type BlogCategory =
  | "sip"
  | "investment"
  | "returns"
  | "tax"
  | "loan"
  | "trading";

export type BlogStatus = "published" | "draft";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: BlogCategory;
  featured: boolean;
  image: string;
  imageAlt: string;
  tags: string[];
  publishedAt: string; // ISO Date
  updatedAt?: string;
  status: BlogStatus;
}

// 🔥 Use `satisfies` to prevent type widening
const rawPosts = [
  {
    slug: "sip-calculator-guide",
    title:
      "SIP Calculator – Complete Guide with Formula & Strategy",
    description:
      "Learn how SIP calculator works, formula explained with examples and wealth building strategies.",
    category: "sip",
    featured: true,
    image: "/blog/sip-calculator-guide.jpg",
    imageAlt:
      "SIP calculator guide showing compounding growth and mutual fund investment strategy",
    tags: ["sip", "mutual-fund", "retirement", "investment"],
    publishedAt: "2026-02-20",
    updatedAt: "2026-02-21",
    status: "published",
  },
  {
    slug: "lumpsum-calculator-guide",
    title:
      "Lumpsum Investment Calculator Explained with Formula",
    description:
      "Understand lumpsum returns calculation and comparison with SIP investing.",
    category: "investment",
    featured: false,
    image: "/blog/lumpsum-guide.jpg",
    imageAlt:
      "Lumpsum mutual fund investment growth chart illustration",
    tags: ["lumpsum", "mutual-fund", "investment"],
    publishedAt: "2026-02-18",
    status: "published",
  },
  {
    slug: "cagr-calculator-guide",
    title:
      "CAGR Calculator – Understand Annual Growth Rate Easily",
    description:
      "Learn what CAGR means, how to calculate it and why it matters for long-term investing.",
    category: "returns",
    featured: false,
    image: "/blog/cagr-guide.jpg",
    imageAlt:
      "CAGR annual growth rate investment comparison chart",
    tags: ["cagr", "returns", "investment"],
    publishedAt: "2026-02-15",
    status: "published",
  },
] satisfies BlogPost[];

// Export filtered & sorted posts
export const blogPosts = rawPosts
  .filter((post) => post.status === "published")
  .sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() -
      new Date(a.publishedAt).getTime()
  );

// Helper utilities (scalable architecture)
export const getPostBySlug = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);

export const getPostsByCategory = (category: BlogCategory) =>
  blogPosts.filter((post) => post.category === category);

export const getFeaturedPosts = () =>
  blogPosts.filter((post) => post.featured);