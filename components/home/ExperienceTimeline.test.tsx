import { expect, test } from "bun:test";
import { renderToStaticMarkup } from "react-dom/server";
import * as timelineModule from "./ExperienceTimeline";

test("renders the approved experience narrative as accessible disclosures", () => {
  const markup = renderToStaticMarkup(<timelineModule.default />);

  expect(markup).toContain("02 · EXPERIENCE");
  expect(markup).toContain("04 ROLES · 2017 TO NOW");
  expect(markup).toContain("Agents, products, infrastructure.");
  expect(markup).toContain("Eight years, measurable outcomes.");
  expect(markup).toContain("−30% manual production");
  expect(markup).toContain("−25% LLM errors");
  expect(markup).toContain("CrewAI-powered content generation system");
  expect(markup.match(/<h1[^>]*>/)?.[0]).toContain("text-page-title");
  expect(markup).toContain("text-card-title");
  expect(markup.match(/aria-expanded="false"/g)).toHaveLength(4);
  expect(markup.match(/role="region"/g)).toHaveLength(4);
  expect(markup.match(/VIEW MORE \+/g) ?? []).toHaveLength(4);
});

test("keeps only one experience role open at a time", () => {
  const { getNextOpenRole } = timelineModule as typeof timelineModule & {
    getNextOpenRole?: (
      current: string | null,
      requested: string,
    ) => string | null;
  };

  expect(getNextOpenRole).toBeFunction();
  if (!getNextOpenRole) return;

  expect(getNextOpenRole(null, "Fermat")).toBe("Fermat");
  expect(getNextOpenRole("Fermat", "Capital One")).toBe("Capital One");
  expect(getNextOpenRole("Capital One", "Capital One")).toBeNull();
});

test("limits hover expansion to hover-capable desktop layouts", () => {
  const { shouldOpenRoleOnPointer } = timelineModule as typeof timelineModule & {
    shouldOpenRoleOnPointer?: (
      pointerType: string,
      viewportWidth: number,
      canHover: boolean,
    ) => boolean;
  };

  expect(shouldOpenRoleOnPointer).toBeFunction();
  if (!shouldOpenRoleOnPointer) return;

  expect(shouldOpenRoleOnPointer("mouse", 1440, true)).toBe(true);
  expect(shouldOpenRoleOnPointer("mouse", 899, true)).toBe(false);
  expect(shouldOpenRoleOnPointer("touch", 1440, true)).toBe(false);
  expect(shouldOpenRoleOnPointer("mouse", 1440, false)).toBe(false);
});
