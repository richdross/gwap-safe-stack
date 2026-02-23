import * as React from "react";

type Variant = "solid" | "outline" | "pill";

export function SafeButton({
  label = "REQUEST ACCESS",
  variant = "solid",
  href,
}: {
  label?: string;
  variant?: Variant;
  href?: string;
}) {
  const base =
    "inline-flex items-center justify-center select-none font-extrabold tracking-wide rounded-2xl transition-transform duration-150";
  const glow =
    "hover:-translate-y-0.5 active:translate-y-0.5 hover:shadow-[0_0_18px_rgba(0,255,102,0.55),0_0_38px_rgba(0,255,102,0.25)]";
  const styles: Record<Variant, string> = {
    solid: "bg-[#00ff66] text-black px-7 py-4",
    outline: "bg-black text-white border-2 border-[#00ff66] px-7 py-4",
    pill: "bg-black text-white border-2 border-[#00ff66] px-7 py-4 rounded-full",
  };

  const Comp: any = href ? "a" : "button";
  return (
    <Comp
      href={href}
      className={`${base} ${glow} ${styles[variant]}`}
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      {variant === "pill" ? (
        <span className="flex items-center gap-3">
          <span className="w-6 h-6 rounded-full bg-[#00ff66]" />
          {label}
        </span>
      ) : (
        label
      )}
    </Comp>
  );
}
