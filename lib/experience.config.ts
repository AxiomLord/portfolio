export type Role = {
  company: string;
  role: string;
  domain: string;
  dateLabel: string;
  location: string;
  current?: boolean;
  summary: string;
  metrics: string[];
  bullets: string[];
  stack: string[];
  caseStudies?: { label: string; slug: string }[];
};

export const metricsProvenance =
  "Outcomes are taken from the supplied resume; product names and system details stay intentionally specific to the work described there.";

export const roles: Role[] = [
  {
    company: "Fermat",
    role: "Senior Agentic AI Engineer",
    domain: "AI search commerce",
    dateLabel: "AUG 2025 TO AUG 2026",
    location: "REMOTE · SAN FRANCISCO",
    current: true,
    summary:
      "Agentic content and commerce systems that turn product data into shoppable experiences, with evaluation, guardrails, and observability built in.",
    metrics: ["−30% manual production", "−40% response time", "−50% MTTR"],
    bullets: [
      "Built a CrewAI-powered content generation system with multi-agent planning, tool selection, and execution across React, Next.js, Node.js, and PostgreSQL",
      "Designed autonomous refresh flows with LangChain, OpenRouter, scheduled agents, and human-in-the-loop approval gates",
      "Created Pierre, a multi-agent commerce copilot with function calling, retries, state management, AWS Lambda, and PII-safe CloudWatch logging",
      "Implemented RAG with embeddings and PostgreSQL pgvector, routing Claude and GPT-4 through OpenRouter for cost and latency control",
      "Added prompt-injection defenses, schema validation, evaluation harnesses, agent-loop detection, and step-level tracing",
      "Cut average AI response time by 40% through embedding caches, pre-warmed connections, and parallel agent steps while maintaining 99.9% uptime",
    ],
    stack: [
      "REACT",
      "NEXT.JS",
      "NODE.JS",
      "PYTHON",
      "CREWAI",
      "LANGCHAIN",
      "AWS",
      "POSTGRESQL",
    ],
  },
  {
    company: "Capital One",
    role: "AI Software Engineer",
    domain: "conversational AI · fintech",
    dateLabel: "JAN 2023 TO APR 2025",
    location: "HYBRID · NEW YORK",
    summary:
      "Customer-facing AI and financial services built with strong retrieval, tool calling, resilience, and regulatory awareness.",
    metrics: ["−25% LLM errors", "−20% token cost", "MULTI-AGENT AI"],
    bullets: [
      "Built Chat Concierge, a multi-agent assistant using Meta Llama, LangChain, and tool calling to compare vehicles and schedule test drives",
      "Developed Node.js and NestJS REST APIs for Digital Wallet Service and Lounge Digital Pass with PostgreSQL and AWS API Gateway",
      "Designed a partner-agnostic point-of-sale API for Shop with Rewards across online and in-store check, redeem, and refund flows",
      "Implemented retrieval over vehicle inventory and rewards data to improve answer relevance and reduce hallucinations",
      "Created evaluation harnesses for multi-turn flow quality, tool-call accuracy, and context retention",
      "Added circuit breakers and retry logic for LLM calls, reducing errors by 25% and token costs by 20%",
    ],
    stack: [
      "REACT",
      "NODE.JS",
      "NESTJS",
      "PYTHON",
      "LANGCHAIN",
      "AWS",
      "POSTGRESQL",
      "DATADOG",
    ],
  },
  {
    company: "DataChat",
    role: "Full Stack Engineer",
    domain: "analytics · data workflows",
    dateLabel: "MAY 2020 TO DEC 2022",
    location: "ON-SITE · MADISON",
    summary:
      "A collaborative analytics platform for exploring data, composing reusable workflows, and sharing results in real time.",
    metrics: ["REAL-TIME COLLAB", "ROLE-BASED ACCESS", "FULL STACK"],
    bullets: [
      "Developed the DataChat Analytics Platform with React, Next.js, Node.js, AWS, and PostgreSQL",
      "Built Recipes and Workflows for reusable multi-step data transformations with REST APIs and a workflow management UI",
      "Created collaborative sessions with WebSockets and role-based access control for private analysis",
      "Optimized PostgreSQL queries and indexing for large datasets and containerized services with Docker",
      "Profiled frontend rendering and backend response times, adding production-grade error handling and logging",
    ],
    stack: ["REACT", "NEXT.JS", "NODE.JS", "POSTGRESQL", "WEBSOCKETS", "DOCKER"],
  },
  {
    company: "Epic Systems",
    role: "Software Engineer",
    domain: "healthcare software",
    dateLabel: "JUL 2017 TO MAR 2020",
    location: "ON-SITE · VERONA",
    summary:
      "Reliable healthcare products and integrations across EHR, patient sharing, scheduling, and messaging experiences.",
    metrics: ["24/7 OPERATIONS", "SECURE SHARING", "PRODUCTION RELIABILITY"],
    bullets: [
      "Developed Epic Sonnet features with C#, .NET, SQL Server, and JavaScript frontend components",
      "Built Share Everywhere integrations and REST APIs with Node.js and PostgreSQL for secure patient data sharing",
      "Enhanced MyChart and mobile applications with React and AWS-backed services for scheduling and messaging",
      "Partnered with clinical stakeholders, documented technical designs, and participated in code reviews",
      "Resolved production issues and optimized database queries supporting always-on healthcare operations",
    ],
    stack: ["C#", ".NET", "JAVASCRIPT", "REACT", "NODE.JS", "POSTGRESQL", "AWS"],
  },
];
