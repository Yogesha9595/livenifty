import { MetadataRoute } from "next";

// ✅ Required for static export mode
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://livenifty.in";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}