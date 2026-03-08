"use client";

import Link from "next/link";

export default function StickyCTA() {
  return (
    <div className="hidden lg:block fixed right-6 bottom-6 z-50">
      <Link
        href="/calculators/position-sizer"
        className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition font-medium"
      >
        Start Trading →
      </Link>
    </div>
  );
}