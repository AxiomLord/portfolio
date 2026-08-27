"use client";

import { profile } from "@/lib/profile.config";
import { useEffect, useState } from "react";

const agents = ["PLAN", "RETRIEVE", "CALL", "EVALUATE"];

/** A portrait-sized system card that keeps the About page personal without
 * pretending an unrelated stock image is Nicholas. */
export default function ThemeTintedPortrait() {
  const [activeAgent, setActiveAgent] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(
      () => setActiveAgent((current) => (current + 1) % agents.length),
      1800,
    );
    return () => window.clearInterval(timer);
  }, []);

  return (
    <figure
      aria-label={`${profile.name} agent workflow signature`}
      className="group relative order-1 isolate aspect-1122/1402 w-full shrink-0 overflow-hidden rounded-[14px] border border-border-color bg-[#10151c] p-4 text-[#e8f1f4] shadow-[0_24px_60px_-42px_color-mix(in_oklab,var(--accent)_80%,transparent)] min-[901px]:w-73"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60 [background:radial-gradient(circle_at_22%_18%,color-mix(in_oklab,var(--accent)_60%,transparent),transparent_32%),radial-gradient(circle_at_80%_75%,rgba(89,182,169,.32),transparent_36%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(232,241,244,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(232,241,244,.08)_1px,transparent_1px)] [background-size:22px_22px]"
      />

      <div className="relative flex h-full flex-col justify-between">
        <div className="flex items-start justify-between font-mono text-[10px] tracking-[0.14em] text-[#9bb0b8] uppercase">
          <span>NL / SYSTEMS</span>
          <span className="flex items-center gap-1.5">
            <span className="size-1.5 animate-pulse rounded-full bg-[#6ee7c4]" />
            live
          </span>
        </div>

        <div className="relative mx-auto flex size-42 items-center justify-center rounded-full border border-[#6ee7c4]/25 bg-[#16252b]/60 shadow-[0_0_0_16px_rgba(110,231,196,.04),0_0_60px_rgba(110,231,196,.12)]">
          <div className="absolute inset-3 rounded-full border border-dashed border-[#6ee7c4]/35 motion-safe:animate-[spin_18s_linear_infinite]" />
          <div className="absolute inset-10 rounded-full border border-[#9b8cff]/35" />
          <span className="font-display text-5xl font-semibold tracking-[-0.06em] text-[#e8f1f4]">
            NL
          </span>
          {agents.map((agent, index) => (
            <span
              key={agent}
              className={`absolute font-mono text-[8px] tracking-[0.16em] transition-colors duration-500 ${
                index === activeAgent ? "text-[#6ee7c4]" : "text-[#71858d]"
              }`}
              style={{
                transform: `rotate(${index * 90}deg) translateY(-78px) rotate(${index * -90}deg)`,
              }}
            >
              {agent}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <div>
            <p className="font-display text-card-title font-medium">Nicholas Lee</p>
            <p className="mt-1 font-mono text-[9px] tracking-[0.12em] text-[#9bb0b8] uppercase">
              senior agentic ai engineer
            </p>
          </div>
          <div className="grid grid-cols-4 gap-1.5" aria-hidden="true">
            {agents.map((agent, index) => (
              <span
                key={agent}
                className={`h-1 rounded-full transition-colors duration-500 ${
                  index <= activeAgent ? "bg-[#6ee7c4]" : "bg-[#33464d]"
                }`}
              />
            ))}
          </div>
          <p className="font-mono text-[9px] leading-[1.6] tracking-[0.08em] text-[#71858d] uppercase">
            building systems that can reason, act, and earn trust
          </p>
        </div>
      </div>
    </figure>
  );
}
