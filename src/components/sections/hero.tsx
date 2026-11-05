import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { site } from "@/data/site";
import { ButtonLink } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";

export function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto flex min-h-[calc(100vh-1px)] max-w-7xl items-center px-6 pt-24 pb-16 lg:px-10"
    >
      <div className="grid w-full items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
        <Reveal className="max-w-3xl">
          <div className="border-teal/20 bg-teal/5 text-teal mb-7 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-xs">
            <span className="relative flex size-2">
              <span className="bg-teal absolute inline-flex size-full animate-ping rounded-full opacity-60" />
              <span className="bg-teal relative inline-flex size-2 rounded-full" />
            </span>
            {site.availability}
          </div>
          <h1 className="font-display text-[clamp(2.85rem,7vw,5.75rem)] leading-[1.02] font-bold tracking-[-0.06em]">
            I build fast, beautiful{" "}
            <span className="from-teal via-violet to-coral bg-linear-to-r bg-clip-text text-transparent">
              web & mobile products.
            </span>
          </h1>
          <p className="text-muted mt-8 max-w-2xl text-lg leading-8">
            Full-stack developer and mobile builder helping ambitious ideas
            become clear, capable products people want to use.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href="#projects">
              View my work <ArrowUpRight aria-hidden="true" size={16} />
            </ButtonLink>
            <ButtonLink href="#contact" variant="secondary">
              Contact me
            </ButtonLink>
          </div>
          <div className="mt-9 flex items-center gap-2">
            {site.socials.github ? (
              <a
                aria-label="Ahmed on GitHub"
                href={site.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="border-border text-muted hover:border-teal/40 hover:text-teal inline-flex size-10 items-center justify-center rounded-full border transition"
              >
                <FaGithub aria-hidden="true" size={17} />
              </a>
            ) : null}
            {site.socials.linkedin ? (
              <a
                aria-label="Ahmed on LinkedIn"
                href={site.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="border-border text-muted hover:border-teal/40 hover:text-teal inline-flex size-10 items-center justify-center rounded-full border transition"
              >
                <FaLinkedinIn aria-hidden="true" size={17} />
              </a>
            ) : null}
            <a
              aria-label="Email Ahmed"
              href={`mailto:${site.email}`}
              className="border-border text-muted hover:border-teal/40 hover:text-teal inline-flex size-10 items-center justify-center rounded-full border transition"
            >
              <Mail size={17} />
            </a>
            <span className="text-muted ml-2 font-mono text-xs">
              {site.location}
            </span>
          </div>
        </Reveal>

        <Reveal variant="scale" delay={120}>
          <div className="relative mx-auto w-full max-w-[30rem]">
            <div className="from-teal/20 via-violet/10 to-coral/20 absolute -inset-8 rounded-full bg-linear-to-br blur-3xl" />
            <GlassCard className="relative overflow-hidden p-0">
              <div className="border-border flex items-center justify-between border-b px-5 py-4">
                <div className="flex gap-1.5">
                  <span className="bg-coral/80 size-2.5 rounded-full" />
                  <span className="size-2.5 rounded-full bg-amber-300/80" />
                  <span className="bg-teal/80 size-2.5 rounded-full" />
                </div>
                <span className="text-muted font-mono text-[10px]">
                  ahmed.tsx
                </span>
              </div>
              <div className="space-y-5 p-7 font-mono text-sm leading-7">
                <p className="text-muted">
                  <span className="text-violet">const</span>{" "}
                  <span className="text-teal">builder</span> = {"{"}
                </p>
                <p className="text-muted pl-5">
                  focus: <span className="text-coral">&quot;clarity&quot;</span>
                  ,
                </p>
                <p className="text-muted pl-5">
                  craft: <span className="text-coral">&quot;care&quot;</span>,
                </p>
                <p className="text-muted pl-5">
                  stack: [<span className="text-coral">&quot;web&quot;</span>,{" "}
                  <span className="text-coral">&quot;mobile&quot;</span>],
                </p>
                <p className="text-muted">{"};"}</p>
                <div className="border-border text-teal border-t pt-5 text-xs">
                  shipping useful things since day one
                </div>
              </div>
            </GlassCard>
            <div className="border-border bg-surface/90 absolute -right-4 -bottom-5 rounded-2xl border px-4 py-3 shadow-xl backdrop-blur-xl">
              <p className="text-muted font-mono text-[10px] tracking-[0.16em] uppercase">
                Current mode
              </p>
              <p className="mt-1 text-sm font-medium">Make it feel obvious.</p>
            </div>
          </div>
        </Reveal>
      </div>
      <a
        href="#about"
        aria-label="Scroll to about"
        className="text-muted absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs md:flex"
      >
        <ArrowDown aria-hidden="true" size={15} />
        Scroll to explore
      </a>
    </section>
  );
}
