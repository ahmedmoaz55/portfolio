import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 text-center text-foreground">
      <div className="max-w-lg">
        <p className="font-mono text-7xl text-teal">404</p>
        <h1 className="mt-6 font-display text-4xl font-semibold tracking-[-0.04em]">This page took a wrong turn.</h1>
        <p className="mt-4 text-muted">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-linear-to-r from-teal via-violet to-coral px-5 text-sm font-medium text-white transition hover:brightness-110"
        >
          Back home
        </Link>
      </div>
    </main>
  );
}
