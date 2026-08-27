import { expect, mock, test } from "bun:test";
import { renderToStaticMarkup } from "react-dom/server";
import { aboutSkills } from "@/lib/about.config";

mock.module("next/navigation", () => ({
  usePathname: () => "/home/about",
  useRouter: () => ({ prefetch: () => {} }),
}));

const { default: AboutPage } = await import("./page");

test("renders the approved Elements about-page narrative", () => {
  const markup = renderToStaticMarkup(<AboutPage />);

  expect(markup).toContain("03 · ABOUT");
  expect(markup).toContain("Nicholas Lee");
  expect(markup).toContain("senior agentic AI engineer");
  expect(markup).toContain("LLM applications");
  expect(markup).toContain(`${aboutSkills.length} ELEMENTS`);
  expect(markup).toContain("Came to agentic AI through the long way");
  expect(markup).toContain("I started in software engineering");
  expect(markup).toContain("AGENTS");
  expect(markup).toContain("TAP THE HIGHLIGHTED PHRASE");
  // Plain address plus a copy affordance. The obfuscation was already
  // defeated by the raw mailto in the footer.
  expect(markup).toContain("to.nicholasly@gmail.com");
  expect(markup).not.toContain("[at]");
  expect(markup).toContain("Download Resume ↓");
  expect(markup).toContain('aria-label="Nicholas Lee agent workflow signature"');
  expect(markup).toContain("NL / SYSTEMS");
  expect(markup.match(/<h1[^>]*>/)?.[0]).toContain("text-page-title");
  expect(markup).toContain("text-card-title");
  expect(markup).not.toContain("Portrait · 292×392");
  expect(markup).not.toContain("<footer");
});
