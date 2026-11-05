import {
  SiDart,
  SiDocker,
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGraphql,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

export const skillGroups = [
  {
    title: "Frontend",
    description: "Interfaces that feel fast, clear, and considered.",
    skills: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend",
    description: "Reliable systems behind the experience.",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Laravel", icon: SiLaravel },
      { name: "GraphQL", icon: SiGraphql },
      { name: "Prisma", icon: SiPrisma },
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    title: "Mobile",
    description: "One thoughtful product across every screen.",
    skills: [
      { name: "Flutter", icon: SiFlutter },
      { name: "Dart", icon: SiDart },
      { name: "Firebase", icon: SiFirebase },
      { name: "React Native", icon: SiReact },
    ],
  },
  {
    title: "Tools",
    description: "A calm, modern workflow from idea to release.",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "Docker", icon: SiDocker },
      { name: "Vercel", icon: SiVercel },
      { name: "Figma", icon: SiFigma },
    ],
  },
] as const;

export const marqueeSkills = skillGroups.flatMap((group) =>
  group.skills.map((skill) => skill.name),
);
