import type { Metadata } from "next";
import HomeShell from "@/components/home/HomeShell";
import PhotographyGallery from "@/components/photography/PhotographyGallery";
import { profile } from "@/lib/profile.config";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Photography",
  description: `A personal field album by ${profile.name}: places, people, water, and the light between destinations.`,
  path: "/home/photography",
});

export default function PhotographyPage() {
  return (
    <HomeShell showMobileFooter={false}>
      <PhotographyGallery />
    </HomeShell>
  );
}
