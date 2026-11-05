import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-4 flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.2em] text-teal">
          <span
            aria-hidden="true"
            className="size-1.5 rounded-full bg-linear-to-r from-teal to-violet"
          />
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl">
        {title}{" "}
        {highlight ? (
          <span className="bg-linear-to-r from-teal via-violet to-coral bg-clip-text text-transparent">
            {highlight}
          </span>
        ) : null}
      </h2>
      {description ? (
        <div className="mt-5 max-w-xl text-base text-muted">{description}</div>
      ) : null}
    </div>
  );
}
