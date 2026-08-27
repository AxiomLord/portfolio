import { expect, test } from "bun:test";
import { getCaseStudySlugs, projects } from "./projects.config";

test("keeps the selected-work list ordered and case-study routes honest", () => {
  const orderedProjects = [...projects].sort((a, b) => a.number - b.number);

  expect(orderedProjects.map(({ number }) => number)).toEqual(
    Array.from({ length: projects.length }, (_, index) => index + 1),
  );
  expect(getCaseStudySlugs()).toEqual([]);
  expect(orderedProjects.every(({ description }) => !!description)).toBe(true);
});
