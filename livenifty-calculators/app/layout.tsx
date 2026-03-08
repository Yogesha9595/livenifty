import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";

import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MarketTicker from "@/components/market/MarketTicker";
import FloatingBottomNav from "@/components/layout/FloatingBottomNav";
import StickyCTA from "@/components/layout/StickyCTA";
import CookieConsent from "@/components/CookieConsent";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const baseUrl = "https://livenifty.in";

/* Environment variables */
const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
const ADSENSE_ID = process.env.NEXT_PUBLIC_ADSENSE_ID ?? "";
const ONESIGNAL_APP_ID = process.env.NEXT_PUBLIC_ONESIGNAL_ID ?? "";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: {
    default: "LiveNifty – Live Market Commentary & Financial Calculators",
    template: "%s | LiveNifty",
  },

  description:
    "Live NIFTY market commentary, trading tools, position sizing calculator, options Greeks calculator and free financial calculators including SIP, EMI, FD, CAGR and income tax.",

  keywords: [
    "Nifty live",
    "SIP calculator India",
    "EMI calculator",
    "CAGR calculator",
    "FD calculator",
    "Income tax calculator",
    "Options Greeks calculator",
    "Position sizing calculator",
  ],

  alternates: {
    canonical: baseUrl,
  },

  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
  },

  openGraph: {
    title: "LiveNifty – Financial Calculators & Market Commentary",
    description:
      "Track live NIFTY market commentary and use powerful financial calculators to plan investments.",
    url: baseUrl,
    siteName: "LiveNifty",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
        ${geistSans.variable}
        ${geistMono.variable}
        min-h-screen
        antialiased
        bg-gradient-to-b
        from-gray-50
        via-white
        to-white
        dark:from-black
        dark:via-black
        dark:to-black
        text-gray-900
        dark:text-gray-100
        transition-colors
      `}
      >
        {/* Google Analytics */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}

        {/* Google AdSense */}
        {ADSENSE_ID && (
          <Script
            async
            strategy="afterInteractive"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}`}
            crossOrigin="anonymous"
          />
        )}

        {/* OneSignal */}
        {ONESIGNAL_APP_ID && (
          <>
            <Script
              src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js"
              strategy="afterInteractive"
            />

            <Script id="onesignal-init" strategy="afterInteractive">
              {`
                window.OneSignalDeferred = window.OneSignalDeferred || [];
                OneSignalDeferred.push(async function(OneSignal) {
                  await OneSignal.init({
                    appId: "${ONESIGNAL_APP_ID}",
                    notifyButton: { enable: true }
                  });
                });
              `}
            </Script>
          </>
        )}

       <ThemeProvider
  attribute="class"
  defaultTheme="system"
  enableSystem
  disableTransitionOnChange
>
  <MarketTicker />

  <Header />

  <main className="min-h-[calc(100vh-160px)] w-full">
    {children}
  </main>

  <Footer />

  <CookieConsent />

  <StickyCTA />

  <FloatingBottomNav />
</ThemeProvider>
      </body>
    </html>
  );
}