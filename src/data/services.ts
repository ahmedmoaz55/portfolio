import { Bot, Gauge, Smartphone, Workflow } from "lucide-react";

export const services = [
  {
    title: "Full-stack web apps",
    description:
      "Product-grade web experiences with a clean interface and a dependable backend.",
    icon: Workflow,
    bullets: ["Next.js & React", "APIs and databases", "Auth and dashboards"],
  },
  {
    title: "Mobile apps",
    description:
      "Cross-platform apps that feel at home on iOS and Android without splitting the product.",
    icon: Smartphone,
    bullets: ["Flutter delivery", "Firebase integrations", "Release-ready builds"],
  },
  {
    title: "AI-powered products",
    description:
      "Useful AI features integrated into real workflows, not bolted on as a gimmick.",
    icon: Bot,
    bullets: ["API integrations", "Automation flows", "Human-friendly UX"],
  },
  {
    title: "Migration & performance",
    description:
      "Move legacy experiences forward with better speed, maintainability, and search visibility.",
    icon: Gauge,
    bullets: ["WordPress to Next.js", "Core Web Vitals", "Technical cleanup"],
  },
] as const;
