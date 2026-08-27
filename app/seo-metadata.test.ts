import { describe, expect, mock, test } from "bun:test";
import { metadata as workMetadata } from "./home/page";
import { metadata as aboutMetadata } from "./home/about/page";
import { metadata as experienceMetadata } from "./home/experience/page";
import { metadata as photographyMetadata } from "./home/photography/page";
import { metadata as playgroundMetadata } from "./home/playground/page";
import { generateMetadata as getExperimentMetadata } from "./home/playground/[slug]/page";
import sitemap from "./sitemap";

const font = () => ({ variable: "font-variable", className: "font-class" });

mock.module("next/font/google", () => ({
  Caveat: font,
  DotGothic16: font,
  JetBrains_Mono: font,
  Poppins: font,
  Roboto_Condensed: font,
}));

const expectedStaticPages = [
  [workMetadata, "Work", "/home"],
  [aboutMetadata, "About", "/home/about"],
  [experienceMetadata, "Experience", "/home/experience"],
  [photographyMetadata, "Photography", "/home/photography"],
  [playgroundMetadata, "Playground", "/home/playground"],
] as const;

describe("SEO metadata", () => {
  test("uses Nicholas Lee for the global title system", async () => {
    const { metadata: rootMetadata } = await import("./layout");

    expect(rootMetadata.title).toEqual({
      default: "Nicholas Lee (Nicholas) · Senior Agentic AI Engineer",
      template: "%s · Nicholas Lee",
    });
    expect(rootMetadata.applicationName).toBe("Nicholas Lee (Nicholas)");
    expect(rootMetadata.alternates).toBeUndefined();
  });

  test.each(expectedStaticPages)(
    "%s page publishes a self-canonical and complete share metadata",
    (metadata, title, path) => {
      expect(metadata).toMatchObject({
        title,
        alternates: { canonical: path },
        openGraph: {
          type: "website",
          url: path,
          siteName: "Nicholas Lee",
          title: `${title} · Nicholas Lee`,
          locale: "en_US",
        },
        twitter: {
          card: "summary_large_image",
          title: `${title} · Nicholas Lee`,
        },
      });
      expect(metadata.description).toContain("Nicholas Lee");
    },
  );

  test("publishes self-canonical metadata for a live playground experiment", async () => {
    const metadata = await getExperimentMetadata({
      params: Promise.resolve({ slug: "type-lab" }),
    });

    expect(metadata).toMatchObject({
      title: "Type Lab · Playground",
      alternates: { canonical: "/home/playground/type-lab" },
      openGraph: {
        type: "website",
        url: "/home/playground/type-lab",
        title: "Type Lab · Playground · Nicholas Lee",
      },
      twitter: {
        card: "summary_large_image",
        title: "Type Lab · Playground · Nicholas Lee",
      },
    });
  });
});

test("sitemap exposes public routes without fabricated modification dates", () => {
  const entries = sitemap();
  const urls = entries.map((entry) => entry.url);

  expect(urls).toContain("https://nicholaslee.dev/");
  expect(urls).toContain("https://nicholaslee.dev/home");
  expect(urls).toContain("https://nicholaslee.dev/home/about");
  expect(urls).toContain("https://nicholaslee.dev/home/experience");
  expect(urls).toContain("https://nicholaslee.dev/home/photography");
  expect(urls).toContain("https://nicholaslee.dev/home/playground");
  expect(urls).toContain("https://nicholaslee.dev/home/playground/type-lab");
  expect(entries.every((entry) => entry.lastModified === undefined)).toBe(true);
});
