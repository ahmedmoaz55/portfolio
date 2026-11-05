import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Sora } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: "Ahmed — Full Stack & Mobile Developer",
    template: "%s | Ahmed",
  },
  description:
    "Ahmed builds fast, beautiful web and mobile products for ambitious teams.",
  applicationName: "Ahmed Portfolio",
  keywords: [
    "Ahmed",
    "full stack developer",
    "mobile app developer",
    "Next.js",
    "Flutter",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: "Ahmed — Full Stack & Mobile Developer",
    description:
      "Fast, beautiful web and mobile products built with care from discovery to launch.",
    url: "/",
    siteName: "Ahmed Portfolio",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Ahmed — Full Stack & Mobile Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed — Full Stack & Mobile Developer",
    description:
      "Fast, beautiful web and mobile products built with care from discovery to launch.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#07080F" },
    { media: "(prefers-color-scheme: light)", color: "#F7F8FC" },
  ],
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${sora.variable} ${jetbrains.variable}`}
    >
      <body>
        <a
          href="#main-content"
          className="fixed top-3 left-3 z-[70] -translate-y-24 rounded-full bg-teal px-4 py-2 text-sm font-medium text-background transition focus:translate-y-0"
        >
          Skip to content
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
