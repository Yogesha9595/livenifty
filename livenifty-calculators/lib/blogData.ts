// =====================================================
// LiveNifty Blog Data Layer (Production Grade)
// =====================================================

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
  publishedAt: string; // ISO date string
  updatedAt?: string;
  status: BlogStatus;
  content: string; // Required HTML content
}

// =====================================================
// Raw Blog Posts (Source of Truth)
// =====================================================

const rawPosts: BlogPost[] = [
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
    content: `
      <h2>What is SIP?</h2>
      <p>
        SIP (Systematic Investment Plan) allows investors to invest a fixed
        amount regularly in mutual funds and benefit from compounding.
      </p>

      <h2>SIP Formula</h2>
      <p>
        Future Value = P × [ ((1 + r)^n - 1) / r ] × (1 + r)
      </p>

      <h2>Why SIP Works</h2>
      <ul>
        <li>Power of Compounding</li>
        <li>Rupee Cost Averaging</li>
        <li>Disciplined Investing</li>
      </ul>

      <p>
        SIP is ideal for long-term wealth creation and retirement planning.
      </p>
    `,
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
    content: `
      <h2>What is Lumpsum Investment?</h2>
      <p>
        Lumpsum investment means investing a large amount at once
        instead of periodic installments.
      </p>

      <h2>Lumpsum Formula</h2>
      <p>
        Future Value = P × (1 + r)^n
      </p>

      <h2>When to Choose Lumpsum?</h2>
      <ul>
        <li>When markets are undervalued</li>
        <li>When you have surplus capital</li>
      </ul>
    `,
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
    content: `
      <h2>What is CAGR?</h2>
      <p>
        CAGR (Compound Annual Growth Rate) measures the average
        annual growth rate of an investment over time.
      </p>

      <h2>CAGR Formula</h2>
      <p>
        CAGR = (Ending Value / Beginning Value)^(1/n) - 1
      </p>

      <h2>Why CAGR Matters?</h2>
      <ul>
        <li>Compares investments</li>
        <li>Shows long-term performance</li>
        <li>Eliminates volatility noise</li>
      </ul>
    `,
  },
];

// =====================================================
// Production Filters & Sort
// =====================================================

export const blogPosts: BlogPost[] = rawPosts
  .filter((post) => post.status === "published")
  .sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() -
      new Date(a.publishedAt).getTime()
  );

// =====================================================
// Helper Utilities (Scalable Architecture)
// =====================================================

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getPostsByCategory(
  category: BlogCategory
): BlogPost[] {
  return blogPosts.filter((post) => post.category === category);
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.featured);
}

export function getRecentPosts(limit = 5): BlogPost[] {
  return blogPosts.slice(0, limit);
}