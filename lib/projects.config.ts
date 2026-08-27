export type Category = "pro" | "creative" | "more";
export type Status = "SHIPPED" | "INTERNSHIP" | "IN PROGRESS" | "OPEN SOURCE";
export type Accent = "blue" | "teal" | "orange" | "green" | "neutral";

import type { Thumbnail } from "./thumbnail";

export type Block =
  | { type: "paragraph"; text: string; emphasis?: string[] }
  | { type: "image"; src: string; alt: string; caption?: string; height?: number }
  | { type: "callout"; accent: Accent; text: string }
  | {
      type: "list";
      ordered?: boolean;
      items: { num?: string; title?: string; text: string }[];
    }
  | { type: "metrics"; items: { value: string; label: string }[] }
  | {
      type: "diagram";
      kind:
        | "token-mismatch"
        | "compliance-pipeline"
        | "dual-render"
        | "memory-blowup"
        | "vt-approaches"
        | "photography-pipeline"
        | "photo-delivery";
    }
  | { type: "demo"; id: string; caption?: string }
  | { type: "vtlab" };

export interface CaseStudySection {
  id: string;
  heading: string;
  blocks: Block[];
}

export interface CaseStudyGlance {
  problem: string;
  decision: string;
  outcome: string;
}

export interface CaseStudy {
  tagline: string;
  tags: string[];
  hero: { image?: string; accent: Accent };
  glance?: CaseStudyGlance;
  sections: CaseStudySection[];
}

export interface Project {
  slug: string;
  number: number;
  title: string;
  description?: string;
  category: Category;
  role: string;
  team: string;
  shipped: string;
  status: Status | Status[];
  tech: string[];
  tilt?: number;
  thumbnail?: Thumbnail;
  external?: boolean;
  href?: string;
  note?: string;
  caseStudy?: CaseStudy;
}

type ProjectDefinition = Omit<Project, "number">;

/**
 * Work is intentionally grounded in Nicholas's resume. The cards are
 * deliberately concise; the experience page carries the detailed bullets.
 */
const projectDefinitions: ProjectDefinition[] = [
  {
    slug: "agentic-commerce-engine",
    title: "Agentic Commerce Engine",
    description:
      "A multi-agent content system for AI search commerce: planning, tool selection, RAG, approval gates, and production observability in one workflow.",
    category: "pro",
    role: "Senior Agentic AI Engineer",
    team: "AI Product Engineering",
    shipped: "2025–2026",
    status: "SHIPPED",
    tech: ["CrewAI", "LangChain", "OpenRouter", "pgvector", "AWS Lambda"],
    tilt: 0.7,
    thumbnail: {
      kind: "ascii",
      alt: "Animated matrix-like rendering of an agentic commerce workflow",
      accent: "violet",
    },
    note: "Agentic content generation with evaluation, guardrails, and human approval.",
  },
  {
    slug: "chat-concierge",
    title: "Chat Concierge",
    description:
      "A multi-agent conversational assistant that helps car buyers compare vehicles and schedule test drives through natural language.",
    category: "pro",
    role: "AI Software Engineer",
    team: "Capital One AI Engineering",
    shipped: "2023–2025",
    status: "SHIPPED",
    tech: ["Meta Llama", "LangChain", "React", "Node.js", "AWS"],
    tilt: -0.45,
    thumbnail: {
      kind: "flip",
      alt: "Interactive card for a conversational AI assistant",
      accent: "blue",
      params: {
        front: {
          label: "CHAT CONCIERGE",
          sublabel: "TOOL-CALLING ASSISTANT",
          swatches: ["#3B82F6", "#8B5CF6", "#14B8A6"],
          badge: "MULTI-AGENT",
          input: "compare hybrid SUVs",
        },
        back: {
          heading: "RELIABILITY LAYER",
          rows: [
            { k: "retrieval", v: "grounded", accent: true },
            { k: "tools", v: "typed calls" },
            { k: "retries", v: "circuit breaker" },
          ],
        },
      },
    },
  },
  {
    slug: "datachat-analytics",
    title: "DataChat Analytics",
    description:
      "A collaborative analytics platform for exploring data, composing reusable workflows, and sharing results with real-time sessions.",
    category: "pro",
    role: "Full Stack Engineer",
    team: "DataChat Product Engineering",
    shipped: "2020–2022",
    status: "SHIPPED",
    tech: ["React", "Next.js", "Node.js", "PostgreSQL", "WebSockets"],
    tilt: 0.35,
    thumbnail: {
      kind: "vt-cycle",
      alt: "Interactive visualization of a data workflow moving through states",
      accent: "emerald",
    },
  },
  {
    slug: "share-everywhere",
    title: "Share Everywhere",
    description:
      "Secure patient-data sharing and healthcare integrations designed for reliable, always-on clinical operations.",
    category: "pro",
    role: "Software Engineer",
    team: "Epic Systems",
    shipped: "2017–2020",
    status: "SHIPPED",
    tech: ["C#", ".NET", "React", "Node.js", "PostgreSQL"],
    tilt: -0.55,
    thumbnail: {
      kind: "ascii",
      alt: "Animated rendering of a secure healthcare data exchange",
      accent: "sky",
    },
  },
];

export const projects: Project[] = projectDefinitions.map((project, index) => ({
  ...project,
  number: index + 1,
  description: project.description,
}));

export const categoryLabels: Record<Exclude<Category, "more">, string> = {
  pro: "Professional",
  creative: "Creative",
};

export function getProjectsByCategory(category: Category): Project[] {
  return projects.filter((p) => p.category === category);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getCaseStudySlugs(): string[] {
  return projects.filter((p) => p.caseStudy && !p.external).map((p) => p.slug);
}

export function getAdjacentCaseStudies(slug: string): {
  previous: Project | null;
  next: Project | null;
} {
  const written = projects.filter((p) => p.caseStudy && !p.external);
  const index = written.findIndex((p) => p.slug === slug);
  if (index === -1) return { previous: null, next: null };

  return {
    previous: written[index - 1] ?? null,
    next: written[index + 1] ?? null,
  };
}

export function getIndexProjects(): Project[] {
  return projects.filter((p) => p.category !== "more");
}

export function getMoreProjects(): Project[] {
  return projects.filter((p) => p.category === "more");
}

export const accentCalloutStyles: Record<
  Accent,
  { bg: string; border: string; text: string }
> = {
  blue: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    text: "text-blue-700 dark:text-blue-300",
  },
  teal: {
    bg: "bg-teal-500/10",
    border: "border-teal-500/30",
    text: "text-teal-800 dark:text-teal-300",
  },
  orange: {
    bg: "bg-orange-500/10",
    border: "border-orange-500/30",
    text: "text-orange-800 dark:text-orange-300",
  },
  green: {
    bg: "bg-green-500/10",
    border: "border-green-500/30",
    text: "text-green-800 dark:text-green-300",
  },
  neutral: {
    bg: "bg-surface",
    border: "border-border-color",
    text: "text-ink-dim",
  },
};
