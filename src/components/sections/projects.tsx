"use client";

import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import Image from "next/image";
import { useMemo, useState } from "react";
import { projects, type ProjectCategory } from "@/data/projects";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const filters = ["All", "Web", "Mobile", "Full-stack"] as const;
type Filter = (typeof filters)[number];

export function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const filtered = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter(
            (project) => project.category === (filter as ProjectCategory),
          ),
    [filter],
  );

  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24 md:py-32 lg:px-10"
    >
      <Reveal>
        <SectionHeading
          eyebrow="Selected work"
          title="A few things I've"
          highlight="helped make."
          description="Synthetic placeholders are used until real case studies are available. The structure is ready for the stories to become specific."
        />
      </Reveal>
      <div
        className="mt-10 flex flex-wrap gap-2"
        role="tablist"
        aria-label="Filter projects"
      >
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            role="tab"
            aria-selected={filter === item}
            onClick={() => setFilter(item)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm transition",
              filter === item
                ? "border-teal/30 bg-teal/10 text-teal"
                : "border-border text-muted hover:border-teal/30 hover:text-foreground",
            )}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {filtered.map((project, index) => (
          <Reveal
            key={project.title}
            delay={index * 70}
            className={project.featured ? "md:col-span-2" : undefined}
          >
            <article
              className={cn(
                "group border-border bg-surface/65 relative overflow-hidden rounded-3xl border",
                project.featured && "md:grid md:grid-cols-[1.1fr_0.9fr]",
              )}
            >
              <div
                className={cn(
                  "group/image relative aspect-[16/10] overflow-hidden bg-linear-to-br",
                  project.accent,
                  project.featured && "md:aspect-[16/10]",
                )}
              >
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(min-width:1024px) 50vw, 100vw"
                  className="object-cover transition duration-500 ease-out group-hover:scale-105"
                  placeholder="blur"
                  blurDataURL={project.blurDataURL}
                  priority={project.featured}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute inset-6 rounded-2xl border border-white/10 bg-black/10 backdrop-blur-[2px]" />
                <div className="absolute right-8 bottom-8 left-8 flex items-end justify-between">
                  <span className="rounded-full border border-white/15 bg-black/15 px-3 py-1 font-mono text-[10px] tracking-[0.16em] text-white/70 uppercase">
                    {project.category}
                  </span>
                  <span className="font-mono text-xs text-white/50">
                    0{index + 1}
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-between p-7">
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-[-0.03em]">
                    {project.title}
                  </h3>
                  <p className="text-muted mt-3">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-surface-2 text-muted rounded-full px-3 py-1.5 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-8 flex gap-4">
                  <a
                    href={project.href}
                    className="text-teal hover:text-foreground inline-flex items-center gap-1.5 text-sm font-medium transition"
                  >
                    Discuss project <ArrowUpRight size={15} />
                  </a>
                  {project.repo ? (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-foreground inline-flex items-center gap-1.5 text-sm transition"
                    >
                      GitHub <FaGithub aria-hidden="true" size={15} />
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
