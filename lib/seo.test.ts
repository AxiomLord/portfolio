import { describe, expect, test } from "bun:test";
import * as seo from "./seo";

type JsonLdNode = {
  "@type": string;
  "@id": string;
  [key: string]: unknown;
};

type SeoStructuredData = {
  rootJsonLd?: { "@context": string; "@graph": readonly JsonLdNode[] };
  aboutJsonLd?: { "@context": string; "@graph": readonly JsonLdNode[] };
  serializeJsonLd?: (value: unknown) => string;
};

const structuredData = seo as SeoStructuredData;

describe("structured identity data", () => {
  test("connects the WebSite publisher to the one canonical Person entity", () => {
    const graph = structuredData.rootJsonLd?.["@graph"] ?? [];
    const person = graph.find((node) => node["@type"] === "Person");
    const website = graph.find((node) => node["@type"] === "WebSite");

    expect(person).toMatchObject({
      "@id": "https://nicholaslee.dev/#person",
      name: "Nicholas Lee",
      alternateName: ["Nicholas Lee", "Nick Lee"],
      url: "https://nicholaslee.dev",
      mainEntityOfPage: "https://nicholaslee.dev/home/about",
      jobTitle: "Senior Agentic AI Engineer",
    });
    expect(website).toMatchObject({
      "@id": "https://nicholaslee.dev/#website",
      url: "https://nicholaslee.dev",
      publisher: { "@id": "https://nicholaslee.dev/#person" },
    });
    expect(graph.filter((node) => node["@type"] === "Person")).toHaveLength(1);
  });

  test("makes the About ProfilePage reference the same Person ID", () => {
    const graph = structuredData.aboutJsonLd?.["@graph"] ?? [];

    expect(graph).toEqual([
      {
        "@type": "ProfilePage",
        "@id": "https://nicholaslee.dev/home/about#profile-page",
        url: "https://nicholaslee.dev/home/about",
        name: "Nicholas Lee, Senior Agentic AI Engineer",
        mainEntity: { "@id": "https://nicholaslee.dev/#person" },
      },
    ]);
  });

  test("escapes HTML-significant characters before injecting JSON-LD", () => {
    expect(structuredData.serializeJsonLd?.({ name: "</script>" })).toBe(
      '{"name":"\\u003c/script>"}',
    );
  });
});
