import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Updated Domain
const baseUrl = "https://livenifty.in";

// ✅ Metadata (SEO)
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: {
    default:
      "LiveNifty – Free Financial Calculators & Investment Guides",
    template: "%s | LiveNifty",
  },

  description:
    "Use free financial calculators like SIP, EMI, FD, CAGR and income tax calculators. Learn investment strategies and plan your wealth smarter with LiveNifty.",

  keywords: [
    "SIP calculator",
    "EMI calculator",
    "FD calculator",
    "income tax calculator",
    "CAGR calculator",
    "financial calculators India",
  ],

  alternates: {
    canonical: baseUrl,
  },

  openGraph: {
    title:
      "LiveNifty – Free Financial Calculators & Investment Guides",
    description:
      "Plan your investments with accurate financial calculators and detailed wealth-building guides.",
    url: baseUrl,
    siteName: "LiveNifty",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "LiveNifty – Free Financial Calculators & Investment Guides",
    description:
      "Free SIP, EMI, FD and tax calculators to plan smarter investments.",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

// ✅ Move themeColor here (Next 16 requirement)
export const viewport: Viewport = {
  themeColor: "#2563eb",
};

// Layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}