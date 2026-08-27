import { expect, test } from "bun:test";
import { getIndexProjects, getProjectBySlug } from "./projects.config";

test("leads the index with Nicholas's current agentic AI work", () => {
  const agenticCommerce = getProjectBySlug("agentic-commerce-engine");
  const chatConcierge = getProjectBySlug("chat-concierge");

  expect(agenticCommerce?.number).toBe(1);
  expect(chatConcierge?.number).toBe(2);

  const indexNumbers = getIndexProjects().map((project) => project.number);
  expect(new Set(indexNumbers).size).toBe(indexNumbers.length);
});

test("keeps project copy grounded in agentic AI systems", () => {
  const project = getProjectBySlug("agentic-commerce-engine");
  expect(project?.description).toContain("multi-agent");
  expect(project?.tech).toContain("CrewAI");
});
