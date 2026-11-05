"use client";

import { Laptop, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false,
  );

  if (!mounted) {
    return (
      <span
        aria-hidden="true"
        className="size-10 rounded-full border border-border bg-surface/60"
      />
    );
  }

  const isDark = resolvedTheme === "dark";
  const Icon = isDark ? Moon : Sun;

  return (
    <button
      type="button"
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-surface/60 text-muted transition hover:border-teal/40 hover:text-foreground"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <Icon aria-hidden="true" size={17} />
    </button>
  );
}

export function SystemThemeButton() {
  const { setTheme } = useTheme();
  return (
    <button
      type="button"
      aria-label="Use system theme"
      className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-surface/60 text-muted transition hover:border-teal/40 hover:text-foreground"
      onClick={() => setTheme("system")}
    >
      <Laptop aria-hidden="true" size={17} />
    </button>
  );
}
