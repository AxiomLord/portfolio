import { expect, test } from "bun:test";
import { GET as getLlmsText } from "@/app/llms.txt/route";
import { profile } from "./profile.config";

test("keeps the public identity in one canonical profile", () => {
  expect(profile).toMatchObject({
    name: "Nicholas Lee",
    handle: "Nicholas",
    alternateNames: ["Nicholas Lee", "Nick Lee"],
    url: "https://nicholaslee.dev",
    jobTitle: "Senior Agentic AI Engineer",
    shortDescription:
      "Senior agentic AI engineer building reliable LLM products, full-stack systems, and AI workflows with React, Node.js, Python, and AWS.",
  });
});

test("generates llms.txt from the canonical identity and public routes", async () => {
  const response = getLlmsText();
  const body = await response.text();

  expect(response.headers.get("content-type")).toBe(
    "text/plain; charset=utf-8",
  );
  expect(body).toContain(
    "# Nicholas Lee (Nicholas) · Senior Agentic AI Engineer",
  );
  expect(body).toContain("Canonical website: https://nicholaslee.dev");
  expect(body).toContain("agentic AI");
  expect(body).toContain("[About](https://nicholaslee.dev/home/about)");
  expect(body).toContain("[Experience](https://nicholaslee.dev/home/experience)");
  expect(body).toContain("[Photography](https://nicholaslee.dev/home/photography)");
});
