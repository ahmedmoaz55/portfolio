export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <div className="flex items-center gap-3 text-sm text-muted" role="status">
        <span className="size-2 animate-pulse rounded-full bg-teal" />
        Loading Ahmed&apos;s portfolio…
      </div>
    </main>
  );
}
