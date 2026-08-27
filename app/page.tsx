import type { Metadata } from "next";
import { landingAccentFont } from "@/app/fonts/landing";
import IntroOverlay from "@/components/landing/IntroOverlay";
import WelcomeScene from "@/components/landing/WelcomeScene";
import { createPageMetadata, homepageDescription, homepageTitle } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: homepageTitle,
  description: homepageDescription,
  path: "/",
  absoluteTitle: true,
});

export default function LandingPage() {
  return (
    <div
      id="portfolio-root"
      className={`portfolio-root ${landingAccentFont.variable}`}
    >
      <WelcomeScene />
      <IntroOverlay />
    </div>
  );
}
