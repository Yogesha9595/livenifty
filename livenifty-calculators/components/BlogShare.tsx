"use client";

import { useState } from "react";

export default function BlogShare({
  title,
  slug,
}: {
  title: string;
  slug: string;
}) {
  const baseUrl = "https://livenifty.com";
  const url = `${baseUrl}/blog/${slug}`;

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="mt-10 p-5 bg-gray-50 rounded-2xl border">
      <h3 className="font-semibold mb-4">
        Share this article
      </h3>

      <div className="flex flex-wrap gap-3">

        <a
          href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on WhatsApp"
          className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-medium"
        >
          WhatsApp
        </a>

        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on LinkedIn"
          className="px-4 py-2 bg-blue-700 text-white rounded-lg text-sm font-medium"
        >
          LinkedIn
        </a>

        <a
          href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on X"
          className="px-4 py-2 bg-black text-white rounded-lg text-sm font-medium"
        >
          X
        </a>

        <button
          onClick={handleCopy}
          aria-label="Copy link"
          className="px-4 py-2 bg-gray-800 text-white rounded-lg text-sm font-medium"
        >
          {copied ? "Copied!" : "Copy Link"}
        </button>

      </div>
    </div>
  );
}
