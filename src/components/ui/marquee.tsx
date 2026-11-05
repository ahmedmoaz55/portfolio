import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Marquee({
  children,
  className,
  reverse = false,
}: {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
}) {
  return (
    <div className={cn("marquee overflow-hidden", className)}>
      <div className={cn("marquee-track", reverse && "marquee-track-reverse")}>
        <div className="flex shrink-0 items-center gap-8">{children}</div>
        <div aria-hidden="true" className="flex shrink-0 items-center gap-8">
          {children}
        </div>
      </div>
    </div>
  );
}
