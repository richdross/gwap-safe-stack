import * as React from "react";

export function SafeAgentBadge({ text = "SAFE AGENT™" }: { text?: string }) {
  return (
    <div className="inline-flex items-center gap-3 rounded-3xl border-2 border-[#00ff66] bg-black px-6 py-4 shadow-[0_0_24px_rgba(0,255,102,0.22)]">
      <span className="inline-block h-8 w-8 rounded-full border-2 border-[#00ff66]" />
      <span className="text-white font-extrabold text-xl tracking-wide">{text}</span>
    </div>
  );
}
