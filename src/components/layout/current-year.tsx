"use client";

import { useSyncExternalStore } from "react";

export function CurrentYear() {
  const year = useSyncExternalStore(
    () => () => undefined,
    () => new Date().getFullYear(),
    () => 2026,
  );

  return <>{year}</>;
}
