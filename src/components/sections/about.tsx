import { MapPin, Sparkles } from "lucide-react";
import { site } from "@/data/site";
import { ButtonLink } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedCounter } from "@/components/ui/animated-counter";

export function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24 md:py-32 lg:px-10"
    >
      <Reveal>
        <SectionHeading
          eyebrow="A little context"
          title="Good products sit at the"
          highlight="intersection of details."
          description="I like the space where engineering discipline meets a sharp sense of what should feel effortless."
        />
      </Reveal>
      <div className="mt-12 grid gap-5 lg:grid-cols-12">
        <Reveal variant="left" className="lg:col-span-7">
          <GlassCard className="h-full">
            <p className="text-teal font-mono text-xs tracking-[0.18em] uppercase">
              About Ahmed
            </p>
            <div className="text-muted mt-6 space-y-5 text-lg leading-8">
              <p>
                I&apos;m a developer who cares about the last 10%: the loading
                state that explains itself, the layout that holds together on a
                small screen, and the interaction that makes a complex tool feel
                simple.
              </p>
              <p>
                My work spans product UI, APIs, databases, and mobile
                experiences. That range helps me make better tradeoffs early,
                before they become expensive.
              </p>
            </div>
            <ButtonLink className="mt-8" href="#contact" variant="secondary">
              Request a resume
            </ButtonLink>
          </GlassCard>
        </Reveal>
        <Reveal variant="right" delay={80} className="lg:col-span-5">
          <div className="grid h-full gap-5 sm:grid-cols-2 lg:grid-cols-1">
            <GlassCard className="from-teal/10 via-surface/70 to-violet/10 relative overflow-hidden bg-linear-to-br">
              <div className="border-teal/20 absolute -top-8 -right-8 size-32 rounded-full border" />
              <div className="border-violet/20 absolute -top-2 -right-2 size-20 rounded-full border" />
              <p className="text-muted font-mono text-xs tracking-[0.18em] uppercase">
                Working from
              </p>
              <p className="font-display mt-3 flex items-center gap-2 text-xl font-semibold">
                <MapPin aria-hidden="true" className="text-teal" size={19} />
                {site.location.split("·")[0]}
              </p>
            </GlassCard>
            <GlassCard>
              <p className="text-muted font-mono text-xs tracking-[0.18em] uppercase">
                Currently learning
              </p>
              <p className="font-display mt-3 flex items-center gap-2 text-xl font-semibold">
                <Sparkles aria-hidden="true" className="text-coral" size={19} />
                Better product systems
              </p>
              <p className="text-muted mt-2 text-sm">
                Design tokens, AI workflows, and calmer interfaces.
              </p>
            </GlassCard>
          </div>
        </Reveal>
      </div>
      <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {site.stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 70}>
            <GlassCard>
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
