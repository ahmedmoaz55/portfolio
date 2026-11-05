"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 text-center text-foreground">
      <div className="max-w-md">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-coral">Something went sideways</p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em]">Let&apos;s try that again.</h1>
        <p className="mt-4 text-muted">The page hit an unexpected error. Nothing is lost on your end.</p>
        <Button className="mt-7" onClick={() => reset()}>Reload section</Button>
      </div>
    </main>
  );
}
