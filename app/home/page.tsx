import type { Metadata } from "next";
import HomeShell from "@/components/home/HomeShell";
import ProjectGrid from "@/components/home/ProjectGrid";
import WorkHero from "@/components/home/WorkHero";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Work",
  description:
    "Selected AI and full-stack engineering work by Nicholas Lee, spanning agentic workflows, conversational AI, analytics, and healthcare systems.",
  path: "/home",
});

export default function HomeWorkPage() {
  return (
    <HomeShell>
      <main>
        <WorkHero />
        <ProjectGrid />
      </main>
    </HomeShell>
  );
}
