import * as React from "react";

export function SafeCard({
  title = "SAFE CARD",
  children,
}: {
  title?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border-2 border-[#00ff66] bg-[#050505] p-6 shadow-[0_0_22px_rgba(0,255,102,0.18)]">
      <div className="text-white font-extrabold tracking-wide">{title}</div>
      <div className="mt-3 text-[#c9ffe6]">{children}</div>
    </div>
  );
}
