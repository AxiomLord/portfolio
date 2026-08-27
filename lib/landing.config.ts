// Single source of truth for landing copy.

export const landingConfig = {
  hero: {
    /**
     * MATCHED PAIR. Do not edit one side alone.
     *
     * "What shipped, what scaled" also opens `profile.hero.guide` on /home, one
     * click away. The repetition is a deliberate callback: identical wording and
     * order, different ending (here the claim, there the specific punchline).
     * Casually rewording either side turns the device into apparent copy-paste.
     *
     * The last word is set in the pixel face as the odd-one-out accent.
     * "Exposed" reads both as film exposure and as exposing what failed, which
     * is the darkroom register the rest of the chrome already uses.
     */
    headline: [
      "What shipped, what scaled,",
      "what I'd build differently.",
      "Exposed",
    ],
    role: "Senior Agentic AI Engineer",
    specialties: "AGENTS · LLMs · FULL STACK · AWS",
    ctaLabel: "EXPLORE",
    ctaTarget: "/home",
  },
} as const;
