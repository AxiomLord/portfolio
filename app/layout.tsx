import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { coreFontVariables } from "@/app/fonts/core";
import ConsoleSignature from "@/components/ConsoleSignature";
import PageTransitionOverlay from "@/components/PageTransitionOverlay";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { PageTransitionProvider } from "@/lib/page-transition-context";
import { profile } from "@/lib/profile.config";
import {
  homepageDescription,
  homepageTitle,
  rootJsonLd,
  serializeJsonLd,
} from "@/lib/seo";
import { ACCENT_PREPAINT_SCRIPT } from "@/lib/theme.config";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import "./brand-theme.css";

export const metadata: Metadata = {
  metadataBase: new URL(profile.url),
  title: {
    default: homepageTitle,
    template: `%s · ${profile.name}`,
  },
  description: homepageDescription,
  applicationName: `${profile.name} (${profile.handle})`,
  authors: [{ name: profile.name, url: profile.url }],
  creator: profile.name,
  // No `keywords`: no search engine has used the meta tag in over a decade,
  // and this audience reads source. The JSON-LD `knowsAbout` graph below
  // carries the same information to the consumers that do read it.
  openGraph: {
    type: "website",
    siteName: profile.name,
    url: profile.url,
    title: homepageTitle,
    description: homepageDescription,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: homepageTitle,
    description: homepageDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f5f2" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0f0e" },
  ],
};

// Runs synchronously before first paint so the reference intro stays hidden for
// returning visitors and people who prefer reduced motion.
const signatureIntroCheckScript = `try{if(sessionStorage.getItem("nicholas-lee-signature-intro-v1")==="seen"||matchMedia("(prefers-reduced-motion: reduce)").matches)document.documentElement.setAttribute("data-signature-intro-seen","")}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // next-themes + AccentProvider both mutate <html> before hydration.
      suppressHydrationWarning
      className={`${coreFontVariables} h-full antialiased`}
    >
      <head>
        {/* Reference signature intro pre-paint gate */}
        <script
          dangerouslySetInnerHTML={{ __html: signatureIntroCheckScript }}
        />
        {/* Accent CSS vars pre-paint, which prevents accent flash on reload */}
        <script dangerouslySetInnerHTML={{ __html: ACCENT_PREPAINT_SCRIPT }} />
        {/* Canonical Person + WebSite entity graph */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(rootJsonLd) }}
        />
        <noscript>
          <style>{`#signature-intro{display:none}`}</style>
        </noscript>
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <PageTransitionProvider>
            <PageTransitionOverlay />
            {children}
          </PageTransitionProvider>
        </ThemeProvider>
        <ConsoleSignature />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
