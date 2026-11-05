import { Marquee } from "@/components/ui/marquee";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { skillGroups, marqueeSkills } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24 lg:px-10 md:py-32">
      <Reveal>
        <SectionHeading
          eyebrow="The toolkit"
          title="The right tools for"
          highlight="the real problem."
          description="A flexible stack lets the product lead. I choose technologies for their fit, not for the sake of collecting them."
        />
      </Reveal>
      <Reveal className="mt-10" delay={80}>
        <Marquee>
          {marqueeSkills.map((skill) => (
            <span key={skill} className="rounded-full border border-border bg-surface/70 px-4 py-2 font-mono text-xs text-muted">
              {skill}
            </span>
          ))}
        </Marquee>
      </Reveal>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 70}>
            <SpotlightCard className="h-full">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-[-0.03em]">{group.title}</h3>
                  <p className="mt-2 text-sm text-muted">{group.description}</p>
                </div>
                <span className="font-mono text-xs text-teal">0{index + 1}</span>
              </div>
              <div className="mt-7 flex flex-wrap gap-2">
                {group.skills.map(({ name, icon: Icon }) => (
                  <span key={name} className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2/70 px-3 py-2 text-sm text-muted">
                    <Icon aria-hidden="true" className="text-teal" />
                    {name}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
