import { expect, mock, test } from "bun:test";
import { renderToStaticMarkup } from "react-dom/server";
import { projects } from "@/lib/projects.config";

mock.module("next/navigation", () => ({
  usePathname: () => "/home",
  useRouter: () => ({ prefetch: () => {} }),
}));

const { default: ProjectIndexCard } = await import("./ProjectIndexCard");

test("renders a work card without a touch expansion gate", () => {
  const project = projects[0];
  expect(project).toBeDefined();
  if (!project) return;

  const markup = renderToStaticMarkup(<ProjectIndexCard {...project} />);

  expect(markup).toContain(project.title);
  expect(markup).not.toContain("data-touch-expanded");
  expect(markup).not.toContain('aria-expanded="false"');
});

test("every index card is a real destination, with no placeholder cards", () => {
  const indexProjects = projects.filter((item) => item.category !== "more");

  expect(indexProjects.length).toBeGreaterThan(0);
  for (const project of indexProjects) {
    expect(project.description).toBeDefined();

    const markup = renderToStaticMarkup(<ProjectIndexCard {...project} />);
    expect(markup).not.toContain("COMING SOON");
  }
});

test("prints ordinals that match configuration order", () => {
  expect(projects.map((project) => project.number)).toEqual(
    projects.map((_, index) => index + 1),
  );
  expect(projects[0].slug).toBe("agentic-commerce-engine");
});
