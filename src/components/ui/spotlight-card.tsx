"use client";

import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SpotlightCard({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & { children: ReactNode }) {
  return (
    <div
      className={cn(
        "spotlight-card group relative overflow-hidden rounded-3xl border border-border bg-surface/65 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-1 hover:border-teal/25 hover:shadow-[0_24px_70px_-30px_color-mix(in_srgb,var(--teal)_40%,transparent)]",
        className,
      )}
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        event.currentTarget.style.setProperty(
          "--spotlight-x",
          `${event.clientX - rect.left}px`,
        );
        event.currentTarget.style.setProperty(
          "--spotlight-y",
          `${event.clientY - rect.top}px`,
        );
      }}
      {...props}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--spotlight-x) var(--spotlight-y), color-mix(in srgb, var(--teal) 14%, transparent), transparent 42%)",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
