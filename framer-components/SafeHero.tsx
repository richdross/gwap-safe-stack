import * as React from "react";
import { SafeButton } from "./SafeButton";
import { SafeAgentBadge } from "./SafeAgentBadge";

export function SafeHero({
  headline = "Governed Intelligence for Real Businesses",
  subhead = "Accountable autonomy: permissioned agents, audited actions, revenue-gated power.",
}: {
  headline?: string;
  subhead?: string;
}) {
  return (
    <section className="bg-black text-white px-6 py-16 rounded-[2rem] border-2 border-[#00ff66] shadow-[0_0_28px_rgba(0,255,102,0.16)]">
      <div className="max-w-4xl">
        <SafeAgentBadge />
        <h1 className="mt-8 text-4xl sm:text-5xl font-extrabold tracking-tight">
          {headline}
        </h1>
        <p className="mt-4 text-[#c9ffe6] text-lg">{subhead}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <SafeButton label="REQUEST ACCESS" variant="solid" />
          <SafeButton label="VIEW SAFE SPEC" variant="outline" />
          <SafeButton label="CERTIFIED" variant="pill" />
        </div>
      </div>
    </section>
  );
}
