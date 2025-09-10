import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Siddhant Wadhwani - Engineering Manager SDET | Quality Engineering Expert",
    template: "%s | Siddhant Wadhwani"
  },
  description: "Engineering Manager - SDET at Newfold Digital with 10+ years experience. Global tech speaker, BrowserStack Champion, LinkedIn Top Voice. Expert in test automation, quality engineering, and team leadership.",
  keywords: [
    "Siddhant Wadhwani",
    "Engineering Manager",
    "SDET",
    "Quality Engineering",
    "Test Automation",
    "BrowserStack Champion",
    "LinkedIn Top Voice",
    "Tech Speaker",
    "Newfold Digital",
    "QA Leadership",
    "Software Testing",
    "DevOps",
    "Mumbai",
    "India"
  ],
  authors: [{ name: "Siddhant Wadhwani" }],
  creator: "Siddhant Wadhwani",
  metadataBase: new URL("https://siddhantwadhwani.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://siddhantwadhwani.com",
    title: "Siddhant Wadhwani - Engineering Manager SDET | Quality Engineering Expert",
    description: "Engineering Manager - SDET at Newfold Digital with 10+ years experience. Global tech speaker, BrowserStack Champion, LinkedIn Top Voice.",
    siteName: "Siddhant Wadhwani Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Siddhant Wadhwani - Engineering Manager SDET",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Siddhant Wadhwani - Engineering Manager SDET",
    description: "Engineering Manager - SDET at Newfold Digital. Global tech speaker, BrowserStack Champion, LinkedIn Top Voice.",
    images: ["/og-image.jpg"],
    creator: "@siddhantwadhwani",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html lang="en" suppressHydrationWarning className="min-h-full bg-white dark:bg-gray-900">
      <head>
        {/* Early theme hydration to avoid flash and ensure dark class applied before paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {try {const stored = localStorage.getItem('theme');const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;const theme = stored || (systemDark ? 'dark' : 'light');const root = document.documentElement; if(theme === 'dark') {root.classList.add('dark');} else {root.classList.remove('dark');}} catch(e) {}})();`
          }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="color-scheme" content="light dark" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Siddhant Wadhwani",
              jobTitle: "Engineering Manager - SDET",
              worksFor: {
                "@type": "Organization",
                name: "Newfold Digital"
              },
              url: "https://siddhantwadhwani.com",
              sameAs: [
                "https://linkedin.com/in/siddhantwadhwani",
                "https://twitter.com/siddhantwadhwani",
                "https://youtube.com/@siddhantwadhwani",
                "https://github.com/siddhantwadhwani"
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Mumbai",
                addressRegion: "Maharashtra",
                addressCountry: "India"
              },
              email: "hello@siddhantwadhwani.com",
              telephone: "+91-7021158300",
              knowsAbout: [
                "Quality Engineering",
                "Test Automation",
                "Software Testing",
                "Team Leadership",
                "DevOps",
                "Performance Testing",
                "Security Testing"
              ],
              award: [
                "BrowserStack Champion",
                "LinkedIn Top Voice",
                "Sherlock Holmes Award",
                "Einstein Award",
                "Rockstar Award"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
        <a href="#main-content" className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] bg-blue-600 text-white px-4 py-2 rounded-md shadow-lg">
          Skip to main content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <main id="main-content" className="flex-grow" role="main">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
