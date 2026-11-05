export type ProjectCategory = "Web" | "Mobile" | "Full-stack";

export type Project = {
  title: string;
  category: ProjectCategory;
  description: string;
  tags: string[];
  accent: string;
  image: string;
  imageAlt: string;
  blurDataURL: string;
  featured?: boolean;
  href: string;
  repo?: string;
};

// TODO(ahmed): Replace synthetic project stories and links with real case studies.
// To use your own image, drop a 1600x1000 .webp into /public/images/projects/
// with the same file name and no code changes are needed.
export const projects: Project[] = [
  {
    title: "Northstar Analytics",
    category: "Full-stack",
    description:
      "A focused operations dashboard for teams making decisions from live data.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    accent: "from-teal/35 via-violet/20 to-transparent",
    image: "/images/projects/northstar-analytics.webp",
    imageAlt: "Analytics dashboard on a laptop screen",
    blurDataURL:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMxNTIzMzAiLz48L3N2Zz4=",
    featured: true,
    href: "#contact",
    repo: undefined,
  },
  {
    title: "Nomad Notes",
    category: "Mobile",
    description:
      "A calm trip-planning companion for saving places and sharing plans.",
    tags: ["Flutter", "Dart", "Firebase"],
    accent: "from-coral/30 via-orange-400/10 to-transparent",
    image: "/images/projects/nomad-notes.webp",
    imageAlt: "Travel app interface on a smartphone",
    blurDataURL:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMyMzE2MjAiLz48L3N2Zz4=",
    href: "#contact",
    repo: undefined,
  },
  {
    title: "Bloom Commerce",
    category: "Web",
    description:
      "A visual storefront with a faster path from discovery to checkout.",
    tags: ["React", "Tailwind", "Stripe"],
    accent: "from-violet/35 via-fuchsia-400/10 to-transparent",
    image: "/images/projects/bloom-commerce.webp",
    imageAlt: "E-commerce storefront on a laptop",
    blurDataURL:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMxZjE2MzAiLz48L3N2Zz4=",
    href: "#contact",
    repo: undefined,
  },
  {
    title: "Careline",
    category: "Full-stack",
    description:
      "A private scheduling experience that keeps service teams in sync.",
    tags: ["Laravel", "MySQL", "Alpine"],
    accent: "from-sky-400/25 via-teal/10 to-transparent",
    image: "/images/projects/careline.webp",
    imageAlt: "Team scheduling workspace on a laptop",
    blurDataURL:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMxNzI1MzAiLz48L3N2Zz4=",
    href: "#contact",
    repo: undefined,
  },
  {
    title: "Pocket Pantry",
    category: "Mobile",
    description:
      "A lightweight pantry tracker designed around quick, repeat actions.",
    tags: ["React Native", "Node.js", "SQLite"],
    accent: "from-amber-300/25 via-coral/10 to-transparent",
    image: "/images/projects/pocket-pantry.webp",
    imageAlt: "Pantry tracking app on a smartphone",
    blurDataURL:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMyNTIwMjAiLz48L3N2Zz4=",
    href: "#contact",
    repo: undefined,
  },
  {
    title: "Signal Studio",
    category: "Web",
    description: "A sharper publishing workflow for a small creative team.",
    tags: ["Next.js", "Sanity", "Vercel"],
    accent: "from-indigo-400/30 via-violet/15 to-transparent",
    image: "/images/projects/signal-studio.webp",
    imageAlt: "Creative publishing workspace on a laptop",
    blurDataURL:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMxOTE2MzAiLz48L3N2Zz4=",
    href: "#contact",
    repo: undefined,
  },
];
