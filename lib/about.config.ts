export const aboutSkillGroups = [
  { key: "all", label: "ALL" },
  { key: "languages", label: "LANGUAGES" },
  { key: "frameworks", label: "FRAMEWORKS" },
  { key: "ai", label: "AI / LLM" },
  { key: "agents", label: "AGENTS" },
  { key: "cloud", label: "CLOUD" },
  { key: "data", label: "DATA" },
] as const;

export type AboutSkillFilter = (typeof aboutSkillGroups)[number]["key"];
export type AboutSkillGroup = Exclude<AboutSkillFilter, "all">;

const aboutSkillDefinitions = [
  { symbol: "Ts", name: "TYPESCRIPT", group: "languages" },
  { symbol: "Js", name: "JAVASCRIPT", group: "languages" },
  { symbol: "Py", name: "PYTHON", group: "languages" },
  { symbol: "Ja", name: "JAVA", group: "languages" },
  { symbol: "Cs", name: "C# / .NET", group: "languages" },
  { symbol: "SQL", name: "SQL", group: "languages" },
  { symbol: "Re", name: "REACT", group: "frameworks" },
  { symbol: "Nx", name: "NEXT.JS", group: "frameworks" },
  { symbol: "No", name: "NODE.JS", group: "frameworks" },
  { symbol: "Ns", name: "NESTJS", group: "frameworks" },
  { symbol: "Ex", name: "EXPRESS", group: "frameworks" },
  { symbol: "Ag", name: "AGENTIC AI", group: "agents" },
  { symbol: "Ca", name: "CREWAI", group: "agents" },
  { symbol: "Lc", name: "LANGCHAIN", group: "agents" },
  { symbol: "Fn", name: "FUNCTION CALLING", group: "agents" },
  { symbol: "Mi", name: "MULTI-AGENT", group: "agents" },
  { symbol: "Rg", name: "RAG", group: "ai" },
  { symbol: "Em", name: "EMBEDDINGS", group: "ai" },
  { symbol: "Cl", name: "CLAUDE", group: "ai" },
  { symbol: "Or", name: "OPENROUTER", group: "ai" },
  { symbol: "Ll", name: "META LLAMA", group: "ai" },
  { symbol: "Aw", name: "AWS", group: "cloud" },
  { symbol: "La", name: "LAMBDA", group: "cloud" },
  { symbol: "Ap", name: "API GATEWAY", group: "cloud" },
  { symbol: "Dc", name: "DOCKER", group: "cloud" },
  { symbol: "Pg", name: "POSTGRESQL", group: "data" },
  { symbol: "Pv", name: "PGVECTOR", group: "data" },
  { symbol: "Rd", name: "REDIS", group: "data" },
  { symbol: "Mo", name: "MONGODB", group: "data" },
  { symbol: "Ob", name: "OBSERVABILITY", group: "cloud" },
] as const satisfies ReadonlyArray<{
  symbol: string;
  name: string;
  group: AboutSkillGroup;
}>;

export const aboutSkills = aboutSkillDefinitions.map((skill, index) => ({
  ...skill,
  no: String(index + 1).padStart(2, "0"),
}));

export const aboutPathStops = [
  { title: "Foundations", caption: "B.S. COMPUTER SCIENCE · UW–MADISON" },
  { title: "Product", caption: "REACT · NODE · DATA SYSTEMS" },
  { title: "Agents", caption: "LLMS · RAG · PRODUCTION WORKFLOWS" },
] as const;

export const careAbout = [
  "AI features that are useful on the first interaction and dependable on the thousandth.",
  "Agent workflows with explicit tools, state, retries, and human escape hatches.",
  "Evaluation harnesses that make model quality visible instead of vibes-based.",
  "Interfaces that make complex systems feel calm, fast, and understandable.",
  "Shipping measurable outcomes while keeping architecture ready for the next customer.",
] as const;

export const aboutNarrative = [
  "I started in software engineering across healthcare, analytics, and financial products before moving deeper into applied AI. That path matters: it keeps the model in context of the product, the API, the data, the deployment, and the person who has to trust the result.",
  "Today I build agentic systems with the same instincts I bring to any production surface: make the state explicit, instrument the edges, design for failure, and keep the experience human.",
] as const;
