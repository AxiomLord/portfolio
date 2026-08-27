import type { Metadata } from "next";
import AboutElements from "@/components/home/AboutElements";
import HomeShell from "@/components/home/HomeShell";
import { profile } from "@/lib/profile.config";
import { aboutJsonLd, createPageMetadata, serializeJsonLd } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description: `About ${profile.name}, a senior agentic AI engineer building reliable LLM products and full-stack systems with React, Node.js, Python, and AWS.`,
  path: "/home/about",
});

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(aboutJsonLd) }}
      />
      <HomeShell showMobileFooter={false}>
        <AboutElements />
      </HomeShell>
    </>
  );
}
