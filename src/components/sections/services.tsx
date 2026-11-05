import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24 lg:px-10 md:py-32">
      <Reveal>
        <SectionHeading
          eyebrow="How I can help"
          title="From first sketch to"
          highlight="shipping day."
          description="Focused engagements for teams that want thoughtful product work and dependable execution."
        />
      </Reveal>
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Reveal key={service.title} delay={index * 80}>
              <SpotlightCard className="h-full">
                <div className="flex items-start justify-between">
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-surface-2 text-teal">
                    <Icon aria-hidden="true" size={22} />
                  </span>
                  <ArrowUpRight aria-hidden="true" className="text-muted transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-teal" size={20} />
                </div>
                <h3 className="mt-7 font-display text-2xl font-semibold tracking-[-0.03em]">{service.title}</h3>
                <p className="mt-3 max-w-lg text-muted">{service.description}</p>
                <ul className="mt-7 flex flex-wrap gap-2">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="rounded-full border border-border px-3 py-1.5 text-xs text-muted">{bullet}</li>
                  ))}
                </ul>
              </SpotlightCard>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
